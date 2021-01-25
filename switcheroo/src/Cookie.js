import React from "react";

export function CookiePage() {

    const header = {
        height: "62px",
        color: "white",
        backgroundColor: "#12539c",
        textAlign: "center",
        fontWeight: "bold",
        fontSize: "1.3em",
    };

    const div = {
        color: "#bdbdbd",
        fontWeight: "bold",
        margin: "0 auto",
        width: "90%",
        textAlign: "center",
        marginTop: "20px"
    };

    const title = {
        fontSize: '18px',
        color: 'rgb(18, 83, 156)',
        fontWeight: 'bold',
        marginTop: '10px'
    };

    const content = {
        backgrounColor: "#ffffff",
        width: "100%",
    };

    return (
    <div className="container" >

        <div style={header}>
            <div style={{padding: "4px",  lineHeight: '54px'}}>
                <span>Cookie Policy for Switcheroo</span>
            </div>
        </div>

        <div style={{
            padding: '10px',
            textAlign: 'justify'
        }}>
            <div style={content}>
            This is the Cookie Policy for Switcheroo, accessible from https://switcheroo.me
            </div>

            <div style={title}>
            What Are Cookies
            </div>
            <div style={content}>
            As is common practice with almost all professional websites this site uses cookies, which are tiny files that are downloaded to your computer, to improve your experience. This page describes what information they gather, how we use it and why we sometimes need to store these cookies. We will also share how you can prevent these cookies from being stored however this may downgrade or ‘break’ certain elements of the sites functionality.
            </div>
            <div style={content}>
            For more general information on cookies, please read “What Are Cookies”.
            </div>
            <div style={title}>
            How We Use Cookies
            </div>
            <div style={content}>
            We use cookies for a variety of reasons detailed below. Unfortunately in most cases there are no industry standard options for disabling cookies without completely disabling the functionality and features they add to this site. It is recommended that you leave on all cookies if you are not sure whether you need them or not in case they are used to provide a service that you use.
            </div>
            <div style={title}>
            Disabling Cookies
            </div>
            <div style={content}>
            You can prevent the setting of cookies by adjusting the settings on your browser (see your browser Help for how to do this). Be aware that disabling cookies will affect the functionality of this and many other websites that you visit. Disabling cookies will usually result in also disabling certain functionality and features of the this site. Therefore it is recommended that you do not disable cookies.
            </div>
            <div style={title}>
            The Cookies We Set
            </div>
            <div style={content}>
            Email newsletters related cookiesThis site offers newsletter or email subscription services and cookies may be used to remember if you are already registered and whether to show certain notifications which might only be valid to subscribed/unsubscribed users.
            Forms related cookiesWhen you submit data to through a form such as those found on contact pages or comment forms cookies may be set to remember your user details for future correspondence.
            Site preferences cookiesIn order to provide you with a great experience on this site we provide the functionality to set your preferences for how this site runs when you use it. In order to remember your preferences we need to set cookies so that this information can be called whenever you interact with a page is affected by your preferences.
            Third Party Cookies
            </div>
            <div style={content}>
            In some special cases we also use cookies provided by trusted third parties. The following section details which third party cookies you might encounter through this site.
            </div>
            <div style={content}>
            This site uses Google Analytics which is one of the most widespread and trusted analytics solution on the web for helping us to understand how you use the site and ways that we can improve your experience. These cookies may track things such as how long you spend on the site and the pages that you visit so we can continue to produce engaging content.For more information on Google Analytics cookies, see the official Google Analytics page.
            Third party analytics are used to track and measure usage of this site so that we can continue to produce engaging content. These cookies may track things such as how long you spend on the site or pages you visit which helps us to understand how we can improve the site for you.
            From time to time we test new features and make subtle changes to the way that the site is delivered. When we are still testing new features these cookies may be used to ensure that you receive a consistent experience whilst on the site whilst ensuring we understand which optimisations our users appreciate the most.
            As we sell products it’s important for us to understand statistics about how many of the visitors to our site actually make a purchase and as such this is the kind of data that these cookies will track. This is important to you as it means that we can accurately make business predictions that allow us to monitor our advertising and product costs to ensure the best possible price.
            More Information
            </div>
            <div style={content}>
            Hopefully that has clarified things for you and as was previously mentioned if there is something that you aren’t sure whether you need or not it’s usually safer to leave cookies enabled in case it does interact with one of the features you use on our site.
            </div>
            <div style={content}>
            However if you are still looking for more information then you can contact us through one of our preferred contact methods:
            </div>
            <div style={content}>
            By visiting this link: https://switcheroo.me/contact
            </div>
        </div>
    </div>
    );
  }
  