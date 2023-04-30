import { useState, useEffect } from "react";
import { fetchTMDBData } from "./utils/api";
import { useDispatch, useSelector } from "react-redux";
import { getApiConfiguration } from "./store/homeSlice";

function App() {
      const url = useSelector((state) => state.home.url);
      const dispatch = useDispatch();

      //calling apiTesting through useEffect
      useEffect(() => {
            apiTesting();
      }, []);

      //fetch data from API with call back then fun
      const apiTesting = () => {
            fetchTMDBData("/movie/popular").then((res) =>
                  dispatch(getApiConfiguration(res))
            );
      };

      return <div>{url.total_pages}</div>;
}

export default App;
