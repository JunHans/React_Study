import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { StockContext } from "../App";
import { changeCart } from "../store";
import { useDispatch } from "react-redux";


let Box = styled.div`
    padding : 20px;
    color: gray;
`;

let ColorBtn = styled.button`                   
    background-color : ${props => props.bg == 'black' ? 'skyblue' : 'red'};
    color : black;
    padding : 10px;
`;
//중복을 최소화 하는 방법(아래) 파라미터에 저렇게 하고 바꾸고 싶은 부분만 바꾼다
// let YellowBtn = styled.button(ColorBtn)`  
//     background-color : yellow;
// `;

function Detail({ figure }) {
    let { id } = useParams();  //HOOK id값 파라미터 받아옴
    let findId = figure.find((item) => item.id == id);  //id가 맞는지 확인 하고 data.js 배열의 한 인덱스의 값들을 담고있음
    let navigate = useNavigate();
    let [count, setCount] = useState(0);
    let [flag, setFlag] = useState(true);

    let dispatch = useDispatch();
    let [clickTab, setClickTab] = useState(0);
    let [num, setNum] = useState('');
    let ab ='';

    useEffect(()=>{
        if(isNaN(num) == true){ //문자냐 아니냐
            alert('숫자만 입력하세요');
            setNum('');
                }else{
                    ab = <div>숫자입니다</div>
                }
    },[num])
    //useEffect(()=> {})            //재렌더링마다 코드실행
    //useEffect(()=> {}, []);       //마운트될 때 1회만 실행
    //useEffect(()=> {}, [상태변수]) //상태변수가 작동 될 때만 실행
    //useEffect(()=> {}, return)    //소멸

    // > setTimeout( ()=>{ ‘이거’ }, 1000) : 1초 후에 ‘이거’ 실행해줘~
    // > setinterval( ()=>{ ‘이거’ }, 1000) : 1초 마다  ‘이거’ 실행해줘~
    useEffect(() => {
        //여기에 기재하면 이 코드는 컴포넌트에 생성/업데이트/소멸에 관련된 것들을 실행한다
        // console.log('react');
        let timer = setTimeout(() => { setFlag(false); console.log('aaa'); }, 3000);
        return () => { clearTimeout(timer); console.log('bbb'); };  //return은 소멸될 때 실행 됨(타임아웃 꺼지는게 실행)
    }, [count])



    return (
        <>
            {
                flag == true
                    ? <span id='ad'>3초이내 구매하시면 할인됩니다!!!<br />(3초 뒤 사라짐)</span>
                    : null
            }
            {/* <button onClick={()=> {setCount(count+1)}}>증가</button>
        {count} */}
            <Box>
                {/* <ColorBtn bg="yellow">Detail Page</ColorBtn> */}
                <ColorBtn bg="black"><b>Detail Page</b></ColorBtn>
            </Box>
            <div>
                {/* <img src={"https://raw.githubusercontent.com/ai-edu-pro/busan/main/t" + (props.i) + ".jpg"} width='100%'/> */}
                <a href={figure.link}><img className='price' src={findId.images} alt="1" /></a>
                <h4>{findId.title}</h4>
                <p>{findId.content}</p>
                <p>{findId.price + "원"}</p>
                <p><input onChange={(e)=>{setNum(e.target.value)}} />개</p>

                <button className="btn btn-success btn-sm" onClick={() => { navigate('/cart') }}>주문하기</button> &nbsp;
                <button className="btn btn-warning btn-sm" onClick={() => { dispatch(changeCart(id)); navigate('/cart') }}>장바구니</button> &nbsp;
                <button className="btn btn-danger btn-sm" onClick={() => { navigate(-1) }}>뒤로가기</button> &nbsp;
                {/* <button className="btn btn-danger btn-sm" onClick={() => { diapatch(addItem) }}>뒤로가기</button> &nbsp; */}
            </div>
s



             <Tabs
                defaultActiveKey="link1"  //창이 열렸을 때 보여주는 탭`
                transition={false}
                id="noanim-tab-example"
                className="mb-3"
            >
                <Tab onClick={() => { clickTab.setClickTab(0) }} eventKey="link1" title="상세정보">
                    <div><h1>홈입니다</h1></div>
                </Tab>
                <Tab onClick={() => { clickTab.setClickTab(1) }} eventKey="link2" title="교환방법">
                    <div><h1>교환방법</h1></div>
                </Tab>
                <Tab onClick={() => { clickTab.setClickTab(2) }} eventKey="link3" title="환불정책">
                    <div><h1>환불정책</h1></div>
                </Tab>
                <Tab onClick={() => { clickTab.setClickTab(3) }} eventKey="link4" title="배송문의">
                    <div><h1>배송문의</h1></div>
                </Tab>
            </Tabs>
            

            <TabComponent clickTab={clickTab} />


        </>
    )
} // End Detail.js

//탭 눌렀을때 스무스하게 전환되게 한다고 함 (제대로 되는지도 모르겠음;;)
function TabComponent({ clickTab }) {
    let [fade, setFade] = useState('');
    useEffect(()=>{
        let timer =  setTimeout(()=>{
            setFade('end')
        },100);

        return()=> {
            clearTimeout(timer);
        }
    },[clickTab])

    let stock = useContext(StockContext);
    return (
        <div className={`start ${fade}`}>
            {stock[0]}
           { [<div>내용0</div>, <div>내용1</div>, <div>내용2</div>, <div>내용3</div>][clickTab]}
        </div>
        
        
        
    // <Tabs
    //   defaultActiveKey="link1"  //창이 열렸을 때 보여주는 탭`
    //   transition={false}
    //   id="noanim-tab-example"
    //   className="mb-3"
    // >
    //   <Tab onClick={()=>{clickTab.setClickTab(0)}} eventKey="link1" title="상세정보">
    //     <div><h1>홈입니다</h1></div>
    //   </Tab>
    //   <Tab onClick={()=>{clickTab.setClickTab(1)}} eventKey="link2" title="교환방법">
    //   <div><h1>교환방법</h1></div>
    //   </Tab>
    //   <Tab onClick={()=>{clickTab.setClickTab(2)}} eventKey="link3" title="환불정책">
    //   <div><h1>환불정책</h1></div>
    //   </Tab>
    //   <Tab onClick={()=>{clickTab.setClickTab(3)}} eventKey="link4" title="배송문의">
    //   <div><h1>배송문의</h1></div>
    //   </Tab>
    // </Tabs>


    )
}

export default Detail;