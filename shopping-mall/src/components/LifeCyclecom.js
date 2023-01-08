import { Component } from "react";

class LifeCycleCom extends Component {

    componentDidMount(){
        //컴포넌트가 mount 될 때 코드 실행
    }
    componentDidUpdate(){
        //컴포넌트가 update 될 때 코드 실행
    }
    componentDidUnmount(){
        //컴포넌트가 unmount 될 때 코드 실행
    }

    //useEffect(()=> {})            //재렌더링마다 코드실행
    //useEffect(()=> {}, []);       //마운트될 때 1회만 실행
    //useEffect(()=> {}, [상태변수]) //상태변수가 작동 될 때만 실행
    //useEffect(()=> {}, return)    //소멸
    
    // > setTimeout( ()=>{ ‘이거’ }, 1000) : 1초 후에 ‘이거’ 실행해줘~
    // > setinterval( ()=>{ ‘이거’ }, 1000) : 1초 마다  ‘이거’ 실행해줘~

}