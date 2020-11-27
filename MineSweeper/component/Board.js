import React, { useState, useEffect } from "react";
import CreateBoard from "../util/CreateBoard";
import Cell from "./Cell";
import Modal from "./Modal";
import Timer from "./Timer";
import {Revealed} from "../util/Reveal";


const Board = () =>{
    //↓フック: const [オブジェクト, オブジェクトを変更する時呼び出すメソッド] = useState(変数の初期値)
    //         メリット:クラスを書かずにstateを利用できる

    //ボードの情報state
    const [board, setBoard] = useState([]);
    //爆弾のないマスの合計値state
    const [nonMineCount, setNonMineCount] =  useState(0);
    //爆弾のある場所の情報state
    const [mineLocations, setMineLocations] = useState([]);
    //ゲームオーバーフラグstate
    const [gameOver, setGameOver] = useState(false);
    //リスタートフラグstate
    const [restart, setRestart] = useState(false);
    //記録state
    const [newTime, setTime] = useState(0);

    useEffect(() => {
        //ボードの作成
        const generateBoard = () => {
            //引数（ 行数, 列数, 爆弾数 ）
            const getBoard = CreateBoard(10, 15, 15, setMineLocations);
            //爆弾のないマスの合計値
            setNonMineCount(10 * 15 -　15);
            //タイマーを初期化
            setTime(0);
            //変更したboard情報を更新
            setBoard(getBoard.board);
            //爆弾の位置情報を取得
            setMineLocations(getBoard.mineLocation);
            //ゲームオーバーフラグを初期化
            setGameOver(false);
            //リスタートフラグを初期化
            setRestart(false);
        };
        //呼び出す
        generateBoard();

    }, [restart, setRestart]);//この２つのstateが変更されたらuseEffectを実行する

    

    //マスを開けるメソッド
    const revealCell = (x, y) => {

        // すでにあけられているマス、
        // または爆弾を押したとき「return;」で処理を停止し動作しないようにする
        if(board[x][y].Revealed || gameOver){
            return;
        }
        //JSONでdeep copyの実装し速度改善
        let newBoardValues = JSON.parse(JSON.stringify(board));
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
            newBoardValues = Revealed(newBoardValues, x, y, nonMineCount);
            //変更したboard情報を更新
            setBoard(newBoardValues.arr);
            setNonMineCount(newBoardValues.newNonMinesCount)
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

    return(
        <div>
            <Timer gameOver = {gameOver} sendTime = {setTime}/>
            <div style = {{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    position: 'relative',
                }}>

                {gameOver && <Modal　reset = {setRestart} completetime = {newTime }/>}

                {board.map((singleRow,index1) => {
                    return(
                        <div style = {{display: "flex"}} key = {index1}>
                            {singleRow.map((singleBlock, index2) => {
                                return  (
                                    <Cell 
                                        revealCell = {revealCell}
                                        details = {singleBlock} 
                                        updateFlag = {flagCell} 
                                        key = {index2}
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
