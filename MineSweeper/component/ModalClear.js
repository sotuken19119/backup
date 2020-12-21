import React, { useState, useEffect } from "react";

export default function ModalClear({ reset, completeTime }) {
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
        height: "160%",
        width: "100%",
        marginTop: -150,
        position: "absolute",
        zIndex: 9999
      }}
    >
      {/* クリア時の画面 */}
      <div className="textClear">

        <br/>
        <br/>
          Congratulation!!
        </div>

      {/* 　リトライボタン */}
      <div className="tryAgain" onClick={() => reset()}>
            Try Again
      </div>

    </div>
  );
}
