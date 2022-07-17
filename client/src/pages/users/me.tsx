import React, { FC } from 'react'
import { Auth } from '../auth'
import { Container } from '../../core/container'

export type MeProps = { user: Auth }

export const Me: FC<MeProps> = (props) => {
	console.log('user', props)
  return <Container fixed>{'user'}</Container>
}
