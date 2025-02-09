import React from "react";
import FlipCard from "./FlipCard";
import frontImage from "./assets/front.png"; // 放置圖片的路徑
import backImage from "./assets/back.png"; // 放置圖片的路徑

const App: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
        textAlign: "center",
        gap: "20px", // 控制 h1 與 FlipCard 的距離
      }}
    >
      <h1 style={{ marginTop: "50px", color: "black" }}>祝捏摸 2025 生日快樂</h1>
      <p style={{ color: "black" }}>... 點按翻開卡片 ...</p>
      <FlipCard frontImage={frontImage} backImage={backImage} />
    </div>
  );
};

export default App;
