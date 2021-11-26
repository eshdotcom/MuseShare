import React, { Component } from 'react'
import './css/FeedPage.css'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import data from '../data/data'

class CollaboratePage extends Component {

    // constructor
    constructor(props) {
        super(props);
        this.state = {
            tagSelected: false
        }
    }

    // functions

    // render
    render() {

        // if a tag has not been selected, show intro screen
        // if(!this.state.tagSelected) {
        //     <p className="feed-intro-p">
        //         Welcome to the MuseShare Collaborator Page. <br />
        //         Click a tag in the menu to explore projects uploaded by creators.
        //     </p> 
        // }

        return (
            <div>
                <Navbar />
                {/* Main header */}
                <div className="row">
                    <h1 className="feed-main-header sticky">Collaborator Page</h1>
                </div>

                {/* Main content */}
                <div className="row feed-main-row">

                    {/* Column 1 (vertical menu) */}
                    <div className="col-2 feed-menu-col">
                        <nav className="navbar">
                            <ul className="navbar-nav">
                                {/* populate vertical menu */}
                            </ul>
                        </nav>
                    </div>

                    {/* Column 2 (posts) */}
                    <div className="col-10 feed-content-col">
                        <div className="container empty-cards-container">
                    
                            {/* Each topic adds cards here */}
                            <p className="feed-intro-p">
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