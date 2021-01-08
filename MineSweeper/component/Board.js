import React, { useState, useEffect } from "react";
import CreateBoard from "../util/CreateBoard";
import Cell from "./Cell";
import Modal from "./Modal";
import ModalClear from './ModalClear';
import Timer from "./Timer";
import {Revealed} from "../util/Reveal";
import Option from "./Option";
import Ranking from './Ranking';
import Auth from './Auth';
import firebase from 'firebase';
import 'firebase/storage';

//Chrome拡張「ColorZilla」

const Board = () =>{
    //↓フック: const [オブジェクト, オブジェクトを変更する時呼び出すメソッド] = useState(変数の初期値)
    //         メリット:クラスを書かずにstateを利用できる

    //ボードの情報state
    const [board, setBoard] = useState([]);
    //爆弾のないマスの合計値state
    const [nonMinesCount, setNonMinesCount] =  useState(0);
    //爆弾のある場所の情報state
    const [mineLocations, setMineLocations] = useState([]);
    //ゲームオーバーフラグstate
    const [gameOver, setGameOver] = useState(false);
    //ゲームクリアフラグstate
    const [gameClear,setGameClear] = useState(false);
    //リスタートフラグstate
    const [restart, setRestart] = useState(false);
    //記録state
    const [newTime, setTime] = useState(0);
    //フラッグの数state
    const [flagCount, setFlagCount] = useState(0);
    //明らかになるマスの座標を格納する配列state
    const [revealLocation, setRevealLocation] = useState([]);
    //難易度選択のラジオボタンフラグstate
    const [flagRadio, setFlagRadio] = useState("");
    //リスタートボタンフラグstate
    const [restartflg,setRestartFlg] = useState(false);
    //ランキングボタンフラグstate
    const [flgRank,setFlgRank] = useState(false);
    //難易度を変えたかどうかのフラグstate
    const [flg,setFlg] = useState(false);
    //オプションボタンフラグstate
    const [optionflg,setOptionflg] = useState(false);
    // データベースのデータを入れる
    const [data, setData] = useState([]);
    // ログインしているユーザーIDをいれる
    const [roginuser,setRoginUser] = useState("");
    // ログイン画面を表示するフラグ
    const [roginflg, setRoginFlg] = useState(true);
    // ログイン画面の時タイマーを0にするフラグ
    const [rogtimeflg, setRogTimeFlg] = useState(false);
    const [userDataEasy, setUserDataEasy] = useState([]);
    const [userDataNormal, setUserDataNormal] = useState([]);
    const [userDataHard, setUserDataHard] = useState([]);

    let xboard = 8; //行の初期値
    let yboard = 10; //列の初期値
    let bombCount = 8; //爆弾の数の初期値
    let flagset = "a"; //難易度の初期値

    useEffect(() => {
        //初期ボードの作成
        const generateBoard = () => {
            //引数（ 行数, 列数, 爆弾数 ）
            const getBoard = CreateBoard(xboard, yboard, bombCount, setMineLocations);
            //爆弾のないマスの合計値
            setNonMinesCount(xboard * yboard - bombCount);
            //フラッグの数を初期化
            setFlagCount(bombCount);
            //タイマーを初期化
            setTime(0);
            //変更したboard情報を更新
            setBoard(getBoard.board);
            //爆弾の位置情報を取得
            setMineLocations(getBoard.mineLocation);
            //ゲームオーバーフラグを初期化
            setGameOver(false);
            //ゲームクリアフラグを初期化
            setGameClear(false);
            //リスタートフラグを初期化
            setRestart(false);
            //明らかになるマスの座標配列を初期化
            setRevealLocation([]);
            //難易度初期化
            setFlagRadio("a");
            //ランキングボタンフラグを初期化
            setFlgRank(false);
            //難易度を変えたかどうかのフラグを初期化
            setFlg(false);
            
        };
        //呼び出す
        generateBoard();

    }, [restart, setRestart]);//この２つのstateが変更されたらuseEffectを実行する

    useEffect(() => {
      getFireData();
    },[]);

  function getFireData(){
    //database取得
    let db = firebase.database();
    //データパスの取得
    let ref = db.ref("userInfo/");
    let self=this;
    //データ取得時のメソッド
    ref
        //並び変えメゾット
        //キーによって並び変える
        .orderByKey()
        //フィルターメゾット
        //最初から引数の数だけ取り出す
        .limitToFirst(10)
        //第一引数処理のイベント名
        //snapshotはイベント時にうけとった
        //データの情報をまとめたオブジェクト
        .on('value',snapshot=>{
            setData(snapshot.val());
            
        });
        
  }

    const resetflg = (x) =>{
        flagset = x;
        restartmine(flagset);                                                                                                                                                                           
    };

    const endGame = () =>{
        endmine(flagRadio);
    }

    const restartmine = (x) =>{
        console.log(flagRadio);
        switch(x){
            case "a": xboard = 8; yboard = 10; bombCount = 8;
            break;
            case "b": xboard = 10; yboard = 15; bombCount = 20;
            break;
            case "c": xboard = 15; yboard = 20; bombCount = 38;
            break;
            }
        const getBoard = CreateBoard(xboard, yboard, bombCount, setMineLocations);
    　  //難易度を変えたときとリセットの時の初期化
        setNonMinesCount(xboard * yboard - bombCount);
        //フラッグの数を初期化
        setFlagCount(bombCount);
        //変更したboard情報を更新
        setBoard(getBoard.board);
        //爆弾の位置情報を取得
        setMineLocations(getBoard.mineLocation);
        //ゲームオーバーフラグを初期化
        setGameOver(false);
        //ゲームクリアフラグを初期化
        setGameClear(false);
        //リスタートフラグを初期化
        setRestart(false);
        //明らかになるマスの座標配列を初期化
        setRevealLocation([]);
        //ランキングボタンフラグを初期化
        setFlgRank(false);
        //難易度を変えたかどうかのフラグを初期化
        setFlg(false);
        setFlagRadio(x);
        setRestartFlg(true);
        setTime(0);
    };   

    const endmine = (x) =>{
        console.log(flagRadio);
        switch(x){
            case "a": xboard = 8; yboard = 10; bombCount = 8;
            break;
            case "b": xboard = 10; yboard = 15; bombCount = 20;
            break;
            case "c": xboard = 15; yboard = 20; bombCount = 38;
            break;
            }
        const getBoard = CreateBoard(xboard, yboard, bombCount, setMineLocations);
    　  //難易度を変えたときとリセットの時の初期化
        setNonMinesCount(xboard * yboard - bombCount);
        //フラッグの数を初期化
        setFlagCount(bombCount);
        //変更したboard情報を更新
        setBoard(getBoard.board);
        //爆弾の位置情報を取得
        setMineLocations(getBoard.mineLocation);
        //ゲームオーバーフラグを初期化
        setGameOver(false);
        //ゲームクリアフラグを初期化
        setGameClear(false);
        //リスタートフラグを初期化
        setRestart(false);
        //明らかになるマスの座標配列を初期化
        setRevealLocation([]);
        //ランキングボタンフラグを初期化
        setFlgRank(false);
        //難易度を変えたかどうかのフラグを初期化
        setFlg(false);
        setFlagRadio(x);
        setTime(0);
    };   
    

    //マスを開けるメソッド
    const revealCell = (x, y) => {
        //JSONでdeep copyの実装し速度改善
        let newBoardValues = JSON.parse(JSON.stringify(board));
        let newNonMinesCount = nonMinesCount;
        let newReveal = revealLocation;
        // すでにあけられているマス、または
        // 爆弾を押したとき「return;」で処理を停止し動作しないようにする
        if(board[x][y].Revealed || gameOver){
            return;
        }
        //開けたマスが爆弾だった時
        if(newBoardValues[x][y].value === 'X'){
            for(let i = 0; i < mineLocations.length; i++){
                //すべての爆弾のマスのrevealedをtrueにする
                newBoardValues[mineLocations[i][0]][mineLocations[i][1]].Revealed = true;
            }
            setBoard(newBoardValues);
            //ゲームオーバー
            setGameOver(true);
        }else{//爆弾以外の時
            newBoardValues = Revealed(newBoardValues, x, y, newNonMinesCount, newReveal);
            //変更したboard情報を更新
            setBoard(newBoardValues.arr);
            setNonMinesCount(newBoardValues.newNonMinesCount);
            setRevealLocation(newBoardValues.newReveal);
            
            if(nonMinesCount == 1){
                setGameClear(true);
            }
        }
    };

    //フラッグを置くメソッド
    const flagCell = (e, x, y) => {

        //通常の右クリック時の動作を制御する ex)右クリックでコピーなど
        e.preventDefault();
        //JSONでdeep copyの実装し速度改善
        let newBoardValues = JSON.parse(JSON.stringify(board));
        //対象マスにフラッグを置いたことを知らせる
        newBoardValues[x][y].flagged = !newBoardValues[x][y].flagged;
        //変更したboard情報を更新
        setBoard(newBoardValues);
    };

    //フラッグの数を調整するメソッド
    const flagDei = (x, y) => {
        let newBoardValues = JSON.parse(JSON.stringify(board));
        if(newBoardValues[x][y].flagged ){
          setFlagCount(flagCount + 1);
        }
        else {
          setFlagCount(flagCount - 1);
        }
      };

    //飛ばされたフラッグを回収するメソッド
    const sumFlag = () => {
        let newBoardValues = JSON.parse(JSON.stringify(board)); 
        let count = 0;
        for(let i = 0; i < revealLocation.length; ){
          if(newBoardValues[revealLocation[i]][revealLocation[i+1]].flagged){  
            count++;      
            newBoardValues[revealLocation[i]][revealLocation[i+1]].flagged = false;
          }
          i+=2; 
        }
        for(let i = 0; i < revealLocation.length; i++){
          revealLocation[i]=0;
        }
        setRevealLocation(revealLocation);
        setFlagCount(flagCount + count);
      }

      function changeRank(){
        setFlgRank(true);
        sortDataEasy();
        sortDataNormal();
        sortDataHard();
      };

      function sortDataEasy(){
        let x = 999999;
        let id = [1,2,3,4,5];
        let q=0;
        for(let i in data){
            id[i] = data[i].easyTime;
            userDataEasy[i] = i;
            console.log(userDataEasy[i]);
        }
        userDataEasy.shift();
        console.log(userDataEasy);
        id.shift();
        for(let i = 0; i < 4; i++){
          for(let j = 4;j>i;j--){
              if(id[j] < id[j-1]){
                  x = id[j];
                  id[j]=id[j-1];
                  id[j-1]=x;
                  q = userDataEasy[j];
                  userDataEasy[j] = userDataEasy[j-1];
                  userDataEasy[j-1] = q;
              }
            }
        }    
      }
    function sortDataNormal(){
        let x = 999999;
        let id = [1,2,3,4,5];
        let q=0;
        for(let i in data){
            id[i] = data[i].nomalTime;
            userDataNormal[i] = i;
            console.log(userDataNormal[i]);
        }
        userDataNormal.shift();
        console.log(userDataNormal);
        id.shift();
        for(let i = 0; i < 4; i++){
          for(let j = 4;j>i;j--){
              if(id[j] < id[j-1]){
                  x = id[j];
                  id[j]=id[j-1];
                  id[j-1]=x;
                  q = userDataNormal[j];
                  userDataNormal[j] = userDataNormal[j-1];
                  userDataNormal[j-1] = q;
              }
            }
        } 
      }
    
    function sortDataHard(){
        let x = 999999;
        let id = [1,2,3,4,5];
        let q=0;
        for(let i in data){
            id[i] = data[i].hardTime;
            userDataHard[i] = i;
            console.log(userDataHard[i]);
        }
        userDataHard.shift();
        console.log(userDataHard);
        id.shift();
        for(let i = 0; i < 4; i++){
          for(let j = 4;j>i;j--){
              if(id[j] < id[j-1]){
                  x = id[j];
                  id[j]=id[j-1];
                  id[j-1]=x;
                  q = userDataHard[j];
                  userDataHard[j] = userDataHard[j-1];
                  userDataHard[j-1] = q;
              }
            }
        } 
      }
     
    
      function changeOption(){
        setFlg(true);
      };

    return(
        <div style={{zindex: 1}}>
            
            <div className="menuBar">
                <span>
                    <button onClick={() => restartmine(flagRadio)} className="restartButton"> </button>
                </span>
                <span style={{paddingLeft: 80}}>
                    <button onClick={changeOption} className="optionButton"> </button>
                </span>
                <span role="img" aria-label="flag" style={{fontSize: 50, paddingLeft: 80}}>
                    🚩
                    <span style={{color: "black", fontSize: 50}}>
                        {flagCount}
                    </span>
                </span>
                <span style={{paddingLeft: 80}}>
                    <Timer 
                        gameOver={gameOver} 
                        gameClear={gameClear} 
                        sendTime = {setTime} 
                        setOptionflg={setOptionflg} 
                        optionflg={optionflg} 
                        restartflg ={restartflg} 
                        setRestartflg={setRestartFlg}
                        data={data}
                        flagRadio={flagRadio}
                        roginuser={roginuser}
                        rogtimeflg={rogtimeflg}
                        setRogTimeFlg={setRogTimeFlg}
                    />
                </span>
                <span style={{paddingLeft: 80}}>
                    <button onClick={changeRank} className="rankingButton"> </button>
                </span>
            </div>
            <div  className="board">
                {roginflg && <Auth data={data} setRoginUser={setRoginUser} setRoginFlg={setRoginFlg} setRogTimeFlg={setRogTimeFlg}/> } 
                {gameOver && <Modal　endGame={endGame} />}
                {gameClear && <ModalClear endGame={endGame}/>}　
                {flg && <Option resetflg={resetflg} setFlg={setFlg} flagRadio={flagRadio} setOptionflg={setOptionflg} />}
                {flgRank && <Ranking setFlgRank={setFlgRank} data={data} userDataEasy={userDataEasy} userDataNormal={userDataNormal} userDataHard={userDataHard}/>}

                {board.map((singleRow,index1) => {
                    return(
                        <div style = {{display: "flex"}} key = {index1}>
                            {singleRow.map((singleBlock, index2) => {
                                return  (
                                    <Cell 
                                        revealCell = {revealCell}
                                        details = {singleBlock} 
                                        flagCell = {flagCell} 
                                        key = {index2}
                                        flagDei={flagDei}
                                        sumFlag={sumFlag}
                                    />
                                );
                            })}
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default Board;