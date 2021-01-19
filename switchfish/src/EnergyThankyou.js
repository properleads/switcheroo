import React from "react";

export function EnergyThankyouPage() {

    let provesrc = '';

    !function(o, i) {
        window.provesrc && window.console && console.error && console.error("ProveSource is included twice in this page."), provesrc = window.provesrc = {
            dq: [],
            display: function() {
                this.dq.push(arguments)
            }
        }, o._provesrcAsyncInit = function() {
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

    return (
        <div className="container">

            <div>

                <div className='thankYouHead'>
                    <span>Thank you for using Switchfish</span>
                </div>

                <div className='thankBody'>

                    <div style={{
                        textAlign: 'center',
                        color: 'rgb(60, 45, 101)',
                        fontWeight: 'bold',
                        marginTop: '11px',
                        fontSize: '20px'
                    }}>What's next?
                    </div>

                    <div style={{
                        fontSize: '16px', textAlign: 'center', color: '#858585',
                        fontWeight: 'bold', marginBottom: '7px', width: '90%', margin: '0 auto'
                    }}>
                        An adviser from Origin will contact you on the number
                        <span style={{color: 'rgb(60, 45, 101)'}}> 03330 155 833</span>
                    </div>

                    <div style={{
                        margin: '10px auto 0 auto',
                        color: 'rgb(60, 45, 101)',
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

            <div className='thankYouBottom'>

                <div className='promo_bos'>

                <div className='billText'>
                    Want To Save On Your Broadband? <br />
                    <span>Pay only &pound;18.99 per month*</span>
                </div>

                    <div>

                    <div className='billImage'>
                        <img alt='' className='promo_img' src={process.env.PUBLIC_URL + '/images/Fish-house.png'}/>
                    </div>

                <div className='offer_list'>
                    <div  className='bottomEn'><img alt='' style={offerCheck} src={process.env.PUBLIC_URL + '/images/checkPink.png'}/> Totally Unlimited Broadband </div>
                    <div  className='bottomEn'><img alt='' style={offerCheck} src={process.env.PUBLIC_URL + '/images/checkPink.png'}/> Award Winning WIFI Hub</div>
                    <div  className='bottomEn'><img alt='' style={offerCheck} src={process.env.PUBLIC_URL + '/images/checkPink.png'}/> 3.500+ 5* Trustpilot Reviews</div>
                </div>

                <div className='thankButton'>
                    <a className='thankYouLink' rel="noopener noreferrer" href="https://m.me/Switcheroome?ref=w10860760" target="_blank">Find out more ></a>
                </div>

                    </div>

                    </div>

            </div>

        </div>
    );
}