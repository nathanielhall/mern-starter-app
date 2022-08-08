import React from 'react'
import { useAuth } from './auth-provider'
import { Grid, Page, Section, FormInput, Button } from 'src/core'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

export type SignInFormFields = {
  email: string
  password: string
}

export const SignIn = () => {
  return (
    <Page>
      <Section sx={{ marginTop: '25px' }}>
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

  const { onSignIn } = useAuth()
  const navigate = useNavigate()

  const onSubmit = handleSubmit((data) => {
    console.log('submitting...', data)
    return onSignIn.mutate(data, {
      onSuccess: () => {
        console.log('redirect HOME')
        navigate('/home', { replace: true })
      }
    })
  })

  const onRegister = () => {
    navigate('/signup')
  }

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

        <Grid item xs={12}>
          <Button variant="contained" fullWidth type="submit">
            Log In
          </Button>
        </Grid>
        <Grid item xs={12}>
          <hr />
        </Grid>
        <Grid item xs={12} sx={{ textAlign: 'center' }}>
          <Button variant="outlined" onClick={onRegister}>
            Register
          </Button>
        </Grid>
      </Grid>
    </form>
  )
}
