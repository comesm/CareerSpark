import React from 'react';
import {render} from 'react-dom';

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
	  	  </form>
  	  </section>

  	)
  }
}
