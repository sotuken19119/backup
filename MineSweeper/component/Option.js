
import React,{ useState, useEffect } from "react";


export default function Option ({resetflg , setFlg ,FlagRadio , setOptionflg}) {
    const [radio, setRadio] = useState(FlagRadio);
    const [render, setRender] = useState(false);
    useEffect(() => {
        setTimeout(() => {  // 時間を止める
          setRender(true);
        }, 1000);
    }, []);

    function mon(){　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
        resetflg(radio);
        setOptionflg(true);
    }

    function cancel(){
        setRender(false);
        setFlg(false);
       
    }
    
    return (
        <div
            style={{
                opacity: render ? 1 : 0,
                height: "100%",
                width: "100%",
                position: "absolute",
                background: "rgba(0,0,0,0.3)",
          }}
        >
            <div>Option</div>
            <label>Easy</label>
            <input type="radio" name="aradio" value="A" checked={radio === 'a'}
                       onChange={() => setRadio("a")}
                    /> <br />
            <label>Normal</label>
            <input type="radio" name="aradio" value="B" checked={radio === 'b'}
                       onChange={() => setRadio("b")}
                    /> 
            <br />
            <label>Hard</label>
            <input type="radio" name="aradio" value="C" checked={radio === 'c'}
                       onChange={() => setRadio("c")}
                    /> <br />
            <button onClick = {mon}>OK</button> 
            <button onClick = {cancel}>キャンセル</button>

        </div>
    );
    
}