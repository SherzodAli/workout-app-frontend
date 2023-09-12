import styles from './Layout.module.scss'

import cn from 'clsx'

import Header from '@components/Header'

export default function Layout({
	children,
	backgroundImage,
	title = '',
	backLink = '/'
}) {
	return (
		<section
			className={cn(styles.wrapper, {
				[styles.otherPage]: !!title
			})}
			style={{ backgroundImage: `url(${backgroundImage})` }}
		>
			<Header backLink={backLink} />

			{title && <h1 className={styles.heading}>{title}</h1>}

			{children && <div>{children}</div>}
		</section>
	)
}
