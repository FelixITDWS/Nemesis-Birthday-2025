import React from "react";
import FlipCard from "./FlipCard";
import frontImage from "./assets/front.jpg"; // 放置圖片的路徑
import backImage from "./assets/back.jpg"; // 放置圖片的路徑

const App: React.FC = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>祝捏摸 2025 生日快樂</h1>
      <FlipCard frontImage={frontImage} backImage={backImage} />
    </div>
  );
};

export default App;
