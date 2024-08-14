import { Route, Routes } from "react-router-dom"
import { lazy} from "react"

const HomePage = lazy(() => import('../pages/Home'));
const CatalogPage = lazy(() => import('../pages/Catalog'));
function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/catalog' element={<CatalogPage/>} />
     </Routes>
    </>
    
  )
}

export default App;
