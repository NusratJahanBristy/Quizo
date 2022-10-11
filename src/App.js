import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layouts/Main';
import Statistics from './components/Statistics/Statistics';
import Blog from './components/Blog/Blog';

import Home from './components/Home/Home';
import Quizs from './components/Quizs/Quizs';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




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
