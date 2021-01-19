import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

//const express = require('express');
//const app = express();
//import "./Database.js";

import { SurveyPage } from "./Survey";
import { MainPage } from "./Main";
import { OfferPage } from "./Offer";
import { SearchingPage } from "./Searching";
//import { AddressLookup } from "./AddressLookup";
import { ThankyouPage } from "./Thankyou";
import { ContactPage } from "./Contact";
import { CookiePage } from "./Cookie";
import { PrivacyPage } from "./Privacy";
import { TermsPage } from "./Terms";
import { HomePage } from "./Home";

import { MainEnergyPage } from "./MainEnergy";
import { EnergySurveyPage } from "./EnergySurvey";
//import { AddressEnergyLookup } from "./AddressEnergyLookup";
import { EnergyOfferPage } from "./EnergyOffer";
import { EnergyThankyouPage } from "./EnergyThankyou";

import "bootstrap/dist/css/bootstrap.css";

export default function SurveyJSReactApplication() {

  var urlString = window.location.href;

  if(urlString.indexOf("https") === -1) {
    let newUrl = urlString.replace("http", "https");
    window.location.replace(newUrl);
  }

  const link = {
    paddingRight: '20px',
    color: 'grey',
    fontSize: '12px'
  };

  return (
    <Router>
      <div>
        <nav className="navbar navbar-default">
          <div className="container-fluid">

                <img alt='' src={process.env.PUBLIC_URL + '/images/www-logo-square.png'} className='logo_image' />

          </div>
          <div className='rightText'>
            We find the best deals in your area
          </div>
        </nav>

        <Switch>

          <Route exact path="/energy">
            <MainEnergyPage />
          </Route>

          <Route exact path="/energy/offer">
            <EnergyOfferPage />
          </Route>

          <Route exact path="/energy/thank-you">
            <EnergyThankyouPage />
          </Route>

          <Route exact path="/broadband">
            <MainPage />
          </Route>

          <Route exact path="/">
            <HomePage />
          </Route>

          <Route exact path="/contact-us">
            <ContactPage />
          </Route>

          <Route exact path="/cookie-policy">
            <CookiePage />
          </Route>

          <Route exact path="/privacy-policy">
            <PrivacyPage />
          </Route>

          <Route exact path="/term-and-conditions">
            <TermsPage />
          </Route>

          <Route exact path="/broadband/thank-you">
            <ThankyouPage />
          </Route>

          <Route exact path="/home">
            <HomePage />
          </Route>

          <Route exact path="/broadband/journey">
            <SurveyPage />
          </Route>

          <Route exact path="/energy/journey">
            <EnergySurveyPage />
          </Route>

          <Route exact path="/broadband/offer">
            <OfferPage />
          </Route>

          <Route exact path="/broadband/searching">
            <SearchingPage />
          </Route>

        </Switch>

      </div>

      <div className='footer'>
        <br />

        <div className='footer_link'>
          <a style={link} href='/contact-us'>Contact</a>
          <a style={link} href='/cookie-policy'>Cookie Policy</a>
          <a style={link} href='/privacy-policy'>Privacy Policy</a>
          <a style={link} href='/term-and-conditions'>Terms & Conditions</a>
        </div>

        <div className='copyright'>Copyright @ 2020 Wifiwizard</div>


      </div>


    </Router>
  );
}
