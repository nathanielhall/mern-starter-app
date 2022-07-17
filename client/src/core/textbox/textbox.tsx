import React, {
  ChangeEvent,
  FC,
  FocusEvent,
  DetailedHTMLProps,
  InputHTMLAttributes
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
} & Omit<
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  'size'
>

export const Textbox: FC<TextboxProps> = ({
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
}) => (
  <TextField
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
