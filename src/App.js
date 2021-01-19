import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

//const express = require('express');
//const app = express();
//import "./Database.js";

import { SurveyPage } from "./Survey";
import { MainPage } from "./Main";
import { LanderPage } from "./Lander";
import { NewMainPage } from "./NewMain";
import { SpeedMainPage } from "./SpeedMain";
import { OfferPage } from "./Offer";
import { SearchingPage } from "./Searching";
//import { AddressLookup } from "./AddressLookup";
import { ThankyouPage } from "./Thankyou";
import { ContactPage } from "./Contact";
import { CookiePage } from "./Cookie";
import { PrivacyPage } from "./Privacy";
import { TermsPage } from "./Terms";
import { HomePage } from "./Home";
import { SpecialPage } from "./Special";

import { MainEnergyPage } from "./MainEnergy";
import { EnergySurveyPage } from "./EnergySurvey";
//import { AddressEnergyLookup } from "./AddressEnergyLookup";
import { EnergyOfferPage } from "./EnergyOffer";
import { EnergyThankyouPage } from "./EnergyThankyou";
import { NotFoundPage } from "./NotFoundPage";

import "bootstrap/dist/css/bootstrap.css";

import { MobilePage } from "./mobile/Mobile";
import { MobileSurveyPage } from "./mobile/Survey";
import { MobileOfferPage } from "./mobile/MobileOffer";

export default function SurveyJSReactApplication() {

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

                <img alt='' src={process.env.PUBLIC_URL + '/images/Switcheroo Logos-Blue.png'} className='logo_image' />

          </div>
          <div className='rightText'>
            Switch and Save
          </div>
        </nav>

        <Switch>

          <Route exact path="/lander">
            <LanderPage />
          </Route>

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

          <Route exact path="/broadband/new">
            <NewMainPage />
          </Route>

          <Route exact path="/broadband/speed">
            <SpeedMainPage />
          </Route>

          <Route exact path="/">
            <MainPage />
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

          <Route exact path="/thank-you">
            <ThankyouPage />
          </Route>

          <Route exact path="/home">
            <HomePage />
          </Route>

          <Route exact path="/journey">
            <SurveyPage />
          </Route>

          <Route exact path="/energy/journey">
            <EnergySurveyPage />
          </Route>

          <Route exact path="/offer">
            <OfferPage />
          </Route>

          <Route exact path="/searching">
            <SearchingPage />
          </Route>

          <Route exact path="/special">
            <SpecialPage />
          </Route>

          <Route exact path="/mobile">
            <MobilePage />
          </Route>

          <Route exact path="/mobile/journey">
            <MobileSurveyPage />
          </Route>

          <Route exact path="/mobile/offer">
            <MobileOfferPage />
          </Route>

          <Route component={NotFoundPage} />

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

        <div className='copyright'>Copyright @ 2020 Switcheroo</div>


      </div>


    </Router>
  );
}
