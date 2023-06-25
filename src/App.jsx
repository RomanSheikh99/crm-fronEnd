import { RouterProvider } from 'react-router'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './assets/style/app.scss'
import router from './Routers/Routers';
import { useSelector } from 'react-redux';


function App() {
  const state = useSelector((state) => state.app);

  return (
    <div className={`w-full app ${state.theme == "DARK" ? 'dark': 'light'} `}>
     <RouterProvider router={router}> </RouterProvider>
     <ToastContainer />
    </div>
  )
}

export default App
