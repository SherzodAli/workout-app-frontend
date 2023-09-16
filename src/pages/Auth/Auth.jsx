import styles from './Auth.module.scss'

import { useState } from 'react'
import { useForm } from 'react-hook-form'

import Layout from '@components/Layout'
import { Button, Field, Loader } from '@components/ui'
import image from '@images/auth-bg.png'

const EMAIL_REGEX = /\S+@\S+\.\S+/
const LOGIN = 'LOGIN'
const REGISTER = 'REGISTER'

export default function Auth() {
	const {
		register: registerForm,
		handleSubmit,
		formState: { errors }
	} = useForm()
	const [isLoading, setIsLoading] = useState(false)
	const [authType, setAuthType] = useState(LOGIN)

	async function onSubmit(data) {
		setIsLoading(true)
		if (authType === LOGIN) await login(data)
		if (authType === REGISTER) await register(data)
		setIsLoading(false)
	}

	async function login(data) {
		console.log('login', data)
	}

	async function register(data) {
		console.log('register', data)
	}

	return (
		<>
			<Layout title='Sign in' backgroundImage={image}></Layout>
			<div className='wrapper-inner-page'>
				{isLoading && <Loader />}
				<form onSubmit={handleSubmit(onSubmit)}>
					<Field
						error={errors?.email?.message}
						name='email'
						register={registerForm}
						options={{
							required: 'Email is required',
							pattern: {
								value: EMAIL_REGEX,
								message: 'Incorrect E-mail format'
							}
						}}
						type='text'
						placeholder='Enter email'
					/>
					<Field
						error={errors?.password?.message}
						name='password'
						register={registerForm}
						options={{ required: 'Password is required' }}
						type='password'
						placeholder='Enter password'
					/>

					<div className={styles.wrapperButtons}>
						<Button onClick={() => setAuthType(LOGIN)}>Sign in</Button>
						<Button onClick={() => setAuthType(REGISTER)}>Sign up</Button>
					</div>
				</form>
			</div>
		</>
	)
}
