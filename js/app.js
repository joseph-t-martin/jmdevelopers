import React from 'react';
import ReactDOM from 'react-dom';
import ReactRouter from 'react-router';

import Header from './components/header.js';
import Home from './components/home.js';
import Services from './components/services.js';
import Pricing from './components/pricing.js';
import ContactUs from './components/contact_us.js';
import Footer from './components/footer.js';

class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <div className="container">
                    <div className="row">
                        <div className="col s12">
                            {this.props.children}
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

ReactDOM.render(
    <ReactRouter.Router history={ReactRouter.browserHistory}>
        <ReactRouter.Route path="/" component={App}>
            <ReactRouter.IndexRoute component={Home} />
            <ReactRouter.Route path="services" component={Services}/>
            <ReactRouter.Route path="pricing" component={Pricing}/>
            <ReactRouter.Route path="contact-us" component={ContactUs}/>
        </ReactRouter.Route>
    </ReactRouter.Router>,
    document.getElementById('app')
);