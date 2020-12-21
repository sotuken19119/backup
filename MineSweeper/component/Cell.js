import React from 'react';
import '../CSS/App.css';

export default function Cell({ details, revealCell, flagCell, flagDei, sumFlag}) {

    const cellstyle = {
        background: details.Revealed
            ? details.value === "X"
                ? "#f2d5a3"
                :bombChexPattern(details.x, details.y)
            : chexPattern(details.x, details.y),
        color:numColorCode(details.value),
    };

    const onClickUpdate = (e) => {
        if(details.flagged){
            return;
        }

        console.log(e.type);
        revealCell(details.x, details.y);
        sumFlag();
    };

    const onClickFlag = (e) => {
        e.preventDefault();
        if(!details.revealed){
            flagCell(e, details.x, details.y);
            flagDei(details.x, details.y);
        }
    };

    return (
        <div 
            onContextMenu={(e) => onClickFlag(e, details.x, details.y)}
            onClick = {() => onClickUpdate(details.x, details.y)} 
            style = {cellstyle}
            className = "cellStyle"
        >
            {!details.Revealed && details.flagged
                ? "🚩" 
                    : details.Revealed && details.value !== 0 
                    ? (details.value === "X" ? "💣" : details.value) 
                : ("")}
        </div>
    );
}




const bombChexPattern = (x, y) => {
    return "#f2d5a3";
    };
    
const chexPattern = (x, y) => {
    };

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

