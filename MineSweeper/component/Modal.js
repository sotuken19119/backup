import React, { useState, useEffect } from "react";

export default function Modal({ reset }) {

  const [render, setRender] = useState(false);

  useEffect(() => {
        //時間を止める
        setTimeout(() => { 
            //ゲームの終わりを知らせる
            setRender(true);
        }, 1000);
  }, []);

  return (
    <div
        // モーダルのデザイン
        style={{
            opacity: render ? 1 : 0,　//render-stateがtrueだったら透明化解除
            height: "160%",
            width: "150%",
            marginTop: -150,
            position: "absolute",
            background: "rgba(0,0,0,0.3)", //alphaは透明度の指定
            zIndex: 9999
         }}
    >
        {/* ゲームオーバーの時の画面 */}
      <div className="textGameOver">
        
      <br/>
      <br/>
        GAME OVER
        
      </div>

        {/* 　リトライボタン */}
        <div className="tryAgain" onClick={() => reset()}>
            Try Again
        </div>

    </div>
  );
}
