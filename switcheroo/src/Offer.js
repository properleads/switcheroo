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
if (typeof urlParams.cid === 'undefined') urlParams.cid = [];
if (typeof urlParams.cid[0] === 'undefined') urlParams.cid[0] = 0;

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

    handleSubmit = (event) => {

        if (this.state.numberCheck === 'OK') {

            fetch('https://properleads.leadbyte.co.uk/api/submit.php?campid=B-WEB-SWITCHEROO&sid=SWITCHEROO&returnjson=yes&postcode=' + this.state.postcode + '&ssid=' + this.state.ssid + '&c1=' + this.state.c1 + '&c2=' + this.state.c2 + '&c3=' + this.state.c3 + '&source=' + this.state.source + '&first_name=' + this.state.first + '&last_name=' + this.state.last + '&email=' + this.state.email + '&gclid=' + this.state.gclid + '&msclkid=' + this.state.msclkid + '&phone_1=%2B44' + this.state.phone.substring(1), {
                method: 'POST',
                // We convert the React state to JSON and send it as the POST body
                body: JSON.stringify(this.state)
            }).then(function (response) {
                window.location.href = "/thank-you";
            });

            setTimeout(() => {
                window.location.href = "/thank-you";
            }, 500);

        }

        event.preventDefault();

    }

    render() {

        const input = {
            width: '100%',
            lineHeight: '43px',
            paddingLeft: '18px',
            borderRadius: '18px',
            border: '1px solid grey'
        };

        return (

            <div className='offer_divv_bottom'>

                <form onSubmit={this.handleSubmit}>
                    <div className='offer_label'>
                        First name:
                    </div>
                    <div className='offer_input_first'>
                        <input required placeholder="First name" className='offer_Input' type="text" name="first"
                               value={this.state.value} onChange={this.handleChange}/>
                    </div>

                    <div className='offer_label'>
                        Last name:
                    </div>

                    <div>
                        <input required placeholder="Last name" className='offer_Input' type="text" name="last"
                               value={this.state.value} onChange={this.handleChange}/>
                    </div>

                    <div className='offer_label'>
                        Mobile number:
                    </div>

                    <div id='error'>
                        Mobile number is invalid. Please try again!
                    </div>

                    <div>
                        <input autoComplete="none" required placeholder="Mobile number" className='offer_Input'
                               type="tel" name="phone" maxLength="11" minLength="11" value={this.state.value}
                               onChange={this.handleChange} onBlur={this.numberCheck}/>
                    </div>

                    <div className='offer_label'>
                        Email address:
                    </div>

                    <div>
                        <input type="email" required placeholder="Email address" className='offer_Input' name="email"
                               value={this.state.value} onChange={this.handleChange}/>
                    </div>

                    <div className='offer_text_submision'>
                        By submitting this form you agree to the website <a href='/term-and-conditions'
                                                                            target='_blank'>terms</a> and <a
                        href='/privacy-policy' target='_blank'>Privacy Policy</a>.
                    </div>

                    <div className='button_submit_offer'>
                        <input required type="submit" value="Submit" className='form_submit'/>
                    </div>

                </form>

                <div className='ssl_footer'><img alt='' style={{width: '11px', verticalAlign: '-2px'}}
                                                 src={process.env.PUBLIC_URL + '/images/SSL-Lock.png'}/> SSL Secured
                </div>

            </div>

        );
    }
}

