import './navbar.css'

const Navbar = () => {

    return (
        <div className="navbar">
            <img src="https://img.freepik.com/premium-vector/robot-icon-chat-bot-sign-support-service-concept-chatbot-character-flat-style_41737-795.jpg?w=740" alt="LOGO" />
            <ul>
                <li>
                <a href="#Home">HOME</a>
                </li>

                <li>
                <a href="#About">ABOUT</a>
                </li>

                <li>
                <a href="#Contacts">CONTACTS</a>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;