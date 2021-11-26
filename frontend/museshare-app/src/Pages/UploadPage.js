import React, { Component } from 'react'
import './css/UploadPage.css'
import Navbar from '../Components/Navbar'
import UploadForm from '../Components/UploadForm'
import Footer from '../Components/Footer'

class UploadPage extends Component {

    // constructor

    // functions

    // render
    render() {
        return(
            <div>
                <Navbar />
                <div className="UploadPage container">
                    <div className="row UploadPage-row">

                        {/* COLUMN 1 */}
                        <div className="col UploadPage-col UploadPage-col1">

                            {/* TITLE OF COLUMN 1 */}
                            <div className="UploadPage-title">
                                <h1>About your upload</h1>
                            </div>

                            {/* INFORMATION IN COLUMN 1 */}
                            <div className="UploadPage-info">
                                <h3>Tell the community what your piece is about.</h3>
                                <p>
                                    Other artists can best contribute to your piece if they know the meaning behind it.
                                </p>
                            </div>
                            <div className="UploadPage-info">
                                <h3>Define your project's needs.</h3>
                                <p>
                                    Be specific when describing what you would like a collaborator to add to your
                                    project. List which instruments and vocals you need, as well as the style you
                                    look to preserve in your piece.
                                </p>
                            </div>
                        </div>

                        {/* COLUMN 2 */}
                        <UploadForm />

                    </div>  
                <Footer />
                </div>
            </div>
        )
    }
}
export default UploadPage