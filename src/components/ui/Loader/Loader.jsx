import styles from './Loader.module.scss'

import image from '@images/three-dots.svg'

export default function Loader() {
	return (
		<div className={styles.wrapper}>
			<img src={image} alt='loader' draggable={false} />
		</div>
	)
}
