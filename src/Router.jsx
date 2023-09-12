import { BrowserRouter, Route, Routes } from 'react-router-dom'

import ProtectedRoute from '@components/ProtectedRoute'

import {
	Auth,
	ExerciseCreate,
	ExerciseDetail,
	Home,
	NotFound,
	Profile,
	WorkoutCreate,
	WorkoutDetail,
	WorkoutList
} from './pages'

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/auth' element={<Auth />} />
				<Route element={<ProtectedRoute />}>
					<Route path='/' element={<Home />} />
					<Route path='/profile' element={<Profile />} />
					<Route path='/workouts' element={<WorkoutList />} />
					<Route path='/workouts/:id' element={<WorkoutDetail />} />
					<Route path='/workouts/create' element={<WorkoutCreate />} />
					<Route path='/exercises/:id' element={<ExerciseDetail />} />
					<Route path='/exercises/create' element={<ExerciseCreate />} />
				</Route>
				<Route path='*' element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	)
}
