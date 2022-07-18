import React from 'react'
import {Grid, Page, Section, FormInput, Button } from 'src/core'
import { useForm } from 'react-hook-form'
// import Grid from '@mui/material/Grid'

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
    console.log('submitting...', data)
  })

  return (
    <Page>
      <Section>
        <form onSubmit={onSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
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
            </Grid>

            <Grid item xs={12} sx={{textAlign: 'right'}}>
              <Button variant="contained" type="submit">
                Register
              </Button>
            </Grid>
          </Grid>
        </form>
      </Section>
    </Page>
  )
}
