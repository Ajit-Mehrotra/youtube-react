import React from "react";
import './SideBarFooter.scss';

export function SideBarFooter() {
  return (
    <React.Fragment>
      <div className="footer-block">
        <div>About Press Copyright</div>
        <div>Cerators Advertise</div>
        <div>Developers +MyTube</div>
        <div>Legal</div>
      </div>

      <div className="footer-block">
        <div>Terms Privacy</div>
        <div>Policy & Safety</div>
        <div>Test new Features</div>
      </div>

      <div className="footer-block">
        <div>All prices include VAT</div>
      </div>

      <div className="footer-block">
        <div>
          © Productioncoder.com - A Youtube clone for educational purposes under
          fair use.
        </div>
      </div>
    </React.Fragment>
  );
}
