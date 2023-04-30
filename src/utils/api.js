import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN;

//making headers with authorization TMDB token
const headers = {
      Authorization: "bearer " + TMDB_TOKEN,
};

/**
 * fetchTMDBData from TMDB API as per URL and Params
 * @param {url} url provided when call the function to fetch any data like /movie/popular
 * @param {*} params provided when call the function to fetch and filter data
 * @returns data / error
 */
export const fetchDataFromApi = async (url, params) => {
      try {
            const { data } = await axios.get(BASE_URL + url, {
                  headers,
                  params,
            });
            return data;
      } catch (error) {
            console.log(error.message);
            return error;
      }
};
