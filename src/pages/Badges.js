import React from 'react';

import './styles/Badges.css';
import confLogo from '../images/badge-header.svg';
import BadgesList from '../components/BadgesList';
import { Link } from 'react-router-dom';

import api from '../api';
import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';
class Badges extends React.Component{

    state = {
        loading: true,
        error: null,
        data: undefined,
    };

    // constructor(props){
    //     super(props);
    //     console.log('1. Constructor()');
    //     this.state={
    //         data: [],
    //     }
    // }

    componentDidMount(){
        console.log('3. component()');

        this.intervalId = setInterval( this.fechData, 5000);
    }

    fechData = async () => {
        this.setState({loading: true, error: null});

        try{
            const data = await api.badges.list();
            this.setState({loading: false, data: data});
        } catch (error) {
            this.setState({loading: false, error: error});
        }
    }

    componentDidUpdate(prevProps, prevState){
        console.log('5. componentDidUpdate()');
        console.log({
            prevProps: prevProps,
            prevState: prevState,
        });
        
        console.log({
            props: this.props,
            state: this.state,
        });
    }

    componentWillUnmount(){
        console.log('6. componentWillUnmount');

        clearTimeout(this.intervalId);
    }

    render(){
        //console.log('2/4. render()');

        if(this.state.loading === true && !this.state.data){
            return <PageLoading/>;
        }

        if(this.state.error){
            return <PageError error={this.state.error}/>;
        }

        return(
            <React.Fragment>
                <div className="Badges">
                    <div className="Badges__hero">
                        <div className="Badges__container">
                            <img className="Badges_conf-logo" src={confLogo} alt="Conf Logo"/>
                        </div>
                    </div>
                </div>

                <div className="Badges__container">
                    <div className="Badges__buttons">
                        <Link to="/badges/new" className="btn btn-primary">
                            New Badge
                        </Link>
                    </div>

                    <BadgesList badges={this.state.data}/>

                    {this.state.loading && 'Loading...'}
                </div>
            </React.Fragment>
        )
    }
}

export default Badges