import { React, useState, useContext, createContext, useEffect } from 'react'

const focuses = {
    '/home': 'idle',
    '/projects': 'focusBack',
    '/about_me': 'idle',
    '/contact': 'focusLeft',
    '/tech': 'focusFront'
}

const RouterContext = createContext({ loading:false, setLoading:()=>{}, page: '/home', navigate: () => {} })
const RouterProvider = ({ children }) => {
  const [page, setPage] = useState('/home')
  const [loading, putLoading] = useState(false)

  const setLoading = (value) => {
    putLoading(value)
  }
  const navigate = (destiny) => {
    setPage(destiny)
  }

  return (
        <RouterContext.Provider value={{ page, navigate, loading, setLoading }}>
            {children}
        </RouterContext.Provider>
  )
}

const useRouter = () => {
  return useContext(RouterContext)
}


export default useRouter
export { RouterProvider }