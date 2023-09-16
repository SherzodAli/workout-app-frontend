import { Navigate, Outlet } from 'react-router-dom'

import { useAuth } from '@hooks/auth'

export default function ProtectedRoute() {
	const { isAuth } = useAuth()
	return isAuth ? <Outlet /> : <Navigate to='/auth' />
}
