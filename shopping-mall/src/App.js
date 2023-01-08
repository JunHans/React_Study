import './App.css';
import './css/main.css'
import { data } from './data.js'
import Detail from './components/Detail.js'
import Cart from './components/Cart.js'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React, { useState } from 'react';
import { Outlet, Route, Routes, useNavigate } from 'react-router-dom';
import axios from 'axios';



export let StockContext = React.createContext();  // 1. 컨텍스트 만든다 (어디서든 사용할 수 있게 전역으로 선언하려고 export 써준다)


function App() {
  let [figure, setFigure] = useState(data);  //HOOK
  let [stock] = useState([7, 13, 20]);      //재고 - Context API
  let navigate = useNavigate();

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand onClick={() => { navigate(`/`) }}><b>Pinga Mall</b></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link onClick={() => { navigate(`/`) }}>Home</Nav.Link>
              <Nav.Link onClick={() => { navigate(`/detail/1`) }}>detail</Nav.Link>
              <Nav.Link onClick={() => { navigate(`/cart`) }}>cart</Nav.Link>
              <Nav.Link onClick={() => { navigate(`/event`) }}>Event</Nav.Link>
              <NavDropdown title="핑가주식회사 정보" id="navbarScrollingDropdown">
                <NavDropdown.Item onClick={() => { navigate(`/about`) }}>About</NavDropdown.Item>
                <NavDropdown.Item onClick={() => { navigate(`/`) }}>오시는 길</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={() => { navigate(`/`) }}><small>Something else here</small></NavDropdown.Item>
              </NavDropdown>
              {/* <Nav.Link href="#" disabled>
                Link
              </Nav.Link> */}
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="jumbotron" id="back">
        <img id="pic" src='https://static.ebs.co.kr/images/bhp/pingu/images/2012/12/17/0/58/30/f5646512-a418-452b-b68b-e728c6404135.jpg' className="App-logo" alt="pinga"></img>
        <h1 className="display-4">Pinga Mall</h1>
        <p className="lead">Welcome to Pinga Mall</p>
        {/* <hr className="my-4" /> */}
        {/* <p>Best Pinga & Pingu Store</p>
          <a className="btn btn-primary btn-lg" href="#" role="button">BEST 10</a> */}
      </div>






      <Routes>
        <Route path='/' element={
          <div className="container">
            <div className='row'>
              {
                figure.map((item, i) => {
                  return <Card figure={figure[i]} i={i} key={i} />
                })
              }
            </div>
          </div>
        } />






        <Route path='/cart' element={<Cart />} />
        <Route path='/detail/:id' element={

          <StockContext.Provider value={stock}>
            <Detail figure={figure} />
          </StockContext.Provider>

        } />

        {/* 중첩 라우터 */}
        <Route path='/about' element={<About />}>
          <Route path='emp' element={<div>직원은 핑가</div>} />
          <Route path='location' element={<div>혜화 이글루</div>} />
          <Route path='1' element={<div><button>구매하기</button>
            <img src="https://i.ebayimg.com/images/g/V1gAAOSwcDZhcqlT/s-l500.jpg"></img></div>} />
        </Route>

        <Route path='/event' element={<Event />}>
          <Route path='one' element={<div>첫 주문은 1+1 입니다</div>} />
          <Route path='two' element={<div>포인트 10,000점 드립니다</div>} />
        </Route>

        <Route path='*' element={<h1>없는 페이지 입니다<br />404</h1>} />

      </Routes>

      <button className='btn btn-primary' onClick={() => {
        axios.get('https://raw.githubusercontent.com/ai-zedu-pro/busan/main/data2.json')
          .then((result) => {
            let newFigure = [...figure, ...result.data]
            setFigure(newFigure);
          })
          .catch((result) => { console.log('data fail') })
      }}>더보기</button>

      {/* <button onClick={()=>{   //JSON --> object/array 자동으로 변환 못한다. 직접 변환해줘야 한다.
        fetch('url').then(res=> res.json()).then((result)=>{console.log(result);})
      }}>fetch()</button> */}

      {/* <button className='btn btn-primary' onClick={()=>{
        axios.post('URL', {name:'junhan'}).then().catch();

        Promise.all([axios.get('URL1'), axios('URL2')]).then(1).then(2).catch();
      }}
      >추가</button> */}


    </div>
  );
}




function About() {
  return (
    <>
      <h1>About Page</h1>
      <p>상품 정보</p>
      <Outlet></Outlet>
      {/* 이 위치에 중첩 라우터 한 거 보여준다 */}
    </>
  )
}

function Event() {
  return (
    <>
      <h1>Event Page</h1>
      <p>이벤트 정보</p>
      <Outlet></Outlet>
      {/* 이 위치에 중첩 라우터 한 거 보여준다 */}
    </>
  )
}




// '문자'+변수+'문자'  ==> `문자 ${변수} 문자`
// function Card({shrits}) {
function Card({ figure }) {
  let navigate = useNavigate();
  return (

    <div className='col-md-4'>
      {/* <img src={"https://raw.githubusercontent.com/ai-edu-pro/busan/main/t" + (props.i) + ".jpg"} width='100%'/> */}
      {/* <a href={figure.link}><img className='price' src={figure.images} alt="1" /></a> */}
      <img className='price' onClick={() => {
        navigate(`/detail/${figure.id}`) //경로를 지정할 수 있는 함수
      }} src={figure.images} alt="1" />
      <h4 onClick={() => { navigate(`/detail/${figure.id}`) }}>{figure.title}</h4>
      <p>{figure.content}</p>
      <p>{figure.price + "원"}</p>
      {/* <Button>주문하기</Button> 대문자로 태그  하면 디자인이 먹힘*/}
      {/* <button className="btn btn-primary btn-sm" onClick={()=>{
          navigate('/detail') //경로를 지정할 수 있는 함수
      }}>주문하기</button> */}
    </div>

  )
}


export default App;
