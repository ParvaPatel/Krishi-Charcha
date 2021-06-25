import React, { useState,useEffect } from "react";

import FolderIcon from "./images/folder_icon_transparent.png";
import CloseIcon from "./images/CloseIcon.svg";

import './AddImage.css';

function AddImage() {
  const [image, setImage] = useState("");
  const [isUploaded, setIsUploaded] = useState(true);
  const [typeFile, setTypeFile] = useState("");
  console.log("Image");
  console.log(image);

  useEffect(() => {
    const parsedImageValue = (localStorage.getItem("imageValue") || "")
    setImage(parsedImageValue)
    const parsedIsUploadedValue = (localStorage.getItem("isUploadedValue") || false)
    if(parsedImageValue){
      setIsUploaded(parsedIsUploadedValue)
    }else{
      setIsUploaded(false);
    }
    const parsedTypeFileValue = (localStorage.getItem("typeFileValue") || "")
    setTypeFile(parsedTypeFileValue)
  }, []);

  useEffect(() => {
      localStorage.setItem("imageValue", image);
      localStorage.setItem("isUploadedValue", isUploaded);
      localStorage.setItem("typeFileValue", typeFile);
  }, [image,isUploaded,typeFile]);

  function handleImageChange(e) {
    if (e.target.files && e.target.files[0]) {
      setTypeFile(e.target.files[0].type);
      let reader = new FileReader();

      reader.onload = function (e) {
        if(e.target.result !== null){
          setImage(e.target.result);

          setIsUploaded(true);
          // console.log(isUploaded);
        }
        

      };

      reader.readAsDataURL(e.target.files[0]);
    }
  }

 






  return (
    <div className="Layout">
      <div className="Container">
        <h2>Upload your image</h2>
        <p>Upload with preview 😁</p>

        <div className="BoxUpload">
          <div className="image-upload">
            {/* {console.log(!isUploaded)} */}
            {!isUploaded ? (
              <>
                <label htmlFor="upload-input">
                  <img
                    src={FolderIcon}
                    draggable={"false"}
                    alt="placeholder"
                    style={{ width: 100, height: 100 }}
                  />
                  <p style={{ color: "#444" }}>Click to upload image</p>
                </label>

                <input
                  id="upload-input"
                  type="file"
                  accept=".jpg,.jpeg,.gif,.png,.mov,.mp4"
                  onChange={handleImageChange}
                />
              </>
            ) : (
              <div className="ImagePreview">
                <img
                  className="close-icon"
                  src={CloseIcon}
                  alt="CloseIcon"
                  onClick={() => {
                    setIsUploaded(false);
                    setImage("");
                  }}
                />
                {typeFile.includes("video") ? (
                  <video
                    id="uploaded-image"
                    src={image}
                    // draggable={false}
                    controls
                    autoPlay
                    alt="uploaded-img"
                  />
                ) : (
                  <img
                    id="uploaded-image"
                    src={image}
                    draggable={false}
                    alt="uploaded-img"
                  />
                )}
              </div>
            )}
          </div>
        </div>

        {isUploaded ? <h2>Type is {typeFile}</h2> : null}
        {/* {console.log(isUploaded)} */}
      </div>
    </div>
  );
}

export default AddImage;
