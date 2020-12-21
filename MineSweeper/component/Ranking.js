import React,{ useState, useEffect } from "react";
import RankingEasy from "./RankingEasy";
import RankingNormal from "./RankingNormal";
import RankingHard from "./RankingHard";

export default function Ranking ({setflgRank}){
    const [render, setRender] = useState(false);
    const [radio,setRadio] = useState("a");
    useEffect(() => {
        setTimeout(() => {  // 時間を止める
          setRender(true);
        }, 1000);
    }, []);

    function cancel(){
        setRender(false);
        setflgRank(false);
    }

    return (
        <div
            style={{
                opacity: render ? 1 : 0,
                height: "100%",
                width: "100%",
                position: "absolute",
                background: "rgba(0,0,0,0.3)",
                zIndex: 5,
        }}
        >
            <div>Ranking</div>
            <div>
                <input type="radio" name="aradio" value="A" checked={radio === 'a'}
                        onChange={() => setRadio("a")}
                        />                      
                <label>Easy</label>
                <input type="radio" name="aradio" value="B" checked={radio === 'b'}
                        onChange={() => setRadio("b")}
                        /> 
                <label>Normal</label>

                <input type="radio" name="aradio" value="C" checked={radio === 'c'}
                        onChange={() => setRadio("c")}
                        /> 
                <label>Hard</label>
                <br/>
                <div>
                    {radio == "a" ? (
                        <RankingEasy /> 
                    ):( radio == "b" ?(
                        <RankingNormal /> 
                    ):(
                        <RankingHard />
                    )
                    )}                                
                </div>
                    

            </div>
            
            
            <button onClick = {cancel}>戻る</button>
        </div>
    );
}
