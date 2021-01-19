import React, { Component } from "react";
import $ from "jquery";

var gitHubUrl = 'https://api.ideal-postcodes.co.uk/v1/postcodes/ID11QD?api_key=iddqd';

class PostCodes extends Component {

    state = {items: []};

    // componentDidMount() {
    //     fetch(gitHubUrl)
    //         .then(res => res.json())
    //         .then(json => {
    //             if(json.status !== 'ZERO_RESULTS') {
    //                 fetch('https://maps.googleapis.com/maps/api/geocode/json?latlng=' + json.results[0].geometry.location.lat + ',' + json.results[0].geometry.location.lng + '&key=AIzaSyBG54acln9htSpf66L1FokLFUVF5p_bzyA')
    //                     .then(res => res.json())
    //                     .then(json => {
    //
    //                         //console.log('https://maps.googleapis.com/maps/api/geocode/json?latlng='+ this.state.items.lat +','+ this.state.items.lng +'&key=AIzaSyBG54acln9htSpf66L1FokLFUVF5p_bzyA');
    //
    //                         if (json.results.length > 0) {
    //                             console.log(json.results)
    //
    //                             this.setState({
    //                                 items: json.results,
    //                             });
    //
    //                         } else {
    //
    //                             let link = window.location.href
    //
    //                             let query = link.split('?')[1];
    //                             let linkTwo = link.split('/')[0];
    //
    //                             alert('This Postcode does not exist!');
    //                             window.location.replace(linkTwo + '/broadband?' + query);
    //
    //                         }
    //
    //                     })
    //
    //             } else {
    //                 let link = window.location.href
    //
    //                 let query = link.split('?')[1];
    //                 let linkTwo = link.split('/')[0];
    //
    //                 alert('This Postcode does not exist!');
    //                 window.location.replace(linkTwo + '/broadband?' + query);
    //             }
    //
    //         })
    //
    // }

    renderColors = () => {
        //const { items } = this.state;

        let clist = '';

        // let sorted_array = '';
        //
        // if(typeof items !== 'undefined') {
        //
        //     sorted_array = items.filter(function(obj) {
        //         return  obj.types.indexOf('street_address') > -1;
        //     });
        //
        //     clist = sorted_array.map((entry) =>
        //         <option key={entry.place_id} value={entry.formatted_address}>{entry.formatted_address}</option>
        //     )
        //
        // }

        return (
            clist
        );
    };


    render() {

        return this.renderColors();
        //return this.address;

    }

}

export function MainPage() {

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

    var postCodeName = 'postcode='+getFee(urlParams.postcode);
    var postCodeNameText = getFee(urlParams.postcode);
    var c1 = 'c1=' + getFee(urlParams.c1);
    var c2 = 'c2=' + getFee(urlParams.c2);
    var c3 = 'c3=' + getFee(urlParams.c3);
    var ssid = 'ssid=' + getFee(urlParams.ssid);
    var source = 'source=' + getFee(urlParams.source);

    function handlePostCodeChange(e) {
        //gitHubUrl = 'https://api.ideal-postcodes.co.uk/v1/postcodes/' + e.target.value + '?api_key=iddqd';
        gitHubUrl = 'https://api.ideal-postcodes.co.uk/v1/postcodes/AB116XS?api_key=iddqd';
    }

    function showMain(e) {
        $('#getStarted').css('display', 'inline-block');
    }

    function hideFindAddress(e) {
        $('#getStarted').css('display', 'none');
    }

    function hidegetStarted(e) {
        $('#getStarted').css('display', 'none');
    }

    function showSelect(e) {
        $('#address_select').css('display', 'inline-block');
    }

    function goToJourney(e) {
        hidegetStarted();
        $('#journey_one').css('display', 'inline-block');
    }

    function handleSubmit(e) {
        console.log(e);
        if (postCodeNameText !== '') {
            //window.location.href = '/broadband#addressLookUp?postcode=' + postCode + '&' + ssid + '&' + c1 + '&' + c2 + '&' + c3 + '&' + source;

            hideFindAddress();
            showSelect();

            //document.getElementById("addressLookUp").scrollIntoView();

        } else {
            document.getElementById("post_code_input").focus();
        }
    }

    handlePostCodeChange(postCodeNameText);

    return (
        <div className="container">

            <div className='headerTop'>

                <nav className="navbar navbar-default">
                    <div className="container-fluid">

                        <img alt='' src={process.env.PUBLIC_URL + '/images/bill-logo.jpg'} className='logo_image'/>

                    </div>
                    <div className='rightText'>
                        We find the best deals in your area
                    </div>
                </nav>

                <div className='getStarted_button'>
                    <span>Find the best deals available for you right at your finger tips!</span>
                    <br/>
                    <a className='getStarted' href="#getStarted" onClick={showMain}>Find out more ></a>
                </div>

            </div>

            <div className='mainPage' id='getStarted'>
                <div className='mainHeader'>
                    <div className='headerText'>
                        <span>Discover The Best Broadband<wbr/> Deals In Your Area</span>
                    </div>
                </div>
                <div style={top} className="top">
                    <div className='providers'>
                        <img alt='' src={process.env.PUBLIC_URL + '/images/2providers.jpg'} style={providersLogo}/>
                    </div>
                </div>

                <div style={div}>
                    <div className='postcode'>What is your Postcode?</div>
                    <br/>
                    <div className='main_second'>Enter your postcode below and find <br/>
                        your address from the options.
                    </div>
                </div>

                <div style={buttondiv}>

                    <input id="post_code_input" required placeholder="NG12 2AA" className="postCodeInput"
                           onChange={handlePostCodeChange}
                           onKeyDown={(e) => {
                               let keyPressed = e.keyCode || e.which;
                               if (keyPressed === 13) {
                                   handleSubmit();
                               }
                           }}/>

                    <br/>
                    <br/>

                    <div id='find_address' style={{margin: '0 auto', width: '228px'}}>
                        <button className="postCodeButton" onClick={handleSubmit}>
                            Find address >
                        </button>
                    </div>

                    <div id='address_select'>

                        <div className='main_middle'>
                            <span className='postcode'>Select your full address</span><br/><br/>
                        </div>

                        <div style={buttondiv}>
                            <select className='adressSelect' onChange={(e) => {
                                e.preventDefault();
                            }} onClick={goToJourney}>
                                <option key={0} value=''>Please select your address</option>
                                <PostCodes />
                            </select>
                        </div>
                    </div>

                </div>

                <div style={ssl}><img alt='' style={{width: '11px', verticalAlign: '-2px'}}
                                      src={process.env.PUBLIC_URL + '/images/SSL-Lock.png'}/> SSL Secured
                </div>

            </div>

            <div className='journey_one' id='journey_one'>

                <div className='journey_question'>
                    Who is your current broadband provider?
                </div>
                <div className='journey_description'>
                    If you don't currently have a provider or you are unsure, please select 'other'
                </div>

                <div className='first_question'>

                </div>

            </div>

        </div>
    );
}
  