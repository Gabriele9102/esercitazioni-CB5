import Footer from '../../components/footer/Footer.jsx';
import Navbar from '../../components/navbar/Navbar.jsx'
import './layoutWrapper.css';

const LayoutWrapper = ({children}) => {

    return(
        <div className='layoutWrapper'>
        <Navbar />
        {children}
        <Footer />
        </div>
    )
}

export default LayoutWrapper;