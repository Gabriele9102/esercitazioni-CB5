import "./buttons_fake.css";


export function Btn2(){
   const print2 =() => console.log('You made it!');
  

   return (
       <button className="Btn2" onClick={print2}>Click me!</button>
   )
};
