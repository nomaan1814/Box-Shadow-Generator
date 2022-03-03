import React, { useState } from "react";
import './App.css';

const App = () => {
    const[hori,sethori]=useState(10);
    const[veri,setveri]=useState(10);
    const[blur,setblur]=useState(10);
    const[color,setcolor]=useState('black');
    const[checkon,setcheckon]=useState(false);
  return (
    <>
      <div className="App">
        <div className="controls">
            <label>Horizontal Length</label>
            <input type="range" min="-200" max="200" value={hori} onChange={(e)=>{sethori(e.target.value)}} />
            <label>Vertical Length</label>
            <input type="range" min="-200" max="200" value={veri} onChange={(e)=>{setveri(e.target.value)}} />
            <label>Blur</label>
            <input type="range" min="-200" max="200" value={blur} onChange={(e)=>{setblur(e.target.value)}} />
            <label>Color</label>
            <input type="color" min="-200" max="200" value={color} onChange={(e)=>{setcolor(e.target.value)}} />
            <div class="switch">
                <label>
                Outline
                <input type="checkbox" value={checkon} onChange={(e)=>{setcheckon(!checkon)}}/>
                <span class="lever"></span>
                  inset
                </label>
            </div>
        </div>
        <div className="output"> 
             <div className="box" style={{boxShadow:`${checkon?"inset":""} ${hori}px ${veri}px ${blur}px ${color}`}}>
                  <p>Box-Shadow:{checkon?" inset":""} {hori}px {veri}px {blur}px {color}</p>
             </div>
        </div>
      </div>
    </>
  );
};
export default App;
