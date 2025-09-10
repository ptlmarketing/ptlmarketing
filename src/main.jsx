import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Hero from './page/Hero.jsx'
import About from './page/About.jsx'
import OurServices from './page/OurServices.jsx'
import Blog from './page/blogs/Blog.jsx'
import BlogDetails from './page/blogs/BlogDetails.jsx'
import FAQ from './page/FAQ.jsx'
import ConatctUs from './page/ConatctUs.jsx'


const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='' element={<Hero/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/services' element={<OurServices/>}/>
      <Route path='/blog' element={<Blog/>}/>
      <Route path="/blog/:id" element={<BlogDetails />} />
      <Route path='/faq' element={<FAQ/>}/>
      <Route path='/contact' element={<ConatctUs/>}/>

    </Route>
  )
)




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
)
