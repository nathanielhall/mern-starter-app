import React from 'react'
import {useAuth} from './auth-provider'
import { Grid, Page, Section, FormInput, Button } from 'src/core'
import { useForm } from 'react-hook-form'

export type SignInFormFields = {
  email: string
  password: string
}

export const SignIn = () => {
  // FIXME: add alignItems / justifyContent to center the section horizontally & vertically
  return (
    <Page>
      <Section>
          <SignInForm />
      </Section>
    </Page>
  )
}

export const SignInForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<SignInFormFields>()

  const {onSignIn} = useAuth()

  const onSubmit = handleSubmit((data) => {
    console.log('submitting...', data)
    onSignIn.mutate(data)
  })

  return (
    <form onSubmit={onSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <FormInput<SignInFormFields>
            name="email"
            label="Email"
            size="md"
            register={register}
            rules={{ required: 'You must enter an email.' }}
            errors={errors}
          />
        </Grid>
        <Grid item xs={12}>
          <FormInput<SignInFormFields>
            name="password"
            type="password"
            label="Password"
            size="md"
            register={register}
            rules={{ required: 'You must enter a password.' }}
            errors={errors}
          />
        </Grid>

        <Grid item xs={12} sx={{ textAlign: 'right' }}>
          <Button variant="contained" type="submit">
            Login
          </Button>
        </Grid>
      </Grid>
    </form>
  )
}
