import React, { Component  } from "react";

var gitHubUrl = 'https://api.ideal-postcodes.co.uk/v1/postcodes/ID11QD?api_key=iddqd';

function handleChange(e) {
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
            window.location.replace(linkTwo + '/?' + query);

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
                window.location.href='/journey?'+postCodeName+'&'+ssid+'&'+c1+'&'+c2+'&'+c3+'&'+source;
            }}>
                <option key={0} value=''>Please select your address</option>
                <PostCodes />
            </select>
        </div>

        <div className='ssl_footer'><img alt='' style={{width: '11px', verticalAlign: '-2px'}} src={process.env.PUBLIC_URL + '/images/SSL-Lock.png'}/> SSL Secured</div>

    </div>
    );
  }
  