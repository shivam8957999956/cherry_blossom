import { useState } from "react";
import "./home.css";

function Home() {
  const [Value, setvalue] = useState("Gorgeous");

  return (
    <div className="home">
      <div className="homeMid">
        <img
          src="images/IMG-20230417-WA0067.jpg"
          alt=""
          className="homeMidimg"
        />
        <div className="homeMidLeft"></div>
        <div className="homeMidRight">
          <div className="homeMidRightHeading">
            <div class="overlay"></div>

            <div class="text">
              <div class="wrapper">
                <div id="C" class="letter">
                  C
                </div>
                <div class="shadow">C</div>
              </div>
              <div class="wrapper">
                <div id="H" class="letter">
                  H
                </div>
                <div class="shadow">H</div>
              </div>
              <div class="wrapper">
                <div id="E" class="letter">
                  E
                </div>
                <div class="shadow">E</div>
              </div>
              <div class="wrapper">
                <div id="E" class="letter">
                  R
                </div>
                <div class="shadow">R</div>
              </div>
              <div class="wrapper">
                <div id="R" class="letter">
                  R
                </div>
                <div class="shadow">R</div>
              </div>
              <div class="wrapper">
                <div id="Y" class="letter">
                  Y
                </div>
                <div class="shadow">Y</div>
              </div>
              <div class="wrapper">
                <div id="Y" class="letter">
                  🍒
                </div>
                <div class="shadow">🍒</div>
              </div>
              <div class="wrapper">
                <div id="Y" class="letter">
                  E
                </div>
                <div class="shadow">E</div>
              </div>
              <div class="wrapper">
                <div id="Y" class="letter">
                  R
                </div>
                <div class="shadow">R</div>
              </div>
              <div class="wrapper">
                <div id="Y" class="letter">
                  A
                </div>
                <div class="shadow">A</div>
              </div>
              <div class="wrapper">
                <div id="Y" class="letter">
                  💕
                </div>
                <div class="shadow">💕</div>
              </div>
              {/* <div class="wrapper">
                <div id="E" class="letter">
                  E
                </div>
                <div class="shadow">E</div>
              </div>
              <div class="wrapper">
                <div id="S" class="letter">
                  S
                </div>
                <div class="shadow">S</div>
              </div>
              <div class="wrapper">
                <div id="Stwo" class="letter">
                  S
                </div>
                <div class="shadow">S</div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <div className="homeTop">
        <div className="homeTopContent">
          <div className="homeTopContentLeft">
            <div className="homeTopContentleftHeading">
              Wanna see how I see you, Select the parameters Below
            </div>
            <div className="homeTopContentleftHeading2">
              When Cherry Being <span style={{ color: "red" }}>{Value}</span>
            </div>
            <div className="homeTopContentleftList">
              <div
                className="homeTopContentleftListValue"
                onClick={() => setvalue("Gorgeous")}>
                Gorgeous
              </div>
              <div
                className="homeTopContentleftListValue"
                onClick={() => setvalue("Cute")}>
                Cute
              </div>
              <div
                className="homeTopContentleftListValue"
                onClick={() => setvalue("Prettiest")}>
                Prettiest
              </div>
              <div
                className="homeTopContentleftListValue"
                onClick={() => setvalue("Beautiful")}>
                Beautiful
              </div>
              <div
                className="homeTopContentleftListValue"
                onClick={() => setvalue("Angry")}>
                Angry
              </div>
              <div
                className="homeTopContentleftListValue"
                onClick={() => setvalue("Sweet")}>
                Sweet
              </div>
              <div
                className="homeTopContentleftListValue"
                onClick={() => setvalue("Heart Melting")}>
                Heart Melting
              </div>
              <div
                className="homeTopContentleftListValue"
                onClick={() => setvalue("My Jaan")}>
                My Jaan
              </div>
              <div
                className="homeTopContentleftListValue"
                onClick={() => setvalue("Special")}>
                Princess
              </div>
              <div
                className="homeTopContentleftListValue"
                onClick={() => setvalue("Love")}>
                Love
              </div>
              <div
                className="homeTopContentleftListValue"
                onClick={() => setvalue("Made Me fall for her")}>
                Made Me fall for her
              </div>
            </div>
          </div>
          <div className="homeTopContentRight">
            {Value === "Cute" ? (
              <img
                className="homeTopContentRightImg"
                src="images/IMG_4853.jpg"
                alt=""
              />
            ) : (
              ""
            )}
            {Value === "Heart Melting" ? (
              <img
                className="homeTopContentRightImg"
                src="images/Snapchat-1653194884.jpg"
                alt=""
              />
            ) : (
              ""
            )}
            {Value === "Beautiful" ? (
              <img
                className="homeTopContentRightImg"
                src="images/Screenshot_20220828-014414_Gallery.jpg"
                alt=""
              />
            ) : (
              ""
            )}
            {Value === "Prettiest" ? (
              <img
                className="homeTopContentRightImg"
                src="images/Snapchat-1561154633.jpg"
                alt=""
              />
            ) : (
              ""
            )}
            {Value === "Sweet" ? (
              <img
                className="homeTopContentRightImg"
                src="images/IMG_8639.jpg"
                alt=""
              />
            ) : (
              ""
            )}
            {Value === "Funny" ? (
              <img
                className="homeTopContentRightImg"
                src="https://static.vecteezy.com/system/resources/previews/022/484/378/original/cute-and-cheerful-3d-girl-model-transparent-background-free-png.png"
                alt=""
              />
            ) : (
              ""
            )}
            {Value === "Special" ? (
              <img
                className="homeTopContentRightImg"
                src="images/IMG_4158.png"
                alt=""
              />
            ) : (
              ""
            )}
            {Value === "Gorgeous" ? (
              <img
                className="homeTopContentRightImg"
                src="images/Screenshot_20220803-102215_Gallery.jpg"
                alt=""
              />
            ) : (
              ""
            )}
            {Value === "Love" ? (
              <img
                className="homeTopContentRightImg"
                src="images/1667441995493.jpg"
                alt=""
              />
            ) : (
              ""
            )}
            {Value === "My Jaan" ? (
              <img
                className="homeTopContentRightImg"
                src="images/1662810764784.jpg"
                alt=""
              />
            ) : (
              ""
            )}
            {Value === "Made Me fall for her" ? (
              <img
                className="homeTopContentRightImg"
                src="images/Screenshot_20220715-010252_Gallery.jpg"
                alt=""
              />
            ) : (
              ""
            )}
            {Value === "Angry" ? (
              <img
                className="homeTopContentRightImg"
                src="images/20230430_120324.jpg"
                alt=""
              />
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="homeTopContent2">
          <div className="gallery">
            <img src="images/1665380895039.jpg" alt="a hot air balloon"></img>
            <img
              src="images/1667416761476.jpg"
              alt="a sky photo of an old city"></img>

            <img src="images/1667032468494 (1).jpg" alt="a small boat"></img>
            <img src="images/IMG_8737.jpg" alt="a forest"></img>
          </div>
          <div className="homeTopContent2Head underline">
            The four Phase of Your Beautiness
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
