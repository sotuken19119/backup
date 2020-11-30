import React,{Component} from 'react';
import firebase from 'firebase';
import 'firebase/storage';
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min';

class Auth extends Component{
    constructor(props){
        super(props);
        this.state={
            id_str: "",
            pass_str: "",
            data:[],
        };
        this.getFireData();
        this.doChangeID = this.doChangeID.bind(this);
        this.doChangePass = this.doChangePass.bind(this);
        this.doAction = this.doAction.bind(this);
    }
    //IDとpassの判定処理
    //login可能かの処理
    getFireData(){
        //database取得
        let db = firebase.database();
        //データパスの取得
        let ref = db.ref("user/");

        let self=this;
        //データ取得時のメソッド
        ref
            //並び変えメゾット
            //キーによって並び変える
            .orderByKey()
            //フィルターメゾット
            //最初から引数の数だけ取り出す
            .limitToFirst(10)
            //第一引数処理のイベント名
            //snapshotはイベント時にうけとった
            //データの情報をまとめたオブジェクト
            .on('value',snapshot=>{
                self.setState({
                    data:snapshot.val()
                });
            });
    }


    //名前の変更
    doChangeID(e) {
        this.setState({
        id_str: e.target.value
        });
    }

    //パスワードの変更
    doChangePass(e) {
        this.setState({
        pass_str: e.target.value
        });
    }

    doAction(e) {
        this.addFireData();
    }

    checkStr(ID,pass){
        if(ID == '' && pass == ''){
            console.log("IDとパスワードを入力してください");
            return false;
        }else{
            if(this.checkID(ID) && this.checkPass(pass)) return true;
        }
    }

    checkID(ID){
        if(ID == ''){
            console.log("IDを入力してください");
            return false;
        }
        return true;
    }

    checkPass(pass){
        if(pass == ''){
            console.log("パスワードを入力してください");
            return false;
        }
        return true;
    }

    addFireData() {
        var flug = false;
        if(this.checkStr(this.state.id_str,this.state.pass_str)){
            for(let i in this.state.data){
                if(this.state.data[i].ID == this.state.id_str){
                    if(this.state.data[i].password == this.state.pass_str){
                        flug = true;
                    }
                }
            }
        }
        if(flug == true){
            console.log("a");
            //this.props.history.push('/List');
        }else{
            this.setState({
                id_str:"",
                pass_str:""
            })
        }
    }

    render(){
        return(
            <div>
                <input
                type="text"
                placeholder="your ID."
                onChange={this.doChangeID}
                value={this.state.id_str}
                />
                <input
                type="text"
                placeholder="your password."
                onChange={this.doChangePass}
                value={this.state.pass_str}
                />
                <button onClick={this.doAction}>login</button>
            </div>
        );
    }
}

export default withRouter(Auth);
