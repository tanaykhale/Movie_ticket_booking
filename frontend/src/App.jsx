
import { RouterProvider } from 'react-router-dom'
import AppRoutes from './Components/AppRoutes'

const App = () => {
  return (
      <RouterProvider router={AppRoutes}></RouterProvider>
  )
}

export default App
