import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import HomePage from './routes/HomePage.jsx'
import Header from './components/Header.jsx'
import Shows from './routes/Shows.jsx'
import Search from './routes/Search.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage/>,
    errorElement: <div className='text-3xl'>404 Not Found</div>
  },
  {
    path: '/search',
    element: <Search/>
  },
  {
    path: '/shows',
    element: <Shows/>
  },
  {
    path: '/movie/:movieId',
    element: <div>Movie</div>
  },
  {
    path: '/show/:showId',
    element: <div>Show</div>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <RouterProvider router={router}/>
  </StrictMode>,
)
