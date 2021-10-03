import React, { Component } from 'react';
import GreetingContainer from '../greeting/greeting_container';
import Modal from '../modal/modal';
import NavBar from '../navbar/navbar';
import ListingIndexContainer from '../listings/listing_index_container';


class Homepage extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
          <div className="homepage">
            <GreetingContainer />
            <Modal />
            <NavBar />
          </div>
        );
}

}
export default Homepage;