import React, { useState } from "react";
import "./styles.css";

const phones = {
  Gaming: [
    {
      name: "Razer Phone 2",
      description:
        "The phone comes with a 5.72-inch touchscreen display with a resolution of 1440x2560 pixels and an aspect ratio of 16:9",
      rating: "9 / 10"
    },
    {
      name: "Asus Rog Phone 3",
      description:
        "The Asus ROG Phone 3 is designed primarily for gaming but tries to be a well-rounded flagship-class phone.",
      rating: "8.5 / 10"
    },
    {
      name: "Xiaomi Black Shark 3",
      description:
        "The phone comes with a 6.67-inch touchscreen display with a resolution of 1080x2400 pixels at a pixel density of 394 pixels per inch (ppi) and an aspect ratio of 20:9",
      rating: "8 / 10"
    },
    {
      name: "iPhone 12",
      description:
        "The iPhone 12 costs more than its predecessors but has a crisp new HDR OLED screen. It offers nearly all the feaures of the iPhone 12 Pro, minus some camera capabilities, but should be a good enough package for most users.",
      rating: "8 / 10"
    }
  ],
  Business: [
    {
      name: "Samsung Galaxy Note 9",
      description:
        "The new Galaxy Note 9 has much the same hardware and cameras as the Galaxy S9 Plus. The main thing that sets the Galaxy Note 9 apart is its S Pen, which now has added Bluetooth connectivity and can be used as a single-button Bluetooth remote control.",
      rating: "9.4 / 10"
    },
    {
      name: "iPhone XS",
      description:
        "Apple iPhone XS mobile was launched in September 2018. The phone comes with a 5.80-inch touchscreen display with a resolution of 1125x2436 pixels at a pixel density of 458 pixels per inch (ppi).",
      rating: "9 / 10"
    },
    {
      name: "Google Pixel 3 XL",
      description:
        "The Pixel 3XL, like the name suggests is bigger than the Pixel 3. It has similar build quality with a bigger 6.3-inch QHD+ display and a notch. It has an aluminium frame and the back is made out of Corning Gorilla 5",
      rating: "9 / 10"
    }
  ],
  DailyRoutine: [
    {
      name: "Samsung Galaxy Note 20",
      description:
        "The phone comes with a 6.70-inch touchscreen display with a resolution of 1080x2400 pixels and an aspect ratio of 20:9. ",
      rating: "10 / 10"
    },
    {
      name: "Iphone 11",
      description:
        "The iPhone 11 was introduced in September 2019, and Apple has continued selling it at a reduced starting price of $599 following the introduction of the iPhone 12 lineup",
      rating: "9.9 / 10"
    },
    {
      name: "Oneplus 8 Pro",
      description:
        "The OnePlus 8 Pro has a similar design as the OnePlus 8 but with some subtle changes. Its display is actually rounded on the sides, rather than just having curved glass like on the 8.",
      rating: "9.6 / 10"
    }
  ]
};

var phonearray = Object.keys(phones);
export default function App() {
  const [setitem, setcategory] = useState("Gaming");

  function getcategoryhandler(item) {
    setcategory(item);
  }
  return (
    <div className="App">
      <h1 style={{ color: "#10B981" }}>SmartPhones 📱</h1>
      <small>Check out phones for different categories.</small>
      <br />
      <div></div>
      <div>
        {phonearray.map((item) => {
          return (
            <button key={item} onClick={() => getcategoryhandler(item)}>
              {item}
            </button>
          );
        })}
      </div>
      <hr />
      <div style={{ textAlign: "start" }}>
        <ul type="none" style={{ paddingInlineStart: "0" }}>
          {phones[setitem].map((item, index) => {
            return (
              <li
                key={index}
                style={{
                  listStyle: "none",
                  padding: "1rem",
                  margin: "1rem 0rem",
                  backgroundColor: "#D1FAE5"
                }}
                className="output"
              >
                <div style={{ fontWeight: "bold", fontSize: "larger" }}>
                  {item.name}
                </div>
                <p>{item.description}</p>
                <div style={{ paddingTop: "0.4rem" }}>{item.rating}</div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
