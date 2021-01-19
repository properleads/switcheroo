import React, { useEffect } from "react";

export function EnergySearchingPage() {

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

    var postCodeName = 'postcode='+getFee(urlParams.postcode);
    var c1 = 'c1='+getFee(urlParams.c1);
    var c2 = 'c2='+getFee(urlParams.c2);
    var c3 = 'c3='+getFee(urlParams.c3);
    var ssid = 'ssid='+getFee(urlParams.ssid);
    var source = 'source='+getFee(urlParams.source);
    var gclid = 'gclid='+getFee(urlParams.gclid);
    var msclkid = 'msclkid='+getFee(urlParams.msclkid);

    useEffect(() => {
        const timer = setTimeout(() => {
            window.location.href = "/energy/offer?"+postCodeName+'&'+ssid+'&'+c1+'&'+c2+'&'+c3+'&'+gclid+'&'+msclkid;
        }, 5000);
        return () => clearTimeout(timer);
    }, []);

    return (
    <div className="container">

        <div>
            <h3 className='searchText'>We are searching our deals based on your requirements. <br /> This could take a few seconds</h3>
        </div>

        <div className='spinner'>
            <img alt="lazy_loader" src={process.env.PUBLIC_URL + '/images/unnamed.gif'} className='loader' />
        </div>

    </div>
    );
  }
  