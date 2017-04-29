class Header extends React.Component {
    render() {
        return (
        <div>
            <nav className="cyan darken-1" role="navigation">

                <div className="nav-wrapper container">
                    <ReactRouter.Link id="logo-container" to="/" className="brand-logo logo-size">
                        JM Web Developers
                    </ReactRouter.Link>
                    <ul className="right hide-on-med-and-down">
                        <li><ReactRouter.Link to="/" activeClassName="active">Home</ReactRouter.Link></li>
                        <li><ReactRouter.Link to="/services" activeClassName="active">Services</ReactRouter.Link></li>
                        <li><ReactRouter.Link to="/pricing" activeClassName="active">Pricing</ReactRouter.Link></li>
                        <li><ReactRouter.Link to="/contact-us" activeClassName="active">Contact Us</ReactRouter.Link></li>
                    </ul>

                    <ul id="nav-mobile" className="side-nav">
                        <li><ReactRouter.Link to="/home">Home</ReactRouter.Link></li>
                        <li><ReactRouter.Link to="/services">Services</ReactRouter.Link></li>
                        <li><ReactRouter.Link to="/pricing">Pricing</ReactRouter.Link></li>
                        <li><ReactRouter.Link to="/contact-us">Contact Us</ReactRouter.Link></li>
                    </ul>
                    <ReactRouter.Link to="#" data-activates="nav-mobile" className="button-collapse"><i className="material-icons">menu</i></ReactRouter.Link>
                </div>
            </nav>
            <div className="parallax-container">
                <div className="parallax"><img src="/images/image_code.jpg" /></div>
            </div>
        </div>
        )
    }
};


export default Header;