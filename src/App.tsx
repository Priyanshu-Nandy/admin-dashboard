import {RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import Loader from './components/Loader'

const Dashboard = lazy(()=>import("./pages/Dashboard")) //we are using lazy to load the data only when the route is visited 
const Customers = lazy(()=>import("./pages/Customers"))  
const Products = lazy(()=>import("./pages/Products"))  
const Transaction = lazy(()=>import("./pages/Transaction"))  
const App = () => {
  const router=createBrowserRouter([
    {
    path:'/admin/dashboard',
    element:<Dashboard/>
  },
    {
    path:'/admin/customers',
    element:<Customers/>
  },
    {
    path:'/admin/products',
    element:<Products/>
  },
    {
    path:'/admin/transaction',
    element:<Transaction/>
  }
  ])
  return (
    <Suspense fallback={<Loader/>}> {/* Suspense is used to implement a loader */}
      <RouterProvider router={router}/>
      </Suspense>
   
  )
}

export default App