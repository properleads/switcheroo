import React from "react";
import $ from "jquery";
import "./lander.css";

export function LanderPage() {

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
    var gclid = 'gclid=' + getFee(urlParams.gclid);
    var msclkid = 'msclkid=' + getFee(urlParams.msclkid);

    var client = 'cid=' + getFee(urlParams.cid);

    var ck = 'ck=' + getFee(urlParams.cid);

    function handleChange(e) {
        postCode = e.target.value;
    }

    function handleSubmit(e) {

        if (postCode.length < 6) {
            alert('Postcode field is mandatory');
            return;
        }

        window.location.href = '/journey?postcode=' + postCode + '&' + ssid + '&' + c1 + '&' + c2 + '&' + c3 + '&' + source + '&' + gclid + '&' + msclkid + '&' + client + '&' + ck;

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

    function energy(e) {
        window.location.href = '/energy?postcode=' + postCode + '&' + ssid + '&' + c1 + '&' + c2 + '&' + c3 + '&' + source + '&' + gclid + '&' + msclkid + '&' + client + '&' + ck;
    }

    function broadband(e) {
        window.location.href = '/broadband/new?postcode=' + postCode + '&' + ssid + '&' + c1 + '&' + c2 + '&' + c3 + '&' + source + '&' + gclid + '&' + msclkid + '&' + client + '&' + ck;
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
        if ($(this).scrollTop() > 500 && $('.landernewPage').width() > 500) {
            $("#inputPosition").css({
                "position": "fixed",
                "z-index": "999",
                "top": "0",
                "width": "1060px",
                "height": "100px",
                "text-align": "center",
                "background-color": "rgba(235, 237, 237, 0.74)",
                "padding-top": "20px",
                "left": "230px",
                "display": "inline-block"
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
                "text-align": "left",
                "display": "none"
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

        //if ($('.newPage').width() < 376) {

        if ($(this).scrollTop() > 200  && $('.landernewPage').width() < 500) {
            $(".landerinputPositionMobile").css({
                "position": "fixed",
                "z-index": "999",
                "top": "0",
                "width": "1071px",
                "height": "100px",
                "text-align": "center",
                "background-color": "rgba(235, 237, 237, 0.74)",
                "padding-top": "20px",
                "margin-top": "0px",
                "display": "inline-block"
            });
            $(".landerheaderInputButtonMobile").css({
                "left": "81%",
                "top": "25px"
            });
            $(".landerheaderInputIconMobile").css({
                "left": "2.5em",
                "top": "2.6em"
            });
            $(".landerheaderInputMobile").css({
                "width": "91%"
            });
        } else {
            $(".landerinputPositionMobile").css({
                "position": "relative",
                "background-color": "rgba(23, 91, 168, 0)",
                "text-align": "left",
                "margin-top": "-88px",
                "display": "none"
            });
            $(".landerheaderInputMobile").css({
                "width": "94%"
            });

            $(".landerheaderInputButtonMobile").css({
                "left": "81%",
                "top": "25px"
            });
            $(".landerheaderInputIconMobile").css({
                "left": "29px",
                "top": "35px"
            });
        }

    });

    return (

        <div className='landernewPage'>

            <div className='landermainHeaderNew'>

                <div className='landerheaderImagelander'>
                    <div className='landerheaderPosition'>
                        <div className='landerheaderH1'>
                            Cheaper Bills. Forever.
                        </div>
                        <div className='landerheaderH2'>
                            Looking around for the best deals is a lot of hassle. We’ll do it for you, for free
                            (forever).
                            There’s no catch.
                        </div>
                    </div>

                    <div className='landerlanderButtonsDiv'>
                        <div className='landerlanderTopSqure' onClick={energy}>
                            <img alt='' src={process.env.PUBLIC_URL + '/images/lander/energy.svg'}/>
                            <div className='landerfirstSqareText'>Energy</div>
                            <div className='landersecondSqareText'>Save Up To £350* ></div>
                        </div>
                        <div className='landerlanderTopSqure' onClick={broadband}>
                            <img alt='' src={process.env.PUBLIC_URL + '/images/lander/wifi.svg'}/>
                            <div className='landerfirstSqareText'>Broadband</div>
                            <div className='landersecondSqareText'>Faster, Cheaper Internet ></div>
                        </div>
                        <div className='landerlanderTopSqure'>
                            <img alt='' src={process.env.PUBLIC_URL + '/images/lander/home.svg'}/>
                            <div className='landerfirstSqareText'>Home Insurance</div>
                            <div className='landersecondSqareText'>Peace Of Mind For Less ></div>
                        </div>
                        <div className='landerlanderTopSqure'>
                            <img alt='' src={process.env.PUBLIC_URL + '/images/lander/mobile.svg'}/>
                            <div className='landerfirstSqareText'>Mobile</div>
                            <div className='landersecondSqareText'>Pay Less For More ></div>
                        </div>

                    </div>


                    <div className='landerinputPosition' id='inputPosition'>
                        <input type='text' maxLength="7" className='landerheaderInput' placeholder='Enter your postcode'
                               onChange={handleChange}/>
                        <img alt='' src={process.env.PUBLIC_URL + '/images/new/Icon.svg'}
                             className='landerheaderInputIcon'/>
                        <button className='landerheaderInputButton' onClick={handleSubmit}>
                            <span className='landerheaderInputButtonText'>Search Deals</span>
                            <img alt='' src={process.env.PUBLIC_URL + '/images/new/Icon-1.svg'}
                                 className='landerheaderInputButtonIcon'/>
                        </button>
                    </div>

                    <div className='landerinputPositionMobile'>
                        <input type='text' maxLength="7" className='landerheaderInputMobile'
                               placeholder='Enter your postcode'
                               onChange={handleChange}/>
                        <img alt='' src={process.env.PUBLIC_URL + '/images/new/Icon.svg'}
                             className='landerheaderInputIconMobile'/>
                        <button className='landerheaderInputButtonMobile' onClick={handleSubmit}>
                            <span className='landerheaderInputButtonText'>Search Deals</span>
                            <img alt='' src={process.env.PUBLIC_URL + '/images/new/Icon-1.svg'}
                                 className='landerheaderInputButtonIcon'/>
                        </button>
                    </div>

                </div>

                <div className='landersecondHeader ticks'>
                    <div className='landersecondHeaderTitle'>
                        Why Use Switcheroo?
                    </div>

                    <div className='landersecondHeaderSection'>
                        <div className='landersecondHeaderSectionTitle'>
                            <img alt=''
                                 src={process.env.PUBLIC_URL + '/images/lander/3963a7d5-e403-44df-a5d0-e1bf82b4abf3.png'}/>
                            <br/>
                            Professional, Expert Service
                        </div>
                        <div className='landersecondHeaderSectionText'>
                            Our UK business works only with other UK based teams who speak your language.
                        </div>
                    </div>

                    <div className='landersecondHeaderSection'>
                        <div className='landersecondHeaderSectionTitle'>
                            <img alt=''
                                 src={process.env.PUBLIC_URL + '/images/lander/3963a7d5-e403-44df-a5d0-e1bf82b4abf3.png'}/>
                            <br/>
                            Speed guarantee
                        </div>
                        <div className='landersecondHeaderSectionText'>
                            All deals we promote have a personal speed guarantee. If not, your money back.
                        </div>
                    </div>

                    <div className='landersecondHeaderSection'>
                        <div className='landersecondHeaderSectionTitle'>
                            <img alt=''
                                 src={process.env.PUBLIC_URL + '/images/lander/3963a7d5-e403-44df-a5d0-e1bf82b4abf3.png'}/>
                            <br/>
                            Powerful & Free Hub
                        </div>
                        <div className='landersecondHeaderSectionText'>
                            Every package includes a free next generation router giving strong & powerful WiFi.
                        </div>
                    </div>

                    <div className='landersecondHeaderSection'>
                        <div className='landersecondHeaderSectionTitle'>
                            <img alt=''
                                 src={process.env.PUBLIC_URL + '/images/lander/3963a7d5-e403-44df-a5d0-e1bf82b4abf3.png'}/>
                            <br/>
                            Total Security
                        </div>
                        <div className='landersecondHeaderSectionText'>
                            Your data stored is behind powerful SSL security protection, firewalls & virus protection.
                        </div>
                    </div>

                </div>

                <div className='landerthirdHeader landerprovidersNew'>
                    <img className='landerprovidersNewImg' alt=''
                         src={process.env.PUBLIC_URL + '/images/new/providers.png'}/>
                    <img className='landerprovidersTalk' alt='' src={process.env.PUBLIC_URL + '/images/new/talk.png'}/>
                    <img className='landerprovidersMobile' alt=''
                         src={process.env.PUBLIC_URL + '/images/new/providers_mobile.png'}/>
                </div>

                <div className='landerHand'>
                    <div className='landersecondHeaderTitle second'>
                        Save On The Go
                    </div>
                    <div className='landerHandLeftLangerThird'>
                        <img className='landerMobile' alt=''
                             src={process.env.PUBLIC_URL + '/images/lander/DeskTop_Mob.png'}/>
                    </div>
                    <div className='landerHandrightLangerThird alignHand'>

                        <div className='landerHandText'>
                            <div className='handImage'>
                                <img className='' alt=''
                                     src={process.env.PUBLIC_URL + '/images/lander/clock.png'}/>
                            </div>
                            <div className='handText'>
                                More Time For You
                                <br/>
                                <span>Why spend hours searching for the best deal when we can do it for you?</span>
                            </div>
                        </div>
                        <div className='landerHandText'>
                            <div className='handImage'>
                                <img className='handImageCalc' alt=''
                                     src={process.env.PUBLIC_URL + '/images/lander/calc.png'}/>
                            </div>
                            <div className='handText'>
                                More Options For You
                                <br/>
                                <span>We calculate multiple options to find the most suitable deal for your status.</span>
                            </div>
                        </div>
                        <div className='landerHandText'>
                            <div className='handImage'>
                                <img className='handImagePound' alt=''
                                     src={process.env.PUBLIC_URL + '/images/lander/PUND-SIGNpng.png'}/>
                            </div>
                            <div className='handText'>
                                More Money For You
                                <br/>
                                <span>We take into account your financial sitation in order to give you the best deal FOR LESS.</span>
                            </div>
                        </div>
                    </div>

                    <div className='mobileHand'>
                        <img className='landerMobile' alt=''
                             src={process.env.PUBLIC_URL + '/images/lander/MOB-ALL-GRAPHICS.png'} />
                    </div>

                </div>

                <div className='landerfourthHeader'>
                    <div className='landersecondHeaderTitle second'>
                        Best Current Deals
                    </div>

                    <div className='landeroffer offer_1'>

                        <div className='landerofferImageWifi'>
                            <img alt='' src={process.env.PUBLIC_URL + '/images/lander/wifi.svg'}/>
                        </div>

                        <div className='landerofferBody'>

                            <div className='landerofferTitle firstAdsl'>
                                ADSL Broadband Deal
                            </div>

                            <div className='landerofferSubTitle'>
                                Origin Broadband
                            </div>

                            <div className='landerofferContent'>
                                Average Speed <br/>
                                <span>11 mbps</span>
                            </div>
                            <div className='landerofferContent offer_mobile'>
                                Download Cap <br/>
                                <span>Unlimited</span>
                            </div>

                            <div className='landerofferContent'>
                                Set Up Cost <br/>
                                <span>Free</span>
                            </div>

                            <div className='landerofferContent'>
                                Contract Length <br/>
                                <span>18 month</span>
                            </div>

                            <div className='landerofferContent'>
                                Cost Per Month <br/>
                                <span>£18.99</span>
                            </div>

                            <div className='landermobileOffer offerContent'>
                                No hidden <br/>
                                <span>Fees</span>
                            </div>
                        </div>
                        <div className='landerofferImageOrigin'>
                            <img alt='' src={process.env.PUBLIC_URL + '/images/new/download.png'}/>
                        </div>
                        <button className='landerofferButton' onClick={originBroadband}>
                            <span className='landerofferButtonText'>Get Details ></span>
                        </button>
                    </div>

                    <div className='landeroffer offer_2'>

                        <div className='landerofferImageWifi'>
                            <img alt='' src={process.env.PUBLIC_URL + '/images/lander/wifi.svg'}/>
                        </div>
                        <div className='landerofferBody'>

                            <div className='landerofferTitle talk1'>
                                Fibre Broadband Deal
                            </div>

                            <div className='landerofferSubTitle'>
                                Talk Talk 35
                            </div>

                            <div className='landerofferContent landertop_align_1'>
                                Average Speed <br/>
                                <span>38 mbps</span>
                            </div>
                            <div className='landerofferContent top_align_1'>
                                Download Cap <br/>
                                <span>Unlimited</span>
                            </div>

                            <div className='landerofferContent top_align_1'>
                                Set Up Cost <br/>
                                <span>Free</span>
                            </div>

                            <div className='landerofferContent top_align_1'>
                                Contract Length <br/>
                                <span>24 month</span>
                            </div>

                            <div className='landerofferContent top_align_1'>
                                Cost Per Month <br/>
                                <span>£23.50</span>
                            </div>

                            <div className='landermobileOffer offerContent'>
                                No hidden <br/>
                                <span>Fees</span>
                            </div>

                        </div>
                        <div className='landerofferImageTalk'>
                            <img alt='' src={process.env.PUBLIC_URL + '/images/new/talk.png'}/>
                        </div>
                        <button className='landerofferButton top_align_btn_1' onClick={talkAdsl}>
                            <span className='landerofferButtonText'>Get Details ></span>
                        </button>
                    </div>

                    <div className='landeroffer offer_3'>
                        <div className='landerofferImage'>
                            <img alt='' src={process.env.PUBLIC_URL + '/images/lander/energy.svg'}/>
                        </div>
                        <div className='landerofferBody'>

                            <div className='landerofferTitle talk1'>
                                Energy Dual Deal
                            </div>

                            <div className='landerofferSubTitle'>
                                Octopus Energy
                            </div>

                            <div className='landerofferContent landertalk_cont_1 landertop_align_1'>
                                Electricity Cost <br/>
                                <span>£65.15</span>
                            </div>
                            <div className='landerofferContent landertop_align_1'>
                                Gas Cost <br/>
                                <span>£337.68</span>
                            </div>

                            <div className='landerofferContent landertop_align_1'>
                                Annual Total <br/>
                                <span>£940.71</span>
                            </div>

                            <div className='landerofferContent landertop_align_1'>
                                Contract Length <br/>
                                <span>12 month</span>
                            </div>

                            <div className='landerofferContent landertop_align_1'>
                                Cost Per Month <br/>
                                <span>£78.39</span>
                            </div>

                            <div className='landermobileOffer landerofferContent'>
                                No hidden <br/>
                                <span>Fees</span>
                            </div>

                        </div>
                        <div className='landerofferImageOctopus'>
                            <img alt=''
                                 src={process.env.PUBLIC_URL + '/images/lander/oct-logo-e-7-f-842-b-5-c-92561-a-7072184-a-2021-f-7978-png.png'}/>
                        </div>
                        <button className='landerofferButton top_align_btn_1' onClick={originFiber}>
                            <span className='landerofferButtonText'>Get Details ></span>
                        </button>
                    </div>

                    <div className='landeroffer offer_4'>
                        <div className='landerofferImageMobile'>
                            <img alt='' src={process.env.PUBLIC_URL + '/images/lander/mobile.svg'}/>
                        </div>
                        <div className='landerofferBody'>

                            <div className='landerofferTitle title_top_margin '>
                                Mobile Deal
                            </div>

                            <div className='landerofferSubTitle'>
                                Vodafone
                            </div>

                            <div className='landerofferContent landertalk_cont_1 landertop_align_1'>
                                Mobile Phone <br/>
                                <span>iPhone 11</span>
                            </div>
                            <div className='landerofferContent top_align_1'>
                                Storage <br/>
                                <span>64 GB</span>
                            </div>

                            <div className='landerofferContent top_align_1'>
                                Set Up Cost <br/>
                                <span>£9</span>
                            </div>

                            <div className='landerofferContent top_align_1'>
                                Contract Length <br/>
                                <span>24 month</span>
                            </div>

                            <div className='landerofferContent top_align_1'>
                                Cost Per Month <br/>
                                <span>£47.00</span>
                            </div>

                            <div className='landermobileOffer offerContent'>
                                No hidden <br/>
                                <span>Fees</span>
                            </div>

                        </div>
                        <div className='landerofferImageVoda'>
                            <img alt='' src={process.env.PUBLIC_URL + '/images/voda.jpg'}/>
                        </div>
                        <button className='landerofferButton top_align_btn_1' onClick={talktalkFiber}>
                            <span className='landerofferButtonText'>Get Details ></span>
                        </button>
                    </div>

                    <div className='landeroffer offer_5'>
                        <div className='landerofferImage'>
                            <img alt='' src={process.env.PUBLIC_URL + '/images/lander/home.svg'}/>
                        </div>
                        <div className='landerofferBody'>

                            <div className='landerofferTitle title_top_margin '>
                                House Insurance
                            </div>

                            <div className='landerofferSubTitle'>
                                Direct Line
                            </div>

                            <div className='landerofferContent landertalk_cont_1 landertop_align_1'>
                                Insurance Type <br/>
                                <span>House & Contents</span>
                            </div>
                            <div className='landerofferContent top_align_1'>
                                Excess <br/>
                                <span>£250</span>
                            </div>

                            <div className='landerofferContent top_align_1'>
                                Contract <br/>
                                <span>12 month</span>
                            </div>

                            <div className='landerofferContent top_align_1'>
                                Cost Per Month <br/>
                                <span>£18.99</span>
                            </div>


                        </div>
                        <div className='landerofferImageDirect'>
                            <img alt=''
                                 src={process.env.PUBLIC_URL + '/images/lander/download-1-b-5-d-2103-ea-0-f-6-e-78-f-32560-c-7-cb-48-bb-1-da-png.png'}/>
                        </div>
                        <button className='landerofferButton top_align_btn_1' onClick={talktalkFiber}>
                            <span className='landerofferButtonText'>Get Details ></span>
                        </button>
                    </div>

                </div>

                <div className='landerfourthHeader fourthHeaderMobile'>
                    <div className='landerfourthHeaderTitle'>
                        Best Broadband Deals
                    </div>

                    <div className='landeroffer'>
                        <div className='landerofferImageWifi'>
                            <img alt='' src={process.env.PUBLIC_URL + '/images/lander/wifi.svg'}/>
                        </div>
                        <div className='landerofferBody'>

                            <div className='landerofferTitle'>
                                ADSL Broadband Deal
                            </div>

                            <div className='landerofferSubTitle'>
                                Origin Broadband
                            </div>

                            <div className='landerofferContent'>
                                Average Speed <br/>
                                <span>11 mbps</span>
                            </div>
                            <div className='landerofferContent'>
                                Download Cap <br/>
                                <span>Unlimited</span>
                            </div>

                            <div className='landerofferContent'>
                                Set Up Cost <br/>
                                <span>Free</span>
                            </div>

                            <div className='landerofferContent '>
                                Contract Length <br/>
                                <span>18 month</span>
                            </div>

                            <div className='landerofferContent'>
                                Cost Per Month <br/>
                                <span>£18.99</span>
                            </div>

                            <div className='landermobileOffer '>
                                <div className='landerofferImageOrigin'>
                                    <img alt='' src={process.env.PUBLIC_URL + '/images/new/download.png'}/>
                                </div>
                            </div>

                        </div>
                        <button className='landerofferButton' onClick={originBroadband}>
                            <span className='landerofferButtonText'>Get Details ></span>
                        </button>
                    </div>

                    <div className='landeroffer'>
                        <div className='landerofferImageWifi'>
                            <img alt='' src={process.env.PUBLIC_URL + '/images/lander/wifi.svg'}/>
                        </div>
                        <div className='landerofferBody'>

                            <div className='landerofferTitle'>
                                Fibre Broadband Deal
                            </div>

                            <div className='landerofferSubTitle'>
                                Talk Talk 35
                            </div>

                            <div className='landerofferContent '>
                                Average Speed <br/>
                                <span>38 mbps</span>
                            </div>
                            <div className='landerofferContent '>
                                Download Cap <br/>
                                <span>Unlimited</span>
                            </div>

                            <div className='landerofferContent '>
                                Set Up Cost <br/>
                                <span>Free</span>
                            </div>

                            <div className='landerofferContent '>
                                Contract Length <br/>
                                <span>24 month</span>
                            </div>

                            <div className='landerofferContent '>
                                Cost Per Month <br/>
                                <span>£23.50</span>
                            </div>

                            <div className='landermobileOffer '>
                                <div className='landerofferImageTalk'>
                                    <img alt='' src={process.env.PUBLIC_URL + '/images/new/talk.png'}/>
                                </div>
                            </div>

                        </div>
                        <button className='landerofferButton ' onClick={talkAdsl}>
                            <span className='landerofferButtonText'>Get Details ></span>
                        </button>
                    </div>

                    <div className='landeroffer '>
                        <div className='landerofferImage'>
                            <img alt='' src={process.env.PUBLIC_URL + '/images/lander/energy.svg'}/>
                        </div>
                        <div className='landerofferBody'>

                            <div className='landerofferTitle'>
                                Energy Dual Deal
                            </div>

                            <div className='landerofferSubTitle'>
                                Octopus Energy
                            </div>

                            <div className='landerofferContent '>
                                Electricity Cost <br/>
                                <span>£65.15</span>
                            </div>
                            <div className='landerofferContent '>
                                Gas Cost <br/>
                                <span>£337.68</span>
                            </div>
                            <div className='landerofferContent '>
                                Annual Total <br/>
                                <span>£940.71</span>
                            </div>

                            <div className='landerofferContent top_align_1'>
                                Contract Length <br/>
                                <span>12 month</span>
                            </div>

                            <div className='landerofferContent '>
                                Cost Per Month <br/>
                                <span>£78.39</span>
                            </div>

                            <div className='landermobileOffer'>
                                <div className='landerofferImageOctopus'>
                                    <img alt=''
                                         src={process.env.PUBLIC_URL + '/images/lander/oct-logo-e-7-f-842-b-5-c-92561-a-7072184-a-2021-f-7978-png.png'}/>
                                </div>
                            </div>

                        </div>
                        <button className='landerofferButton ' onClick={originFiber}>
                            <span className='landerofferButtonText'>Get Details ></span>
                        </button>
                    </div>

                    <div className='landeroffer'>
                        <div className='landerofferImageMobile'>
                            <img alt='' src={process.env.PUBLIC_URL + '/images/lander/mobile.svg'}/>
                        </div>
                        <div className='landerofferBody'>

                            <div className='landerofferTitle  '>
                                Mobile Deal
                            </div>

                            <div className='landerofferSubTitle'>
                                Vodafone
                            </div>

                            <div className='landerofferContent '>
                                Mobile Phone <br/>
                                <span>iPhone 11</span>
                            </div>
                            <div className='landerofferContent '>
                                Storage <br/>
                                <span>64 GB</span>
                            </div>

                            <div className='landerofferContent '>
                                Set Up Cost <br/>
                                <span>£9</span>
                            </div>

                            <div className='landerofferContent '>
                                Contract Length <br/>
                                <span>24 month</span>
                            </div>

                            <div className='landerofferContent '>
                                Cost Per Month <br/>
                                <span>£47.00</span>
                            </div>

                            <div className='landermobileOffer offerContent'>
                                <div className='landerofferImageVoda'>
                                    <img alt='' src={process.env.PUBLIC_URL + '/images/voda.jpg'}/>
                                </div>
                            </div>

                        </div>
                        <button className='landerofferButton ' onClick={talktalkFiber}>
                            <span className='landerofferButtonText'>Get Details ></span>
                        </button>
                    </div>

                    <div className='landeroffer '>
                        <div className='landerofferImage'>
                            <img alt='' src={process.env.PUBLIC_URL + '/images/lander/home.svg'}/>
                        </div>
                        <div className='landerofferBody'>

                            <div className='landerofferTitle '>
                                House Insurance
                            </div>

                            <div className='landerofferSubTitle'>
                                Direct Line
                            </div>

                            <div className='landerofferContent mobile'>
                                Insurance Type <br/>
                                <span>House & Contents</span>
                            </div>
                            <div className='landerofferContent mobileIns'>
                                Excess <br/>
                                <span>£250</span>
                            </div>

                            <div className='landerofferContent '>
                                Contract <br/>
                                <span>12 month</span>
                            </div>

                            <div className='landerofferContent mobile'>
                                Cost Per Month <br/>
                                <span>£18.99</span>
                            </div>

                            <div className='landerofferContent mobileIns'>

                            </div>

                            <div className='landerofferContent '>
                                <div className='landerofferImageDirect'>
                                    <img alt=''
                                         src={process.env.PUBLIC_URL + '/images/lander/download-1-b-5-d-2103-ea-0-f-6-e-78-f-32560-c-7-cb-48-bb-1-da-png.png'}/>
                                </div>
                            </div>

                        </div>

                        <button className='landerofferButton' onClick={talktalkFiber}>
                            <span className='landerofferButtonText'>Get Details ></span>
                        </button>
                    </div>

                </div>

                <div className='landertestemonials'>

                    <div className='testBox'>
                        <div className='landertestemonialsTitle'>
                            What Our Customers Think
                        </div>

                        <div className='landerarrowLeft'>
                            <img alt='' src={process.env.PUBLIC_URL + '/images/lander/right.png'}/>
                        </div>

                        <div className='landertestemonialsText'>
                            “Quick, easy and it only took a few minutes. More time to spend with my family” <br/>
                            <span>- Robert Stamp, Wigan</span>
                        </div>

                        <div className='landertestemonialsImage'>
                            <img alt='' src={process.env.PUBLIC_URL + '/images/new/stars.png'}/>
                        </div>

                        <div className='landerarrowRight'>
                            <img alt='' src={process.env.PUBLIC_URL + '/images/lander/right.png'}/>
                        </div>

                    </div>

                </div>

                <div className='landerabout'>

                    <div className='factsTitle'>
                        The Facts Of Broadband
                    </div>

                    <div className='landerpanelLeft'>

                        <span><a href='#broadband'>What is broadband? ></a></span><br/><br/>
                        <span><a href='#wifi'>What's wif? ></a></span><br/><br/>
                        <span><a href='#different'>What are the different types of Broadband? ></a></span><br/><br/>
                        <span><a href='#speed'>What is speed? ></a></span><br/><br/>
                        <span><a href='#switch'>So why would I need to switch to Broadband? ></a></span><br/><br/>
                        <span><a href='#provider'>Can I switch my Broadband provider? ></a></span><br/><br/>
                        <span><a href='#deal'>What makes a good deal? ></a></span><br/><br/>
                        <span><a href='#bundle'>What's in a bundle? ></a></span><br/><br/>

                    </div>

                    <div className="landerAboutDropDown">
                        <select id="landerAnchortoselect" onChange={(e) => {
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

                    <div className='landerpanelRight'>

                        <div className='landeraboutTitle about_1'>
                            What does it all mean?
                        </div>
                        <div className='landeraboutText'>
                            We know a thing or two broadband, and getting on the internet. So, we thought we would try
                            to
                            explain one or two things when it comes to broadband and switching.
                        </div>

                        <div className='landeraboutTitle about_2' id='broadband'>
                            So, what is broadband?
                        </div>
                        <div className='landeraboutText'>
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
                        <div className='landeraboutTitle about_wifi' id='wifi'>
                            If that’s broadband, what’s wifi?
                        </div>
                        <div className='landeraboutText'>
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
                        <div className='landeraboutTitle about_3' id='different'>
                            OK, but what are all the different types of broadband I hear about?
                        </div>
                        <div className='landeraboutText'>
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
                        <div className='landeraboutTitle about_4' id='speed'>
                            Hmm, I often hear about broadband speed, what does it mean?
                        </div>
                        <div className='landeraboutText'>
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
                        <div className='landeraboutTitle' id='switch'>
                            So why would I need to switch broadband?
                        </div>
                        <div className='landeraboutText'>
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
                        <div className='landeraboutTitle about_5' id='provider'>
                            Can I switch my broadband provider?
                        </div>
                        <div className='landeraboutText'>
                            Yes, you can switch broadband providers, but, be careful. If you are still in contract,
                            there is
                            usually a clause that says you cannot switch for a certain length of time. You’ll be tied in
                            and
                            there might well be chunky penalties for cancelling early and breaking the contract. Before
                            you
                            start looking, check your contract.

                        </div>
                        <div className='landeraboutTitle' id='deal'>
                            What makes a good deal?
                        </div>
                        <div className='landeraboutText'>
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
                        <div className='landeraboutTitle' id='bundle'>
                            What’s in a bundle?
                        </div>
                        <div className='landeraboutText'>
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

                    <div className='landerbackToTop'>
                        <button onClick={topFunction} id="myBtn" title="Go to top">
                            <img alt='' src={process.env.PUBLIC_URL + '/images/new/backBtn.jpg'}/> <br/>
                            Back to top
                        </button>
                    </div>

                    <button className='landerlastButton' onClick={compareNow}>
                        <span className='landerlastButtonText'>Compare Now ></span>
                    </button>
                </div>

            </div>

        </div>

    );
}
  