import React, { Component } from 'react'
// import axios from 'axios';
import './css/UploadForm.css'

class UploadForm extends Component {

    // constructor
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            projectName: "",
            selectedFile: null,
            formData: null,
            projectDescription: "",
            isPublished: false,
            needs: "",
            genres: []
        }
        // bindings
        this.handleChange = this.handleChange.bind(this)
        this.handleFileChange = this.handleFileChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    // FUNCTIONS

    // On input change
    handleChange(evt) {
        // update the state
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }
    
    // when file is selected
    handleFileChange(evt) {
        // Update the state
        this.setState({ 
            selectedFile: evt.target.files[0] 
        });
        // TEST
        console.log(evt.target.files[0])
      
    };

    // when submit button is clicked
    handleSubmit(evt) {
        evt.preventDefault();

        // "UPLOAD" THE FILE
        // create an object of formData, 
        // TODO: populate formData with form's 'name's and 'value's, using contructor
        const formData = new FormData();
        
        // TODO: manually append 'selectedFile' due to form's weirdness about file 'value' property
        // (name, value, fileName)
        formData.append(
            "selectedFile", this.state.selectedFile, this.state.selectedFile.name
        );
            
        // // Make POST request to the backend api, and send FORMDATA object
        // Method 1
        // axios.post("http://127.0.0.1:8000/uploadproject", formData);

        // Method 2
        // try {
        //     // make axios post request
        //     const response = await axios({
        //       method: "post",
        //       url: "http://127.0.0.1:8000/uploadproject",
        //       data: formData,
        //       headers: {},
        //     });
        //   } catch(error) {
        //     console.log(error)
        //   }

        // TESTING / LOGGING
        console.log(this.state)
        for (let key of formData.entries()) {
            console.log(key[0], ',', key[1]);
        }
        console.log("Done.")

        // reset input fields (not needed once routing is in place)
        this.setState({
            firstName: "",
            lastName: "",
            projectName: "",
            selectedFile: null,
            projectDescription: "",
            isPublished: false,
            needs: "",
            genres: []
        })
    }

    // render
    render() {
        return(

            <div className="col UploadForm-col UploadForm-col2">
                
                {/* TITLE OF COLUMN 2 OF UploadPage.js */}
                <div className="UploadForm-title">
                    <h1>Upload your project</h1>
                </div>
            
                {/* FORM */}
                <form className="UploadForm-form" id="uploadForm" name="uploadForm"
                        onSubmit={this.handleSubmit} 
                        action="http://127.0.0.1:8000/uploadproject" 
                        method="POST">

                    {/* FIRST NAME INPUT */}
                    <div className="mb-3 form-group">
                        <label htmlFor="firstName">Enter your first name:</label>
                        <input 
                            className="form-control"
                            aria-describedby="emailHelp"
                            type="text"
                            id="firstName"
                            name ="firstName"
                            value={this.state.firstName} 
                            onChange={this.handleChange} />
                    </div>
                    
                    {/* LAST NAME INPUT */}
                    <div className="mb-3 form-group">
                        <label htmlFor="lastName">Enter your last name:</label>
                        <input 
                            className="form-control"
                            type="text"
                            id="lastName"
                            name ="lastName"
                            value={this.state.lastName} 
                            onChange={this.handleChange} />
                    </div>

                    {/* PROJECT NAME INPUT */}
                    <div className="mb-3 form-group">
                        <label htmlFor="projectName">Enter your project's name:</label>
                        <input 
                            className="form-control"
                            type="text"
                            id="projectName"
                            name ="projectName"
                            value={this.state.projectName} 
                            onChange={this.handleChange} />
                    </div>

                    {/* FILE UPLOAD INPUT */}
                    <div className="mb-3 form-group">
                        <label htmlFor="fileUpload">Upload your project</label>
                        <input 
                            className="form-control"
                            type="file"
                            id="fileUpload"
                            name ="selectedFile"
                            // value={this.state.selectedFile === null ? '' : this.state.selectedFile}
                            onChange={this.handleFileChange} />
                    </div>

                    {/* PROJECT DESCRIPTION INPUT */}
                    <div className="mb-3 form-group">
                        <label htmlFor="projectDescription">Add a description of your work:</label>
                        <textarea 
                            className="form-control"
                            type="text"
                            id="projectDescription"
                            name ="projectDescription"
                            value={this.state.projectDescription} 
                            onChange={this.handleChange} />
                    </div>

                    {/* PUBLISHED BOOLEAN INPUT */}
                    <div className="mb-3 form-check form-group">
                        <input 
                            className="form-control form-check-input"
                            type="checkbox"
                            id="isPublished"
                            name ="isPublished"
                            value={this.state.isPublished} 
                            onChange={this.handleChange} />
                        <label htmlFor="isPublished">Published?</label>
                    </div>

                    {/* COLLABORATOR NEEDS INPUT */}
                    <div className="mb-3 form-group">
                        <label htmlFor="needs">What would you like your collaborator(s) to contribute?</label>
                        <textarea 
                            className="form-control"
                            type="text"
                            id="needs"
                            name ="needs"
                            value={this.state.needs} 
                            onChange={this.handleChange} />
                    </div>

                    {/* GENRES INPUT */}
                    <div className="mb-3 form-group">
                        <div className="form-group">
                            <label htmlFor="genres">What genres characterize your project?</label>
                            <select 
                                multiple 
                                className="form-control selectpicker"
                                value={this.state.genres}
                                onChange={this.handleChange}
                                size="6" 
                                data-mdb-filter="true"
                                id="genres">
                                    <option value="Rock">Rock</option>
                                    <option value="Pop">Pop</option>
                                    <option value="Alternative">Alternative</option>
                                    <option value="Rap">Rap</option>
                                    <option value="Indie">Indie</option>
                                    <option value="Acoustic">Acoustic</option>
                            </select>
                        </div>
                    </div>

                    {/* SUBMIT BUTTON */}
                    <div className="UploadForm-btn mb-3">
                        <button className="btn btn-dark"><span className="submit-btn-text">Submit &#62;</span></button>
                    </div>
                    
                </form>
            </div>
        )
    }
}

export default UploadForm