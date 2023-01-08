import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { changeCount, changeName } from './../store';

function Cart(){

    let value = useSelector((state)=>{
        return state //user라는 특정 값만 가져온다, 그냥 state쓰면 다 가져옴
    })
    console.log(value);
    let dispatch = useDispatch();  //actions에 있는 것들을 호출해주는 놈

    return(
        <>
            <h1>{value.user}님의 Cart Page</h1>
            <button className='btn btn-primary btn-sm' onClick={()=>{dispatch(changeName())}}>이름 바꾸기</button>

    <Table striped>
      <thead>
        <tr>
          <th>No.</th>
          <th>상품명</th>
          <th>가격</th>
          <th>수량</th>
        </tr>
      </thead>
      <tbody>
        {value.cart.map((item, i)=> 
            <tr>
            <td>{item.id+1}</td>
            <td>{item.title}</td>
            <td>{item.price}</td>
            <td>{item.count}</td>
            <button className="btn-sm btn-dark" onClick={()=>{dispatch(changeCount([i,1]))}}>+</button>&nbsp;
                                <button className="btn-sm btn-dark" onClick={()=>{dispatch(changeCount([i,-1]))}}>-</button>
          </tr>
        )}
        {/* <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr> */}
      </tbody>
    </Table>


        </>
    )
}

export default Cart;