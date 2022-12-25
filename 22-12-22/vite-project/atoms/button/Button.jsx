import './button.css'



export function Btn(props){
    const {
        className = '',
        children = '',
        as = '',
        ...attr
   } = props;
  

   return (
       <button className={`Button Button--variant-${as} ${className}`} {...attr}>Click me!</button>
   )
};

