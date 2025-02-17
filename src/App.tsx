import React from "react";
import FlipCard from "./FlipCard";
import frontImage from "./assets/front.png";
import backImage from "./assets/back.png";
import backgroundImage from "./assets/Nemo.png";
import "./index.css"; // 確保載入 CSS

const App: React.FC = () => {
  return (
    <div>
      <img src={backgroundImage} alt="Background" className="moving-background" />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100vw",
          height: "100vh",
          textAlign: "center",
          position: "relative",
        }}
      >
        <h1 style={{ marginTop: "50px", color: "black" }}>祝捏摸 2025 生日快樂</h1>
        <p style={{ color: "black" }}>... 點按翻開卡片 ...</p>

        <FlipCard frontImage={frontImage} backImage={backImage} />

        {/* 下載按鈕區域 */}
        <div
          style={{
            marginTop: "20px", // 確保按鈕與 FlipCard 之間有距離
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            paddingBottom: "20px", // 保持按鈕底部間距
          }}
        >
          <a
            href="/Card.pdf" // 確保 PDF 檔案在 public 資料夾內
            download="Card-Felix.pdf"
            style={{
              padding: "10px 20px",
              backgroundColor: "#f786b1",
              color: "white",
              textDecoration: "none",
              borderRadius: "5px",
              fontSize: "18px",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = "#ff8fbf";
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = "#f786b1";
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            下載卡片
          </a>
        </div>
      </div>
    </div>
  );
};

export default App;