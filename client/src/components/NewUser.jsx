import React from 'react';
import Dropzone from 'react-dropzone';
import request from 'superagent';
import $ from 'jquery';

const _cloudinaryUploadPreset = 'profileImage'
// Cloudinary API documentation: http://cloudinary.com/blog/restful_api_for_managing_your_website_s_images_and_other_online_assets
const _cloudinaryUploadUrl = 'https://api.cloudinary.com/v1_1/baggins/upload'


export default class NewUser extends React.Component {
  constructor(props) {
  	super(props);

  	this.state = {
	    firstName: '',
	    lastName: '',
			phone: '',
			location: '',
			company: '',
			field: '',
			tagline: '',
			username: '',
			password: '',
      profileImageUrl: '',
      // profileImage doesn't get sent to our server, but needs to be in state for rendering preview
  	}

  	this.handleInputChange = this.handleInputChange.bind(this);

  	this.handleSubmit = this.handleSubmit.bind(this);
  }

	handleSubmit(event) {
		//request to server here
    event.preventDefault();
    console.log('Submit button clicked: ' + this.state.firstName);
    alert('firstName: ', this.state.firstName, '\n',
	    'lastName: ', this.state.lastName, '\n',
			'phone: ',  this.state.phone,  '\n',
			'location: ', this.state.location,  '\n',
			'company: ', this.state.company,  '\n',
			'field: ', this.state.field,  '\n',
			'tagline: ', this.state.tagline,  '\n',
			'username: ', this.state.username,  '\n',
			'profileImageUrl: ', this.state.profileImageUrl, '\n',
			'password: ', this.state.password
      );


    $.ajax({
      url: 'http://localhost:3000/api/users/',
      method: "POST",

    	data: this.state,
    	//data: JSON.stringify(this.state),

      success: function(){console.log("success");},
      error: function(){console.log("error");}
    })
  }

	handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  // sets file as profile image, then makes call to CloudinaryAPI
  handleImageDrop(files) {
    // this.setState({
    //   profileImage: files[0]
    // });
    this.uploadImageToCloudinary(files[0])
  }

  // posts image to Cloudinary, then sets user's profileImageUrl
  uploadImageToCloudinary(file) {
    console.log('Start uploadImageToCloudinary')
    let upload = request
      .post(_cloudinaryUploadUrl)
      .field('upload_preset', _cloudinaryUploadPreset)
      .field('file', file);

    upload.end((err, response) => {
      if (err) {
        console.error(err);
      }

      if (response.body.secure_url !== '') {
        this.setState({
          profileImageUrl: response.body.secure_url
        });
      }
    });
  }

  // Preview of profile image is conditionally rendered, after successfully uploading to Cloudify
  render() {
  	return (
  		<section id="new-user-component">
  			<form onSubmit={this.handleSubmit}>
	  			<div>
	  				<label>
	  					First Name:
	  					<input
	  						name="firstName"
	  						type="text"
	  						value={this.state.firstName}
	  						onChange={this.handleInputChange} />
	  				</label>
	  			</div>
	  			<div>
			  	  <label>
	  					Last Name:
	  					<input
	  						name="lastName"
	  						type="text"
	  						value={this.state.lastName}
	  						onChange={this.handleInputChange} />
	  				</label>
	  			</div>
	  			<div>
			  	  <label>
	  					phone:
	  					<input
	  						name="phone"
	  						type="text"
	  						value={this.state.phone}
	  						onChange={this.handleInputChange} />
	  				</label>
	  			</div>
	  			<div>
			  	  <label>
	  					location:
	  					<input
	  						name="location"
	  						type="text"
	  						value={this.state.location}
	  						onChange={this.handleInputChange} />
	  				</label>
	  			</div>
	  			<div>
			  	  <label>
	  					company:
	  					<input
	  						name="company"
	  						type="text"
	  						value={this.state.company}
	  						onChange={this.handleInputChange} />
	  				</label>
	  			</div>

		  			<label>career field:
			  			<select name="field" value={this.state.value} onChange={this.handleInputChange}>
			  				<option value="Please_select_a_field">Please select a field</option>
			  				<option value="Software">Software</option>
			  				<option value="Hardware">Hardware</option>
			  				<option value="Marketing">Marketing</option>
			  				<option value="Management">Management</option>
			  				<option value="Quality_Assurance">Quality Assurance</option>
			  				<option value="Customer_Support">Customer Support</option>
			  				<option value="Sales">Sales</option>
			  				<option value="Computer_Service">Computer Service</option>
							</select>
						</label>
	  			<div>
			  	  <label>
	  					tagline:
	  					<input
	  						name="tagline"
	  						type="text"
	  						value={this.state.tagline}
	  						onChange={this.handleInputChange} />
	  				</label>
	  			</div>
	  			<div>
			  	  <label>
	  					username:
	  					<input
	  						name="username"
	  						type="text"
	  						value={this.state.username}
	  						onChange={this.handleInputChange} />
	  				</label>
	  			</div>
	  			<div>
			  	  <label>
	  					password:
	  					<input
	  						name="password"
	  						type="text"
	  						value={this.state.password}
	  						onChange={this.handleInputChange} />
	  				</label>
	  			</div>
	  			<input type="submit" value="Submit" />
  	  	  <Dropzone
  	  	    multiple={false}
            accept="image/*"
            onDrop={this.handleImageDrop.bind(this)}>
            <p> Drag and drop an image, or select file to upload.</p>
  	  	  </Dropzone>
          <div>

            {this.state.profileImageUrl === '' ? null :
              <div>
              <p>Preview Profile Image:</p>
              <img src={this.state.profileImageUrl}></img>
              </div>
            }
          </div>
        </form>
        <button onClick={()=>{console.log(this.state)}}>console log state</button>
  	  </section>
  	)
  }
}
