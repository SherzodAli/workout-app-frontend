import styles from './Home.module.scss'

import { useNavigate } from 'react-router-dom'

import Layout from '@components/Layout'
import { Button } from '@components/ui'
import { useAuth } from '@hooks/auth'
import backgroundImage from '@images/home-bg.png'

export default function Home() {
	const { isAuth } = useAuth()
	const navigate = useNavigate()

	const link = isAuth ? '/workouts/create' : '/auth'
	const buttonTitle = isAuth ? 'New' : 'Sign in'

	return (
		<Layout backgroundImage={backgroundImage}>
			<Button onClick={() => navigate(link)}>{buttonTitle}</Button>
			<h1 className={styles.heading}>EXERCISES FOR THE SHOULDERS</h1>
		</Layout>
	)
}
