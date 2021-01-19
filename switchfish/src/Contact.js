import React from "react";
import emailjs from 'emailjs-com';

class NameForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            first: '',
            last: '',
            phone: '',
            email: '',
            message: ''
        };
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();

        emailjs.sendForm('service_34yvc99', 'template_48ozhdq', e.target, 'user_jpXo692mzzUL3FGoFBkj8')
            .then((result) => {
                console.log(result.text);
                window.location.href = "/";
            }, (error) => {
                console.log(error.text);
            });
    }

    render() {

        const input = {
            width: '100%',
            lineHeight: '33px',
            paddingLeft: '8px',
            borderRadius: '11px',
            border: '1px solid grey'
        };
        const label = {
            padding: '10px 0 5px',
            color: '#656565',
            fontWeight: 'lighter',
            fontSize: '16px'
        }
        const buttonPostSubmit = {
            color: "white",
            backgroundColor: '#fb522d',
            padding: "10px",
            borderRadius: "20px",
            width: "145px",
            fontWeight: "normal",
            border: '1px'
        };
        const ssl = {
            margin: "0 auto",
            paddingBottom: "5px",
            width: "100%",
            textAlign: "center",
            color: "#696a69",
            fontSize: "8px",
        };

        return (

            <div style={{
                width: '76%',
                margin: '0 auto',
                maxWidth: '400px'
            }}>

                <form onSubmit={this.handleSubmit}>
                    <div style={label}>
                        First name:
                    </div>
                    <div>
                        <input required placeholder="First name" style={input} type="text" name="first" value={this.state.value} onChange={this.handleChange} />
                    </div>

                    <div style={label}>
                        Last name:
                    </div>

                    <div>
                        <input required placeholder="Last name" style={input} type="text" name="last" value={this.state.value} onChange={this.handleChange} />
                    </div>

                    <div style={label}>
                        Phone number:
                    </div>

                    <div>
                        <input required placeholder="Phone number" style={input} type="tel" name="phone" maxLength="11" minLength="11" value={this.state.value} onChange={this.handleChange} />
                    </div>

                    <div style={label}>
                        Email address:
                    </div>

                    <div>
                        <input type="email" required  placeholder="Email address" style={input} name="email" value={this.state.value} onChange={this.handleChange} />
                    </div>

                    <div style={label}>
                        Message:
                    </div>
                    <div>
                        <textarea type="text" required  placeholder="Your message" style={input} name="message" value={this.state.value} onChange={this.handleChange} />
                    </div>

                    <div style={{
                        margin: '10px auto',
                        textAlign: 'center'
                    }}>
                        <input required type="submit" value="Submit" style={buttonPostSubmit} />
                    </div>

                </form>

                <div style={ssl}><img alt='' style={{width: '11px'}} src={process.env.PUBLIC_URL + '/images/SSL-Lock.png'}/> SSL Secured</div>

            </div>

        );
    }
}

export function ContactPage() {

    const header = {
        height: "62px",
        color: "white",
        backgroundColor: "#12539c",
        textAlign: "center",
        fontWeight: "bold",
        fontSize: "1.3em",
    };


    return (
    <div className="container">

        <div style={header}>
            <div style={{padding: "4px",  lineHeight: '54px'}}>
                <span>Contact Us</span>
            </div>
        </div>

        <NameForm />

    </div>
    );
  }
  