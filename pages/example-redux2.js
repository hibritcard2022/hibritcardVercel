import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { postRegister } from '../stores/registerSliceb';



function ExampleRedux() {

    const dispatch = useDispatch();
    const count = useSelector(state => state.registerSlice.value);


    return (
        <>

            <button onClick={() => dispatch(postRegister({
                eMail: "deneme2zza12@gmail.com",
                publicName: "deneme2zza12",
                publicSurname: "deneme2zza12surname",
                userHandleName: "deneme2zza12userHandle",
                password: "passwordzza12123",
                confirmPassword: "passwordzza12123"
            }))}>gonder</button>
        </>

    )
}


export default ExampleRedux