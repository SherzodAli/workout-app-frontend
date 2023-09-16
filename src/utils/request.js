import axios from 'axios'
import Cookies from 'js-cookie'

const domain = import.meta.env.VITE_REACT_APP_BASE_URL

function auth() {
	const token = Cookies.get('ferroTk') ?? ''
	return { Authorization: `Bearer ${token}` }
}

const baseAxios = axios.create({
	baseURL: `${domain}/api/`,
	headers: { 'Content-Type': 'application/json', ...auth() }
})

export default baseAxios
