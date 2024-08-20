import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import { useDispatch } from "react-redux";
import { fetchCatalog } from "../redux/catalog/operations";
import { useEffect } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import css from './App.module.css'

const HomePage = lazy(() => import('../pages/Home'));
const CatalogPage = lazy(() => import('../pages/Catalog'));

export default function App() {
const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCatalog());
  }, [dispatch]);

  return (
    <>
      <Suspense fallback={<div className={css.container}><ClipLoader  size={100}/></div>}>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/catalog' element={<CatalogPage/>} />
        </Routes>
        </Suspense>
    </>
    
  )
}


