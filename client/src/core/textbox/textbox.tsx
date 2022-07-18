import React, {
  ChangeEvent,
  FC,
  FocusEvent,
  forwardRef
} from 'react'
import TextField from '@mui/material/TextField'

export type TextboxProps = {
  autoFocus?: boolean
  name: string
  label: string
  maxLength?: number
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  size?: 'sm' | 'md' | 'lg'
  value?: string
  error?: boolean
  errorText?: string
  testId?: string
  required?: boolean
} 

export const Textbox: FC<TextboxProps> = forwardRef<HTMLInputElement, TextboxProps>(
  (
    {
      autoFocus,
      name,
      label,
      maxLength,
      onBlur,
      onChange,
      value,
      error,
      errorText,
      testId,
      required
    },
    ref
  ) => {
    return (
      <TextField
        ref={ref}
        type="text"
        autoFocus={autoFocus}
        error={error}
        fullWidth
        helperText={error ? errorText : null}
        inputProps={{
          maxLength
        }}
        label={required ? `${label}*` : label}
        name={name}
        data-test-id={testId}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
      />
    )
  }
)
Textbox.displayName = "Textbox"

