import React from "react";

export default function RankingNormal({data,userDataNormal}) {  
    return (
        <div>
            <div><br />
                <div><span style={{paddingRight:70, color: "#FFFFFF"}}>BestTime</span>　<span>Name</span></div> <br />
                <div><span style={{paddingRight:100, color: "#FFFFFF"}}>{data[userDataNormal[0]].nomalTime}</span>　<span style={{color: "#FFFFFF"}}>{data[userDataNormal[0]].ID}</span></div> 
                <div><span style={{paddingRight:100, color: "#FFFFFF"}}>{data[userDataNormal[1]].nomalTime}</span>　<span style={{color: "#FFFFFF"}}>{data[userDataNormal[1]].ID}</span></div> 
                <div><span style={{paddingRight:100, color: "#FFFFFF"}}>{data[userDataNormal[2]].nomalTime}</span>　<span style={{color: "#FFFFFF"}}>{data[userDataNormal[2]].ID}</span></div> 
                <div><span style={{paddingRight:100, color: "#FFFFFF"}}>{data[userDataNormal[3]].nomalTime}</span>　<span style={{color: "#FFFFFF"}}>{data[userDataNormal[3]].ID}</span></div> <br />
            </div> 
        </div>
    );
}