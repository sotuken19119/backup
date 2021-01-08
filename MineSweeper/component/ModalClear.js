import React, { useState, useEffect } from "react";

export default function ModalClear({endGame}) {
  const [render, setRender] = useState(false);
  useEffect(() => {
    setTimeout(() => {  // 時間を止める
      setRender(true);
    }, 1000);
  }, []);

  
  return (
    <div
    　// モーダル画面の表示
      style={{
        opacity: render ? 1 : 0,
        background: "rgba(0,0,0,0)", //alphaは透明度の指定
        position: "absolute",
        zIndex: 9999
      }}
    >
      {/* クリア時の画面 */}
      <div className="textClear">

          Congratulation!!
        </div>

      {/* 　リトライボタン */}
      <div className="tryAgain" onClick={() => endGame()}>
            Try Again
      </div>

    </div>
  );
}