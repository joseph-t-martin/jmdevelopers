class ContactUs extends React.Component {
    render() {
        return (
            <div>
                <h4 className="cyan-text text-darken-3">Contact Us</h4>

                <p>Small Sydney based web development shop that can help you build the website you want: </p>

                    <div className="row">
                        <div className="input-field col s6">
                            <i className="material-icons prefix">account_circle</i>
                            <input id="icon_prefix" type="text" className="validate" />
                            <label htmlFor="icon_prefix">Name</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <i className="material-icons prefix">email</i>
                            <input id="email" type="email" className="validate" />
                            <label htmlFor="email">Email</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <i className="material-icons prefix">mode_edit</i>
                            <textarea id="icon_prefix2" className="materialize-textarea"></textarea>
                            <label htmlFor="icon_prefix2">Message</label>
                        </div>
                    </div>
                    <div className="row">
                        <button className="btn waves-effect waves-light" name="action">Send Message
                            <i className="material-icons right">send</i>
                        </button>
                    </div>
            </div>
        )
    }
}

export default ContactUs;