import React from "react";
import $ from "jquery";

function parseURLParams(url) {
    var queryStart = url.indexOf("?") + 1,
        queryEnd = url.indexOf("#") + 1 || url.length + 1,
        query = url.slice(queryStart, queryEnd - 1),
        pairs = query.replace(/\+/g, " ").split("&"),
        parms = {}, i, n, v, nv;

    if (query === url || query === "") return;

    for (i = 0; i < pairs.length; i++) {
        nv = pairs[i].split("=", 2);
        n = decodeURIComponent(nv[0]);
        v = decodeURIComponent(nv[1]);

        if (!parms.hasOwnProperty(n)) parms[n] = [];
        parms[n].push(nv.length === 2 ? v : null);
    }
    return parms;
}

var urlString = window.location.href.replace('%20', ' ');
var urlParams = parseURLParams(urlString);

if (typeof urlParams === 'undefined') urlParams = [];

class MobileNameForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            first: '',
            last: '',
            phone: '',
            email: '',
            postcode: (typeof urlParams.postcode !== 'undefined') ? urlParams.postcode[0] : 'unknown',
            ssid: (typeof urlParams.ssid !== 'undefined') ? urlParams.ssid[0] : 0,
            c1: (typeof urlParams.c1 !== 'undefined') ? urlParams.c1[0] : 'Plusnet',
            c2: (typeof urlParams.c2 !== 'undefined') ? urlParams.c2[0] : 'Fast',
            c3: (typeof urlParams.c3 !== 'undefined') ? urlParams.c3[0] : 'No',
            c4: (typeof urlParams.c4 !== 'undefined') ? urlParams.c4[0] : 'No',
            source: (typeof urlParams.source !== 'undefined') ? urlParams.source[0] : 0,
            gclid: (typeof urlParams.gclid !== 'undefined') ? urlParams.gclid[0] : 0,
            msclkid: (typeof urlParams.msclkid !== 'undefined') ? urlParams.msclkid[0] : 0,
            numberCheck: '',
        };
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }

    numberCheckArray = [];

    numberCheck = (event) => {
        fetch('https://api.mobilecheck.co.uk/?api_key=eacdce9d3a579642a911277b703fb5c3&tel=' + event.target.value)
            .then((response) => response.json())
            .then((response) => {
                    this.setState({numberCheck: response.status})
                    if (response.status !== 'OK') {
                        $('#error').css('display', 'inline-block');
                    }
                    if (response.status === 'OK') {
                        $('#error').css('display', 'none');
                    }
                }
            )

    }

//https://properleads.leadbyte.co.uk/api/submit.php?campid=BILLHOPPERWEB&returnjson=yes
    handleSubmit = (event) => {

        if (this.state.numberCheck === 'OK') {

            fetch('https://properleads.leadbyte.co.uk/api/submit.php?campid=B-WEB-SWITCHEROO&sid=SWITCHEROO&returnjson=yes&postcode=' + this.state.postcode + '&ssid=' + this.state.ssid + '&c1=' + this.state.c1 + '&c2=' + this.state.c2 + '&c3=' + this.state.c3 + '&c4=' + this.state.c4 + '&source=' + this.state.source + '&first_name=' + this.state.first + '&last_name=' + this.state.last + '&email=' + this.state.email + '&gclid=' + this.state.gclid + '&msclkid=' + this.state.msclkid + '&phone_1=%2B44' + this.state.phone.substring(1), {
                method: 'POST',
                // We convert the React state to JSON and send it as the POST body
                body: JSON.stringify(this.state)
            }).then(function (response) {
                window.location.href = "/energy/thank-you";
            });

            setTimeout(() => {
                window.location.href = "/energy/thank-you";
            }, 500);

        }

        event.preventDefault();

    }

    render() {

        const input = {
            width: '97%',
            height: '54px',
            lineHeight: '24px',
            paddingLeft: '20px',
            borderRadius: '25px',
            border: '1px solid grey',
            fontSize: '20px',
            fontFamily: 'QuickSand',
            marginBottom: '15px'
        };

        const ssl = {
            margin: "0 auto",
            paddingBottom: "5px",
            width: "100%",
            textAlign: "center",
            color: "#696a69",
            fontSize: "8px",
        };

        return (

            <div style={{
                margin: '0 auto',
                maxWidth: '455px'
            }}>

                <div className='formTop'>
                    <span>INSTANT DECISION</span><br/>
                    We Can Say ‘YES’ in Minutes – Guaranteed Offers!
                </div>

                <form onSubmit={this.handleSubmit} autoComplete='none'>
                    <div>
                        <input required placeholder="First name" style={input} type="text" name="first"
                               value={this.state.value} onChange={this.handleChange}/>
                    </div>

                    <div>
                        <input required placeholder="Last name" style={input} type="text" name="last"
                               value={this.state.value} onChange={this.handleChange}/>
                    </div>

                    <div id='error'>
                        Mobile number is invalid. Please try again!
                    </div>

                    <div>
                        <input required placeholder="Mobile number" style={input} type="tel" name="phone" maxLength="11"
                               minLength="11" value={this.state.value} onChange={this.handleChange}
                               onBlur={this.numberCheck}/>
                    </div>

                    <div>
                        <input type="email" required placeholder="Email address" style={input} name="email"
                               value={this.state.value} onChange={this.handleChange}/>
                    </div>

                    <div style={{fontSize: '10px', textAlign: 'center', padding: '5px 0 5px'}}>
                        By submitting this form you agree to the website <a href='/term-and-conditions'
                                                                            target='_blank'>terms</a> and <a
                        href='/privacy-policy' target='_blank'>Privacy Policy</a>.
                    </div>

                    <div style={{
                        margin: '10px auto',
                        textAlign: 'center'
                    }}>
                        <input required type="submit" value="Get Your Deal Now >" className='mobileSubmit'/>
                    </div>

                </form>

                <div style={ssl}><img alt='' style={{width: '11px', verticalAlign: '-2px'}}
                                      src={process.env.PUBLIC_URL + '/images/SSL-Lock.png'}/> SSL Secured
                </div>

            </div>

        );
    }
}

export function MobileOfferPage() {

    return (
        <div className="container mobileContainer">

            <div className='mobileHeader'>
                Guaranteed Mobile Deals Available
            </div>

            <div className='mobile_offer_bottom'>
                <div className='mobile_offer_left'>

                </div>
                <div className='mobile_offer_right'>

                    <div className='mobile_offer_top'>
                        <span>Final Step – Get Your Offers Now!</span><br/>
                        Great! In order to get you the exact deals you can get accepted for, we need some additional details.<br/><br/>
                        Don’t worry, there is NO CREDIT CHECK and we will simply use our own internal matching options to show
                        you the exact deals you can get.
                    </div>

                    <MobileNameForm />

                    <div style={{
                        textAlign: 'center',
                        fontSize: '10px',
                        maxWidth: '500px',
                        margin: '0 auto',
                        paddingBottom: '20px'
                    }}>
                        Your information is safe & secure on this website. By clicking "Get Your Deal Now >", you are consenting to
                        be
                        contacted by the service provider above via Telephone, Email and SMS. We will only share the
                        details you provided with them and no one else
                    </div>
                </div>
            </div>

        </div>
    );
}
