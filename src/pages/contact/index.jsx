import './contact.css'
import React from 'react'


export default class Contact extends React.Component {
	constructor(props) {
		super(props);
		this.state = { name: '', email: '', message: '', displayConfirmation: false };
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		const target = event.target;
		const value = target.value;
		const name = target.name;
		this.setState({
			[name]: value
		});
	}

	handleSubmit(event) {
		event.preventDefault();
		window.emailjs.send("service_q1zb69y", "template_82r2p6f", {
			contact_name: this.state.name,
			contact_email: this.state.email,
			message: this.state.message,
		}).then(() => {
			this.setState({ displayConfirmation: true })
			window.setTimeout(() => {
				this.setState({ displayConfirmation: false });
			}, 2000)
		});
		this.setState({
			name: '',
			email: '',
			message: '',
		})
	}

	render() {
		return (
			<div className='page bottom-right inputFormPage'>
				<div className={`confirmation${this.state.displayConfirmation ? ' display' : ''}`}>Sent!</div>
				<form onSubmit={this.handleSubmit}>
					<label className='infoLabel'>
						<input placeholder='Name' className='textInput' required name="name" type="text" value={this.state.name} onChange={this.handleChange} />
					</label>
					<label className='infoLabel'>
						<input placeholder='Email' className='textInput' required name="email" type="email" value={this.state.email} onChange={this.handleChange} />
					</label>
					<label>
						Message
						<textarea className='textInput' required name="message" value={this.state.message} onChange={this.handleChange} />
					</label>
					<input type="submit" value="Submit" />
				</form>
			</div>
		);
	}
}