import React from "react";

import * as Survey from "survey-react";

import "../mobile/survery_mobile.css";

import "../mobile/mobile.css";

import "jquery-ui/themes/base/all.css";

import $ from "jquery";
import "jquery-bar-rating";
import "pretty-checkbox/dist/pretty-checkbox.css";

import {json} from "../mobile/survey_json.js";

window["$"] = window["jQuery"] = $;

export {MyQuestion} from "../MyQuestion";

Survey.StylesManager.applyTheme("default");

export function MobileSurveyPage() {

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
        return (typeof isMember != 'undefined' && isMember ? isMember[0] : 0);
    }

    var urlParams = [];
    var urlString = window.location.href.replace('%20', ' ');
    urlParams = parseURLParams(urlString);
    console.log(urlParams);
    var postCodeName = 'postcode=' + (typeof urlParams !== 'undefined' ? getFee(urlParams.postcode) : 0);
    var ssid = 'ssid=' + (typeof urlParams !== 'undefined' ? getFee(urlParams.ssid) : 0);
    var source = 'source=' + (typeof urlParams !== 'undefined' ? getFee(urlParams.source) : 0);
    var gclid = 'gclid=' + (typeof urlParams !== 'undefined' ? getFee(urlParams.gclid) : 0);
    var msclkid = 'msclkid=' + (typeof urlParams !== 'undefined' ? getFee(urlParams.msclkid) : 0);

    var cid = (typeof urlParams !== 'undefined' ? Number(urlParams.cid) : 0) + 1;
    if (cid > 4) {
        cid = 0;
    }
    var client = 'cid=' + cid;

    var ck_val = (typeof urlParams !== 'undefined' ? Number(getFee(urlParams.cid)) : 0) + 1;
    var ck = 'ck=' + ck_val;

    function onComplete(result) {
        console.log(result.data);
        var c1 = 'c1=' + result.data.brand_provider;
        var c2 = 'c2=' + result.data.speed;

        if (result.data.speed === 'Super Fast') {
            //console.log('here');
            client = 'cid=2';
        }

        $('.progressBarValue').css('display', 'none');
        window.location.href = "/searching?" + postCodeName + '&' + ssid + '&' + c1 + '&' + c2 + '&' + source + '&' + gclid + '&' + msclkid + '&' + client + '&' + ck;
        //console.log("/searching?"+postCodeName+'&'+ssid+'&'+c1+'&'+c2+'&'+c3+'&'+source);
    }

    var c1 = '';
    var c2 = '';

    function firstAnswer(val) {
        console.log(val.target.alt);
        c1 = val.target.alt;
        $('.mobileFirstQuestion').css('display', 'none');
        $('.mobileSecondQuestion').css('display', 'inline-block');
    }

    function secondAnswer(val) {
        console.log(val.target.alt);
        c2 = val.target.alt;
        window.location.href = "/mobile/offer?" + postCodeName + '&' + ssid + '&' + c1 + '&' + c2 + '&' + source + '&' + gclid + '&' + msclkid + '&' + client + '&' + ck;
    }

    let progressBarValue = 30;

    function onValueChanged(result) {

        progressBarValue = Number(progressBarValue) + 30;

        $(".progressText").last().html(progressBarValue + '%');

        if (progressBarValue === 30) {
            $('.progressText').css('margin-left', '25%');
            $('.secondText').css('display', 'none');
        }

        if (progressBarValue === 60) {
            $('.progressText').css('margin-left', '53%');
            $('.secondText').css('display', 'block');
        }

        if (progressBarValue === 90) {
            $('.progressText').css('margin-left', '66%');
            $('.secondText').css('display', 'none');
            $('.sv_progress_bar').css('width', '95%');
        }

    }

    var model = new Survey.Model(json);

    return (
    <div className="container" style={{backgroundColor: '#f6f6f7'}}>

        <div className='mobileHeader'>
            Guaranteed Mobile Deals Available
        </div>

        <div className='mobileJourney'>
            <div className='mobileFirstQuestion'>
                <div className='MobileQuestion'>
                    What type of contract?
                </div>
                <div className='mobileAnswers mobileAnswersFirst'>
                    <div className="mobileAnserSquare" onClick={firstAnswer}>
                        <img className='' alt='mobile'
                             src={process.env.PUBLIC_URL + '/images/mobile/pink_phone.png'}/>
                             <br/>
                             <span>Mobile</span>
                    </div>
                    <div className="mobileAnserSquare" onClick={firstAnswer}>
                        <img className='' alt='sim'
                             src={process.env.PUBLIC_URL + '/images/mobile/pink_sim.png'}/>
                             <br/>
                        <span>Sim</span>
                    </div>
                </div>
            </div>

            <div className='mobileSecondQuestion'>
                <div className='MobileQuestion'>
                    What is Your credit like?
                </div>
                <div className='mobileAnswers'>
                    <div className="mobileAnserSquare" onClick={secondAnswer}>
                        <img className='secondQuestion' alt='Excellent'
                             src={process.env.PUBLIC_URL + '/images/mobile/MOB-JOURNEY-HAND-1.png'}/>
                        <br/>
                        <span>Excellent</span>
                    </div>
                    <div className="mobileAnserSquare" onClick={secondAnswer}>
                        <img className='secondQuestion secondHandMobile' alt='Good'
                             src={process.env.PUBLIC_URL + '/images/mobile/MOB-JOURNEY-HAND-1.png'}/>
                        <br/>
                        <span>Good</span>
                    </div>
                    <div className="mobileAnserSquare" onClick={firstAnswer}>
                        <img className='secondQuestion' alt='Bad'
                             src={process.env.PUBLIC_URL + '/images/mobile/MOB-JOURNEY-HAND-3.png'}/>
                        <br/>
                        <span>Bad</span>
                    </div>
                    <div className="mobileAnserSquare" onClick={secondAnswer}>
                        <img className='secondQuestion' alt="Don't Know"
                             src={process.env.PUBLIC_URL + '/images/mobile/MOB-JOURNEY-HAND-4.png'}/>
                        <br/>
                        <span>Don't Know</span>
                    </div>
                </div>
            </div>


        </div>

        <div className='ssl_footer'><img alt='' style={{width: '11px', verticalAlign: '-2px'}}
                                         src={process.env.PUBLIC_URL + '/images/SSL-Lock.png'}/> SSL Secured
        </div>

    </div>
);
}
  