export function OfferPage() {

    const offerCheck = {
        width: '16px',
        verticalAlign: '-3px',
        marginRight: '5px'
    };

    return (
        <div className="container">

            {(Number(urlParams.cid[0]) === 0 || Number(urlParams.cid[0]) === 1 || urlParams.cid[0] === 'NaN') &&
            <div id='one' className='offer_container_two'>

                <div className='perfectDeals'>
                    <span className='numberOne'>1</span>
                    Perfectly Matched Deal
                </div>

                <div className='trusted'>
                    <img alt='' style={{width: '31px', margin: '1px'}}
                         src={process.env.PUBLIC_URL + '/images/Switcheroo-trusted-Logo.png'}/>
                    <span style={{color: '#d8e3ef', verticalAlign: '-2px'}}>Trusted Supplier</span>
                </div>

                <div className='offer_container'>

                    <div className='offer_ends'>Offer ends soon!</div>

                    <div className='offer_img_container'>
                        <img alt='' src={process.env.PUBLIC_URL + '/images/image.png'}/>
                    </div>

                    <div className='moonthly'>Monthly cost from:</div>

                    <div className='price'>&pound;18.99</div>

                    <div className='main_offer'>Main features:</div>

                    <div className='offer_tick'>
                        <img alt='' style={offerCheck} src={process.env.PUBLIC_URL + '/images/check.jpg'}/>
                        Totally Unlimited Broadband
                    </div>
                    <div className='offer_tick'>
                        <img alt='' style={offerCheck} src={process.env.PUBLIC_URL + '/images/check.jpg'}/>
                        Award Winning WIFI Hub
                    </div>
                    <div className='offer_tick'>
                        <img alt='' style={offerCheck} src={process.env.PUBLIC_URL + '/images/check.jpg'}/>
                        3500+ 5* Trustpilot Reviews
                    </div>

                    <div className='offer_button'>
                        <a className='moreBtn' href="#Please">Find out more ></a>
                    </div>
                </div>
            </div>
            }

            {Number(urlParams.cid[0]) === 2 &&
            <div id='two' className='offer_container_two'>

                <div className='perfectDeals'>
                    <span className='numberOne'>1</span>
                    Perfectly Matched Deal
                </div>

                <div className='trusted'>
                    <img alt='' style={{width: '31px', margin: '1px'}}
                         src={process.env.PUBLIC_URL + '/images/Switcheroo-trusted-Logo.png'}/>
                    <span>Trusted Supplier</span>
                </div>

                <div className='offer_container'>

                    <div className='offer_ends'>Offer ends soon!</div>

                    <div className='offer_img_container'>
                        <img alt='' src={process.env.PUBLIC_URL + '/images/talktalk-logo-2019.png'}/>
                    </div>

                    <div className='moonthly'>Monthly cost from:</div>

                    <div className='price'>&pound;23.50</div>

                    <div className='offer_tick'>
                        <img alt='' style={offerCheck} src={process.env.PUBLIC_URL + '/images/check.jpg'}/>
                        Avg. speed of <span style={{color: '#9f04c6'}}>38</span> Mb/s
                    </div>
                    <div className='offer_tick'>
                        <img alt='' style={offerCheck} src={process.env.PUBLIC_URL + '/images/check.jpg'}/>
                        No mid-contract price rises
                    </div>
                    <div className='offer_tick'>
                        <img alt='' style={offerCheck} src={process.env.PUBLIC_URL + '/images/check.jpg'}/>
                        No set-up fee
                    </div>
                    <div className='offer_tick'>
                        <img alt='' style={offerCheck} src={process.env.PUBLIC_URL + '/images/check.jpg'}/>
                        Easy self-setup
                    </div>

                    <div className='offer_button'>
                        <a className='moreBtn' href="#Please">Find out more ></a>
                    </div>
                </div>
            </div>
            }

            {Number(urlParams.cid[0]) === 3 &&
            <div id='three' className='offer_container_two'>

                <div className='perfectDeals'>
                    <span className='numberOne'>1</span>
                    Perfectly Matched Deal
                </div>

                <div className='trusted'>
                    <img alt='' style={{width: '31px', margin: '1px'}}
                         src={process.env.PUBLIC_URL + '/images/Switcheroo-trusted-Logo.png'}/>
                    <span>Trusted Supplier</span>
                </div>

                <div className='offer_container'>

                    <div className='offer_ends'>Offer ends soon!</div>

                    <div className='offer_img_container'>
                        <img alt='' src={process.env.PUBLIC_URL + '/images/new/download.png'}/>
                    </div>

                    <div className='moonthly'>Monthly cost from:</div>

                    <div className='price'>&pound;23.99</div>

                    <div className='offer_tick'>
                        <img alt='' style={offerCheck} src={process.env.PUBLIC_URL + '/images/check.jpg'}/>
                        Avg. speed of <span style={{color: '#9f04c6'}}>117</span> Mb/s
                    </div>
                    <div className='offer_tick'>
                        <img alt='' style={offerCheck} src={process.env.PUBLIC_URL + '/images/check.jpg'}/>
                        No mid-contract price rises
                    </div>
                    <div className='offer_tick'>
                        <img alt='' style={offerCheck} src={process.env.PUBLIC_URL + '/images/check.jpg'}/>
                        No set-up fee
                    </div>
                    <div className='offer_tick'>
                        <img alt='' style={offerCheck} src={process.env.PUBLIC_URL + '/images/check.jpg'}/>
                        Easy self-setup
                    </div>

                    <div className='offer_button'>
                        <a className='moreBtn' href="#Please">Find out more ></a>
                    </div>
                </div>
            </div>
            }

            {Number(urlParams.cid[0]) === 4 &&
            <div id='four' className='offer_container_two'>

                <div className='perfectDeals'>
                    <span className='numberOne'>1</span>
                    Perfectly Matched Deal
                </div>

                <div className='trusted'>
                    <img alt='' style={{width: '31px', margin: '1px'}}
                         src={process.env.PUBLIC_URL + '/images/Switcheroo-trusted-Logo.png'}/>
                    <span>Trusted Supplier</span>
                </div>

                <div className='offer_container'>

                    <div className='offer_ends'>Offer ends soon!</div>

                    <div className='offer_img_container'>
                        <img alt='' src={process.env.PUBLIC_URL + '/images/talktalk-logo-2019.png'}/>
                    </div>

                    <div className='moonthly'>Monthly cost from:</div>

                    <div className='price'>&pound;32.00</div>


                    <div className='offer_tick'>
                        <img alt='' style={offerCheck} src={process.env.PUBLIC_URL + '/images/check.jpg'}/>
                        Avg. speed of <span style={{color: '#9f04c6'}}>145</span> Mb/s
                    </div>
                    <div className='offer_tick'>
                        <img alt='' style={offerCheck} src={process.env.PUBLIC_URL + '/images/check.jpg'}/>
                        No mid-contract price rises
                    </div>
                    <div className='offer_tick'>
                        <img alt='' style={offerCheck} src={process.env.PUBLIC_URL + '/images/check.jpg'}/>
                        No set-up fee
                    </div>
                    <div className='offer_tick'>
                        <img alt='' style={offerCheck} src={process.env.PUBLIC_URL + '/images/check.jpg'}/>
                        SuperSafe security included
                    </div>
                    <div className='offer_tick'>
                        <img alt='' style={offerCheck} src={process.env.PUBLIC_URL + '/images/check.jpg'}/>
                        Fixed Price Plus included
                    </div>

                    <div className='offer_button'>
                        <a className='moreBtn' href="#Please">Find out more ></a>
                    </div>
                </div>
            </div>
            }

            <div className='wifi_container'>
                <img alt='' className='wifi' src={process.env.PUBLIC_URL + '/images/wifi.png'}/>
            </div>

            <div className='offer_contact_tab'>

                <div id="Please">
                    Please enter your details below
                </div>

                <NameForm/>

                <br />
                <div className='offer_bottom_text'>
                    Your information is safe & secure on this website. By clicking "Submit", you are consenting to be
                    contacted by the service provider above via Telephone, Email and SMS. We will only share the
                    details you provided with them and no one else
                </div>
            </div>

        </div>
    );
}
  