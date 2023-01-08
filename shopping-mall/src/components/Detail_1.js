import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

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

function Detail({figure}){
    let {id} = useParams();  //HOOK id값 파라미터 받아옴
    console.log( typeof figure);
    let findId = figure.find((item) => item.id == id);  //id가 맞는지 확인 하고 data.js 배열의 한 인덱스의 값들을 담고있음
    console.log(findId);
    let navigate = useNavigate();
    return(
        <>
        <Box>
            {/* <ColorBtn bg="yellow">Detail Page</ColorBtn> */}
            <ColorBtn bg="black"><b>Detail Page</b></ColorBtn>
        </Box>
          <div className='col-md-4'>
      {/* <img src={"https://raw.githubusercontent.com/ai-edu-pro/busan/main/t" + (props.i) + ".jpg"} width='100%'/> */}
      <a href={figure.link}><img className='price' src={findId.images} alt="1" /></a>
      <h4>{findId.title}</h4>
      <p>{findId.content}</p>
      <p>{findId.price + "원"}</p>

      <button className="btn btn-success btn-sm" onClick={()=>{ navigate('/cart')}}>주문하기</button> &nbsp;
      <button className="btn btn-warning btn-sm" onClick={()=>{ navigate('/cart')}}>장바구니</button> &nbsp;
      <button className="btn btn-danger btn-sm" onClick={()=>{ navigate(-1)}}>뒤로가기</button> &nbsp;
    </div>

        </>
    )
}

export default Detail;