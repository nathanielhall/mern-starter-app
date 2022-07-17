import React, {FC} from 'react'
import MuiButton, {ButtonProps} from '@mui/material/Button'

export const Button: FC<ButtonProps> = ({
  ...otherProps
}) => (
  <MuiButton  {...otherProps}>
  </MuiButton>
)