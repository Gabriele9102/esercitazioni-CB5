import './main.scss'
import { Text } from './../../atoms/text/Text';
import { Btn } from './../../atoms/button/Button';


export const Main = () => {
    return(
        <main className='hero'>
            <Text as='h2'
                variant = 'title'>
                Choose the button:
            </Text>
            <div className="btnDiv">

                <Btn as='first'
                    onClick={()=> console.log('one point for you!')} 
                    className='First'></Btn>
                
                <Btn as='second'
                    onClick={()=> console.log('Hello world!')}
                    className='Second'></Btn>
            </div>
        </main>
    )
}