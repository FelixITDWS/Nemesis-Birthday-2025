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
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
        {/* 正面 */}
        <div
          onClick={handleClick}
          style={{
            cursor: "pointer",
            width: "90vw",
            height: "auto",
            maxWidth: "90vh",
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
              height: "100%",
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
            height: "auto",
            maxWidth: "90vh",
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
              height: "100%",
              borderRadius: "10px",
            }}
          />
        </div>
      </ReactCardFlip>
    </div>
  );
};

export default FlipCard;