import React from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import HomePage from './pages/HomePage'
import AboutUsPage from './pages/AboutUsPage'
import ContactUsPage from './pages/ContactUsPage'
import ProductListPage from './pages/ProductListPage'
import ProductDetailPage from './pages/ProductDetailPage'



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />} >
     <Route index element={<HomePage />} />
     <Route path='/about' element={<AboutUsPage />} />
     <Route path='/contact' element={<ContactUsPage />} />
     <Route path='/products' element={<ProductListPage />} />
     <Route path='/products/:id' element={<ProductDetailPage />} />
    </Route>
  )
);

const App = () => {
  return (
    <>
       <RouterProvider router={router} />
    </>
  )
}

export default App

