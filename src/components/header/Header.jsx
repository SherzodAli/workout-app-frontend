import styles from './Header.module.scss'

import cn from 'clsx'

import { IconArrowLeft, IconClose, IconMenu } from '@components/ui/Icons'
import { useAuth } from '@hooks/auth'
import { useOnClickOutside } from '@hooks/dom'

export default function Header({ backLink }) {
	const { isAuth } = useAuth()

	return (
		<header className={styles.header}>
			<button>
				<IconArrowLeft />
			</button>
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
					<li>Workouts: /workouts</li>
					<li>Create new: /new-workout</li>
					<li>Profile: /profile</li>
					<li>
						<a onClick={logoutHandler}>Logout</a>
					</li>
				</ul>
			</nav>
		</div>
	)
}
