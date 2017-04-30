import React from 'react';

class ContactUs extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            name : '',
            email : '',
            message : '',
        };

        this.type = this.type.bind(this);
        this.addLead = this.addLead.bind(this);

    };

    type(e){
        this.setState({[e.target.name]: e.target.value});
    };

    addLead() {
        $.ajax({
            type: "POST",
            dataType: "json",
            url: "http://backend.local/api/leads/store",
            data: {
                name: this.state.name,
                email: this.state.email,
                message: this.state.message
            },
            success: function() {
                this.popup('Message sent');
                this.setState({name: '', email: '', message: ''});
            }.bind(this),
            error: function() {
                this.popup('Error sending message. Please try again');
            }.bind(this),
        });
    };

    popup(message) {
        let response = $('<span>' + message + '</span>');
        Materialize.toast(response, 5000);
    }

    render() {
        return (
            <div>
                <h4 className="cyan-text text-darken-3">Contact Us</h4>

                <p>Small Sydney based web development shop that can help you build the website you want: </p>

                    <div className="row">
                        <div className="input-field col s6">
                            <i className="material-icons prefix">account_circle</i>
                            <label htmlFor="name">Name</label>
                            <input name="name" type="text" className="validate" value={this.state.name} onChange={this.type} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <i className="material-icons prefix">email</i>
                            <label htmlFor="email">Email</label>
                            <input name="email" type="email" className="validate" value={this.state.email} onChange={this.type} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <i className="material-icons prefix">mode_edit</i>
                            <label htmlFor="message">Message</label>
                            <textarea name="message" className="materialize-textarea" value={this.state.message} onChange={this.type} />
                        </div>
                    </div>
                    <div className="row">
                        <button onClick={this.addLead} className="btn waves-effect waves-light" name="action">Send Message
                            <i className="material-icons right">send</i>
                        </button>
                    </div>
            </div>
        )
    }
}

export default ContactUs;