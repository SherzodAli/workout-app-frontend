import styles from './Header.module.scss'

import cn from 'clsx'
import { useState } from 'react'
import { CgMenuRight } from 'react-icons/cg'
import { FiArrowLeft } from 'react-icons/fi'
import { IoClose } from 'react-icons/io5'

import { useAuth } from '@hooks/auth'

export function Header({ backLink }) {
	const { isAuth } = useAuth()

	return (
		<header className={styles.header}>
			<button onClick={() => {}}>
				<FiArrowLeft color='white' />
			</button>
			<Menu />
		</header>
	)
}

function Menu() {
	const [isOpen, setIsOpen] = useState(false)

	function logoutHandler() {}

	return (
		<div className={styles.menuWrapper}>
			<button onClick={() => setIsOpen(!isOpen)}>
				{isOpen ? <IoClose color='white' /> : <CgMenuRight color='white' />}
			</button>

			<nav className={cn(styles.menu, { [styles.open]: isOpen })}>
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
