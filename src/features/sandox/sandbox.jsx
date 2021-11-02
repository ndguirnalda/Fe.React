import React from 'react';
export default function Sandbox(){

    const data = useSelector(state => state.data());
    
    return(
        <>
            <h1>Lorem Ipsum </h1>
            <h2>Data is : {data}</h2>
            {/* <Button onClick=({() => dispatch()}) content="Increment" color="Green"/>
            <Button onClick=({() => dispatch()}) content="Decrement" color="Red"/> */}
        </>
    )

}