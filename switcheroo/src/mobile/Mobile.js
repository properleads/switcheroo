import React from "react";
import $ from "jquery";
import "./mobile.css";

export function MobilePage() {

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

    function compareNowMobile(e) {
        window.location.href = '/mobile/journey';
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

        <div className='mobilenewPage'>

            <div className='mobilemainHeaderNew'>

                <div className='mobileheaderImage'>
                    <div className='mobileheaderPosition'>
                        <div className='mobileheaderH1'>
                            Get Accepted For A Phone Today
                        </div>
                        <div className='mobileheaderH2'>
                            Super Fast Process <br/>
                            All Applications Welcome <br/>
                            No Messing About n That <br/>
                            All The Lastest Smart Phones <br/>
                        </div>
                    </div>

                    <button className='mobilelastButton headerButton' onClick={compareNowMobile}>
                        <span className='mobilelastButtonText'>Get Your Deal Now ></span>
                    </button>

                </div>

                <div className='mobilethirdHeader providersNew'>
                    <img className='mobileprovidersNewImg' alt=''
                         src={process.env.PUBLIC_URL + '/images/mobile/mobile-providers.png'}/>

                    <img className='mobileprovidersMobile' alt=''
                         src={process.env.PUBLIC_URL + '/images/mobile/mobile_providers.png'}/>

                </div>

                <div className='mobilefourthHeader'>
                    <div className='mobilefourthHeaderTitle'>
                        Mobile Deals For All Credit Levels
                    </div>

                    <div className='mobileSquare'>
                        <div className='mobileSuqere1'>
                            <img className='' alt=''
                                 src={process.env.PUBLIC_URL + '/images/mobile/check.png'}/><br/>
                            <span>Free</span><br/>
                            Our eligibilty check totally free!
                        </div>
                    </div>

                    <div className='mobileSquare'>
                        <div className='mobileSuqere2'>
                            <img className='' alt=''
                                 src={process.env.PUBLIC_URL + '/images/mobile/phone.png'}/><br/>
                            <span>Contract</span><br/>
                            The deal that suits you!
                        </div>
                    </div>

                    <div className='mobileSquare'>
                        <div className='mobileSuqere3'>
                            <img className='' alt=''
                                 src={process.env.PUBLIC_URL + '/images/mobile/cog.png'}/><br/>
                            <span>Control</span><br/>
                            You choose when to pay!
                        </div>
                    </div>

                    <div className='mobileSquare'>
                        <div className='mobileSuqere4'>
                            <img className='' alt=''
                                 src={process.env.PUBLIC_URL + '/images/mobile/contact.png'}/> <br/>
                            <span>SIM</span><br/>
                            Find your best SIM deal!
                        </div>
                    </div>

                    <button className='mobilelastButton ticksss' onClick={compareNowMobile}>
                        Get Your Deal Now >
                    </button>

                </div>

                <div className='mobiletestemonials'>

                    <div className='mobiletestemonialsTitle'>
                        What Our Customers Think
                    </div>

                    <div className='mobilearrowLeft'>
                        <img alt='' src={process.env.PUBLIC_URL + '/images/new/Icon-7.svg'}/>
                    </div>

                    <div className='mobiletestemonialsText'>
                        “Quick, easy and it only took a few minutes to save money for the next 18 months. Time well
                        spent.” <br/>
                        <span>- Robert Stamp, Wigan</span>
                    </div>
                    <div className='mobiletestemonialsImage'>
                        <img alt='' src={process.env.PUBLIC_URL + '/images/new/stars.png'}/>
                    </div>

                    <div className='mobilearrowRight'>
                        <img alt='' src={process.env.PUBLIC_URL + '/images/new/Icon-7.svg'}/>
                    </div>

                </div>

                <div className='mobileFifthHeader'>
                    <div className='mobileFifthHeaderTitle'>
                        Need Unlimited Data For Social Media?
                    </div>

                    <div className='bottomText'>
                        Some dead convincing copy about 2020 being the year of social media and tech keeping us
                        together. You too can keep in constant touch with family and friends with unlimted data for
                        Social Media.
                    </div>

                    <button className='mobilelastButton buttomBurron' onClick={compareNowMobile}>
                        Get Your Deal Now >
                    </button>

                </div>

            </div>

        </div>

    );
}
  