import React from "react";

function PoliciesContainer({ index, content, style, showContent }) {
  if (showContent) {
    return <div id={index} dangerouslySetInnerHTML={{ __html: content }} className={style}></div>;
  }
}

export default PoliciesContainer;
