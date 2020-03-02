import React from 'react'

const style={
    controls:{
        position:'absolute',
        left:0,
        top:100,
        width:'100%',
        display:'flex',
        justifyContent:'flex-end',
        backgroundColor:'yellow',
      
    }
}
export default function Controls(){

    return (<div style={style.controls}>
        
        <div>Recomended Size:</div>
        <div>Frame Rate:</div>
    </div>)
}