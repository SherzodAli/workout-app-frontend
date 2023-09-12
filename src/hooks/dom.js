import { useEffect, useRef, useState } from 'react'

export function useOnClickOutside() {
	const [isOpen, setIsOpen] = useState(false)
	const ref = useRef(null)

	function toggle() {
		setIsOpen(prevState => !prevState)
	}

	function handleClick(event) {
		const hasTargetInside = ref.current.contains(event.target)
		const isClickedOutsideOfTarget = ref.current && !hasTargetInside
		if (isClickedOutsideOfTarget) {
			setIsOpen(false)
		}
	}

	useEffect(() => {
		document.addEventListener('click', handleClick, true)
		return () => document.removeEventListener('click', handleClick, true)
	}, [])

	return { ref, isOpen, toggle }
}
