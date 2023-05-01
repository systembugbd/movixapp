import React, { useEffect, useState } from "react";
import "./style.scss";
import { useNavigate } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import { useSelector, useDispatch } from "react-redux";
import Img from "../../../components/lazyLoadImage/img";
import ContentWrapper from "./../../../components/contentWrapper/ContentWrapper";

function heroBanner() {
      const [background, setBackground] = useState("");
      const [query, setQuery] = useState("");
      const [title, setTitle] = useState("");
      const navigate = useNavigate();
      const url = useSelector((state) => state.home.url);

      //Fetch upcomming movie data
      const { data, loading } = useFetch("/movie/upcoming");

      useEffect(() => {
            const popularBgURL =
                  url?.backdrop +
                  data?.results?.[Math.floor(Math.random() * 20)]
                        ?.backdrop_path;
            setBackground(popularBgURL);

            setTitle(data?.results?.[Math.floor(Math.random() * 20)]?.title);
      }, [data]);

      //OnSubmit Handler
      const onSubmitHandler = () => {
            if (query.length > 0) {
                  navigate(`/search/${query}`);
            }
      };
      //on Enter Key press Handler
      const searchInputHandler = (e) => {
            if (e.key == "Enter" && query.length > 0) {
                  navigate(`/search/${query}`);
            }
      };

      return (
            <div className="heroBanner">
                  {!loading && (
                        <div className="backdrop-img">
                              <Img src={background} title={title} />
                        </div>
                  )}
                  <div className="gradient-layer"></div>
                  <ContentWrapper>
                        <div className="heroBannerContent">
                              <span className="title">Welcome</span>
                              <span className="subTitle">
                                    Millions of movie and TV show and people to
                                    discover, Explore Now
                              </span>
                              <div className="searchInput">
                                    <input
                                          className="search"
                                          type="text"
                                          value={query}
                                          placeholder="Type your query here..."
                                          onChange={(event) =>
                                                setQuery(event.target.value)
                                          }
                                          onKeyUp={searchInputHandler}
                                    />
                                    <button onClick={onSubmitHandler}>
                                          Search
                                    </button>
                              </div>
                        </div>
                  </ContentWrapper>
            </div>
      );
}

export default heroBanner;
