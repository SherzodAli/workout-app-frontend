import styles from './Button.module.scss'

import cn from 'clsx'

export default function Button({ children, onClick, size = 'xl' }) {
	return (
		<div className={styles.wrapper}>
			<button className={cn(styles.button, styles[size])} onClick={onClick}>
				{children}
			</button>
		</div>
	)
}
