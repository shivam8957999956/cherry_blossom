import { useContext, useEffect, useState } from "react";

import "./topbar.css";
import { Link } from "react-router-dom";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topLeft">
        <span className="Logo">
          Cherry Blossom<span className="dot">.</span>Era
        </span>
      </div>
      <div className="topcenter">
        <ul className="topList">
          <li className="topListItem">CuteNess</li>
          <li className="topListItem">Memories</li>
        </ul>
      </div>
    </div>
  );
}
