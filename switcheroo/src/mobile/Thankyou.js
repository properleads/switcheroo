import React from "react";

export function MobileThankyouPage() {

    let provesrc = '';

    !function (o, i) {
        window.provesrc && window.console && console.error && console.error("ProveSource is included twice in this page."), provesrc = window.provesrc = {
            dq: [],
            display: function () {
                this.dq.push(arguments)
            }
        }, o._provesrcAsyncInit = function () {
            provesrc.init({
                apiKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50SWQiOiI1ZjYzM2YwMDUxY2MyOTRmNGQyMGQxMzIiLCJpYXQiOjE2MDYwOTA0Njd9.HraptETqDGjZhfwdysD1xRN6ZzFwUdjLyHcK14v0490",
                v: "0.0.4"
            })
        };
        var r = i.createElement("script");
        r.type = "text/javascript", r.async = !0, r["ch" + "ar" + "set"] = "UTF-8", r.src = "https://cdn.provesrc.com/provesrc.js";
        var e = i.getElementsByTagName("script")[0];
        e.parentNode.insertBefore(r, e)
    }(window, document);

    const offer = {
        color: '#858585',
        fontSize: '16px',
        textAlign: 'center'
    };

    const offerCheck = {
        width: '20px',
        verticalAlign: '-3px',
        marginRight: '5px'
    };

    function mobileEnergy(e) {
        window.location.href = '/broadband/new';
    }

    return (
        <div className="mobilenewPage">

            <div>

                <div className='mobilethankYouHead'>
                    <span style={{verticalAlign: '-2px'}}>Thank you for using Switcheroo</span>
                </div>

                <div className='mobilethankBody'>

                    <div style={{
                        textAlign: 'center',
                        color: '#0b97a3',
                        fontWeight: 'bold',
                        marginTop: '11px',
                        fontSize: '20px'
                    }}>What's next?
                    </div>

                    <div style={{
                        fontSize: '16px', textAlign: 'center', color: '#858585',
                        fontWeight: 'bold', marginBottom: '7px', width: '90%', margin: '0 auto', paddingLeft: '10px', paddingRight:'10px'
                    }}>
                        An adviser from Origin will contact you on the number
                        <span style={{color: '#0b97a3'}}> 03330 155 833</span>
                    </div>

                    <div style={{
                        margin: '10px auto 0 auto',
                        color: '#0b97a3',
                        fontWeight: 'bold',
                        fontSize: '20px',
                        textAlign: 'center'
                    }}>The Call Center Is Open During:
                    </div>

                    <div style={offer}>
                        <strong>Weekdays:</strong> 9am until 7pm
                    </div>
                    <div style={offer}>
                        <strong>Saturday:</strong> 9am until 5:30pm
                    </div>
                    <div style={offer}>
                        <strong>Sunday:</strong> Closed
                    </div>

                </div>
            </div>

            <div className='mobilethankYouBottom'>

                <div className='mobile_promo_bos'>

                    <div className='mobilebillText'>
                        Want To Save On Your Broadband? <br/>
                        <span>ay Less For Better Internet*</span>
                    </div>
                    <button className='mobilelastButton buttomBurronThank' onClick={mobileEnergy}>
                        Get Your Deal Now >
                    </button>

                </div>

            </div>

        </div>
    );
}