import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layouts/Main';
import Header from './components/Header/Header';



function App() {
  const router=createBrowserRouter([
{
  path:'/',
  element:<Main></Main>
}
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
      <Header></Header>
     
     
     
     
    
    </div>
  );
}

export default App;
