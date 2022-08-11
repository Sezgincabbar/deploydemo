import React from "react";

export default function StyleCustomizer() {
  return (
    <div className="iq-customizer closed">
      <div className="buy-button">
        <a className="opener">
          <i className="fa fa-spinner fa-spin"></i>
        </a>
      </div>
      <div className="clearfix content-chooser">
        <h3 className="iq-font-black">Appino Awesome Color</h3>
        <p>This color combo available inside whole template. You can change on your wish, Even you can create your own with limitless possibilities! </p>
        <ul className="iq-colorChange clearfix">
          <li className="color-1 selected" data-style="color-1"></li>
          <li className="color-2" data-style="color-2"></li>
          <li className="color-3" data-style="color-3"></li>
          <li className="color-4" data-style="color-4"></li>
          <li className="color-5" data-style="color-5"></li>
          <li className="color-6" data-style="color-6"></li>
          <li className="color-7" data-style="color-7"></li>
          <li className="color-8" data-style="color-8"></li>
        </ul>
        <a target="_blank" className="button" href="#">
          purchase now
        </a>
      </div>
    </div>
  );
}
