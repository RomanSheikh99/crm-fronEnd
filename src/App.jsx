import { RouterProvider } from 'react-router'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './assets/style/app.scss'
import router from './Routers/Routers';


function App() {

  return (
    <div className="w-full ">
     <RouterProvider router={router}> </RouterProvider>
     <ToastContainer />
    </div>
  )
}

export default App
