import {Component} from 'react';


/*
function logArrayElements(1) {} //배열 안에 있는 각각의 데이터 처리
function logArrayElements(1,2) {} //1- 데이터, 2- 인덱스 번호
*/
function logArrayElements(element,index, array) { // 3- 배열의 전체 데이터
    console.log('a[' + index + '] = ' + element);
}
[2,5,9].forEach(logArrayElements);




class MyComponents extends Component{

    // constructor(){           //construcor(props){
    //     this.state = {
    //         //상태변수(state variable)
    //         number : 0,
    //         age : 10,
    //         name : 'yuna'
    //     }
    // }

    //상태변수 선언
    state = {
        number : 0,
        message : 'TTAC',
        validate : false,
        messages : ['AngularJS', 'React', 'Vue', 'Ember']
    }
    
    render(){
        //변수 선언
        const {name} = this.props;
        const {message, number, validate, messages} = this.state;  //여기서 선언 해줘야 아래 return에서 사용 가능
        let irum = 'junhan';
        let x,y,z =3;
        
        function logArrayElements(element,index, array) { // 3- 배열의 전체 데이터
            console.log('a[' + index + '] = ' + element);
            //console.log({messages.map((name) => (name + " "))});
        }

        messages.map((name)=> (console.log(name)))
        
        
        return(
            <>
                {/* 여기서는 Hello에서 처럼 파라미터에 못쓰니까 this쓴다  */}
                <h1>{this.props.str}</h1>  
                <h3>Hello {message}</h3>
                <h3>{irum}님 반갑습니다</h3>
                <span>kosa94님, {number}님 필요하신 것 있으세요?</span>
                <h2>{validate}</h2>
                <h3>{messages}</h3>
                <h3>{messages[3]}</h3>
                <p>--------------------------------------------------------</p>
                <h3>messages.map</h3>
                <h3>{messages.map((name) => (name + " "))}</h3>
                {/* 콘솔찍기 */}
                <h3>{messages.map((item,i,arr) => console.log(item + " "+"인덱스 번호 : "+i + "배열 전체 나오기 : "+ arr))}</h3>
                <p>--------------------------------------------------------</p>
                <h3>{x},{z},{y}</h3>

                <h1>{name}</h1>


                
            </>
        )
    }
}


export default MyComponents;