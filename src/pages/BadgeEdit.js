import React from 'react';

import './styles/BadgeNew.css';

import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';
import PageLoading from '../components/PageLoading';

import header from '../images/platziconf-logo.svg';

import api from '../api';

class BadgeNew extends React.Component{
    state = {
        form: {
            loading: true,
            error: null,
            firstName: '',
            lastName: '',
            email: '',
            jobTitle: '',
            twitter: '',
        }
    };

    componentDidMount() {
        this.fetchData();
    }

    fetchData = async e => {
        this.setState({ loading: true, error: null});

        try {
            const data = await api.badges.read(
                this.props.match.params.badgeId
            );
            
            this.setState({ loading: false, form: data});
        } catch (error) {
            this.setState({ loading: false, error: error});
        }
    }

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

    handleSubmit = async e => {
        e.preventDefault();
        this.setState({ loading: true, error: null });

        try{
            await api.badges.update(this.props.match.params.badgeId, this.state.form);
            this.setState({ loading: false });
            //console.log('creado');
            this.props.history.push('/badges');
        } catch (error) {
            this.setState({ loading: false, error: error });
        }
    };

    render(){
        if(this.state.loading){
            return <PageLoading/>;
        }

        return(
            <React.Fragment>
                <div className="BadgeNew__hero">
                    <img className="BadgeNew__hero-image img-fluid" src={header} alt="Logo"/>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge 
                                firstName={this.state.form.firstName || 'FIRST_NAME'}
                                lastName={this.state.form.lastName || 'LAST_NAME'}
                                jobTitle={this.state.form.jobTitle || 'TWITTER'}
                                twitter={this.state.form.twitter || 'JOB_TITLE'}
                                email={this.state.form.email ||'EMAIL'}
                                avatarUrl={this.state.form.avatarUrl}
                            />
                        </div>
                        <div className="col-6">
                            <h1>Edit Attendant</h1>
                            <BadgeForm 
                                cambio = {this.handleChange}
                                enviarSubmit = {this.handleSubmit}
                                formValues = {this.state.form}
                                error = {this.state.error}
                            />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default BadgeNew;