import React from "react";
import $ from "jquery";
import "./New.css";

import ReactDOM from "react-dom";

class Iframe extends React.Component {
    render() {
        return <iframe src="http://properleads.speedtestcustom.com" title='speedTest' />;
    }
}

export function SpeedMainPage() {

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

    function topFunction() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
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

    function compareNow(e) {
        window.location.href = '/';
    }

    $('#post_code_input').keydown(function (event) {
        let keyPressed = event.keyCode || event.which;
        if (keyPressed === 13) {
            this.handleSubmit();
        }
    });

    $(document).scroll(function (e) {
        if ($(this).scrollTop() > 500) {
            $("#inputPosition").css({
                "position": "fixed",
                "z-index": "999",
                "top": "0",
                "width": "1071px",
                "height": "100px",
                "text-align": "center",
                "background-color": "rgba(76, 175, 80, 0.7)",
                "padding-top": "20px"
            });
            $(".headerInputButton").css({
                "left": "584px",
                "top": "25px"
            });
            $(".headerInputIcon").css({
                "left": "279px",
                "top": "28px"
            });
        } else {
            $("#inputPosition").css({
                "position": "relative",
                "padding-top": "68px",
                "padding-left": "18px",
                "background-color": "rgba(76, 175, 80, 0)",
                "text-align": "left"
            });
            $(".headerInputIcon").css({
                "left": "29px",
                "top": "76px"
            });
            $(".headerInputButton").css({
                "left": "333px",
                "top": "73px"
            });
        }

        if ($(this).scrollTop() > 200) {
            $(".inputPositionMobile").css({
                "position": "fixed",
                "z-index": "999",
                "top": "0",
                "width": "1071px",
                "height": "100px",
                "text-align": "center",
                "background-color": "rgba(76, 175, 80, 0.7)",
                "padding-top": "20px",
                "margin-top": "0px"
            });
            $(".inputPositionMobile input").css({
                "width": "348px"
            })
            $(".headerInputButtonMobile").css({
                "left": "316px",
                "top": "25px"
            });
            $(".headerInputIconMobile").css({
                "left": "18px",
                "top": "22px"
            });
        } else {
            $(".inputPositionMobile").css({
                "position": "relative",
                "padding-top": "22px",
                "background-color": "rgba(76, 175, 80, 0)",
                "text-align": "left"
            });
            $(".headerInputButtonMobile").css({
                "left": "308px",
                "top": "27px"
            });
            $(".headerInputIconMobile").css({
                "left": "12px",
                "top": "23px"
            });
        }

    });

    return (

        <div className='newPage'>

            <div className='mainHeaderSpeed'>

                <div className='speedheaderImage'>
                    <div className='speedHeaderPosition'>
                        <div className='speedHeaderH1'>
                            Test Your Broadband Speed
                        </div>
                        <div className='speedHeaderH2'>
                            Want Better, Faster & Cheaper Broadband?
                        </div>
                    </div>

                    <div className="speedLastButtonDiv">
                        <button className='speedlastButton' onClick={compareNow}>
                            <span className='speedlastButtonText'>Click here ></span>
                        </button>
                    </div>

                    <div className='iframeContainer'>
                        <iframe width="100%" height="650px" frameBorder="0" className='iframe' title='speedTestTwo'
                                src="https://properleads.ipv4-only.speedtestcustom.com">

                        </iframe>
                    </div>

                </div>

                <div className='speedresult'>
                    <div className='speedSecondHeaderTitle'>
                        What do your results mean?
                    </div>

                    <div className='interpretation'>

                        <div className='interpretationTitle'>
                            Download
                        </div>

                        <div className='specs'>
                            <div className='specsSquare red'>
                                1 - 5 mbps
                            </div>
                            <div className='specsSquare orange'>
                                5 - 10 mbps
                            </div>
                            <div className='specsSquare green'>
                                10 - 15 mbps
                            </div>
                            <div className='specsSquare'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </div>
                            <div className='specsSquare'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </div>
                            <div className='specsSquare'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </div>
                        </div>

                        <div className='interpretationTitle upload'>
                            Upload
                        </div>
                        <div className='specs'>
                            <div className='specsSquare red'>
                                1 - 5 mbps
                            </div>
                            <div className='specsSquare orange'>
                                5 - 10 mbps
                            </div>
                            <div className='specsSquare green'>
                                10 - 15 mbps
                            </div>
                            <div className='specsSquare'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </div>
                            <div className='specsSquare'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </div>
                            <div className='specsSquare'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </div>

                        </div>

                    </div>

                </div>

                <div className='speedDesc'>
                    <div className='speedDescTitle'>
                        What is the speed test?
                    </div>
                    <div className='speedDescText'>
                        The Switcheroo Broadband Speed Test is a free-to-use service that analyses your broadband speed
                        in seconds. It can measure speeds on a range of broadband connection types, including ADSL
                        broadband, cable/fibre-optic broadband and mobile broadband.
                        <br/>
                        <br/>
                        Although we strive to ensure our broadband speed checker is as accurate as possible, please be
                        aware that the speed test results only represent a snapshot of your broadband connection at the
                        time of testing. They should not be seen as a conclusive measure of your broadband connection’s
                        general performance.
                        <br/>
                        <br/>
                        You can use them, however, if you’re complaining to your provider about your speed, especially
                        if your contract has been taken out since 1 March 2019 and your provider has opted into Ofcom’s
                        Voluntary Code of Practice on Broadband Speed.
                        <br/>
                        <br/>
                        <a onClick={topFunction}>back to top</a>
                    </div>
                    <div className='speedDescTitle'>
                        Why it’s important to use a speed test during the COVID-19 lockdown
                    </div>
                    <div className='speedDescText'>
                        With many of us spending almost all of our time at home, the speed and reliability of your
                        broadband connection is more important than ever. Running a speed test will give you a much
                        clearer idea of how much bandwidth you have in your home and what the limitations of your home
                        broadband might be.
                        <br/>
                        <br/>
                        If your speed test delivers results of 10Mbps or less, you will have to take more drastic
                        measures to ration your internet usage than superfast speeds of 60Mbps+, especially if you need
                        to be able to work from home.
                        <br/>
                        <br/>
                        Running regular speed tests can also give you a clearer idea of the times of day when your
                        broadband is performing at its best and worst. This will allow you to schedule bandwidth-heavy
                        tasks, such as video calls and HD streaming, for when you have the best broadband speed.
                        <br/>
                        <br/>
                        <a onClick={topFunction}>back to top</a>
                    </div>
                    <div className='speedDescTitle'>
                        How does the internet speed test work?
                    </div>
                    <div className='speedDescText'>
                        When you start the speed test, our StreetStats tool checks your broadband speed by downloading
                        and uploading dummy "packets" of data sent to our UK servers via "pings".
                        <br/>
                        <br/>
                        These pings are a measure of the round-trip time it takes for these packets to be sent and
                        subsequently received by your computer, allowing us to accurately assess the speed of your
                        broadband connection.
                        <br/>
                        <br/>
                        <a onClick={topFunction}>back to top</a>
                    </div>
                    <div className='speedDescTitle'>
                        How can I ensure I get accurate results?
                    </div>
                    <div className='speedDescText'>
                        To get the most accurate possible broadband speed test result, follow these simple steps:
                        <br/>
                        Make sure you are not downloading anything on your PC / laptop.
                        <br/>
                        Shut down any software that uses the internet (e.g. web radio, RSS news feeds or TV services).
                        <br/>
                        Turn off any other computers, tablets, smartphones and games consoles that are sharing your
                        wireless network.
                        <br/><br/>

                        Ensure all broadband cables are properly and securely connected.
                        <br/>
                        With wireless routers, make sure you are as close to your wireless router as possible. Ideally
                        you’ll be less than 10 metres away.
                        <br/><br/>

                        Make sure there are no large objects between your computer and wireless router.
                        <br/>
                        Electronic devices such as microwaves, wireless doorbells, baby monitors, bug zappers and even
                        electric blankets can affect the signal strength, so switch them all off.
                        <br/><br/>

                        If you’re testing mobile broadband on the move (with a mobile internet dongle or laptop /
                        netbook with mobile internet built-in), make sure you’re stationary and have a signal. The
                        result will be compromised if you go out of range of 3G coverage while the test is in progress.
                        <br/><br/>

                        <a onClick={topFunction}>back to top</a>
                    </div>


                </div>

                <div className='speedExamples'>
                    <img alt='' src={process.env.PUBLIC_URL + '/images/netflix.png'} className='netflix' />
                    <div className='speedDescTitle'>
                        What internet speed do I need for Netflix?
                    </div>
                    <div className='speedDescText'>
                        0.5 Megabits per second - Required broadband connection speed
                        <br/>
                        1.5 Megabits per second - Recommended broadband connection speed
                        <br/>
                        3.0 Megabits per second - Recommended for SD quality
                        <br/>
                        5.0 Megabits per second - Recommended for HD quality
                        <br/>
                        25 Megabits per second - Recommended for Ultra HD (4K) quality
                        <br/>
                        Source: https://help.netflix.com/en/node/306
                        <br/><br/>
                        <a onClick={topFunction}>back to top</a>

                    </div>
                    <div className='speedDescTitle houmuch'>

                        How much speed do I need to stream music?

                    </div>
                    <div className='speedDescText'>

                        Unlike video streaming, streaming music doesn’t require much bandwidth and most current
                        broadband packages are fast enough to let you stream your music without any issue.
                        <br/>
                        <a hreff='https://www.highspeedinternet.com/resources/how-much-speed-do-i-need-for-pandora-and-spotify'>https://www.highspeedinternet.com/</a>
                        <br/>
                        <br/>
                        <a onClick={topFunction}>back to top</a>
                    </div>
                    <img alt='' src={process.env.PUBLIC_URL + '/images/sskype.png'} className='skype' />
                    <div className='speedDescTitle'>
                        How much bandwith does Skype need?
                    </div>
                    <div className='speedDescText'>
                        Calling: 100kbps download / 100kbps upload (Minimum: 30kbps download / 30kbps upload)
                        <br/>
                        Video calling / Screen sharing: 300kbps download / 300kbps upload (Minimum: 128kbps download /
                        128kbps upload)
                        <br/>
                        Video calling (high-quality): 500kbps download / 500kbps upload (Minimum: 400kbps download /
                        400kbps upload)
                        <br/>
                        Video calling (HD): 1.5Mbps download / 1.5Mbps upload (Minimum: 1.2Mbps download / 1.2Mbps
                        upload)
                        <br/>
                        Group video (3 people): 2Mbps download / 512kbps upload (Minimum: 512kbps download / 128kbps
                        upload)
                        <br/>
                        Group video (5 people): 4Mbps download / 512kbps upload (Minimum: 2Mbps download / 128kbps
                        upload)
                        <br/>
                        Group video (7+ people): 8Mbps download / 512kbps upload (Minimum: 4Mbps download / 128kbps
                        upload)
                        <br/>
                        Source: <a hreff="https://support.skype.com/en/faq/FA1417/how-much-bandwidth-does-skype-need">support.skype.com</a>
                        <br/><br/>
                        <a onClick={topFunction}>back to top</a>

                    </div>
                    <img alt='' src={process.env.PUBLIC_URL + '/images/zoom.png'} className='zoom' />
                    <div className='speedDescTitle'>
                        What are the minimum speeds for a Zoom call?
                    </div>
                    <div className='speedDescText'>

                        2.0 Mbps up and down for single screen
                        <br/>
                        2.0 Mbps up 4.0 Mbps down for dual screen
                        <br/>
                        2.0 Mbps up 6.0 Mbps down for triple screen
                        <br/>
                        For screen sharing only: 150-300kbps
                        <br/>
                        For audio VoIP: 60-80kbps
                        <br/>
                        Source: https://support.zoom.us/hc/en-us/articles/204003179-System-Requirements-for-Zoom-Rooms
                    </div>

                    <div className='speedDescTitle better'>
                        Get a quote now for a better Broadband
                    </div>

                    <button className='speedlastButton betterButton' onClick={compareNow}>
                        <span className='speedlastButtonText'>Click here ></span>
                    </button>

                </div>

            </div>

        </div>

    );
}
  