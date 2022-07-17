import React from 'react'
import { Textbox, TextboxProps } from 'src/core'
import {
  RegisterOptions,
  DeepMap,
  FieldError,
  UseFormRegister,
  Path
} from 'react-hook-form'
import get from 'lodash.get'

export type FormInputProps<T> = {
  name: Path<T>
  rules?: RegisterOptions
  register?: UseFormRegister<T>
  errors?: Partial<DeepMap<T, FieldError>>
  } & Omit<TextboxProps, 'name' | 'onBlur' | 'onChange' | 'value' | 'error' | 'errorText'>
// } & Omit<TextboxProps, 'name'>

export const FormInput = <T extends Record<string, unknown>>({
  name,
  register,
  rules,
  errors,
  ...props
}: FormInputProps<T>): JSX.Element => {
  // If the name is in a FieldArray, it will be 'fields.index.fieldName' and errors[name] won't return anything, so we are using lodash get
  const errorMessages = get(errors, name)
  const hasError = !!(errors && errorMessages)
  console.log('errorMessages', errorMessages)

  return (
    <Textbox
      name={name}
      aria-invalid={hasError}
      error={hasError}
    //   errorText={errorMessages}
      {...props}
	  {...(register && register(name, rules))}
    />
  )
}
