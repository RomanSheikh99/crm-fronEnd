import { RouterProvider } from 'react-router'
import './assets/style/app.scss'
// import { Counter } from './components/Counter'
// import DataTable from './components/Table'
import router from './Routers/Routers';


function App() {

  return (
    <div className="app">
     <RouterProvider router={router}> </RouterProvider>
    </div>
  )
}

export default App
