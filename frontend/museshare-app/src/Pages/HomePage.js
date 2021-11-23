import React, { Component } from 'react'
// import './css/HomePage.css'

class HomePage extends Component {

    // constructor

    // functions

    // render
    render() {
        return(
            
            <div className="HomePage">
                <div className="HomePage-container">
                    
                    {/* Intro */}
                    <div class="row home-intro-row">
                        
                        {/* Left column (Welcome to MuseShare) */}
                        <div class="col home-intro-col" id="home-intro-col-left">
                            <p class="home-intro-p" id="home-intro-p-left">
                                Welcome to<br /><span id="bridge-word">MuseShare.</span>
                            </p>
                        </div>

                        {/* Right column (Intro statement) */}
                        <div class="col home-intro-col" id="home-intro-col-right">
                            <p class="home-intro-p" id="home-intro-p-right">
                                Find a collaborator for your next piece — all through one straightforward, open-source
                                platform. <br />

                                <a class="btn btn-light" id="home-intro-btn" href="/creator-zone" role="button">
                                    <span>
                                    Upload your work &#62;
                                    </span>
                                </a>
                            </p>
                        </div>
                    </div>

                    {/* Info header */}
                    <div class="container home-info-header-container">
                        <div class="row home-info-header-row">
                            <h2>How does MuseShare function?</h2>
                        </div>
                    </div>
                </div>

                {/* Info header */}
                <div class="container home-info-container">
                    <div class="row home-info-row">
                        {/* Left column (UPLOAD) */}
                        <div class="col home-info-col" id="home-info-col-left">
                            <h1 class="home-info-number">1</h1>
                            <p class="home-info-p">
                                Upload your sample to MuseShare in the <span class="home-info-emphasis">Creator Zone</span>. In the description, 
                                tell the MuseShare community what your piece is about, and most importantly, what you are looking for a collaborator 
                                to add to your piece. 
                            </p>
                            <hr />
                            <p class="home-info-p home-info-footer">
                                <a class="btn btn-dark home-info-btn" href="/creator-zone" role="button"><span class="home-info-btn-txt"> 
                                    Upload your sample &#62;
                                </span></a>
                            </p>
                        </div>
                        {/* Right column (FIND) */}
                        <div class="col home-info-col" id="home-info-col-right">
                            <h1 class="home-info-number">2</h1>
                            <p class="home-info-p">
                                Search for tracks to hop on. Use the <span class="home-info-emphasis">Collaborator Page</span> to find a sample you'd like
                                to contribute to. Download the file, add your piece, then submit the completed piece back to the creator.
                            </p>
                            <hr />
                            <p class="home-info-p home-info-footer">
                                <a class="btn btn-dark home-info-btn" href="/collaborator-page" role="button"><span class="home-info-btn-txt"> 
                                    Find a project &#62;
                                </span></a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomePage