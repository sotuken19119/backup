export default (row, col, bombs) => {

    let board = [];　　　　　/*１行に列数分のマスデータを格納している配列
                                を行数分格納する配列 */
    let mineLocation = [];  //ボムの場所を格納する配列

    //空白のボード作成
    //マスの情報を初期化
    for(let x = 0; x < row; x++){ //横列の初期化

        let subCol =[];　　//１行に列数分のマスデータを格納する配列

        for(let y = 0; y < col; y++){ //縦列の初期化
            //push(): 配列の末尾に要素を追加
            subCol.push(
               {
                   value: 0,
                   revealed: false,
                   x: x,
                   y: y,
                   flagged: false,
               } 
            );
        }
        board.push(subCol);
    }
    
    //ボムの場所をランダムで決める
    let bombsCount = 0;
    while (bombsCount < bombs){
        //0 ~ 行数(列数)-1　乱数取得
        let x = randomNum(0, row - 1);
        let y = randomNum(0, col - 1);

        //valueが0の時はボム判定
        if(board[x][y].value === 0){
            //ボムをXで表示
            board[x][y].value = "X";
            //ボムの場所を格納
            mineLocation.push([x,y]);
            //ボムの数をカウント
            bombsCount++;
        }
    }

    //マスの周りのボムの数を決める

    for(let roww = 0; roww < row; roww++){
        for(let coll = 0; coll < col; coll++){
            if(board[roww][coll].value === "X"){
                //対象マスがボムであったとき
                continue;
            }

            //対象マスの真上
            if(roww > 0 && board[roww - 1][coll].value === "X"){
                board[roww][coll].value++;
            }

            //対象マスの右上
            if (
                roww > 0 &&
                coll < col - 1 &&
                board[roww - 1][coll + 1].value === "X"
            ) {
                board[roww][coll].value++;
            }

            // 対象マスの右
            if (coll < col - 1 && board[roww][coll + 1].value === "X") {
                board[roww][coll].value++;
            }

            // 対象マスの右下
            if (
                roww < row - 1 &&
                coll < col - 1 &&
                board[roww + 1][coll + 1].value === "X"
            ) {
                board[roww][coll].value++;
            }

            // 対象マスの真下
            if (roww < row - 1 && board[roww + 1][coll].value === "X") {
                board[roww][coll].value++;
            }

            // 対象マスの左下
            if (
                roww < row - 1 &&
                coll > 0 &&
                board[roww + 1][coll - 1].value === "X"
            ) {
                board[roww][coll].value++;
            }

            // 対象マスの左
            if (coll > 0 && board[roww][coll - 1].value === "X") {
                board[roww][coll].value++;
            }

            // 対象マスの左上
            if (roww > 0 && coll > 0 && board[roww - 1][coll - 1].value === "X") {
                board[roww][coll].value++;
            }
        }
    }
    return {board, mineLocation};
};

//ランダム関数
function randomNum(min = 0,max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}