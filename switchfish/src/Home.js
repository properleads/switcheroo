import React from "react";

export function HomePage() {

    function handleSubmit(e) {
        window.location.href = '/broadband';
    }

    function handleSubmitEnergy(e) {
        window.location.href = '/energy';
    }

    const div = {
        color: "#bdbdbd",
        fontWeight: "bold",
        margin: "0 auto",
        width: "90%",
        textAlign: "center",
        marginTop: "20px"
    };

    return (
    <div className="container">

        <div className='homeHeader'>

            <div className='homeText'>
                <span className='homeTextOne'>Cheaper Bills. Forever.</span><br />
                <span className='homeTextTwo'>
                    Looking around for the best deals is a lot of hassle.<br />
                    We'll do it for you, for free (forever). There's no catch.
                </span>
                <br />

                <button className="postCodeButton homeBroadband" onClick={handleSubmit}>
                    Broadband <i className="fa fa-wifi"></i>
                </button>
                <button className="postCodeButton homeEnergy" onClick={handleSubmitEnergy}>
                    <i className="fa fa-bolt"></i> Energy
                </button>

            </div>

        </div>

        <div className='headBox'>
            <div className='postcode' style={{margin: '19px auto'}}>Why use Switchfish?</div>
            <div className='wifi_logo'><img alt='' src={process.env.PUBLIC_URL + '/images/switch-wifi.png'} /></div>
            <div className='homeSquare'>
                <div className='squareImg'><img alt='' src={process.env.PUBLIC_URL + '/images/SF-Calc.png'} /></div>
                <div className='squareTxt'>
                    <div className='squareText'>Stop overpaying for broadband</div>
                    <div className='squareTextTwo'>There are more great offers available than ever before</div>
                </div>
            </div>
            <div className='homeSquare'>
                <div className='squareImg square2'><img alt='' src={process.env.PUBLIC_URL + '/images/SF-Clock.png'} /></div>
                <div className='squareTxt'>
                    <div className='squareText'>Don’t waste your time searching for deals</div>
                    <div className='squareTextTwo'>Let us do all the hard work for you</div>
                </div>
            </div>
            <div className='homeSquare'>
                <div className='squareImg square3'><img alt='' src={process.env.PUBLIC_URL + '/images/SF-Wifi.png'} /></div>
                <div className='squareTxt'>
                    <div className='squareText'>Improve your WIFI speeds</div>
                    <div className='squareTextTwo'>Faster broadband deals are now available</div>
                </div>
            </div>
            <div className='homeSquare'>
                <div className='squareImg square4'><img alt='' src={process.env.PUBLIC_URL + '/images/Star-Fish.png'} /></div>
                <div className='squareTxt'>
                    <div className='squareText'>We only work with the top providers</div>
                    <div className='squareTextTwo'>Customer service and experience is everything to us</div>
                </div>
            </div>
        </div>

        <div className='blueText'>
            
            <div className='blueTextOne'>Our Customers love us!</div>
            <div className='blueTextStars'>&#9733;&#9733;&#9733;&#9733;&#9733;</div>
            <div className='blueTextSecond'>We have helped save thousands of households money on their bills.</div>

        </div>

        <div className='orangeText'>

            <div className='orangeTextOne'>
                Save yourself up to &pound;220/year on your<br />
                Broadband... in less than TWO minutes!
            </div>

            <button className="postCodeButton" onClick={handleSubmit}>
                Save now <i className="fa fa-wifi"></i>
            </button>

        </div>

        <div className='redText'>

            <div className='orangeTextOne'>
                Save yourself money on your <br /> Energy bill... in less than TWO minutes!
            </div>

            <button className="postCodeButton" onClick={handleSubmitEnergy}>
                Save now <i className="fa fa-bolt"></i>
            </button>

        </div>

        <div style={{backgroundColor: '#ebf3fc', padding: '20px'}}>
            <div className='homeBox'>

                <div className='homeTitle'>Trust the experts to get you the very best deal available in your area.</div>
                <div className='homeTextBox'>
                    We partner with the very best providers in the UK to offer our customers the largest variety of deals and prices that best suit their needs. There really is no need to worry about shopping around when you can Switchfish it!
                </div>
            </div>
            <div className='homeButton'>
                <button className="postCodeButton homeBroadband" onClick={handleSubmit}>
                    Broadband <i className="fa fa-wifi"></i>
                </button>
                <button className="postCodeButton homeEnergy" onClick={handleSubmitEnergy}>
                    <i className="fa fa-bolt"></i> Energy
                </button>
            </div>

        </div>

    </div>
    );
  }
  