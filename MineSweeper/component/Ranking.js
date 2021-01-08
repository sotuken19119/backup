import React,{ useState, useEffect } from "react";
import RankingEasy from "./RankingEasy";
import RankingNormal from "./RankingNormal";
import RankingHard from "./RankingHard";

export default function Ranking ({setFlgRank, data, userDataEasy, userDataNormal, userDataHard}){
    const [render, setRender] = useState(false);
    const [radio,setRadio] = useState("a");
    useEffect(() => {
        setTimeout(() => {  // 時間を止める
          setRender(true);
        }, 100);
    }, []);

    function cancel(){
        setRender(false);
        setFlgRank(false);
    }

    return (
            <div
                style={{
                    opacity: render ? 1 : 0,
                    height: "80%",
                    width: "70%",
                    position: "absolute",
                    background: "#000000",
                    zIndex: 5,
                    marginTop: -150,
                    marginLeft: "auto",
                    marginRight: "auto",
                    minHeight:"400px",
                    left: 0,
                    right: 0,
                    minWidth:"1050px",
                }}
            >
                <div
                    style={{
                        fontSize:"30px",
                        marginBottom:"5%",
                        marginTop:"5%",
                        color: "#FFFFFF"
                    }}
                >
                    Ranking
                </div>
                <div>
                    <input type="radio" name="aradio" value="A" checked={radio === 'a'}
                            onChange={() => setRadio("a")}
                            />                      
                    <label
                        style={{
                            color: "#FFFFFF",
                            paddingRight:"5%"
                        }}
                    >
                        Easy
                    </label>
                    <input type="radio" name="aradio" value="B" checked={radio === 'b'}
                            onChange={() => setRadio("b")}
                            /> 
                    <label
                        style={{
                            color: "#FFFFFF",
                            paddingRight:"5%"
                        }}
                    >
                        Normal
                    </label>
                    <input type="radio" name="aradio" value="C" checked={radio === 'c'}
                            onChange={() => setRadio("c")}
                            /> 
                    <label
                        style={{
                            color: "#FFFFFF",
                            paddingRight:"5%"
                        }}
                    >
                        Hard
                    </label>
                    <div
                        style={{
                            marginTop:"5%"
                        }}
                    >
                        {radio == "a" ? (
                        <RankingEasy data={data} userDataEasy={userDataEasy}/> 
                        ):( radio == "b" ?(
                        <RankingNormal data={data} userDataNormal={userDataNormal}/> 
                        ):(
                        <RankingHard data={data} userDataHard={userDataHard}/>
                        )
                        )}                            
                    </div>
                </div>
                <button onClick = {cancel} class="cancelButton">戻る</button>
            </div>
    );
}