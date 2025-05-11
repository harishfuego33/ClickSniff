import React, { useRef } from "react";

interface CardProps {
  title: string;
  para: string;
}
const Card = ({ title, para }: CardProps) => {
  return (
    <div className="tools-card">
      <h2>{title}</h2>
      <p>{para}</p>
    </div>
  );
};
const CardGrid = () => {
  const Data = [
    {
      title: "Real-Time Detection",
      para: "Instantly analyzes URLs for known phishing, malware, or scam patterns.",
    },
    {
      title: "AI-Powered Checks",
      para: "Utilizes advanced algorithms to detect suspicious behavior and anomalies.",
    },
    {
      title: "User-Friendly Interface",
      para: "Simple and intuitive design for seamless user experience.",
    },
    {
      title: "Comprehensive Reports",
      para: "Detailed analysis and reports on URL safety.",
    },
  ];
  const cardRef = useRef<HTMLDivElement>(null);
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const grid = cardRef.current;
    if (!grid) return;

    const rect = grid.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    console.log("Mouse X:", x, "Mouse Y:", y); // 👈 Check this
    grid.style.setProperty("--x", `${x}px`);
    grid.style.setProperty("--y", `${y}px`);
  };
  return (
    <div className="tools-grid" ref={cardRef} onMouseMove={handleMouseMove}>
      {Data.map((item, index) => (
        <Card key={index} title={item.title} para={item.para} />
      ))}
    </div>
  );
};

export default CardGrid;
