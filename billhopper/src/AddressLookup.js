import React, { Component } from "react";

var gitHubUrl = 'https://api.ideal-postcodes.co.uk/v1/postcodes/ID11QD?api_key=iddqd';

function handleChange(e) {
    gitHubUrl = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + e + '&key=AIzaSyBG54acln9htSpf66L1FokLFUVF5p_bzyA';
}

class PostCodes extends Component {

    state = {items: []};

    componentDidMount() {
        fetch(gitHubUrl)
            .then(res => res.json())
            .then(json => {
                if(json.status !== 'ZERO_RESULTS') {
                    fetch('https://maps.googleapis.com/maps/api/geocode/json?latlng=' + json.results[0].geometry.location.lat + ',' + json.results[0].geometry.location.lng + '&key=AIzaSyBG54acln9htSpf66L1FokLFUVF5p_bzyA')
                        .then(res => res.json())
                        .then(json => {

                            //console.log('https://maps.googleapis.com/maps/api/geocode/json?latlng='+ this.state.items.lat +','+ this.state.items.lng +'&key=AIzaSyBG54acln9htSpf66L1FokLFUVF5p_bzyA');

                            if (json.results.length > 0) {
                                console.log(json.results)

                                this.setState({
                                    items: json.results,
                                });

                            } else {

                                let link = window.location.href

                                let query = link.split('?')[1];
                                let linkTwo = link.split('/')[0];

                                alert('This Postcode does not exist!');
                                window.location.replace(linkTwo + '/broadband?' + query);

                            }

                        })

                } else {
                    let link = window.location.href

                    let query = link.split('?')[1];
                    let linkTwo = link.split('/')[0];

                    alert('This Postcode does not exist!');
                    window.location.replace(linkTwo + '/broadband?' + query);
                }

            })

    }

    renderColors = () => {
        const { items } = this.state;

        let clist = '';

        let sorted_array = '';

        if(typeof items !== 'undefined') {

            sorted_array = items.filter(function(obj) {
                return  obj.types.indexOf('street_address') > -1;
            });

            clist = sorted_array.map((entry) =>
                <option key={entry.place_id} value={entry.formatted_address}>{entry.formatted_address}</option>
            )

        }

        return (
            clist
        );
    };


    render() {

        return this.renderColors();
        //return this.address;

    }

}

export function AddressLookup() {

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

    var urlString = window.location.href;
    var urlParams = parseURLParams(urlString);

    var postCodeName = 'postcode='+getFee(urlParams.postcode);
    var postCodeNameText = getFee(urlParams.postcode);
    var c1 = 'c1='+getFee(urlParams.c1);
    var c2 = 'c2='+getFee(urlParams.c2);
    var c3 = 'c3='+getFee(urlParams.c3);
    var ssid = 'ssid='+getFee(urlParams.ssid);
    var source = 'source='+getFee(urlParams.source);

    handleChange(postCodeNameText);

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

    const buttondiv = {
        margin: "0 auto",
        width: "305px",
        fontWeight: "bold"
    };
    const top = {
        backgrounColor: "#ffffff",
        width: "100%",
    };

    return (
    <div className="container">

        <div className='mainHeader'>
            <div className='headerText'>
                <span>Discover The Best Broadband<wbr /> Deals In Your Area</span>
            </div>
        </div>
        <div style={top} className="top">
            <div className='providers'>
                <img alt='' src={process.env.PUBLIC_URL + '/images/2providers.jpg'} style={providersLogo}/>
            </div>
        </div>

        <div className='main_middle'>
            <div className='postcode'>What is your Postcode?</div>
            <br />
            <div className='main_second'>Enter your postcode below and find <br />
                your address from the options.</div>
        </div>

        <br />

        <div className='post_code_input_form'>
            <input id="post_code_input" placeholder="NG12 2AA" className="postCodeInput" value={postCodeNameText}  onChange={handleChange} />
            <br />
            <br />
        </div>

        <div className='main_middle'>
            <span className='postcode'>Select your full address</span><br /><br />
        </div>

        <div style={buttondiv}>
            <select className='adressSelect' onChange= {(e) => {
                e.preventDefault();
                window.location.href='/broadband/journey?'+postCodeName+'&'+ssid+'&'+c1+'&'+c2+'&'+c3+'&'+source;
            }}>
                <option key={0} value=''>Please select your address</option>
                <PostCodes />
            </select>
        </div>

        <div className='ssl_footer'><img alt='' style={{width: '11px', verticalAlign: '-2px'}} src={process.env.PUBLIC_URL + '/images/SSL-Lock.png'}/> SSL Secured</div>

    </div>
    );
  }
  