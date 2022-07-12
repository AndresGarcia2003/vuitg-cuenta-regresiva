import React from 'react'
import { CountdownTimer } from './countdownTimer';
import { useCssHandles } from "vtex.css-handles";
import './App.css'

export const CuentaRegresiva = () => {
  const CSS_HANDLES = [
    "App"
  ]
  const handles = useCssHandles(CSS_HANDLES)
  return (
    <div className={handles["App"]}>
        <div>
            <CountdownTimer hours={15} minutes={20} seconds={40}/>
        </div>
    </div>
  )
}





