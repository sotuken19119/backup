
import React,{ useState, useEffect } from "react";


export default function Option ({resetflg , setFlg ,flagRadio , setOptionflg}) {
    const [radio, setRadio] = useState(flagRadio);
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
                className="optionScreen"
                style={{
                    opacity: render ? 1 : 0,
                    // height: "150%",
                    // width: "70%",
                    // position: "absolute",
                    // background: "#000000",
                    // zIndex: 5,
                    // marginTop: -150,
                    // marginLeft: "auto",
                    // marginRight: "auto",
                    // minHeight:"400px",
                    // left: 0,
                    // right: 0,
                    // minWidth:"500px",
                }}
            >
                <div style={{
                        color: "#FFFFFF",
                        fontSize:"30px",
                        marginBottom:"5%",
                        marginTop:"5%",
                    }}
                >
                    Option
                </div>
                <div>
                    <input type="radio" name="aradio" value="A" checked={radio === 'a'}
                            onChange={() => setRadio("a")}/>
                    <label style={{color: "#FFFFFF"}}>
                        Easy
                    </label>
                    
                            <br />
                </div>
                <div style={{
                        marginBottom:"5%",
                        marginTop:"5%",
                    }}
                >
                    <input type="radio" name="aradio" value="B" checked={radio === 'b'}
                            onChange={() => setRadio("b")} /> 
                    <label style={{color: "#FFFFFF"}}>Normal</label>
                    <br />
                </div>
                
                <div style={{
                        marginBottom:"5%",
                    }}
                >
                    <input type="radio" name="aradio" value="C" checked={radio === 'c'}
                        onChange={() => setRadio("c")}/> 
                    <label style={{color: "#FFFFFF"}}>Hard</label>
                        <br />
                </div>
                
                <button onClick = {mon}
                style={{
                    marginRight:"15",
                }}>OK</button> 
                <button onClick = {cancel}>キャンセル</button>

            </div>
    );
}