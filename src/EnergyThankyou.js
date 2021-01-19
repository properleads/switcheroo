import React from "react";

export function EnergyThankyouPage() {

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

    const bottomEn = {
        fontSize: '18px'
    };

    const offPosition = {
        margin: '0 auto',
        maxWidth: '288px'
    };

    return (
        <div className="container">

            <div>

                <div className='thankYouHead'>
                   <span style={{color: '#d8e3ef', verticalAlign: '-2px'}}>Thank you for using Switcheroo</span>
                </div>

                <div className='thankBody'>

                    <div style={{
                        textAlign: 'center',
                        color: '#13539d',
                        fontWeight: 'bold',
                        marginTop: '11px',
                        fontSize: '20px'
                    }}>What's next?</div>


                    <div style={{fontSize: '16px', textAlign: 'center', color: '#858585',
                        fontWeight: 'bold', marginBottom: '7px', width: '90%', margin: '0 auto' }}>
                        An adviser from Origin will contact you on the number
                        <span style={{color: '#13539d'}}> 03330 155 833</span>
                    </div>

                    <div style={{
                        margin: '10px auto 0 auto',
                        color: '#13539d',
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

                <div style={{textAlign: 'center'}}>
                    <img alt='' className='promo_img' src={process.env.PUBLIC_URL + '/images/bluecangaroo.jpg'}/>
                </div>

                <div style={offPosition}>
                    <div style={bottomEn}><img alt='' style={offerCheck} src={process.env.PUBLIC_URL + '/images/bluecheck.jpg'}/> Totally Unlimited Broadband </div>
                    <div style={bottomEn}><img alt='' style={offerCheck} src={process.env.PUBLIC_URL + '/images/bluecheck.jpg'}/> Award Winning WIFI Hub</div>
                    <div style={bottomEn}><img alt='' style={offerCheck} src={process.env.PUBLIC_URL + '/images/bluecheck.jpg'}/> 3.500+ 5* Trustpilot Reviews</div>
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