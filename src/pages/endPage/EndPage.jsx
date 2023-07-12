import React from "react";
import "./endPage.css";
function EndPage() {
  return (
    <div className="EndPage">
      <div class="container">
        <div class="card card0">
          <div class="border">
            <h2>Cute Smile</h2>
            <div class="icons">
              <i class="fa-solid fa-face-kiss-wink-heart"></i>
              <i class="fa-solid fa-shield-heart"></i>
              <i class="fa-regular fa-face-smile-beam"></i>
              <i class="fa-solid fa-face-grin-hearts"></i>
            </div>
          </div>
        </div>
        <div class="card card1">
          <div class="border">
            <h2>Color of My Life</h2>
            <div class="icons">
              <i class="fa-solid fa-hand-holding-heart"></i>
              <i class="fa-regular fa-heart fa-beat"></i>
              <i class="fa-solid fa-palette"></i>
              <i class="fa-solid fa-heart-pulse"></i>
            </div>
          </div>
        </div>
        <div class="card card2">
          <div class="border">
            <h2>Jaan Forever</h2>
            <div class="icons">
              <i class="fa-brands fa-reddit"></i>
              <i class="fa-solid fa-heart-circle-check"></i>
              <i class="fa-regular fa-face-kiss-beam"></i>
              <i class="fa-solid fa-face-grin-hearts"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EndPage;
