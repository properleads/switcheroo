import React from "react";

export function ThankyouPage() {

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
                    <span style={{color: '#d8e3ef', verticalAlign: '-2px'}}>Thank you for using Wifi Wizard</span>
                </div>

                <div className='thankBody'>

                    <div style={{
                        textAlign: 'center',
                        color: '#3c2d65',
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
                        <span style={{color: '#3c2d65'}}> 03330 155 833</span>
                    </div>

                    <div style={{
                        margin: '10px auto 0 auto',
                        color: '#3c2d65',
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
                        Want To Save On Your Energy Bill? <br/>
                        <span>You could save up to &pound;280 per year*</span>
                    </div>


                    <div className='billImage'>
                        <img alt='' className='promo_img' src={process.env.PUBLIC_URL + '/images/wizzy-house.png'}/>
                    </div>

                    <div className='offer_list'>
                        <div className='bottomEn'><img alt='' style={offerCheck}
                                                       src={process.env.PUBLIC_URL + '/images/checkPink.png'}/> 100
                            Green Energy Tariffs
                        </div>
                        <div className='bottomEn'><img alt='' style={offerCheck}
                                                       src={process.env.PUBLIC_URL + '/images/checkPink.png'}/> 5* Rated
                            Providers
                        </div>
                        <div className='bottomEn'><img alt='' style={offerCheck}
                                                       src={process.env.PUBLIC_URL + '/images/checkPink.png'}/> UK Based
                            Customer Service
                        </div>
                    </div>

                    <div className='thankButton'>
                        <a className='thankYouLink' href="https://www.messenger.com/t/mywifiwizard" target="_blank"
                           rel="noopener noreferrer">Find out more ></a>
                    </div>

                </div>

            </div>

        </div>
    );
}