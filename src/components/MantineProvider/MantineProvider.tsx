import React, { FC, PropsWithChildren } from 'react'
import { MantineProvider } from '@mantine/core'

const Provider: FC<PropsWithChildren<any>> = ({ children }) => {
	return (
		<MantineProvider theme={undefined}>{children}</MantineProvider>
	)
}

export default Provider