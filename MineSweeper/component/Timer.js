import React, { useState, useEffect } from "react";
import firebase from 'firebase';
import 'firebase/storage';

let timeIntervalId; 

export default function Timer({ gameOver, gameClear, sendTime, setOptionflg , optionflg, restartflg, setRestartflg,
                            data, flagRadio, roginuser, rogtimeflg, setRogTimeFlg}) {

  let [time, setTime] = useState(0);
  let [sTime, setSTime] = useState(0);

  const checkGame = () => {
    if(gameClear == true || gameOver == true) 
      return true;
    else 
      return false;
  }
  const updateData = (sTime) => {
    if(flagRadio == "a"){
      for(let i=1; i < 6; i++){
        if(data[i].ID == roginuser && data[i].easyTime > sTime){
          let db = firebase.database();
          let ref = db.ref("userInfo/" + i);
          ref.update({
            ID:data[i].ID,
            Pass:data[i].Pass,
            easyTime:sTime,
            nomalTime:data[i].nomalTime,
            hardTime:data[i].hardTime,
          });
        }
      }
    }
    else if(flagRadio == "b"){
      for(let i=1; i < 6; i++){
        if(data[i].ID == roginuser && data[i].nomalTime > sTime){
          let db = firebase.database();
          let ref = db.ref("userInfo/" + i);
          ref.update({
            ID:data[i].ID,
            Pass:data[i].Pass,
            easyTime:data[i].easyTime,
            nomalTime:sTime,
            hardTime:data[i].hardTime,
          });
        }
      }
    }
    else if(flagRadio == "c"){
      for(let i=1; i < 6; i++){
        if(data[i].ID == roginuser && data[i].hardTime > sTime){
          let db = firebase.database();
          let ref = db.ref("userInfo/" + i);
          ref.update({
            ID:data[i].ID,
            Pass:data[i].Pass,
            easyTime:data[i].easyTime,
            nomalTime:data[i].nomalTime,
            hardTime:sTime,
          });
        }
      }
    }
  }

  useEffect(() => {
    // ゲームオーバーの処理
    if ((time > 0 && gameOver) || (time > 0 && gameClear)) {
      console.log(gameClear);
      if(gameClear){
        updateData(time);
      }
      setSTime(time); // ゲームオーバー時のタイム
    }
  }, [gameOver, gameClear]);// 最初のマウント（DOMへのノードの追加)の時と指定された値に変化があった場合のみに第１引数の関数を実行。

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

    if(gameOver || gameClear || optionflg || restartflg || rogtimeflg) {
      setOptionflg(false);
      setRestartflg(false);
      setRogTimeFlg(false);
      clearInterval(timeIntervalId);　// ここでクリアすることで多重にタイマーが実行されないようにする
      setTime(0);     // タイマーを0にリセット
      console.log("abc");
    }
  }, [time, setTime, gameOver, gameClear, sendTime]);// 最初のマウント（DOMへのノードの追加)の時と指定された値に変化があった場合のみに第１引数の関数を実行。
  
  return (
    <span
      style={{ 
        color: "#000000", 
        fontSize: 50,
      }}>
      <span 
        role="img" 
        aria-label="clock" 
        style={{
          fontSize: 50,
        }}>
          ⏰
      </span>
      {checkGame() ? sTime : time} {/* ゲームオーバーなら終了時のタイムを表示、違うならタイムを表示 */}
    </span>
  );
}