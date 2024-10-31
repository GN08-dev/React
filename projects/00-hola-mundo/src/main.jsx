//import React from 'react'
import ReactDOM from "react-dom/client"
import {App} from './app.jsx';
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <App />
)

//root.render('hola mundo')


//funcion con pascal case  apra crear botones 
// const Button = ({ text }) => {
//   return <button>{text}</button>;
// };
// root.render(
//   <React.Fragment>
//     <Button text='atuncito' />
//     <Button text='atuncito' />
//     <Button text='atuncito' />
//   </React.Fragment>
// )