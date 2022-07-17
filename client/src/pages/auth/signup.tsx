import React from 'react'
import { Page, Section, FormInput, Button } from 'src/core'
import { useForm } from 'react-hook-form'

export type RegistrationFormFields = {
  firstName: string
  lastName: string
}

export const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<RegistrationFormFields>()

  const onSubmit = handleSubmit((data) => {
    console.log('submitting...')
  })

  return (
    <Page>
      <Section>
        <form onSubmit={onSubmit}>
          <FormInput<RegistrationFormFields>
            id="firstName"
            type="text"
            name="firstName"
            label="First Name"
            placeholder="First Name"
            size="md"
            register={register}
            rules={{ required: 'You must enter your first name.' }}
            errors={errors}
          />
          <FormInput<RegistrationFormFields>
            id="lastName"
            type="text"
            name="lastName"
            label="Last Name"
            placeholder="Last Name"
            size="md"
            register={register}
            rules={{ required: 'You must enter your last name.' }}
            errors={errors}
          />

          <Button type="submit">Submit</Button>
        </form>
      </Section>
    </Page>
  )
}