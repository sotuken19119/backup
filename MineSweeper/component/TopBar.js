import React from "react";
import Timer from "./Timer";

export default function TopBar({ gameOver, setTime }) {
  return (
    <div
      // 上側のツール画面のデザイン
      style={{
        background: "#4a752c",
        padding: "10px 0",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <span role="img" aria-label="flag" style={{ paddingBottom: 10 }}>
        🚩
      </span>
      <Timer gameOver={gameOver} sendTime={setTime} />
    </div>
  );
}