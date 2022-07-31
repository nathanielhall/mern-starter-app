import React, { FC, useMemo } from 'react'
import Paper from '@mui/material/Paper'
import { Theme, SxProps } from '@mui/material/styles';

type SectionType = {
	children: React.ReactChild,
	sx?: SxProps<Theme>
}

export const Section: FC<SectionType> = ({ children, sx }) => {
	const styles = useMemo(() => {
		const defaultSx = {padding: '15px'}
		return {...defaultSx, ...sx}
	}, [sx])

	return (
        <Paper sx={styles} elevation={3}>{children}</Paper>
	)
}
