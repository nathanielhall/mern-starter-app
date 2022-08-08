import React, { FC } from 'react'
import { Container } from 'src/core' 

export const Page: FC<{children: React.ReactNode}> = ({ children }) => {
  return (
    <Container maxWidth={'sm'} sx={{ height: '100vh' }}>
      {children}
    </Container>
  )
}

