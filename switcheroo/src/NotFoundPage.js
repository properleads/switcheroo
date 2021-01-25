import React from "react";

export function NotFoundPage() {

    return (


        <div className="container noneBackground">

            <div className='oops'>
                Oops..
            </div>
            <div className='oops_img'>
                <img alt='404' src={process.env.PUBLIC_URL + '/images/404.jpg'}/>
            </div>
            <div className='oops_text'>
                Sorry, we can't find that page. Maybe it moved or it's an old link. <br />
                Not to worry, click <a href='/'>HERE</a> to go back home.
            </div>

        </div>


    );
  }
