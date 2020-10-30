import React from 'react';

export default function Cell({details, updateFlag, revealCell}) {
    return (
        
        <div onContextMenu={(e)=>updateFlag(e,details.x, details.y)} // onContextMenuは右クリックのイベント
             onClick={()=>revealCell(details.x,details.y)} 
             style={style.cellStyle}
            >    
            {details.revealed ? details.value : ""}
        </div>
    );
}

// マインスイーパーの動画　51:05
const style = {
    // マスの書式設定
    cellStyle:{
        // 間隔
        width: 40, 
        height: 40,

        background:"grey",    
        border: "2px solid green", // 格子の線
        display:"flex",            // 要素が並列になるスタイル
        justifyContent:"center",   // 要素を中央に寄せる
        alightItems:"center",      // 要素を中央付近にまとめる
        cursor: "pointer",         // リンクカーソル
    },
};