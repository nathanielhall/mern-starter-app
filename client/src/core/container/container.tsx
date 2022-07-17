import React, { FC } from 'react'
import MuiContainer, {ContainerProps} from '@mui/material/Container'


export const Container: FC<ContainerProps> = (props) => {
	return(
		<MuiContainer {...props}></MuiContainer>
	)
}
