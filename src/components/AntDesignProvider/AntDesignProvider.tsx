import React, { FC, PropsWithChildren } from 'react'
import { ConfigProvider } from 'antd'

const Provider: FC<PropsWithChildren<any>> = ({ children }) => {
	return <ConfigProvider theme={undefined}>{children}</ConfigProvider>
}

export default Provider