var Services = React.createClass({
    render: function() {
        return (
            <div>
                <h4 className="cyan-text text-darken-3">Services</h4>

                <div id="card_data" className="row">
                    <div className="col s12 m4"><div className="card"><div className="card-content">
                        <h5>Website Design</h5>
                        Know you want to update your website but not quite sure how? We offer a personal consultation service to help you determine what you need.
                    </div></div></div>

                    <div className="col s12 m4"><div className="card"><div className="card-content"><h5>Mobile Websites</h5>
                        By using CSS frameworks such as Bootstrap 3 and Materialize we can ensure your website looks fantastic on phones, tablets and desktops.
                    </div></div></div>

                    <div className="col s12 m4"><div className="card"><div className="card-content"><h5>Web Development</h5>
                        We employ back-end frameworks such as Laravel 5 and Zend Framework 1 to provide our clients with enormous flexibility in building their custom web application.
                    </div></div></div>

                    <div className="col s12 m4"><div className="card"><div className="card-content">
                        <h5>Content Management Systems (CMS)</h5>
                        Content Management Systems allow site administrators to quickly and easily update their pages. We employ applications such as Wordpress and Drupal to make the maintenance of your site a breeze.
                    </div></div></div>

                    <div className="col s12 m4"><div className="card"><div className="card-content">
                        <h5>System Integration</h5>
                        Making unrelated applications talk to each other can often be a painful experience. To ensure all your systems work together we can develop custom modules which has the benefit of reducing manual handling of data and streamlining your experience.
                    </div></div></div>

                    <div className="col s12 m4"><div className="card"><div className="card-content">
                        <h5>Full Stack Development</h5>
                        Full stack development refers to building a web application from the ground up. This includes establishment of the operating system and the web server; to setting up the database; all the way through to the end user experience.
                    </div></div></div>
                </div>
            </div>
        );
    }
});

export default Services;