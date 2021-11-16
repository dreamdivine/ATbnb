import React, { Component } from 'react';
import Modal from '../modal/modal';
import NavBar from '../navbar/navbar';
import Explore from '../explore_nearby/explore';
import AllCity from '../listings/allcity';



class Homepage extends React.Component{
 
    render(){
        return (
          <div className="homepage">
            <Modal />
            <NavBar />
            <AllCity />
            <p className="nearby-explore">Explore nearby</p>
            <Explore />
          </div>
        );
}
}
export default Homepage;