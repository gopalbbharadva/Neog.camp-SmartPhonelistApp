import React, { useState } from "react";
import "./styles.css";

const phones = {
  Gaming: [
    {
      name: "Razer Phone 2",
      rating: "9 / 10"
    },
    {
      name: "Asus Rog Phone 3",
      rating: "8.5 / 10"
    },
    {
      name: "Xiaomi Black Shark 3",
      rating: "8 / 10"
    },
    {
      name: "iPhone 12",
      rating: "8 / 10"
    }
  ],
  Business: [
    {
      name: "Samsung Galaxy Note 9",
      rating: "9.4 / 10"
    },
    {
      name: "iPhone XS",
      rating: "9 / 10"
    },
    {
      name: "Google Pixel 3 XL",
      rating: "9 / 10"
    }
  ],
  DailyRoutine: [
    {
      name: "Samsung Galaxy Note 20",
      rating: "10 / 10"
    },
    {
      name: "Iphone 11",
      rating: "9.9 / 10"
    },
    {
      name: "Oneplus 8 Pro",
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
          {phones[setitem].map((item) => {
            return (
              <li
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
                <div style={{ paddingTop: "0.4rem" }}>{item.rating}</div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
