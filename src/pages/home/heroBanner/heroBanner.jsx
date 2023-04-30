import React, { useEffect, useState } from "react";
import "./style.scss";
import { useNavigate } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import { useSelector, useDispatch } from "react-redux";

function heroBanner() {
      const [background, setBackground] = useState("");
      const [query, setQuery] = useState("");
      const navigate = useNavigate();
      const baseUrlWithSize = useSelector((state) => state.home.url.backdrop);

      //Fetch upcomming movie data
      const { data, loading } = useFetch("/movie/upcoming");

      useEffect(() => {
            const bgPath =
                  data?.results?.[Math.floor(Math.random() * 20)]
                        ?.backdrop_path;
            setBackground(bgPath);
      }, [data]);

      const searchInputHandler = (e) => {
            if (e.key == "Enter" && query.length > 0) {
                  navigate(`/search/${query}`);
            }
      };

      return (
            <div className="heroBanner">
                  <div className="heroBGImage">
                        <img src={baseUrlWithSize + background} />
                  </div>
                  <div className="wrapper">
                        <div className="heroBannerContent">
                              <span className="title">Welcome</span>
                              <span className="subTitle">
                                    All kinds of Movie and TV show with details
                              </span>
                              <div className="searchInput">
                                    <input
                                          className="search"
                                          type="text"
                                          value={query}
                                          onChange={(event) =>
                                                setQuery(event.target.value)
                                          }
                                          onKeyUp={searchInputHandler}
                                    />
                                    <button>Search</button>
                              </div>
                        </div>
                  </div>
            </div>
      );
}

export default heroBanner;
