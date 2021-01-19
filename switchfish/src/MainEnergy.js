import React from "react";
import $ from "jquery";
export function MainEnergyPage() {


    const ssl = {
        margin: "0 auto",
        paddingTop: "5px",
        width: "100%",
        textAlign: "center",
        color: "#696a69",
        fontSize: "8px",
    };
    const providersLogo = {
        margin: "0 auto",
        width: "100%",
    };

    const div = {
        color: "#bdbdbd",
        fontWeight: "bold",
        margin: "0 auto",
        width: "90%",
        textAlign: "center",
        marginTop: "20px"
    };

    const top = {
        backgrounColor: "#ffffff",
        width: "100%",
    };

    const buttondiv = {
        margin: "0 auto",
        width: "305px",
        fontWeight: "bold"
    };

    var postCode = '';

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

    function getFee(isMember) {
        return (isMember ? isMember[0] : 0);
    }

    var urlString = window.location.href.replace('%20', ' ');
    var urlParams = parseURLParams(urlString);

    if(typeof urlParams === 'undefined') urlParams = [];

    var c1 = 'c1='+getFee(urlParams.c1);
    var c2 = 'c2='+getFee(urlParams.c2);
    var c3 = 'c3='+getFee(urlParams.c3);
    var ssid = 'ssid='+getFee(urlParams.ssid);
    var source = 'source='+getFee(urlParams.source);

    function handleChange(e) {
        postCode = e.target.value;
    }

    function handleSubmit(e) {
        //console.log('/address-lookup?&postcode='+postcode+'&ssid='+ssid+'&c1='+c1+'&c2='+c2+'&c3='+c3+'&source='+source);
        //console.log(postCode);

        if(postCode.length < 6) {
            alert('Postcode field is mandatory');
            return;
        }

        let gitHubUrl = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + postCode + '&components=country:UK&key=AIzaSyBG54acln9htSpf66L1FokLFUVF5p_bzyA';

        fetch(gitHubUrl)
            .then(res => res.json())
            .then(json => {
                if(json.status === 'ZERO_RESULTS') {
                    alert('This Postcode does not exist!');
                } else {
                    window.location.href = '/energy/journey?postcode=' + postCode + '&' + ssid + '&' + c1 + '&' + c2 + '&' + c3 + '&' + source;
                }

            });
    }

    $( '#post_code_input' ).keydown(function (event) {
        let keyPressed = event.keyCode || event.which;
        if (keyPressed === 13) {
            this.handleSubmit();
        }
    });

    return (
        <div className="container">

            <div className='mainHeader'>
                <div className='headerText'>
                    <span>Discover The Best Energy<wbr /> Deals In Your Area</span>
                </div>
            </div>
            <div style={top} className="top">
                <div className='providers'>
                    <img alt='' src={process.env.PUBLIC_URL + '/images/energy_providers.jpg'} style={providersLogo}/>
                </div>
            </div>

            <div style={div}>
                <div className='postcode'>What is your Postcode?</div>
                <br />
                <div className='main_second'>Enter your postcode below and find <br />
                    your address from the options.</div>
            </div>

            <div style={buttondiv}>

                <input id="post_code_input" required placeholder="NG12 2AA" className="postCodeInput" onChange={handleChange}
                       onKeyDown={(e) => {
                           let keyPressed = e.keyCode || e.which;
                           if (keyPressed === 13) {
                               handleSubmit();
                           }
                       }}
                />

                <br />
                <br />

                <div style={{textAlign: 'center'}}>
                    <button className="postCodeButton" onClick={handleSubmit} >
                        Find address >
                    </button>
                </div>

            </div>

            <div style={ssl}><img alt='' style={{width: '11px', verticalAlign: '-2px'}} src={process.env.PUBLIC_URL + '/images/SSL-Lock.png'}/> SSL Secured</div>

        </div>
    );
}
  