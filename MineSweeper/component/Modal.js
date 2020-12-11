import React, { useState, useEffect } from "react";

export default function Modal({setGameOver }) {
  const [render, setRender] = useState(false);
  useEffect(() => {
    setTimeout(() => {  // 時間を止める
      setRender(true);
    }, 1000);
  }, []);
  function reset(){
    setRender(false);
    setGameOver(false);
  }
  return (
    <div
    　// モーダル画面の表示
      style={{
        opacity: render ? 1 : 0,
        height: "100%",
        width: "100%",
        position: "absolute",
        background: "rgba(0,0,0,0.3)",
      }}
    >
      {/* ゲームオーバーの時の画面 */}
      <div id="gameOverImage"></div>
      <div onClick={() => reset()} className="tryAgain">
        もう一度
      </div>
    </div>
  );
}