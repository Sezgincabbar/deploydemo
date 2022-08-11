import React from "react";

export default function BackToTop() {
  return (
    <div
      style={{ cursor: "pointer" }}
      onClick={() => {
        window.scrollTo({ top: 100, left: 100, behavior: "smooth" });
      }}
      id="back-to-top"
    >
      <a className="top" id="top">
        <i className="ion-ios-upload-outline"></i>
      </a>
    </div>
  );
}
