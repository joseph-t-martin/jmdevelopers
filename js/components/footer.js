class Footer extends React.Component {
    render() {
        return (
            <div>
                <footer className="page-footer orange">
                    <div className="container">
                        <div className="row">
                            <div className="col l6 s12">
                                <h5 className="white-text">JM Web Developers</h5>
                                <p className="grey-text text-lighten-4">Sydney based development shop specialising in custom website delivery and IT servicing</p>
                            </div>
                            <div className="col l3 s12">
                                <h5 className="white-text">Navigation</h5>
                                <ul>
                                    <li><ReactRouter.Link className="white-text" to="/">Home</ReactRouter.Link></li>
                                    <li><ReactRouter.Link className="white-text" to="/services">Services</ReactRouter.Link></li>
                                    <li><ReactRouter.Link className="white-text" to="/pricing">Pricing</ReactRouter.Link></li>
                                    <li><ReactRouter.Link className="white-text" to="/contact-us">Contact Us</ReactRouter.Link></li>
                                </ul>
                            </div>
                            <div className="col l3 s12">
                                <h5 className="white-text">Connect</h5>
                                <ul>
                                    <li className="white-text">Call us: 0425 714 353</li>
                                    <li className="white-text">support@jmdevelopers.com.au</li>
                                    <li><a className="white-text" href="https://github.com/joeyisking">GitHub</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="footer-copyright">
                        <div className="container">
                            Designed and Developed by <ReactRouter.Link className="orange-text text-lighten-4" to="#">JM Web Developers</ReactRouter.Link>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}

export default Footer;