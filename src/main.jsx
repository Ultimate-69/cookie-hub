import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import HomePage from './routes/HomePage.jsx'
import Header from './components/Header.jsx'
import Shows from './routes/Shows.jsx'
import Search from './routes/Search.jsx'
import MoviePage from './routes/MoviePage.jsx'
import ShowPage from './routes/ShowPage.jsx'

const router = createBrowserRouter([
  {
    path: 'https://ultimate-69.github.io/cookie-hub/',
    element: <HomePage/>,
    errorElement: <div className='text-3xl'>404 Not Found</div>
  },
  {
    path: 'https://ultimate-69.github.io/cookie-hub/search',
    element: <Search/>
  },
  {
    path: 'https://ultimate-69.github.io/cookie-hub/shows',
    element: <Shows/>
  },
  {
    path: 'https://ultimate-69.github.io/cookie-hub/movie/:movieId',
    element: <MoviePage/>
  },
  {
    path: 'https://ultimate-69.github.io/cookie-hub/show/:showId',
    element: <ShowPage/>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <RouterProvider router={router}/>
  </StrictMode>,
)
