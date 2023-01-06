import './App.css';
import {useState} from "react";

// function alert(){
//   swal("Good job!", "You clicked the button!", "success");
// }

function App() {
let nickName="뚜뚜"
let [title, setTitle] = useState(["혜화 서커스", "강남 서커스", "홍대 서커스", "종로 서커스"]);
let [day,setDay] = useState(["12월 25일", "12월 26일", "12월27일", "12월28일"]);
let [flag, setFlag] = useState(false);
let [modal, setModal] = useState([false,false,false,false]);
let changeTitle = "수지 서커스";
// let [like, setLike] = useState(0);
let [count, setCount]= useState([0,0,0,0]);

function change(){
  let copy = [...title];
  // copy[0] = "수지 서커스";
  (copy[0] === "혜화 서커스") 
  ? (copy[0] = "수지 서커스") 
  : (copy[0] = "혜화 서커스")
  setTitle(copy);
}

function MyModal(props){
  return(
    <div>
      <b>상세정보</b>
      <p>▶ {props.title} / 
      날짜 : {props.day} / 
      좋아요 : {props.count}</p>
    </div>
  )
}

// function onoff(){
//   if(modal === false){
//     setModal(true);
//   }else{
//     setModal(false);
//   }
// }

function titleSort(){  //게시판 조회수순 정렬 활용
  let titleSort = [...title].sort();
  setTitle(titleSort);
  console.log(titleSort);
}

  return (
    <div className="App">
      {/* <div onClick={()=>{setCount(count + 1);
                          console.log(count)}}>안녕</div> */}
      <header className = "">
      <div className="nav"> 버섯 서커스단 예약 사이트</div>
      <p>{nickName} 님 버섯 서커스에 오신 것을 환영합니다</p>
      <a href="https://www.naver.com/" rel="nooper noreferrer" target="blank">예약하러 가기</a>
      </header>
      <br></br>
      
      {title.map((element, i)=>{
        return( //return은 화면에 보이게 한다는 것
        // JAVA의 id값과 비슷하게 식별가능한 고유한 값을 부여
          <div className="list" key={i}>  
              <h3><span onClick={()=>{let modal1 = [...modal]; 
                if(modal[i] === false){
                  modal1[i] = true
                  setModal(modal1);
                  
                }else{
                  modal1[i] = false
                  setModal(modal1);
                }}}>{element}</span>      

              <span onClick={()=>{let countCnt = [...count];  //count배열 그자체를 countCnt에 집어넣음
              countCnt[i]++;       //count의 i번째 배열에 +1씩 더해준다//countCnt는 count배열임
              setCount(countCnt);  //위에서 1씩 더해준 값으로 Count를 set해준다
              }}
              >
                👍
              </span>
              {/*위에서 set한걸 출력 해주고 */}
              {count[i]}
              </h3>
              <p>{day[i]}</p>
              
              {
                modal[i] === true
                ? <MyModal title= {title[i]} count = {count[i]} day = {day[i]}/>
                : null
              }
          </div>
        )
      })}
      <br />
      <button type="button" className="btn btn-success" onClick={change}>Title Change</button>&nbsp;&nbsp;
      <button type="button" className="btn btn-warning" onClick={titleSort}>Title Sort</button>
      {
        modal === true
        ? <MyModal title= {title} count = {count} day={day}/>
        : null
      }
        
      

      {/* <div className="list">
        <h4>{title[0]} <button onClick={()=>{setCount(count[0] + 1);
                          }}> 👍 </button>{count[0]} </h4>
          <p>3월 6일 공연일</p>
      </div>

      <div className="list">
        <h4>{title[1]} <button onClick={()=>{setCount(count[1] + 1);
                          }}> 👍 </button>{count[1]} </h4>
          <p>3월 6일 공연일</p>
      </div>

      <div className="list">
        <h4>{title[2]} <button onClick={()=>{setCount(count[2] + 1);
                          }}> 👍 </button>{count[2]} </h4>
          <p>3월 6일 공연일</p>
      </div>

      <div className="list">
        <h4>{title[3]} <button onClick={()=>{setCount(count[3] + 1);
                          }}> 👍 </button>{count[3]} </h4>
          <p>3월 6일 공연일</p>
      </div> */}
      
    </div>
  );
}

export default App;
