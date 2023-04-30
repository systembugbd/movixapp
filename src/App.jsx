import { useEffect } from "react";
import { fetchDataFromApi } from "./utils/api";
import { useDispatch, useSelector } from "react-redux";
import { getApiConfiguration, getApiGenres } from "./store/homeSlice";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home/home";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Details from "./pages/details/details";
import Explore from "./pages/explore/explore";
import SearchResult from "./pages/searchResult/searchResult";
import PageNotFound404 from "./pages/notFound404/notFound404";

function App() {
      const url = useSelector((state) => state.home.url);
      const dispatch = useDispatch();

      //calling apiTesting through useEffect
      useEffect(() => {
            fetchApiConfig();
      }, []);

      //fetch data from API with call back then fun
      const fetchApiConfig = () => {
            fetchDataFromApi("/configuration").then((res) => {
                  const url = {
                        backdrop: res.images.secure_base_url + "original",
                        poster: res.images.secure_base_url + "original",
                        profile: res.images.secure_base_url + "original",
                  };
                  dispatch(getApiConfiguration(url));
            });
      };

      return (
            <BrowserRouter>
                  <Header />
                  <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/:mediaType/:id" element={<Details />} />
                        <Route
                              path="/search/:query"
                              element={<SearchResult />}
                        />
                        <Route
                              path="/explore/:mediaType"
                              element={<Explore />}
                        />
                        <Route path="*" element={<PageNotFound404 />} />
                  </Routes>
                  <Footer />
            </BrowserRouter>
      );
}

export default App;
