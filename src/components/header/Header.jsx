import styles from './Header.module.scss'

import cn from 'clsx'
import { Link, useLocation, useNavigate } from 'react-router-dom'

import { IconArrowLeft, IconClose, IconMenu, IconUser } from '@components/ui'
import { useAuth } from '@hooks/auth'
import { useOnClickOutside } from '@hooks/dom'

export default function Header({ backLink = '/' }) {
	const location = useLocation()
	const navigate = useNavigate()
	const { isAuth } = useAuth()

	const isMainPage = location.pathname === '/'
	const navigateTo = isMainPage ? (isAuth ? '/auth' : '/profile') : backLink
	const icon = isMainPage ? <IconUser /> : <IconArrowLeft />

	return (
		<header className={styles.header}>
			<button onClick={() => navigate(navigateTo)}>{icon}</button>
			<Menu />
		</header>
	)
}

function Menu() {
	const menu = useOnClickOutside()

	function logoutHandler() {}

	return (
		<div className={styles.menuWrapper} ref={menu.ref}>
			<button onClick={menu.toggle}>
				{menu.isOpen ? <IconClose /> : <IconMenu />}
			</button>

			<nav className={cn(styles.menu, { [styles.open]: menu.isOpen })}>
				<ul>
					<li>
						<Link to={'/workouts'}>Workouts</Link>
					</li>
					<li>
						<Link to={'/workouts/create'}>Create new</Link>
					</li>
					<li>
						<Link to={'/profile'}>Profile</Link>
					</li>
					<li>
						<button onClick={logoutHandler}>Logout</button>
					</li>
				</ul>
			</nav>
		</div>
	)
}
