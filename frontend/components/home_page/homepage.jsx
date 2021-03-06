import React, { Component } from 'react';
import Modal from '../modal/modal';
import NavBar from '../navbar/navbar';
import Explore from '../explore_nearby/explore';
import AllCity from '../listings/allcity';
import SearchContainer from '../search/search_container';


class Homepage extends React.Component{
 
    render(){
        return (
          <div className="homepage">
            <Modal />
            <div className="navbar-home">
              <NavBar />
            </div>
            {/* <SearchContainer /> */}
            <div className="allcity-home">
              <AllCity />
            </div>
            <p className="nearby-explore">Explore nearby</p>
            <div className='explore-home'>
              <Explore />
            </div>
          </div>
        );
}
}
export default Homepage;