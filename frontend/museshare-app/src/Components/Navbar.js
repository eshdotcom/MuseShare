import React, { Component } from 'react' 
import './css/Navbar.css'

class Navbar extends Component {

    // constructor

    // function

    // render
    render() {
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/"> <span id="nav-logo">MuseShare</span></a>
                    
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    
                    <div className="collapse navbar-collapse" id="navbarNav">
                        
                        <ul className="navbar-nav nav-list">
                            <li className="nav-item">
                                <a className="nav-link" href="/about-us">About us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/feed">Collaborate</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/upload">Upload</a>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        )
    }
}   

export default Navbar

