import React from "react";

export default function RankingHard({data,userDataHard}){
    return (
        <div><br />
            <div><span style={{paddingRight:70, color: "#FFFFFF"}}>BestTime</span>　<span style={{color: "#FFFFFF"}}>Name</span></div> <br />
            <div><span style={{paddingRight:100, color: "#FFFFFF"}}>{data[userDataHard[0]].hardTime}</span>　<span style={{color: "#FFFFFF"}}>{data[userDataHard[0]].ID}</span></div> 
            <div><span style={{paddingRight:100, color: "#FFFFFF"}}>{data[userDataHard[1]].hardTime}</span>　<span style={{color: "#FFFFFF"}}>{data[userDataHard[1]].ID}</span></div> 
            <div><span style={{paddingRight:100, color: "#FFFFFF"}}>{data[userDataHard[2]].hardTime}</span>　<span style={{color: "#FFFFFF"}}>{data[userDataHard[2]].ID}</span></div> 
            <div><span style={{paddingRight:100, color: "#FFFFFF"}}>{data[userDataHard[3]].hardTime}</span>　<span style={{color: "#FFFFFF"}}>{data[userDataHard[3]].ID}</span></div> <br />
        </div>  
            
    );
}