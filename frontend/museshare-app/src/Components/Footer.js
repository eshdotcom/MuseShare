import React, { Component } from 'react'
import './css/Footer.css'

class Footer extends Component {

    render() {
        return(
            <footer>
                <div class="row footer-row">
                    <div class="col footer-col" id="footer-col">
                        <h2 class="footer-header">Plan to use MuseShare? Create a free account.</h2>
                        <form>
                            <input id="footer-input-box" type="text" placeholder="email@domain.com" name="email" />
                            <br />
                            <button id="subscribe-btn" class="btn btn-dark">
                                <span id="subscribe-btn-text">Create account &gt;</span>
                            </button>
                        </form>
                    </div>
                </div>
            </footer>
        )
    }   
}

export default Footer;