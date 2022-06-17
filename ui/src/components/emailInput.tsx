import * as React from "react"
import './emailInput.scss'
import arrow from '../images/icon-arrow.svg';

interface IProps {
}

interface IState {
    email: string;
    emailError: boolean
}

class EmailInput extends React.Component<IProps, IState> {
    state: IState = {
        email: '',
        emailError: false
    }

    onChange = (newValue: string) => {
        this.setState({email: newValue, emailError: false})
    }

    onSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault();
        if (this.isValidEmail(this.state.email)) {
            alert('Email submitted successfully');
            this.setState({email: '', emailError: false});
            return;
        }

        this.setState({emailError: true});
    }

    isValidEmail = (email: string) => {
        const emailRegex = new RegExp(
            '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$'
        );

        return emailRegex.test(email);
    }

    render() {
        return ( 
            <form onSubmit={this.onSubmit} noValidate>
                <input type="email" name="email" placeholder="Email Address" className={`email${this.state.emailError ? "-error" : ''}`} value={this.state.email} onChange={(e) => this.onChange(e.target.value)}/>
                <button name="Submit" className="submit-button"><img src={arrow} alt="Arrow"/></button>
                { this.state.emailError && <label className="label-error">Please provide a valid email</label> }
            </form>
        )
    }
}

export default EmailInput