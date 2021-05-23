import React, { useCallback, useState } from "react";
import styled from "styled-components";

import ImagesZoom from "./ImagesZoom/index";
import { BsPlus } from "react-icons/bs";

const PostImage = ({ images }) => {
  const [showImages, setShowImages] = useState(false);

  const onZoom = useCallback(() => {
    setShowImages(true);
  }, []);

  const onClose = useCallback(() => {
    setShowImages(false);
  }, []);

  if (images.length === 1) {
    return (
      <>
        <img
          src={images[0].src}
          alt={images[0].src}
          onClick={onZoom}
          height="300px"
        />
        {showImages && <ImagesZoom images={images} onClose={onClose} />}
      </>
    );
  }
  if (images.length === 2) {
    return (
      <>
        <div>
          <img
            src={images[0].src}
            alt={images[0].src}
            width="50%"
            onClick={onZoom}
          />
          <img
            src={images[1].src}
            alt={images[1].src}
            width="50%"
            onClick={onZoom}
          />
        </div>
        {showImages && <ImagesZoom images={images} onClose={onClose} />}
      </>
    );
  }
  return (
    <>
      <div>
        <img
          src={images[0].src}
          alt={images[0].src}
          width="50%"
          onClick={onZoom}
        />
        <div
          style={{
            display: "inline-block",
            width: "50%",
            textAlign: "center",
            verticalAlign: "middle",
          }}
        >
          <BsPlus />
          <br />
          {images.length - 1}개의 사진 더보기
        </div>
      </div>
      {showImages && <ImagesZoom images={images} onClose={onClose} />}
    </>
  );
};

export default PostImage;
