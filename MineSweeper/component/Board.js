import React, { useState, useEffect } from "react";
import CreateBoard from "../util/CreateBoard";

const Board = () =>{
    //↓フック: const [オブジェクト, オブジェクトを変更する時呼び出すメソッド] = useState(変数の初期値)
    //         メリットクラスを書かずにstateを利用できる
    const [grid, setGrid] = useState([]);

    useEffect(() => {
        function freshBoard(){
            const newBoard = CreateBoard(5, 5, 10);
            setGrid(newBoard);
        }
        freshBoard();
    }, []);
    
    //エラー処理
    //if(!grid.board){
    //    return <div>Loading</div>;
    //}

    //
    return grid.board.map((singleRow) => {
        return (
            <div style={{display: "flex"}}>
                {singleRow.map((singleBlock) => {
                    return <div>{singleBlock.value}</div>;
                })}
            </div>
        );
    });
};

export default Board;
