import React, { useEffect } from 'react'
import {useState,useRef} from 'react'
import paper from "../images/icon-paper.svg"
import scissor from "../images/icon-scissors.svg"
import rock from "../images/icon-rock.svg"
import rules from "../images/image-rules.svg"
import close from "../images/close.png"
const Mainbody = ({setScore}) => {
    const [clicked,setClicked]=useState(false)
    const [userPlay,setUserPlay]=useState("")
    const[rulesPage,setRulesPage]=useState("close")
    const [result,setResult]=useState("")
    const [computerPlay,setComputerPlay]=useState("")
    const [count,setCount]=useState(0)
    const [completeUpdate,setCompleteUpdate]=useState(false) 
    const random=()=>{
        const arr=[rock,paper,scissor]
        const arr1=["rock","paper","scissor"]

        const bordercolor=["hsl(349, 70%, 56%)","hsl(230, 89%, 65%)","hsl(40, 84%, 53%)"]
        if(clicked && document.querySelector(".housepicked img")==null){
            setTimeout(()=>{
                const index=Math.floor(Math.random()*arr.length)
                setComputerPlay(arr1[index])
                const element=document.querySelector(".housepicked")
                const img=document.createElement("img")
                img.src=arr[index]
                img.classList.add("actions")
                img.style.borderColor=bordercolor[index]
                element.appendChild(img)
                element.style.opacity=1
                // decision()
            },1000)
            
        }
    }
    const decision=()=>{
        if(computerPlay){
            if(computerPlay===userPlay){
                setResult("It's a DRAW")
                }
            else if((computerPlay==="paper"&&userPlay=="rock")||(computerPlay==="rock"&&userPlay=="scissor")||(computerPlay==="scissor"&&userPlay=="paper")){

                setCount(()=>{setScore(count-1);return count-1})
                
                setCompleteUpdate(true)
                }
            else{
                setCount(()=>{setScore(count+1);return count+1})
                setCompleteUpdate(true)
                }
        }
        
    }
    useEffect(()=>{
        if(computerPlay){
            decision()
        }
    },[computerPlay])
    useEffect(()=>{
        if(clicked){
            random()
        }
    },[clicked])
    useEffect(()=>{
        if(completeUpdate){
            console.log(count)
            if((computerPlay==="paper"&&userPlay=="rock")||(computerPlay==="rock"&&userPlay=="scissor")||(computerPlay==="scissor"&&userPlay=="paper")){
                setResult("YOU LOSE")
                setCompleteUpdate(false)
            }
            else{
                setResult("YOU WIN")
                setCompleteUpdate(false)
            }
        }
    },[completeUpdate,computerPlay,userPlay,count])
  return (
    <>
        <div className=" w-screen flex flex-col justify-center items-center">
            {rulesPage=="open" &&
                <div className="absolute flex justify-center items-center rules-background  top-0 w-screen h-screen z-20 ">
                    <div className="lg:w-1/4 w-3/4 h-1/2 relative rounded-lg bg-white flex justify-center items-center">
                        <div className="absolute  top-0 pt-5 z-10 font-bold right-0 " >
                            <button onClick={()=>{setRulesPage("close")}} className="text-black"><img src={close} alt="" style={{width:50+"%"}}/></button>
                        </div>
                        <h1 className=" absolute top-0 left-0 p-5 text-start text-2xl font-medium text-slate-600 z-10 ">RULES</h1>
                        <div className="  absolute flex flex-col  justify-end items-center h-5/6 ">
                            <img src={rules} className='w-64 ' alt="" />
                        </div>
                    </div>
                </div>
            }
            {!clicked &&
                    <div className=" w-3/4 mainbody">
                        <div className="flex items-center justify-center gap-20 w-full h-2/4">
                            <div className=" rounded-full" style={{backgroundColor:"hsl(230, 69%, 40%)"}}>
                                <button onClick={()=>{setClicked(true);setUserPlay("paper");random()}}><img src={paper}  className="actions "alt=""  style={{borderColor:"hsl(230, 89%, 62%)"}}/></button>
                            </div>
                            <div className="rounded-full" style={{backgroundColor:"hsl(40, 64%, 33%)"}}>
                                <button onClick={()=>{setClicked(true);setUserPlay("scissor");random()}}><img src={scissor} className="actions"alt=""  style={{borderColor:"hsl(39, 89%, 49%)"}}/></button>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <div className="rounded-full" style={{backgroundColor:"hsl(349, 50%, 36%)"}}>
                                <button onClick={()=>{setClicked(true);setUserPlay("rock");random()}}><img src={rock} className="actions"alt=""  style={{borderColor:"hsl(349, 70%, 56%)"}}/></button>
                            </div>
                            
                        </div>
                    </div>
                
            }
            {clicked &&
                <div className=" justify-between w-full px-10   step2main">
                    <div className="flex   justify-center gap-20 items-center h-60 lg:h-80">
                        {userPlay=="rock" &&
                            <div className="flex  flex-col justify-between h-44 lg:h-64" >

                                <img src={rock} className="actions" style={{borderColor:"hsl(349, 70%, 56%)"}} alt="" />
                                <h1 className="text-center font-semibold lg:order-first text-white ">YOU PICKED</h1>
                            </div>
                        }
                        {userPlay=="paper" &&
                            <div className="flex  flex-col justify-between h-44 lg:h-64 rounded-full" >
                                    <img src={paper} className="actions" style={{borderColor:"hsl(230, 89%, 65%)"}} alt="" />
                                    <h1 className="text-center font-semibold lg:order-first text-white ">YOU PICKED</h1>                                
                            </div>
                        }
                        {userPlay=="scissor" &&
                            <div className="flex  flex-col justify-between h-44 lg:h-64">
                                <img src={scissor} className="actions" style={{borderColor:"hsl(39, 89%, 49%)"}} alt="" />
                                <h1 className="text-center font-semibold lg:order-first text-white ">YOU PICKED</h1>
                            </div>
                        }
                        {result &&
                        <div className="hidden rpcresult  lg:block">
                            <div className="flex flex-col rpcresult  items-center justify-center">
                                <h1 className="text-center py-2  text-white font-semibold" style={{fontSize:2.75+"rem"}}>{result}</h1>
                                <button className="border px-12 py-2 text-md text-black bg-white rounded-lg font-medium" onClick={()=>{setClicked(false);setComputerPlay("");setResult("")}}>PLAY AGAIN</button>
                            </div>
                        </div>
                    }
                        
                        <div className="flex flex-col justify-between items-center h-44 lg:h-64">
                            <div className="opacity-20 bg-black housepicked   lg:w-48 lg:h-48 rounded-full">
                                {/* <img src={computerPlay} className='actions' alt="" style={{borderColor:"hsl(349, 70%, 56%)"}} /> */}
                            </div>
                            <h1 className="text-center lg:order-first font-semibold  text-white">THE HOUSE PICKED</h1>
                        </div>
                    </div>
                    {result &&
                        
                            <div className="lg:hidden">
                                <div className="flex flex-col items-center justify-center">
                                    <h1 className="text-center py-2 resulttext text-white font-semibold" style={{fontSize:2.75+"rem"}}>{result}</h1>
                                    <button className="border px-12 py-2 text-md resultbutton text-black bg-white rounded-lg font-medium" onClick={()=>{setClicked(false);setComputerPlay("");setResult("")}}>PLAY AGAIN</button>
                                </div>
                            </div>
                        
                    }
                    
                    
                </div>
            }
            <div className="flex justify-center lg:justify-end lg:pr-10 z-10 w-full">
                <button className="border-white border-2 px-10 py-1 rounded-lg text-white" onClick={()=>{setRulesPage("open")}}>RULES</button>
            </div>
        </div>
    </>
  )
}

export default Mainbody