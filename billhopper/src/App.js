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
import { AddressLookup } from "./AddressLookup";
import { ThankyouPage } from "./Thankyou";
import { ContactPage } from "./Contact";
import { CookiePage } from "./Cookie";
import { PrivacyPage } from "./Privacy";
import { TermsPage } from "./Terms";
import { HomePage } from "./Home";
import { SpecialPage } from "./Special";

import { MainEnergyPage } from "./MainEnergy";
import { EnergySurveyPage } from "./EnergySurvey";
import { AddressEnergyLookup } from "./AddressEnergyLookup";
import { EnergyOfferPage } from "./EnergyOffer";
import { EnergyThankyouPage } from "./EnergyThankyou";


import "bootstrap/dist/css/bootstrap.css";

export default function SurveyJSReactApplication() {

  const link = {
    paddingRight: '20px',
    color: 'grey',
    fontSize: '12px'
  };

  const copy = {
    margin: "0 auto",
    width: "100%",
    textAlign: "center",
    color: "#696a69",
    fontSize: "0.8em",
    paddingTop: "5px",
  };

  return (
    <Router>
      <div>

        <Switch>

          <Route exact path="/energy">
            <MainEnergyPage />
          </Route>

          <Route exact path="/energy/address-lookup">
            <AddressEnergyLookup />
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

          <Route exact path="/broadband/address-lookup">
            <AddressLookup />
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

          <Route exact path="/special">
            <SpecialPage />
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

        <div style={copy} className='copyright'>Copyright @ 2020 Switcheroo</div>


      </div>


    </Router>
  );
}
