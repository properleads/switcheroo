import React, { Component  } from "react";

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
                    fetch('https://maps.googleapis.com/maps/api/geocode/json?latlng=' + json.results[0].geometry.location.lat + ',' + json.results[0].geometry.location.lng + '&key=AIzaSyBG54acln9htSpf66L1FokLFUVF5p_bzyA&result_type=route')
                        .then(res => res.json())
                        .then(json => {
                            if (json.results.length > 0) {
                                let street_name = json.results[0].address_components[1].long_name;
                                let numbers = json.results[0].address_components[0].long_name;
                                let array = [];
                                let posts = [];
                                if(numbers.split('-')[0] > numbers.split('-')[1]) {
                                    for (let e = numbers.split('-')[1]; e <= numbers.split('-')[0]; e++) {
                                        array.push(e);
                                    }
                                } else {
                                    for (let i = numbers.split('-')[0]; i <= numbers.split('-')[1]; i++) {
                                        array.push(i);
                                    }
                                }
                                for (let i = 0; i < array.length; i++){
                                    if (numbers.split('-')[0] % 2 === 0) {
                                        if (i % 2 === 0) {
                                            posts.push(array[i] + ' ' + street_name);
                                        }
                                    } else {
                                        if (i % 2 === 0) {
                                            posts.push(array[i] + ' ' + street_name);
                                        }
                                    }
                                }
                                this.setState({
                                    items: posts,
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
        if(typeof items !== 'undefined') {
            clist = items.map((entry, index) =>
                <option key={index} value={entry}>{entry}</option>
            )
        }
        return (
            clist
        );
    };

    render() {
        return this.renderColors();
    }

}

export function AddressEnergyLookup() {

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
                <span>Discover The Best Energy<br /> Deals In Your Area</span>
            </div>
        </div>
        <div style={top} className="top">
            <div className='providers'>
                <img alt='' src={process.env.PUBLIC_URL + '/images/energy_providers.jpg'} style={providersLogo}/>
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
                window.location.href='/energy/journey?'+postCodeName+'&'+ssid+'&'+c1+'&'+c2+'&'+c3+'&'+source;
            }}>
                <option key={0} value=''>Please select your address</option>
                <PostCodes />
            </select>
        </div>

        <div className='ssl_footer'><img alt='' style={{width: '11px', verticalAlign: '-2px'}} src={process.env.PUBLIC_URL + '/images/SSL-Lock.png'}/> SSL Secured</div>

    </div>
    );
  }
  