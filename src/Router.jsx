import { BrowserRouter, Route, Routes } from 'react-router-dom'

import ProtectedRoute from '@components/ProtectedRoute'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

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

const queryClient = new QueryClient({
	defaultOptions: { queries: { refetchOnWindowFocus: false } }
})

export default function App() {
	return (
		<BrowserRouter>
			<QueryClientProvider client={queryClient}>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/auth' element={<Auth />} />
					<Route element={<ProtectedRoute />}>
						<Route path='/profile' element={<Profile />} />
						<Route path='/workouts' element={<WorkoutList />} />
						<Route path='/workouts/:id' element={<WorkoutDetail />} />
						<Route path='/workouts/create' element={<WorkoutCreate />} />
						<Route path='/exercises/:id' element={<ExerciseDetail />} />
						<Route path='/exercises/create' element={<ExerciseCreate />} />
					</Route>
					<Route path='*' element={<NotFound />} />
				</Routes>
			</QueryClientProvider>
		</BrowserRouter>
	)
}
