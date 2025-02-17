import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";

interface FlipCardProps {
  frontImage: string;
  backImage: string;
}

const FlipCard: React.FC<FlipCardProps> = ({ frontImage, backImage }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        textAlign: "center",
        gap: "10px",
      }}
    >
      <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
        {/* 正面 */}
        <div
          onClick={handleClick}
          style={{
            cursor: "pointer",
            width: "90vw",
            maxWidth: "90vh",
            height: "auto",
            aspectRatio: "1311 / 930",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            borderRadius: "10px",
            backgroundColor: "white",
          }}
          key="front"
        >
          <img
            src={frontImage}
            alt="Front"
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "10px",
            }}
          />
        </div>

        {/* 反面 */}
        <div
          onClick={handleClick}
          style={{
            cursor: "pointer",
            width: "90vw",
            maxWidth: "90vh",
            height: "auto",
            aspectRatio: "1311 / 930",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            borderRadius: "10px",
            backgroundColor: "white",
          }}
          key="back"
        >
          <img
            src={backImage}
            alt="Back"
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "10px",
            }}
          />
        </div>
      </ReactCardFlip>
    </div>
  );
};

export default FlipCard;
