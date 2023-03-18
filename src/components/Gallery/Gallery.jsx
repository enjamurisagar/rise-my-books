import React, { useEffect, useState } from "react";
import "./Gallery.css";

//COMPONENTS
import GalleryHeadCategories from "./GalleryHeadCategories/GalleryHeadCategories";
const Gallery = (props) => {
  const [galleryData, setGalleryData] = useState([]);
  function addData(item) {
    setGalleryData((old) => {
      return [...old, item];
    });
  }
  useEffect(() => {
    props.setGallData(galleryData);
  });

  return (
    <div className={props.className}>
      <GalleryHeadCategories addData={addData} />
    </div>
  );
};

export default Gallery;
