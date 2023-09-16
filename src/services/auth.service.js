import Cookies from 'js-cookie'

import { LOGIN, REGISTER } from '@src/urls'
import baseAxios from '@utils/request'

const AuthService = {
	async login(email, password) {
		try {
			const { data } = await baseAxios.post(LOGIN, { email, password })
			console.log(data, 111)
			if (data.token) Cookies.set('ferroTk', data.token)
			console.log(22)
			return data
		} catch (error) {
			console.log(error)
		}
	},

	async register(email, password) {
		try {
			const { data } = await baseAxios.post(REGISTER, { email, password })
			if (data.token) Cookies.set('ferroTk', data.token)
			return data
		} catch (error) {
			console.log(error)
		}
	}
}

export default AuthService
