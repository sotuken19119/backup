import React from 'react';
import "../App.css";
import Circle from './Circle';　// 爆弾の表示

export default function Cell({details, updateFlag, revealCell}) {

    const cellstyle = {
        background: details.revealed  // マスが見えるようになっていたら
           // trueの時()内の処理をする
            ? (details.value === "X"
                // Xだったら
                ? mineColor() // 爆弾の色表示
                // falseの処理
                : bombChexPattern(details.x,details.y)) // 見えているマスの背景を表示
            // falseの時に処理する
            : chexPattern(details.x, details.y),        // 見えていないマスの色を表示
    }

    return (
        
        <div onContextMenu={(e)=>updateFlag(e,details.x, details.y)} // onContextMenuは右クリックのイベント
             onClick={()=>revealCell(details.x,details.y)} 
             style={cellstyle}  // マスにスタイルの適用する
             className="cellStyle"  // App.cssのスタイル
            >  
            {/* クリックされたマスが見えていないときの処理 */}
            {!details.revealed && details.flagged ? ( 
              "🚩" // trueの時flagを立てる
            ) : details.revealed && details.value !== 0 ? (
              // Xだったら爆弾のレイアウトを表示する
              details.value === "X" ? (
                <Circle />
              ) : (
                 // Xではないときの処理
                 details.value　// マスの値を表示する
              )
            ) : (
              ""　// 0だったら空白を表示
            )}          
        </div>
    );
}

// 見えるようになったマスの背景を表現
const bombChexPattern = (x, y) => {
    if (x % 2 === 0 && y % 2 === 0) {
      return "#e5c29f";
    } else if (x % 2 === 0 && y % 2 !== 0) {
      return "#d7b899";
    } else if (x % 2 !== 0 && y % 2 === 0) {
      return "#d7b899";
    } else {
      return "#e5c29f";
    }
  };
// 見えていないマスの色を表現
  const chexPattern = (x, y) => {
    if (x % 2 === 0 && y % 2 === 0) {
      return "#aad751";
    } else if (x % 2 === 0 && y % 2 !== 0) {
      return "#a2d249";
    } else if (x % 2 !== 0 && y % 2 === 0) {
      return "#a2d249";
    } else {
      return "#aad751";
    }
  };

  // 数字の色分け
  const numColorCode = (num) => {
    if (num === 1) {
      return "#1976d2";
    } else if (num === 2) {
      return "#388d3c";
    } else if (num === 3) {
      return "#d33030";
    } else if (num === 4) {
      return "#7c21a2";
    } else if (num === 5) {
      return "#1976d2";
    } else if (num === 6) {
      return "#1976d2";
    } else {
      return "white";
    }
  };