import React from 'react';
import { render } from 'react-dom';
import Dropzone from 'react-dropzone';
import request from 'superagent';

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
      profileImage: null
  	}

  	this.handleInputChange = this.handleInputChange.bind(this);
  }


	handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  // sets file as profile image, then makes call to CloudinaryAPI
  handleImageDrop(files) {
    this.setState({
      profileImage: files[0]
    });
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
  			<form>
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
	  			<div>
			  	  <label>
	  					field:
	  					<input 
	  						name="field" 
	  						type="text" 
	  						value={this.state.field} 
	  						onChange={this.handleInputChange} />
	  				</label>
	  			</div>
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
  	  	  <Dropzone
  	  	    multiple={false}
            accept="image/*"
            onDrop={this.handleImageDrop.bind(this)}>
            <p> Drag and drop an image, or select file to upload.</p>
  	  	  </Dropzone>
          <div>
            {this.state.profileImage === null ? null: 
              <div>
              <p>Preview Profile Image:</p>
              <img src={this.state.profileImageUrl}></img>
              </div>
            }
          </div>
        </form>
  	  </section>
  	)
  }
}
