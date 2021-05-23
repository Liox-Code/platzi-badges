import React from 'react';

import './styles/BadgeNew.css';

import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';

import header from '../images/badge-header.svg';

class BadgeNew extends React.Component{
    state = {
        form: {
            firstName: '',
            lastName: '',
            email: '',
            jobTitle: '',
            twitter: '',
        }
    };

    handleChange = e => {
        // const nextForm = this.state.form
        // nextForm[e.target.name] = e.target.value;

        // this.setState({
        //     form: nextForm,
        // })

        this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value,
            },
        });
    };

    render(){
        return(
            <React.Fragment>
                <div className="BadgeNew__hero">
                    <img className="img-fluid" src={header} alt="Logo"/>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge 
                            firstName={this.state.form.firstName}
                            lastName={this.state.form.lastName}
                            jobTitle={this.state.form.jobTitle}
                            twitter={this.state.form.twitter}
                            email={this.state.form.email}
                            avatarUrl=""
                            />
                        </div>
                        <div className="col-6">
                            <BadgeForm cambio={this.handleChange} formValues={this.state.form}/>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default BadgeNew;