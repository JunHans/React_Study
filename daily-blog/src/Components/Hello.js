import * as React from 'react'

function Hello(props){  //여기 파라미터에props써서 변수 사용할 수 있게 해준다
    return (
            <div>
                <h1>{props.str}</h1>
                <h2>Hello Component.</h2>
                <div>{props.kbs}</div>
            </div>

            // <>
            
            // </>
            // <React.Fragment>
            
            // </React.Fragment>

        // 태그는 하나만
    )
}

export default Hello;
