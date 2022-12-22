import "./buttons.css";



export function Btn(){
   const print =() => console.log('Hello World!');
  

   return (
       <button className="Btn" onClick={print}>Click me!</button>
   )
};


