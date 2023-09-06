import { Header } from '../header'

export function Layout({ children }) {
	return (
		<div>
			<Header backLink={'/'} />
			{children}
		</div>
	)
}
