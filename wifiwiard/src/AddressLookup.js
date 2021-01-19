import React, { Component  } from "react";

var gitHubUrl = 'https://api.ideal-postcodes.co.uk/v1/postcodes/ID11QD?api_key=iddqd';

function handleChange(e) {
    //ak_kgm0o2efYs3RNh3DcdPR1e0KEm5yJ backup API Key!
    //uk_kgnc6pd81IkqrI9m2QmcP6tvfQBCc backup API Key!
    gitHubUrl = 'https://api.ideal-postcodes.co.uk/v1/postcodes/'+e+'?api_key=ak_kgm0o2efYs3RNh3DcdPR1e0KEm5yJ';
}

class PostCodes extends Component {

    state = { items: [], isLoading: true, error: null };

    componentDidMount() {
        fetch(gitHubUrl)
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoading: false,
                    items: json.result,
                });
            })
            .catch(error =>
                this.setState({error: error.message, isLoading: false}),
            );
    }

    renderColors = () => {
        const { items } = this.state;

        let clist = '';

        if(typeof items !== 'undefined') {

            clist = items.map((entry, index) =>
                <option key={entry.easting} value={entry.line_1}>{entry.line_1}</option>
            )

        } else {

            let link = window.location.href

            let query = link.split('?')[1];
            let linkTwo = link.split('/')[0];

            alert('This Postcode does not exist!');
            window.location.replace(linkTwo + '/broadband?' + query);

        }

        return (
            clist
        );
    };

    render() {
        return this.renderColors();
    }
}

export default PostCodes;

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

    const enter = {
        color: "grey",
        fontWeight: "lighter",
        margin: "0 auto",
        width: "90%",
        textAlign: "center"
    };

    const button = {
        paddingLeft: '10px',
        color: "black",
        fontWeight: "lighter",
        margin: "0 auto",
        width: "100%",
        textAlign: "center",
        borderRadius: '8px',
        height: '40px',
        textTransform: 'uppercase',
        border: '1px solid grey',
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

        <div className='header'>
            <div style={{padding: "4px"}}>
                <span>Discover The Best Broadband<br /> Deals In Your Area</span>
            </div>
        </div>
        <div style={top} className="top">
            <div className='providers'>
                <img alt='2providers' src={process.env.PUBLIC_URL + '/images/2providers.jpg'} style={providersLogo}/>
            </div>
        </div>

        <div className='div'>
            <span className='postcode'>What is your Postcode?</span><br /><br />
            <span style={enter}>Enter your postcode below and find <br />
            your address from the options.</span>
        </div>

        <br />

        <div style={buttondiv}>
            <input placeholder="NG12 2AA" style={button} className="postCodeInput" value={postCodeNameText}  onChange={handleChange} />
            <br />
            <br />
        </div>

        <div className='divTwo'>
            <span className='postcode'>Select your full address</span><br /><br />
        </div>

        <div style={buttondiv}>
            <select style={button} onChange= {(e) => {
                e.preventDefault();
                window.location.href='/broadband/journey?'+postCodeName+'&'+ssid+'&'+c1+'&'+c2+'&'+c3+'&'+source;
            }}>
                <option key={0} value=''>Please select your address</option>
                <PostCodes />
            </select>
        </div>

        <div style={ssl}><img alt='SSL' style={{width: '11px', verticalAlign: '-2px'}} src={process.env.PUBLIC_URL + '/images/SSL-Lock.png'}/> SSL Secured</div>

    </div>
    );
  }
  