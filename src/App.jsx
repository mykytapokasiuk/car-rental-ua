import { Suspense, lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/NavigationBar/NavigationBar.jsx';
import Loader from './components/Loader/Loader.jsx';
import css from './App.module.css';
// import SharedLayout from './components/SharedLayout/SharedLayout';
// import FirstPage from './pages/FirstPage/FirstPage';
// import SecondPage from './pages/SecondPage/SecondPage';
// import HalfPage from './pages/HalfPage/HalfPage';
// import ErrorPage from './pages/ErrorPage/ErrorPage';
// import { AppWrapper } from './App.styled';

const HomePage = lazy(() => import('./pages/HomePage/HomePage.jsx'));
const CatalogPage = lazy(() => import('./pages/CatalogPage/CatalogPage.jsx'));
const FavoritesPage = lazy(() =>
  import('./pages/FavoritesPage/FavoritesPage.jsx'),
);

function App() {
  return (
    <div className={css.container}>
      <header>
        <NavigationBar />
      </header>
      <main>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/catalog" element={<CatalogPage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Suspense>
      </main>
    </div>
    //   <AppWrapper>
    //     <Routes>
    //       <Route path="/" element={<SharedLayout />}></Route>
    //       {/*<Route path="/" element={<SharedLayout />}>
    //         <Route path="/first" element={<FirstPage />} />
    //         <Route path="/second" element={<SecondPage />}>
    //           <Route path=":half" element={<HalfPage />} />
    //         </Route>

    //         <Route path="*" element={<ErrorPage />} />
    // </Route>*/}
    //     </Routes>
    //   </AppWrapper>
  );
}
export default App;
