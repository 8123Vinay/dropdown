import React,{useContext} from 'react'
import {appContext} from './Context.js'


export default function Second() {
  const {choices, setPreferences,preferences}=useContext(appContext);


  const choicesLeft=choices.filter((choice)=>{
    return (preferences.first!==choice && preferences.second!==choice)
  })
  
  return (
    <div  className="choiceField">
      {choicesLeft.map((choice,index)=>{
        return(
          <h3 key={index} onClick={(e)=>{
            
           setPreferences({...preferences, third:e.target.innerHTML})
        }} className="choice" style={{background:(preferences.third==choice ? "yellow" : "gray") }}>{choice}</h3>
        )
      })}  
    </div>
  )
}




