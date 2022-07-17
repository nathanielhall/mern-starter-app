import React, { FC } from 'react'
import Paper from '@mui/material/Paper'

export const Section: FC = ({ children }) => {
	return (
        <Paper sx={{padding: '15px'}} elevation={3}>{children}</Paper>
	)
}