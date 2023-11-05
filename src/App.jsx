import {BrowserRouter , Routes , Route , Navigate} from "react-router-dom";
import { CitiesProvider } from "./contexts/citiesContext";
import { AuthProvider } from "./contexts/FakeAuthContext";
import ProtectedRoute from "./pages/ProtectedRoute";
import { lazy } from "react";
import { Suspense } from "react";

import CityList from "./components/CityList";
import CountryList from "./components/CountryList";
import City from "./components/City";
import Form from "./components/Form";
import SpinnerFullPage from "./components/SpinnerFullPage";

// import Product from "./pages/Product";
// import Pricing from "./pages/Pricing";
// import HomePage from "./pages/HomePage";
// import AppLayout from "./pages/AppLayout";
// import Login from "./pages/Login";
// import PageNotFound from "./pages/PageNotFound";

const HomePage = lazy(() => import("./pages/HomePage"));
const Product = lazy(() => import("./pages/Product"));
const Pricing = lazy(() => import("./pages/Pricing"));
const AppLayout = lazy(() => import("./pages/AppLayout"));
const Login = lazy(() => import("./pages/Login"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));


export default function App() {

  return (
    <AuthProvider>
    <CitiesProvider>
    <BrowserRouter>
    <Suspense fallback={ <SpinnerFullPage /> } >
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="product" element={<Product />} />
      <Route path="pricing" element={<Pricing />} />
      <Route path="login" element={<Login />} />
      <Route path="app" element={
        <ProtectedRoute>
      <AppLayout />
      </ProtectedRoute>
      } >

        <Route index element={<Navigate replace to="cities" />} />
      <Route path="cities" element={<CityList />} />
      <Route path="cities/:id" element={<City />} />
      <Route path="countries" element={<CountryList />} />
      <Route path="form" element={<Form />} />

      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
    </Suspense>
    </BrowserRouter>
    </CitiesProvider>
    </AuthProvider>
  )
}

