import React from 'react';
import {Link} from 'react-router-dom';

import './styles/BadgeDetails.css';
import congLogo from '../images/platziconf-logo.svg';

import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';
import Badge from '../components/Badge';
import DeleteBadgeModal from '../components/DeleteBadgeModal';

import api from '../api';

class BadgeDetail extends React.Component{

    state = {
        loading: true,
        error: null,
        data: undefined,
        isOpen: false,
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData = async e => {
        this.setState({ loading: true, error: null });

        try{
            const data = await api.badges.read(
                this.props.match.params.badgeId
            );
            this.setState({ loading: false, data: data});
        } catch (error) {
            this.setState({ loading: false, error: error});
        }
    }

    handleCloseModal = e => {
        this.setState({ isOpen: false});
    }

    handleOpenModal = e => {
        this.setState({ isOpen: true});
    }

    onDeleteBadge = async e => {
        this.setState({ loading: true, error: null });

        try {
            await api.badges.remove(
                this.props.match.params.badgeId
            )
            this.setState({ loading: false });

            this.props.history.push('/badges')
        } catch (error) {
            this.setState({ loading: false, error: error });
        }
    }

    render() {
        if(this.state.loading){
            return <PageLoading/>
        }

        if(this.state.error){
            return <PageError error={this.state.error}/>
        }

        const badge = this.state.data;

        return(
            <div>
                <div className="BadgeDetails__hero">
                    <div className="container">
                        <div className="row">
                            <div className="col-6">
                                <img src={congLogo} alt="Logo de la Conferencia"/>
                            </div>
                            <div className="col-6 BadgeDetails__hero-attendant-name">
                                <h1>{badge.firstName} {badge.lastName}</h1>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge 
                                firstName={badge.firstName || 'FIRST_NAME'}
                                lastName={badge.lastName || 'LAST_NAME'}
                                jobTitle={badge.jobTitle || 'TWITTER'}
                                twitter={badge.twitter || 'JOB_TITLE'}
                                email={badge.email ||'EMAIL'}
                                avatarUrl={badge.avatarUrl}
                            />
                        </div>
                        <div className="col-6">
                            <h2>Action</h2>
                            <div>
                                <Link className="btn btn-primary mb-2" to={`/badges/${badge.id}/edit`}>Edit</Link>
                            </div>
                            <div>
                                <button onClick={this.handleOpenModal} className="btn btn-danger">Delete</button>
                                <DeleteBadgeModal
                                    isOpen={this.state.isOpen} 
                                    onClose={this.handleCloseModal}
                                    onDeleteBadge={this.onDeleteBadge}
                                >
                                    Lorem Ipsum
                                </DeleteBadgeModal>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BadgeDetail;