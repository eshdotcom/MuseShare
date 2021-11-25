import React, { Component } from 'react'
import './css/AboutUsPage.css'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

class AboutUsPage extends Component {

    // constructor

    // functions

    // render
    render() {
        return (
            <div>
                <Navbar />

                {/* Main header */}
                <div className="row">
                    <div className="col">
                        <h1 className="aboutus-main-header">About us</h1>
                    </div>
                </div>

                <h1 className="temp-header">This page is under construction.</h1>

                {/* <Footer /> */}
            </div>
        )
    }
}

export default AboutUsPage