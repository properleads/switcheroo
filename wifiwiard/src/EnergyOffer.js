import React from "react";
import $ from "jquery";

function parseURLParams(url) {
    var queryStart = url.indexOf("?") + 1,
        queryEnd   = url.indexOf("#") + 1 || url.length + 1,
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

if(typeof urlParams === 'undefined') urlParams = [];

class NameForm extends React.Component {

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

        if(this.state.numberCheck === 'OK') {

            fetch('https://properleads.leadbyte.co.uk/api/submit.php?campid=B-WEB-SWITCHEROO&sid=WIFIWIZARD&returnjson=yes&postcode=' + this.state.postcode + '&ssid=' + this.state.ssid + '&c1=' + this.state.c1 + '&c2=' + this.state.c2 + '&c3=' + this.state.c3 + '&c4=' + this.state.c4 + '&source=' + this.state.source + '&first_name=' + this.state.first + '&last_name=' + this.state.last + '&email=' + this.state.email + '&phone_1=%2B44' + this.state.phone.substring(1), {
                method: 'POST',
                // We convert the React state to JSON and send it as the POST body
                body: JSON.stringify(this.state)
            }).then(function (response) {
                return response.json();
            });
            setTimeout(() => {
                window.location.href = "/energy/thank-you";
            }, 500);
        }
        event.preventDefault();
    }

    render() {
        const input = {
            width: '100%',
            lineHeight: '33px',
            paddingLeft: '8px',
            borderRadius: '11px',
            border: '1px solid grey'
        };
        const label = {
            padding: '10px 0 5px',
            color: '#656565',
            fontWeight: 'lighter',
            fontSize: '16px'
        }

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
            maxWidth: '400px'
        }}>

            <form onSubmit={this.handleSubmit} autoComplete='none'>
                <div style={label}>
                    First name:
                </div>
                <div>
                    <input required placeholder="First name" style={input} type="text" name="first" value={this.state.value} onChange={this.handleChange} />
                </div>

                <div style={label}>
                    Last name:
                </div>

                <div>
                    <input required placeholder="Last name" style={input} type="text" name="last" value={this.state.value} onChange={this.handleChange} />
                </div>

                <div style={label}>
                    Mobile number:
                </div>

                <div id='error'>
                    Mobile number is invalid. Please try again!
                </div>

                <div>
                    <input required placeholder="Mobile number" style={input} type="tel" name="phone" maxLength="11" minLength="11" value={this.state.value} onChange={this.handleChange} onBlur={ this.numberCheck} />
                </div>

                <div style={label}>
                    Email address:
                </div>

                <div>
                    <input type="email" required  placeholder="Email address" style={input} name="email" value={this.state.value} onChange={this.handleChange} />
                </div>

                <div style={{ fontSize: '10px', textAlign: 'center', padding: '5px 0 5px'}}>
                    By submitting this form you agree to the website <a href='/term-and-conditions' target='_blank'>terms</a> and <a href='/privacy-policy' target='_blank'>Privacy Policy</a>.
                </div>

                <div style={{
                    margin: '10px auto',
                    textAlign: 'center'
                }}>
                    <input required type="submit" value="Submit" className='form_submit' />
                </div>

            </form>

            <div style={ssl}><img alt='' style={{width: '11px', verticalAlign: '-2px'}} src={process.env.PUBLIC_URL + '/images/SSL-Lock.png'}/> SSL Secured</div>

        </div>

        );
    }
}

export function EnergyOfferPage() {

    return (
        <div className="container">

            <div className='offer_top'>
                <div className='top_title'>
                    Final Step...
                </div>
                <div className='top_text'>
                    Please enter your details below and we'll provide you with the best energy deals we have available for your area!
                </div>
            </div>

            <div className='offer_bottom'>
                <div className='offer_left'>
                    <img alt='' src={process.env.PUBLIC_URL + '/images/logos_offer.jpg'}/>
                </div>
                <div className='offer_right'>
                    <NameForm />

                    <div style={{
                        textAlign: 'center',
                        fontSize: '10px',
                        maxWidth: '500px',
                        margin: '0 auto',
                        paddingBottom: '20px'
                    }}>
                        Your information is safe & secure on this website. By clicking "Submit", you are consenting to be
                        contacted by the service provider above via Telephone, Email and SMS. We will only share the
                        details you provided with them and no one else
                    </div>
                </div>
            </div>

        </div>
    );
}
  