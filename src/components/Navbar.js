import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/nza-logo.jpg'
import { useAuth } from '../context/AuthContext'
import { ServiceContext} from '../context/ServiceContext'

export const Navbar = () => {
    const { currentUser, signIn, logOut } = useAuth();

    const { setSearch } = useContext(ServiceContext)
    

    function handleClick() {
        setSearch([])
    }


    const handleLogin = () => {
        // alert('it works');
        signIn();
    }

    const handleLogout = () => {
        logOut();
    }
    
    return (
        <React.Fragment>
            <div className="contianer">
                <div className="row">
                    {
                        !currentUser.loggedIn
                            ?
                        <Link to="." onClick={handleLogin, handleClick} className="btn btn-secondary  btn-lg btn-block col-1 offset-8 fixed-top">
                            Login
                        </Link>
                            :
                        <Link to="." onClick={handleLogout, handleClick} className="btn btn-secondary  btn-lg btn-block col-1 offset-8 fixed-top">
                            Logout
                        </Link> 
                    }
                    <br />

                    <div className="col-2">
                        <Link to="/" onClick={handleClick}>
                            <img className="img-fluid float-left m-5" src={logo} alt="Logo-image" />
                        </Link>
                    </div>
                    <h1 className="m-5 float-left">Nielsen, Zehe <br /> & Antas, P.C</h1>
                    {
                        !currentUser.loggedIn
                            ?
                        <div></div>
                            :
                            <h5 className="m-5 float-left">Welcome {currentUser.name}! </h5>
                    }
                    
                </div>
                
            </div>


            <div className="container">
                
                <ul id="top-nav" className="nav justify-content-center">
                    <li className="nav-item">
                        <Link className="nav-link active" to="/who-we-are" onClick={handleClick}>WHO WE ARE</Link>
                    </li>
                    <li><span>&#65372;</span></li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/what-we-do" onClick={handleClick}>WHAT WE DO</Link>
                    </li>
                    <li><span>&#65372;</span></li>
                    <li className="nav-item">
                        <a className="nav-link" href="#" onClick={handleClick}>NEWS & EVENTS</a>
                    </li>
                    <li><span>&#65372;</span></li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/where-we-work" onClick={handleClick}>WHERE WE WORK</Link>
                    </li>
                    <li><span>&#65372;</span></li>
                    <li id="last-one" className="nav-item">
                        <Link className="nav-link" to="/contact-us" onClick={handleClick}>CONTACT US</Link>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    )
}
