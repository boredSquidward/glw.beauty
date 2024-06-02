import React, { useState } from "react";
// import { Image } from "react-bootstrap";

import Shimmer from "./Shimmer";
import { LAZY, URL } from "../../core/constants/keywords";

const LazyImage = ({
  bg,
  alt,
  img,
  children,
  srcSet,
  sizes,
  loading,
  className,
}) => {
  const [isImgLoaded, setIsImgLoaded] = useState(false);

  const handleLoad = () => {
    setIsImgLoaded(true);
    console.log(isImgLoaded);
  };

  const bgStyle = {
    backgroundImage: `${URL}(${bg})`,
  };

  const imgStyle = {
    opacity: isImgLoaded ? 1 : 0,
    transition: "opacity 250ms ease-in-out",
  };

  return (
    <div className={`${className} overflow-hidden drop-shadow-sm`}>
      <img
        className={className}
        srcSet={srcSet && srcSet}
        sizes={sizes && sizes}
        onLoad={handleLoad}
        loading={loading ? loading : LAZY}
        alt={alt}
        src={img}
        style={imgStyle}
      />
      {!isImgLoaded && (
        <div className={`w-full h-full bg-blue-500 relative`}>
          <div
            className="absolute z-10 bg-no-repeat bg-cover bg-center"
            style={bgStyle}
          />
          <Shimmer />
        </div>
      )}
      {children}
    </div>
  );
};

export default LazyImage;
