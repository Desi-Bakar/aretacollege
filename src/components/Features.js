import React from "react";
import PreviewCompatibleImage from "./PreviewCompatibleImage";

const FeatureGrid = ({ gridItems }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
      {gridItems.map((item, index) => (
        <section
          key={index}
          className="card"
          style={{
            display: "flex",
            flexDirection: index % 2 === 0 ? "row" : "row-reverse",
            alignItems: "center",
            borderRadius: "12px",
            boxShadow: "0 6px 12px rgba(0, 0, 0, 0.1)",
            padding: "50px",
            backgroundColor: "#ffffff",
            gap: "20px",
          }}
        >
          {/* Gambar 30% */}
          <div style={{ flex: "0 0 30%" }}>
            <figure className="image is-inline-block" style={{ width: "100%" }}>
              <PreviewCompatibleImage imageInfo={item} />
            </figure>
          </div>

          {/* Teks 70% */}
          <div style={{ flex: "0 0 70%", padding: "0 20px" }}>
            <p
              style={{
                color: "#222",
                fontSize: "16px",
                lineHeight: "1.5",
                margin: 0,
              }}
            >
              {item.text}
            </p>
          </div>
        </section>
      ))}
    </div>
  );
};

export default FeatureGrid;
