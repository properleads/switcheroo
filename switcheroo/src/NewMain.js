import React from "react";
import $ from "jquery";
import "./New.css";

export function NewMainPage() {

    var postCode = '';

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

    function getFee(isMember) {
        return (isMember ? isMember[0] : 0);
    }

    var urlString = window.location.href.replace('%20', ' ');
    var urlParams = parseURLParams(urlString);

    if (typeof urlParams === 'undefined') urlParams = [];

    var c1 = 'c1=' + getFee(urlParams.c1);
    var c2 = 'c2=' + getFee(urlParams.c2);
    var c3 = 'c3=' + getFee(urlParams.c3);
    var ssid = 'ssid=' + getFee(urlParams.ssid);
    var source = 'source=' + getFee(urlParams.source);

    function handleChange(e) {
        postCode = e.target.value;
    }

    function handleSubmit(e) {
        if (postCode.length < 6) {
            alert('Postcode field is mandatory');
            return;
        }
        window.location.href = '/journey?postcode=' + postCode + '&' + ssid + '&' + c1 + '&' + c2 + '&' + c3 + '&' + source;
    }

    function originBroadband(e) {
        window.location.href = '/offer?postcode=0&ssid=0&c1=Sky&c2=Super%20Fast&c3=No&source=0&cid=1&ck=2';
    }

    function talkAdsl(e) {
        window.location.href = '/offer?postcode=0&ssid=0&c1=Sky&c2=Super%20Fast&c3=No&source=0&cid=2&ck=2';
    }

    function originFiber(e) {
        window.location.href = '/offer?postcode=0&ssid=0&c1=Sky&c2=Super%20Fast&c3=No&source=0&cid=3&ck=2';
    }

    function talktalkFiber(e) {
        window.location.href = '/offer?postcode=0&ssid=0&c1=Sky&c2=Super%20Fast&c3=No&source=0&cid=4&ck=2';
    }

    function compareNow(e) {
        window.location.href = '/';
    }

    $('#post_code_input').keydown(function (event) {
        let keyPressed = event.keyCode || event.which;
        if (keyPressed === 13) {
            this.handleSubmit();
        }
    });

    // When the user clicks on the button, scroll to the top of the document
    function topFunction() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }

    $(document).scroll(function (e) {
        if ($(this).scrollTop() > 500) {
            $("#inputPosition").css({
                "position": "fixed",
                "z-index": "999",
                "top": "0",
                "width": "1071px",
                "height": "100px",
                "text-align": "center",
                "background-color": "rgba(23, 91, 168, 0.74)",
                "padding-top": "20px"
            });
            $(".headerInputButton").css({
                "left": "570px",
                "top": "25px"
            });
            $(".headerInputIcon").css({
                "left": "289px",
                "top": "35px"
            });
        } else {
            $("#inputPosition").css({
                "position": "relative",
                "padding-top": "20px",
                "padding-left": "18px",
                "background-color": "rgba(76, 175, 80, 0)",
                "text-align": "left"
            });
            $(".headerInputIcon").css({
                "left": "37px",
                "top": "35px"
            });
            $(".headerInputButton").css({
                "left": "319px",
                "top": "25px"
            });
        }

        if ($('.newPage').width() < 376) {

            if ($(this).scrollTop() > 200) {
                $(".inputPositionMobile").css({
                    "position": "fixed",
                    "z-index": "999",
                    "top": "0",
                    "width": "1071px",
                    "height": "100px",
                    "text-align": "center",
                    "background-color": "rgba(23, 91, 168, 0.74)",
                    "padding-top": "20px",
                    "margin-top": "0px"
                });
                $(".headerInputButtonMobile").css({
                    "left": "81%",
                    "top": "25px"
                });
                $(".headerInputIconMobile").css({
                    "left": "2.5em",
                    "top": "2.6em"
                });
                $(".headerInputMobile").css({
                    "width": "91%"
                });
            } else {
                $(".inputPositionMobile").css({
                    "position": "relative",
                    "background-color": "rgba(23, 91, 168, 0)",
                    "text-align": "left",
                    "margin-top": "-88px"
                });
                $(".headerInputMobile").css({
                    "width": "94%"
                });

                $(".headerInputButtonMobile").css({
                    "left": "81%",
                    "top": "25px"
                });
                $(".headerInputIconMobile").css({
                    "left": "29px",
                    "top": "35px"
                });
            }


        } else {

            if ($(this).scrollTop() > 200) {
                $(".inputPositionMobile").css({
                    "position": "fixed",
                    "z-index": "999",
                    "top": "0",
                    "width": "1071px",
                    "height": "100px",
                    "text-align": "center",
                    "background-color": "rgba(23, 91, 168, 0.74)",
                    "padding-top": "20px",
                    "margin-top": "0px"
                });
                $(".headerInputButtonMobile").css({
                    "left": "82.5%",
                    "top": "25px"
                });
                $(".headerInputIconMobile").css({
                    "left": "2.5em",
                    "top": "2.6em"
                });
                $(".headerInputMobile").css({
                    "width": "91%"
                });
            } else {
                $(".inputPositionMobile").css({
                    "position": "relative",
                    "background-color": "rgba(23, 91, 168, 0)",
                    "text-align": "left",
                    "margin-top": "-88px"
                });
                $(".headerInputMobile").css({
                    "width": "94%"
                });

                $(".headerInputButtonMobile").css({
                    "left": "82.5%",
                    "top": "25px"
                });
                $(".headerInputIconMobile").css({
                    "left": "29px",
                    "top": "35px"
                });
            }

        }


    });

    return (

        <div className='newPage'>

            <div className='mainHeaderNew'>

                <div className='headerImage'>
                    <div className='headerPosition'>
                        <div className='headerH1'>
                            Cheaper Bills. Forever.
                        </div>
                        <div className='headerH2'>
                            Looking around for the best broadband deals is a lot of hassle. We’ll do it for you, for free (forever). There’s no catch.
                        </div>
                    </div>
                    <div className='inputPosition' id='inputPosition'>
                        <input type='text' maxLength="7" className='headerInput' placeholder='Enter your postcode'
                               onChange={handleChange}/>
                        <img alt='' src={process.env.PUBLIC_URL + '/images/new/Icon.svg'} className='headerInputIcon'/>
                        <button className='headerInputButton' onClick={handleSubmit}>
                            <span className='headerInputButtonText'>Search Deals</span>
                            <img alt='' src={process.env.PUBLIC_URL + '/images/new/Icon-1.svg'}
                                 className='headerInputButtonIcon'/>
                        </button>
                    </div>

                    <div className='inputPositionMobile'>
                        <input type='text' maxLength="7" className='headerInputMobile' placeholder='Enter your postcode'
                               onChange={handleChange}/>
                        <img alt='' src={process.env.PUBLIC_URL + '/images/new/Icon.svg'}
                             className='headerInputIconMobile'/>
                        <button className='headerInputButtonMobile' onClick={handleSubmit}>
                            <span className='headerInputButtonText'>Search Deals</span>
                            <img alt='' src={process.env.PUBLIC_URL + '/images/new/Icon-1.svg'}
                                 className='headerInputButtonIcon'/>
                        </button>
                    </div>

                </div>

                <div className='secondHeader ticks'>
                    <div className='secondHeaderTitle'>
                        Why Use Switcheroo?
                    </div>

                    <div className='secondHeaderSection'>
                        <div className='secondHeaderSectionTitle'>
                            <img alt='' src={process.env.PUBLIC_URL + '/images/new/Icon-3.svg'}/> <br/>
                            Professional, Expert Service
                        </div>
                        <div className='secondHeaderSectionText'>
                            Our UK business works only with other UK based teams who speak your language.
                        </div>
                    </div>

                    <div className='secondHeaderSection'>
                        <div className='secondHeaderSectionTitle'>
                            <img alt='' src={process.env.PUBLIC_URL + '/images/new/Icon-3.svg'}/> <br/>
                            Speed guarantee
                        </div>
                        <div className='secondHeaderSectionText'>
                            All deals we promote have a personal speed guarantee. If not, your money back.
                        </div>
                    </div>

                    <div className='secondHeaderSection'>
                        <div className='secondHeaderSectionTitle'>
                            <img alt='' src={process.env.PUBLIC_URL + '/images/new/Icon-3.svg'}/> <br/>
                            Powerful & Free Hub
                        </div>
                        <div className='secondHeaderSectionText'>
                            Every package includes a free next generation router giving strong & powerful WiFi.
                        </div>
                    </div>

                    <div className='secondHeaderSection'>
                        <div className='secondHeaderSectionTitle'>
                            <img alt='' src={process.env.PUBLIC_URL + '/images/new/Icon-3.svg'}/> <br/>
                            Total Security
                        </div>
                        <div className='secondHeaderSectionText'>
                            Your data stored is behind powerful SSL security protection, firewalls & virus protection.
                        </div>
                    </div>

                </div>

                <div className='thirdHeader providersNew'>
                    <div className='thirdHeaderTitle'>
                        Broad Choice Of Providers
                    </div>
                    <img className='providersNewImg' alt='' src={process.env.PUBLIC_URL + '/images/new/providers.png'}/>
                    <img className='providersTalk' alt='' src={process.env.PUBLIC_URL + '/images/new/talk.png'}/>

                    <img className='providersMobile' alt=''
                         src={process.env.PUBLIC_URL + '/images/new/providers_mobile.png'}/>

                </div>

                <div className='fourthHeader'>
                    <div className='fourthHeaderTitle'>
                        Best Broadband Deals
                    </div>

                    <div className='offer offer_1'>
                        <div className='offerImage'>
                            <img alt='' src={process.env.PUBLIC_URL + '/images/new/download.png'}/>
                        </div>
                        <div className='offerBody'>

                            <div className='offerTitle'>
                                ADSL Deal
                            </div>

                            <div className='offerSubTitle'>
                                Origin Broadband
                            </div>

                            <div className='offerContent'>
                                Average Speed <br/>
                                <span>11 mbps</span>
                            </div>
                            <div className='offerContent offer_mobile'>
                                Download Cap <br/>
                                <span>Unlimited</span>
                            </div>

                            <div className='offerContent'>
                                Set Up Cost <br/>
                                <span>Free</span>
                            </div>

                            <div className='offerContent'>
                                Contract Length <br/>
                                <span>18 month</span>
                            </div>

                            <div className='offerContent'>
                                Cost Per Month <br/>
                                <span>£18.99</span>
                            </div>

                            <div className='mobileOffer offerContent'>
                                No hidden <br/>
                                <span>Fees</span>
                            </div>
                        </div>
                        <button className='offerButton' onClick={originBroadband}>
                            <span className='offerButtonText'>Get Details ></span>
                        </button>
                    </div>

                    <div className='offer offer_2'>
                        <div className='offerImageTalk'>
                            <img alt='' src={process.env.PUBLIC_URL + '/images/new/talk.png'}/>
                        </div>
                        <div className='offerBody'>

                            <div className='offerTitle talk1'>
                                ADSL Deal
                            </div>

                            <div className='offerSubTitle'>
                                Talk Talk 35
                            </div>

                            <div className='offerContent talk_cont_1 top_align_1'>
                                Average Speed <br/>
                                <span>38 mbps</span>
                            </div>
                            <div className='offerContent top_align_1'>
                                Download Cap <br/>
                                <span>Unlimited</span>
                            </div>

                            <div className='offerContent top_align_1'>
                                Set Up Cost <br/>
                                <span>Free</span>
                            </div>

                            <div className='offerContent top_align_1'>
                                Contract Length <br/>
                                <span>24 month</span>
                            </div>

                            <div className='offerContent top_align_1'>
                                Cost Per Month <br/>
                                <span>£23.50</span>
                            </div>

                            <div className='mobileOffer offerContent'>
                                No hidden <br/>
                                <span>Fees</span>
                            </div>

                        </div>
                        <button className='offerButton top_align_btn_1' onClick={talkAdsl}>
                            <span className='offerButtonText'>Get Details ></span>
                        </button>
                    </div>

                    <div className='offer offer_3'>
                        <div className='offerImage'>
                            <img alt='' src={process.env.PUBLIC_URL + '/images/new/download.png'}/>
                        </div>
                        <div className='offerBody'>

                            <div className='offerTitle talk1'>
                                Fibre Optic Deal
                            </div>

                            <div className='offerSubTitle'>
                                Origin Superfast
                            </div>

                            <div className='offerContent top_align_1'>
                                Average Speed <br/>
                                <span>117 mbps</span>
                            </div>
                            <div className='offerContent top_align_1'>
                                Download Cap <br/>
                                <span>Unlimited</span>
                            </div>

                            <div className='offerContent top_align_1'>
                                Set Up Cost <br/>
                                <span>Free</span>
                            </div>

                            <div className='offerContent top_align_1'>
                                Contract Length <br/>
                                <span>18 month</span>
                            </div>

                            <div className='offerContent top_align_1'>
                                Cost Per Month <br/>
                                <span>£23.99</span>
                            </div>

                            <div className='mobileOffer offerContent'>
                                No hidden <br/>
                                <span>Fees</span>
                            </div>

                        </div>
                        <button className='offerButton top_align_btn_1' onClick={originFiber}>
                            <span className='offerButtonText'>Get Details ></span>
                        </button>
                    </div>

                    <div className='offer offer_4'>
                        <div className='offerImageTalk talk2'>
                            <img alt='' src={process.env.PUBLIC_URL + '/images/new/talk.png'}/>
                        </div>
                        <div className='offerBody'>

                            <div className='offerTitle title_top_margin '>
                                Fibre Optic Deal
                            </div>

                            <div className='offerSubTitle'>
                                Talk Talk Fibre 150
                            </div>

                            <div className='offerContent talk_cont_2 top_align_1'>
                                Average Speed <br/>
                                <span>145 mbps</span>
                            </div>
                            <div className='offerContent top_align_1'>
                                Download Cap <br/>
                                <span>Unlimited</span>
                            </div>

                            <div className='offerContent top_align_1'>
                                Set Up Cost <br/>
                                <span>Free</span>
                            </div>

                            <div className='offerContent top_align_1'>
                                Contract Length <br/>
                                <span>24 month</span>
                            </div>

                            <div className='offerContent top_align_1'>
                                Cost Per Month <br/>
                                <span>£32.00</span>
                            </div>

                            <div className='mobileOffer offerContent'>
                                No hidden <br/>
                                <span>Fees</span>
                            </div>

                        </div>
                        <button className='offerButton top_align_btn_1' onClick={talktalkFiber}>
                            <span className='offerButtonText'>Get Details ></span>
                        </button>
                    </div>

                </div>

                <div className='fourthHeader fourthHeaderMobile'>
                    <div className='fourthHeaderTitle'>
                        Best Broadband Deals
                    </div>

                    <div className='offer offer_1'>
                        <div className='offerImage'>
                            <img alt='' src={process.env.PUBLIC_URL + '/images/new/download.png'}/>
                        </div>
                        <div className='offerBody'>

                            <div className='offerTitle'>
                                ADSL Deal
                            </div>

                            <div className='offerSubTitle'>
                                Origin Broadband
                            </div>

                            <div className='offerContent'>
                                Average Speed <br/>
                                <span>11 mbps</span>
                            </div>
                            <div className='offerContent offer_mobile'>
                                Download Cap <br/>
                                <span>Unlimited</span>
                            </div>

                            <div className='offerContent offer_lengths1'>
                                Contract Length <br/>
                                <span>18 month</span>
                            </div>

                            <div className='offerContent'>
                                Cost Per Month <br/>
                                <span className='mobile_price'>£18.99</span>
                            </div>

                            <div className='offerContent special'>
                                Set Up Cost <br/>
                                <span>Free</span>
                            </div>


                            <div className='mobileOffer offerContent'>
                                No hidden <br/>
                                <span>Fees</span>
                            </div>
                        </div>
                        <button className='offerButton' onClick={originBroadband}>
                            <span className='offerButtonText'>Get Details ></span>
                        </button>
                    </div>

                    <div className='offer offer_2'>
                        <div className='offerImageTalk'>
                            <img alt='' src={process.env.PUBLIC_URL + '/images/new/talk.png'}/>
                        </div>
                        <div className='offerBody'>

                            <div className='offerTitle talk1'>
                                ADSL Deal
                            </div>

                            <div className='offerSubTitle'>
                                Talk Talk 35
                            </div>

                            <div className='offerContent talk_cont_1 top_align_1'>
                                Average Speed <br/>
                                <span>38 mbps</span>
                            </div>
                            <div className='offerContent top_align_1 offer_2_desc'>
                                Download Cap <br/>
                                <span>Unlimited</span>
                            </div>

                            <div className='offerContent top_align_1 offer_lengths1'>
                                Contract Length <br/>
                                <span>24 month</span>
                            </div>

                            <div className='offerContent top_align_1 vasva'>
                                Cost Per Month <br/>
                                <span className='mobile_price'>£23.50</span>
                            </div>

                            <div className='offerContent top_align_1 special'>
                                Set Up Cost <br/>
                                <span>Free</span>
                            </div>

                            <div className='mobileOffer offerContent'>
                                No hidden <br/>
                                <span>Fees</span>
                            </div>

                        </div>
                        <button className='offerButton top_align_btn_1' onClick={talkAdsl}>
                            <span className='offerButtonText'>Get Details ></span>
                        </button>
                    </div>

                    <div className='offer offer_3'>
                        <div className='offerImage'>
                            <img alt='' src={process.env.PUBLIC_URL + '/images/new/download.png'}/>
                        </div>
                        <div className='offerBody'>

                            <div className='offerTitle'>
                                Fibre Optic Deal
                            </div>

                            <div className='offerSubTitle'>
                                Origin Superfast
                            </div>

                            <div className='offerContent top_align_1'>
                                Average Speed <br/>
                                <span>117 mbps</span>
                            </div>
                            <div className='offerContent top_align_1 offer_2_desc'>
                                Download Cap <br/>
                                <span>Unlimited</span>
                            </div>
                            <div className='offerContent top_align_1 offer_lengths1'>
                                Contract Length <br/>
                                <span>18 month</span>
                            </div>

                            <div className='offerContent top_align_1'>
                                Cost Per Month <br/>
                                <span className='mobile_price'>£23.99</span>
                            </div>

                            <div className='offerContent top_align_1 special'>
                                Set Up Cost <br/>
                                <span>Free</span>
                            </div>

                            <div className='mobileOffer offerContent'>
                                No hidden <br/>
                                <span>Fees</span>
                            </div>

                        </div>
                        <button className='offerButton top_align_btn_1' onClick={originFiber}>
                            <span className='offerButtonText'>Get Details ></span>
                        </button>
                    </div>

                    <div className='offer offer_4'>
                        <div className='offerImageTalk talk2'>
                            <img alt='' src={process.env.PUBLIC_URL + '/images/new/talk.png'}/>
                        </div>
                        <div className='offerBody'>

                            <div className='offerTitle title_top_margin '>
                                Fibre Optic Deal
                            </div>

                            <div className='offerSubTitle'>
                                Talk Talk Fibre 150
                            </div>

                            <div className='offerContent talk_cont_1 top_align_1'>
                                Average Speed <br/>
                                <span>145 mbps</span>
                            </div>
                            <div className='offerContent top_align_1 offer_2_desc'>
                                Download Cap <br/>
                                <span>Unlimited</span>
                            </div>

                            <div className='offerContent top_align_1 offer_lengths1'>
                                Contract Length <br/>
                                <span>24 month</span>
                            </div>

                            <div className='offerContent top_align_1 width'>
                                Cost Per Month <br/>
                                <span className='mobile_price'>£32.00</span>
                            </div>

                            <div className='offerContent top_align_1 special'>
                                Set Up Cost <br/>
                                <span>Free</span>
                            </div>

                            <div className='mobileOffer offerContent'>
                                No hidden <br/>
                                <span>Fees</span>
                            </div>

                        </div>
                        <button className='offerButton top_align_btn_1' onClick={talktalkFiber}>
                            <span className='offerButtonText'>Get Details ></span>
                        </button>
                    </div>

                </div>

                <div className='testemonials'>

                    <div className='testemonialsTitle'>
                        What Our Customers Think
                    </div>

                    <div className='arrowLeft'>
                        <img alt='' src={process.env.PUBLIC_URL + '/images/new/Icon-7.svg'}/>
                    </div>

                    <div className='testemonialsText'>
                        “Quick, easy and it only took a few minutes to save money for the next 18 months. Time well
                        spent.” <br/>
                        <span>- Robert Stamp, Wigan</span>
                    </div>
                    <div className='testemonialsImage'>
                        <img alt='' src={process.env.PUBLIC_URL + '/images/new/stars.png'}/>
                    </div>

                    <div className='arrowRight'>
                        <img alt='' src={process.env.PUBLIC_URL + '/images/new/Icon-7.svg'}/>
                    </div>

                </div>

                <div className='about'>

                    <div className='panelLeft'>

                        <span><a href='#broadband'>What is broadband? ></a></span><br/><br/>
                        <span><a href='#wifi'>What's wif? ></a></span><br/><br/>
                        <span><a href='#different'>What are the different types of Broadband? ></a></span><br/><br/>
                        <span><a href='#speed'>What is speed? ></a></span><br/><br/>
                        <span><a href='#switch'>So why would I need to switch to Broadband? ></a></span><br/><br/>
                        <span><a href='#provider'>Can I switch my Broadband provider? ></a></span><br/><br/>
                        <span><a href='#deal'>What makes a good deal? ></a></span><br/><br/>
                        <span><a href='#bundle'>What's in a bundle? ></a></span><br/><br/>

                    </div>

                    <div className="aboutDropDown">
                        <select id="anchortoselect" onChange={(e) => {
                            e.preventDefault();
                            let urlString = window.location.href.split('#')[0];
                            window.location.href = urlString + e.target.value;
                        }}>>
                            <option value=''>Choose Subject</option>
                            <option value="#broadband">What is broadband?</option>
                            <option value="#wifi">What's wif?</option>
                            <option value="#different">What are the different types of Broadband?</option>
                            <option value="#speed">What is speed?</option>
                            <option value="#switch">So why would I need to switch to Broadband?</option>
                            <option value="#provider">Can I switch my Broadband provider?</option>
                            <option value="#deal">What makes a good deal?</option>
                            <option value="#bundle">What's in a bundle?</option>
                        </select>
                    </div>

                    <div className='panelRight'>

                        <div className='aboutTitle about_1'>
                            What does it all mean?
                        </div>
                        <div className='aboutText'>
                            We know a thing or two broadband, and getting on the internet. So, we thought we would try
                            to
                            explain one or two things when it comes to broadband and switching.
                        </div>

                        <div className='aboutTitle about_2' id='broadband'>
                            So, what is broadband?
                        </div>
                        <div className='aboutText'>
                            Put simply, broadband is a widely-used term for the technology service that allows you to
                            access
                            the
                            internet. Originally delivered through BT phone lines, “always on” broadband meant that
                            people
                            could
                            use the internet without having to unplug their phones first (what was called dial-<br/>up).
                            <br/><br/>
                            Broadband has developed over the years, and now includes options such as ADSL, mobile,
                            cable,
                            fibre
                            optic, and satellite.
                        </div>
                        <div className='aboutTitle about_wifi' id='wifi'>
                            If that’s broadband, what’s wifi?
                        </div>
                        <div className='aboutText'>
                            Often mistaken as being the same thing, WiFi is a wireless way of connecting to the
                            internet.
                            You
                            may have broadband coming into your home, and you may have computers wired in to the
                            broadband,
                            but
                            you may also have a router device that then sends out a WiFi signal so that devices (like
                            laptops or
                            phones) don’t have to use wires to get online.

                        </div>
                        <div className='aboutTitle about_3' id='different'>
                            OK, but what are all the different types of broadband I hear about?
                        </div>
                        <div className='aboutText'>
                            <span>ADSL</span> Asymmetric Digital Subscriber Line, ADSL for short, is a broadband
                            connection that is
                            provided via your landline telephone line. Internet providers will have their software in
                            telephone
                            exchanges and rent “space” from Openreach (formerly BT and owner the telephone
                            infrastructure). If you use
                            this system, a filter will have been added to your phone socket so that calls and the
                            internet
                            can be separated in the home.
                            <br/><br/>
                            <span>CABLE</span> Able to offer faster speeds but not nearly as widely available as the
                            copper wire system,
                            cable (or rather coaxial cable) describes another way in which broadband gets from a cabinet
                            in
                            the street to your home. This method is used by providers such as Virgin Media.
                            <br/><br/>
                            <span>FIBRE OPTIC</span> This is when fibre optic cable, rather than copper wires, is used
                            to transmit data
                            from
                            the exchange either to a cabinet in the street (known as FTTC), or directly to your home
                            (FTTH).
                            When it gets to the cabinet, it is often then delivered to your home via the copper phone
                            lines.
                            This is why the speed to the cabinet may be very fast, but then slow a little when it gets
                            to
                            your
                            property. FTTH sounds ideal, but there is little availability here in the UK.
                            <br/><br/>
                            <span>MOBILE</span> As it suggests, mobile internet is when you have equipment that can
                            connect other devices
                            to
                            the internet without the need for cables. Mobile internet makes use of SIM cards, like a
                            mobile
                            phone, and internet speeds can vary depending on which package you choose. You might choose
                            this
                            option not particularly for the home, but if you are out quite a lot either through work or
                            leisure.
                            <br/><br/>
                            <span>SATELITE</span> This way of connecting to the internet uses satellite rather than
                            cables and cabinets.
                            It’s
                            a bit like satellite TV but, unlike TV, you can send information as well as receive it.
                            Satellite
                            broadband can be used anywhere, but is likely to be used where cable is not practical, or a
                            property
                            is so far from an exchange that the broadband connecion is effectively useless.

                        </div>
                        <div className='aboutTitle about_4' id='speed'>
                            Hmm, I often hear about broadband speed, what does it mean?
                        </div>
                        <div className='aboutText'>
                            Broadband speed basically means how fast you can upload or download data using your internet
                            connection. Speed can be critical to how you make your choice of which provider you choose
                            or
                            which
                            bundle you go for. For example, you may not watch a lot of movies, or stream TV shows or
                            play
                            web-based games, so you may not need the superfast broadband. <br/><br/>

                            If you’re working from home, which a lot of us are these days, you may need a fast speed to
                            send
                            big
                            files across to colleagues or clients.

                        </div>
                        <div className='aboutTitle' id='switch'>
                            So why would I need to switch broadband?
                        </div>
                        <div className='aboutText'>
                            There are many reasons why people switch broadband provider, but it is often because of
                            speeds.
                            People these days rely on internet connections that mean everyone in a house can get online.
                            Think
                            of a family perhaps where the adults are working on their laptops, and the children are
                            watching
                            boxsets or playing on their games consoles.

                            <br/><br/>
                            If a lot of people are using the internet, then it may slow down. If a house is far from the
                            exchange, then the broadband may not be strong. Some broadband providers are putting in
                            fibre
                            optic
                            cables ready to link up to people’s homes, and it might be that this is a faster option than
                            people’s current broadband provider.
                            <br/><br/>
                            Sometimes, it’s about price. It’s a highly-competitive market, and broadband providers often
                            have
                            deals on and offers to encourage people either to sign up or re-sign.

                        </div>
                        <div className='aboutTitle about_5' id='provider'>
                            Can I switch my broadband provider?
                        </div>
                        <div className='aboutText'>
                            Yes, you can switch broadband providers, but, be careful. If you are still in contract,
                            there is
                            usually a clause that says you cannot switch for a certain length of time. You’ll be tied in
                            and
                            there might well be chunky penalties for cancelling early and breaking the contract. Before
                            you
                            start looking, check your contract.

                        </div>
                        <div className='aboutTitle' id='deal'>
                            What makes a good deal?
                        </div>
                        <div className='aboutText'>
                            This depends on what you actually want. Assess what it is you are basing your buying
                            decision
                            on. Is
                            it about Speed? Cost? Contract length? Usage? Will it be powerful enough to keep you gaming
                            or
                            downloading boxsets or watching internet videos (if that’s what you want to do?
                            <br/><br/>
                            Do the monthly payments stack up for you? Can you afford it? Is the service you want
                            actually
                            available in your area? Might be a great deal but if it doesn’t do what you want or isn’t
                            available
                            at your address, it is worthless. Mind, if something fits the bill and is available, and
                            fits in
                            with your budget, you might have a good deal.
                            <br/><br/>
                            You might even get a freebie thrown in (be careful though, a freebie must not distract you
                            from
                            whether or not the actual deal is right).

                        </div>
                        <div className='aboutTitle' id='bundle'>
                            What’s in a bundle?
                        </div>
                        <div className='aboutText'>
                            On rare occasions, you can get broadband on its own. However, it’s more likely that it will
                            be
                            part
                            of a bundle. What this means is one provider will offer you a telephone, broadband, and
                            perhaps
                            TV
                            in a bundle. A number of services, but one provider.
                            <br/><br/>
                            In terms of cost, have a serious ponder about the individual services you may need. Then,
                            have a
                            look at bundles that have those services. It might be that you could get them cheaper from
                            the
                            one
                            provider.

                        </div>

                    </div>

                </div>

                <div className="lastButtonDiv">

                    <div className='backToTop'>
                        <button onClick={topFunction} id="myBtn" title="Go to top">
                            <img alt='' src={process.env.PUBLIC_URL + '/images/new/backBtn.jpg'}/> <br/>
                            Back to top
                        </button>
                    </div>

                    <button className='lastButton' onClick={compareNow}>
                        <span className='lastButtonText'>Compare Now ></span>
                    </button>
                </div>

            </div>

        </div>

    );
}
  