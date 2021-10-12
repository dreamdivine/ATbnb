import React, { Component } from 'react';
import GreetingContainer from '../greeting/greeting_container';
import Modal from '../modal/modal';
import NavBar from '../navbar/navbar';
import ListingShow from '../listings/listing_show';
import ListingShowContainer from '../listings/listing_show_container';


class Homepage extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
          <div className="homepage">
            <Modal />
            <NavBar />
          </div>
        );
}

}
export default Homepage;