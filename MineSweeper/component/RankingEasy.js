import React from "react";


export default function RankingEasy({data,userDataEasy}){
    
    return (
        <div><br />
        <div><span style={{paddingRight:70, color: "#FFFFFF"}}>BestTime</span>　<span style={{color: "#FFFFFF"}}>Name</span></div> <br />
            <div><span style={{paddingRight:100, color: "#FFFFFF"}}>{data[userDataEasy[0]].easyTime}</span>　<span style={{color: "#FFFFFF"}}>{data[userDataEasy[0]].ID}</span></div> 
            <div><span style={{paddingRight:100, color: "#FFFFFF"}}>{data[userDataEasy[1]].easyTime}</span>　<span style={{color: "#FFFFFF"}}>{data[userDataEasy[1]].ID}</span></div> 
            <div><span style={{paddingRight:100, color: "#FFFFFF"}}>{data[userDataEasy[2]].easyTime}</span>　<span style={{color: "#FFFFFF"}}>{data[userDataEasy[2]].ID}</span></div> 
            <div><span style={{paddingRight:100, color: "#FFFFFF"}}>{data[userDataEasy[3]].easyTime}</span>　<span style={{color: "#FFFFFF"}}>{data[userDataEasy[3]].ID}</span></div> <br />
        </div>         
    );
}
