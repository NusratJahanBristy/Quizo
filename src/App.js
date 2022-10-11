import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layouts/Main';
import Header from './components/Header/Header';
import Statistics from './components/Statistics/Statistics';
import Blog from './components/Blog/Blog';

import Home from './components/Home/Home';
import Navbars from './components/Navbar/Navbar';
import Cards from './components/Cards/Cards';
import Quizs from './components/Quizs/Quizs';




function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: async () => {
            return fetch('https://openapi.programming-hero.com/api/quiz')
          },
          element: <Home></Home>
        },
        {
          path: '/home',
          loader: async () => {
            return fetch('https://openapi.programming-hero.com/api/quiz')
          },
          element: <Home></Home>
        },
        {
          path: 'Statistics',
          element: <Statistics></Statistics>
        },
        {
          path: 'blog',
          element: <Blog></Blog>
        },
        {
          path: '/cardd/:carddId',
          loader:async({params})=>{
            // console.log(params.carddId)
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.carddId}`)
          },
          element: <Quizs></Quizs>
        },
        {
          path: '*', element: <div>this is not found</div>
        }

      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
      {/* <Header></Header> */}
     






    </div>
  );
}

export default App;
