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
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      {/* 正面 */}
      <div
        onClick={handleClick}
        style={{ cursor: "pointer", width: "100%" }}
        key="front"
      >
        <img
          src={frontImage}
          alt="Front"
          style={{ width: "100%", height: "100%", borderRadius: "10px" }}
        />
      </div>

      {/* 反面 */}
      <div
        onClick={handleClick}
        style={{ cursor: "pointer", width: "100%"}}
        key="back"
      >
        <img
          src={backImage}
          alt="Back"
          style={{ width: "100%", height: "100%", borderRadius: "10px" }}
        />
      </div>
    </ReactCardFlip>
  );
};

export default FlipCard;
