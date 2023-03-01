import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import  './App.css';
import App, { ICHSUCalendare } from './Calendare';
import reportWebVitals from './reportWebVitals';




export {default as CHSUCalendare} from './Calendare';
Object.defineProperty(global,'buildCalendare',{
  value:(placeId:string,sett?:ICHSUCalendare[]|ICHSUCalendare)=>{
    const root = ReactDOM.createRoot(
      document.getElementById(placeId) as HTMLElement
    );
    if(sett){
      const arr= sett as ICHSUCalendare[];
      if(arr.length){
        root.render(
          <React.StrictMode>
            {arr.map((e, i)=>{
              return (
                <App {...e} key={(e.StartDay??"FirstDayMonth")+"_"+i}/>
              );
            })}
          </React.StrictMode>
        );
      }else{
        const cs= sett as ICHSUCalendare;
        root.render(
          <React.StrictMode>
            <App {...cs}/>
          </React.StrictMode>
        );
      }
    }else{
      root.render(
        <React.StrictMode>
          <App />
        </React.StrictMode>
      );
    }
    
  }
})

Object.defineProperty(global,'TestCalendareElement',{value:(i:number)=>{
  return (<span>_{i}_</span>);
}})
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
