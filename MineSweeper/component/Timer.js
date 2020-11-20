import React, { useState, useEffect } from "react";
let timeIntervalId; 
export default function Timer({ gameOver, sendTime }) {
  let [time, setTime] = useState(0);
  let [sTime, setSTime] = useState(0);

  useEffect(() => {
    // ゲームオーバーの処理
    if (time > 0 && gameOver) {
      setSTime(time); // ゲームオーバー時のタイム
      setTime(0);     // タイマーを0にリセット
    }
  }, [gameOver, time]);// 最初のマウント（DOMへのノードの追加)の時と指定された値に変化があった場合のみに第１引数の関数を実行。

  // useEffectのコールバックが実行開始
  useEffect(() => {
    const incrementTime = () => {
      
        let newTime = time + 1; // タイムに1秒追加
        setTime(newTime); // タイムの更新
    }; 
    // 1秒ごとの処理
    timeIntervalId = setTimeout(() => {
        incrementTime();  
    },1000);
    if(gameOver) {

    clearInterval(timeIntervalId);　// ここでクリアすることで多重にタイマーが実行されないようにする
    }
  }, [time, setTime, gameOver, sendTime]);// 最初のマウント（DOMへのノードの追加)の時と指定された値に変化があった場合のみに第１引数の関数を実行。

  console.log(timeIntervalId);　
  return (
    <div style={{ color: "white", fontSize: 20,  }}>
      <span role="img" aria-label="clock" style={{ paddingRight: 10 }}>
        ⏰
      </span>
      {gameOver ? sTime : time}　{/* ゲームオーバーなら終了時のタイムを表示、違うならタイムを表示 */}
    </div>
  );
}