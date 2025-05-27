import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return(
    <div style={{background:"#dfe6e9",height:"100vh"}}>
      <div style={{display:"flex",justifyContent:"center"}}>
      <PostComponent></PostComponent>
      </div>
    </div>
  )
}

const style={width:200,padding:20,backgroundColor:"white",borderRadius:10,borderColor:"grey",borderWidth:1,}


function PostComponent(){
    return<div style={style}> 
      <div style={{display:"flex"}}>
      
          <img src={"https://appx-wsb-gcp-mcdn.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg"} style={{height:30,width:30,borderRadius:20}}></img>

              <div style={{fontSize:10,marginLeft:10}}>
                  <b>
                    100xDevs
                  </b>
                  <div>28000 Followers</div>
                  <div>12m</div>
              </div>
      </div>

      <div style={{fontSize:12}}>
          Want to know how to win big??Check out how these guys won $6000 in bounties.
      </div>
  </div>
}



export default App
