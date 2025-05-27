import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return(
    <div>
      <PostComponent></PostComponent>

    </div>
  )
}

const style={width:200,backgroundColor:"black",borderRadius:10,borderColor:"grey",borderWidth:1}


function PostComponent(){
    return <div style={style}>
      <img src={"https://appx-wsb-gcp-mcdn.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg"} style={{height:200,width:200,borderRadius:20}}></img>
    </div>


}



export default App
