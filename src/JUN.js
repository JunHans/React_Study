
import { useEffect } from 'react';
import '../src/App.css';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from '@mui/system';
import { NavLink, Link, Route, Routes } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import BjgoSwiperJUN from './BjgoSwiper_JUN';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';


function JUN() {
  var empdata;

  axios(
    {
      url: '/emp.ajax',
      method: 'get',
      data: {

      },

      baseURL: 'http://localhost:8090/kosa_responsebody',
      //withCredentials: true,
    }
  ).then(function (response) {

    empdata = response.data;
    console.log(empdata);


  });





  useEffect(() => {
    console.log("JUN")
  },);

  let burger = [{
    name: '상하이 버거',
    content: '매콤한 닭가슴살 패티와 토마토, 마요네즈 소스의 환상적 조화',
    img: 'https://www.mcdonalds.co.kr/upload/product/pcfile/1583728352960.png',
    url: 'https://www.mcdonalds.co.kr/kor/main.do'
  },
  {
    name: '빅맥',
    content: '상큼한 소스에 순쇠고기 패티 두장 치즈 양파까지.',
    img: 'https://www.mcdonalds.co.kr/upload/product/pcfile/1583727855319.png',
    url: 'https://www.mcdonalds.co.kr/kor/main.do'
  },
  {
    name: '쿼터파운드 치즈',
    content: '두툼한 소고기 패티에 짭잘한 치즈 두장, 생양파까지.',
    img: 'https://www.mcdonalds.co.kr/upload/product/pcfile/1583728200175.png',
    url: 'https://www.mcdonalds.co.kr/kor/main.do'
  },
  {
    name: '맥치킨 버거',
    content: '너겟처럼 부드러운 치킨 패티와 마요네즈 소스의 경이로운 진화.',
    img: 'https://www.mcdonalds.co.kr/upload/product/pcfile/1583730334543.png',
    url: 'https://www.mcdonalds.co.kr/kor/main.do'
  },
  ]

  return (
    <>

      <BjgoSwiperJUN />


      {/* {empdata.map((item, i)=>{
        return(
          <div>
            <p>{item.empno}</p>
          </div>
      )
      })} */}


      <h3 id='mach3'>JunHans</h3>
      <h1 id='mach1'>McDONALD's</h1>

      {/* 네비바 */}
      <Navbar bg="light" expand="lg">
        <Container>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home"><img id='logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/McDonald%27s_SVG_logo.svg/2095px-McDonald%27s_SVG_logo.svg.png'></img></Nav.Link>
              <Nav.Link href="https://www.mcdonalds.co.kr/kor/menu/list.do"><b className='logo1'>MENU</b></Nav.Link>
              <Nav.Link href="https://www.mcdonalds.co.kr/kor/story/intro/brandintro.do"><b className='logo1'>ABOUT</b></Nav.Link>
              <Nav.Link href="https://www.mcdonalds.co.kr/kor/store/rental.do"><b className='logo1'>CONTACT</b></Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>


      <h3 id='mach3'>- JunHans PICK!! -</h3>
      <Container>
        <div className='row'>



          {
            burger.map((item, i) => {
              return <Card className='burger col-sm-3' key={i}>
                <a href={item.url}>
                  <Card.Img variant="top" src={item.img} />
                </a>
                <Card.Body>

                  <Card.Title><b>{item.name}</b>&nbsp;&nbsp;</Card.Title>
                  <Card.Text>
                    {item.content}
                  </Card.Text>
                </Card.Body>
              </Card>


            })
          }
{/*           
            {empdata.map((item, i)=>{
              return(
                <div key={i}>
                  <p>{item.empno}</p>
                </div>
            )
            })}
           */}

          {/* <div>
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">제목</th>
                  <th scope="col">날짜</th>

                </tr>
              </thead>
              <tbody>
                <td>
                  {
                    empdata.map((item, i) => {
                      return <div figure={empdata[i]} i={i} key={i} >
                        <span>{empdata.empno}</span>
                      </div>

                    })
                  }
                </td>

              </tbody>
            </table>
          </div> */}
        </div>

      </Container>
    </>
  )
}
export default JUN;