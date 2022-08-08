import React from 'react'
import { Grid, Page, Section, FormInput, Button } from 'src/core'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import { useAuth } from './auth-provider'

export type RegistrationFormFields = {
  firstName: string
  lastName: string
  email: string
  password: string
}

const queryClient = new QueryClient()

export const SignUp = () => {
  return (
    <Page>
      <Section>
        <QueryClientProvider client={queryClient}>
          <SignUpForm />
        </QueryClientProvider>
      </Section>
    </Page>
  )
}

export const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<RegistrationFormFields>()

  const { onSignUp } = useAuth()
  const navigate = useNavigate()

  const onSubmit = handleSubmit((data) => {
    console.log('submitting...', data)
    onSignUp.mutate(data)
    navigate('/home', { replace: true })
  })

  return (
    <form onSubmit={onSubmit}>
      <Grid container spacing={2}>
        {/* <Grid item xs={12}>
          <FormInput<RegistrationFormFields>
            name="firstName"
            label="First Name"
            size="md"
            register={register}
            rules={{ required: 'You must enter your first name.' }}
            errors={errors}
          />
        </Grid>
        <Grid item xs={12}>
          <FormInput<RegistrationFormFields>
            name="lastName"
            label="Last Name"
            size="md"
            register={register}
            rules={{ required: 'You must enter your last name.' }}
            errors={errors}
          />
        </Grid> */}
        <Grid item xs={12}>
          <FormInput<RegistrationFormFields>
            name="email"
            label="Email"
            size="md"
            register={register}
            rules={{ required: 'You must enter an email.' }}
            errors={errors}
          />
        </Grid>
        <Grid item xs={12}>
          <FormInput<RegistrationFormFields>
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
            Register
          </Button>
        </Grid>
      </Grid>
    </form>
  )
}
