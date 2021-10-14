import React, { Component } from 'react';
import Modal from '../modal/modal';
import NavBar from '../navbar/navbar';
import Explore from '../explore_nearby/explore'



class Homepage extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
          <div className="homepage">
            <Modal />
            <NavBar />
            <p className="nearby-explore">Explore nearby</p>
            <Explore />
          </div>
        );
}

}
export default Homepage;