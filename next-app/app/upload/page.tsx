"use client";

import React from "react";
import { CldUploadWidget } from "next-cloudinary";

const UploadPage = () => {
  return (
    <CldUploadWidget uploadPreset="zyhl6wmi">
      {({ open }) => (
        <button className="btn btn-primary" onClick={() => open()}>
          Upload Img
        </button>
      )}
    </CldUploadWidget>
  );
};

export default UploadPage;
