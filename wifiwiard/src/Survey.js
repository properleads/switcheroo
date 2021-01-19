import React from "react";

import * as Survey from "survey-react";

import "survey-react/survey.css";

import "jquery-ui/themes/base/all.css";

import $ from "jquery";
import "jquery-bar-rating";
import "pretty-checkbox/dist/pretty-checkbox.css";

import { json } from "./survey_json.js";

window["$"] = window["jQuery"] = $;

export { MyQuestion } from "./MyQuestion";

Survey.StylesManager.applyTheme("default");

export function SurveyPage() {

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
    var ssid = 'ssid='+getFee(urlParams.ssid);
    var source = 'source='+getFee(urlParams.source);
    var gclid = 'gclid=' + getFee(urlParams.gclid);
    var msclkid = 'msclkid=' + getFee(urlParams.msclkid);

    var cid = Number(urlParams.cid) + 1;
    if(cid > 4) {
        cid = 0;
    }
    var client = 'cid='+cid;

    var ck_val = Number(getFee(urlParams.cid)) + 1;
    var ck = 'ck='+ck_val;

    function onComplete(result) {
        console.log(result.data);
        var c1 = 'c1='+result.data.brand_provider;
        var c2 = 'c2='+result.data.speed;
        var c3 = 'c3='+result.data.home;

        // if(result.data.speed === 'Super Fast') {
        //     //console.log('here');
        //     client = 'cid=2';
        // }

        $('.progressBarValue').css('display', 'none');
        window.location.href = "/broadband/searching?"+postCodeName+'&'+ssid+'&'+c1+'&'+c2+'&'+c3+'&'+source + '&' + gclid + '&' + msclkid+'&'+client+'&'+ck;
        //console.log("/searching?"+postCodeName+'&'+ssid+'&'+c1+'&'+c2+'&'+c3+'&'+source);
    }

    let progressBarValue = 30;

    function onValueChanged(result) {

        progressBarValue = Number(progressBarValue) + 30;

        $( ".progressText" ).last().html( progressBarValue +'%');

        if(progressBarValue === 30) {
            $('.progressText').css('margin-left', '30%');
            $('.secondText').css('display', 'none');
        }

        if(progressBarValue === 60) {
            $('.progressText').css('margin-left', '53%');
            $('.secondText').css('display', 'block');
        }

        if(progressBarValue === 90) {
            $('.progressText').css('margin-left', '71%');
            $('.secondText').css('display', 'none');
        }

    }

    var model = new Survey.Model(json);

    const ssl = {
        margin: "0 auto",
        paddingTop: "5px",
        width: "100%",
        textAlign: "center",
        color: "#696a69",
        fontSize: "8px",
        marginTop: '21px'
    };

    return (
        
    <div className="container" style={{backgroundColor: '#f6f6f7'}}>

        <div className='progressBarValue'>
            <div style={{width:'100%', margin: '0 auto', position: 'relative'}}>
                <div className='progressText'>
                    30%
                </div>
            </div>
        </div>

        <Survey.Survey
            model={model}
            onComplete={onComplete}
            onValueChanged={onValueChanged}
          />

        <div className='secondTextValue'>
            <div style={{width:'100%', margin: '0 auto', position: 'relative'}}>
                <div className='secondText'>
                    <span className='anything'>See All Deals</span>
                    <span className='broadband'>ADSL</span>
                    <span className='fiber'>Fibre Optic</span>
                </div>
            </div>
        </div>


        <div style={ssl}><img alt='' style={{width: '11px', verticalAlign: '-2px'}} src={process.env.PUBLIC_URL + '/images/SSL-Lock.png'}/> SSL Secured</div>

    </div>
    );
  }
  