import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function Img({ src, className, title }) {
      return (
            <LazyLoadImage
                  className={className || ""}
                  alt={title || ""}
                  effect="blur"
                  src={src || ""}
            />
      );
}

export default Img;
