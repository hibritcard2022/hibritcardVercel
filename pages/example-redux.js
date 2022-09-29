import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPosts } from '../stores/postsSlice';
import { increment, decrement, incrementByAmount } from '../stores/counterSlice';



function ExampleRedux() {

    const dispatch = useDispatch();
    const count = useSelector(state => state.counterSlice.value);
    const apiStatus = useSelector(state => state.postsSlice.status);
    const apiList = useSelector(state => state.postsSlice.list);

    useEffect(() => {

        dispatch(getPosts());

    }, []);

    return (
        <>

            {apiStatus == "success" ? apiList.map((x, i) => <div key={i}>{x.title}</div>) : "Yükleniyor"}
            <div>{count}</div>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
            <button onClick={() => dispatch(incrementByAmount(5))}>-</button>

        </>

    )
}


export default ExampleRedux