import React, { useState, useEffect } from "react";

export default function Modal({ endGame }) {

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
    　　className="modalOver"
        // モーダルのデザイン
        style={{
            opacity: render ? 1 : 0,　//render-stateがtrueだったら透明化解除
            position: "absolute",
            background: "rgba(0,0,0,0)", //alphaは透明度の指定
            zIndex: 9999
         }}
    >

      
        {/* ゲームオーバーの時の画面 */}
      <div>
        <div className="textGameOver">
            GAME OVER
        </div>
        {/* 　リトライボタン */}
        <div className="tryAgain" onClick={() => endGame()}>
            Try Again
        </div>
      </div>
    </div>
  );
}