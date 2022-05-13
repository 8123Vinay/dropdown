import React,{useContext} from 'react'
import {appContext} from './Context.js'


export default function First() {
  const {choices, setPreferences,preferences}=useContext(appContext);
  const choicesLeft=choices.filter((choice)=>{
    return (preferences.second!==choice && preferences.third!==choice)
 })
  
  return (
   
    <div className="choiceField">
    
       {choicesLeft.map((choice,index)=>{
        
         return(
           <h3 key={index} onClick={(e)=>{

              setPreferences({...preferences, first:e.target.innerHTML})
              
           }} className="choice"  style={{background:(preferences.first==choice ? "yellow" : "gray") }}>{choice}</h3>
         )
      })}  
    </div>

  )
}
