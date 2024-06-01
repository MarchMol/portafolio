import { React } from 'react'
import './App.css'
import Router from './Router'

import { RouterProvider } from './hooks/useRouter'
function App() {

  return (
    <RouterProvider>
    <Router/>
    </RouterProvider>
  )
}

export default App
