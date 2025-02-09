import React from "react";
import FlipCard from "./FlipCard";
import frontImage from "./assets/front.png";
import backImage from "./assets/back.png";
import backgroundImage from "./assets/Nemo.png"
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
      </div>
    </div>
    
  );
};

export default App;
