var Pricing = React.createClass({
    render: function() {
        return (
            <div>
                <h4 className="cyan-text text-darken-3">Pricing</h4>

                <p className="bottom-padding">All our jobs are charged by the hour; our rates are below for very large jobs please give us a call to discuss.</p>

                <div className="col s12 m4">
                    <div className="center promo">
                        <i className="material-icons icon-display">flash_on</i>
                        <h5 className="promo-caption"><b>$120/hr<br /> Emergency Service Call</b></h5>
                        <p className="center promo-text">Need work done fast? Mistakenly changed something you shouldn't have? We will provide an emergency out-of-hours service call to set things right.</p>
                    </div>
                </div>
                <div className="col s12 m4">
                    <div className="center promo">
                        <i className="material-icons icon-display">done</i>
                        <h5 className="promo-caption"><b>$55/hr<br /> Standard Rate</b></h5>
                        <p className="center promo-text">We endeavor to work collaboratively with you to ensure your satisfaction; our quotation and invoicing process is transparent so you can how money is used.</p>
                    </div>
                </div>
                <div className="col s12 m4" >
                    <div className="center promo">
                        <i className="material-icons icon-display">phone</i>
                        <h5 className="promo-caption"><b>Contact us for a<br /> Consultation or Quote</b></h5>
                        <p className="center promo-text">Sometimes it's difficult to tell what your job will entail. Call us on 0425 714 353 for an over the phone quote, or to organise a no-obligations consultation.</p>
                    </div>
                </div>
            </div>
        )
    }
});

export default Pricing;