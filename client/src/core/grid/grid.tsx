import React, { FC } from 'react'
import MuiGrid, { GridProps } from '@mui/material/Grid'

export const Grid: FC<GridProps> = ({ ...props }) => {
  return <MuiGrid {...props} />
}
