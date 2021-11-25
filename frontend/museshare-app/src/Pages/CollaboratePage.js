import React, { Component } from 'react'
import './css/CollaboratePage.css'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

class CollaboratePage extends Component {

    // constructor
        // use state to store all needed values for Post.js components

    // functions

    // render
    render() {
        return (
            <div>
                <Navbar />
                {/* Main header */}
                <div className="row">
                    <div className="col">
                        <h1 className="blog-main-header">Collaborator Page</h1>
                    </div>
                </div>

                {/* Main content */}
                <div className="row blog-main-row">

                    {/* Column 1 (vertical menu) */}
                    <div className="col-2 blog-menu-col">
                        <nav className="navbar">
                            <ul className="navbar-nav">
                                {/* populate vertical menu */}
                            </ul>
                        </nav>
                    </div>

                    {/* Column 2 (posts) */}
                    <div className="col-10 blog-content-col">
                        <div className="container empty-cards-container">
                            {/* Each topic adds cards here */}
                            <p className="blog-intro-p">
                                Welcome to the MuseShare Collaborator Page. <br />
                                Click a tag in the menu to explore projects uploaded by creators.
                            </p> 
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default CollaboratePage