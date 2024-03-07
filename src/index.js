import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import IBSheetLoader from "@ibsheet/loader";
IBSheetLoader.config({
  registry: [
    {
      name: "ibsheet",
      baseUrl: "/ibsheet", // ibsheet.js 파일 위치
      // theme: "mint", // css 파일 테마  (설정이 없으면 /css/default/main.css 사용)
      locales: ["en", "ko"], // locale 파일 (설정이 없으면 /locale/ko.js 파일 사용)
      plugins: [
        // plugin 파일
        "dialog",
        "common",
        "excel",
      ],
      // ibsheet license string
      license:
        "W2FtSztPKCJzazYxYjJxbn8QYkI6Rjd0ODh4bDBkLWMrKwQnTXcJYS4gXTwlZjF5AhpYJ3FCPxMjPWVgMWYydA==",
    },
  ],
});
IBSheetLoader.load();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
