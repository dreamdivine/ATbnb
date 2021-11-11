import React from 'react';
import { Link } from 'react-router-dom';

const Explore = () => {
    return (
      <div className="explore">
        <Link to="/sanfrancisco">
          <div className="image-detail">
            <div>
              <img src="/images/sf.webp" className="city-images"></img>
            </div>
            <div className="city-detail">
              <h3>San Francisco</h3>
              <p className="detail-text">30 minute drive</p>
            </div>
          </div>
        </Link>
         <Link to="/sanjose">
        <div className="image-detail">
          <div>
            <img src="/images/sanjose.webp" className="city-images"></img>
          </div>
          <div className="city-detail">
            <h3>San Jose</h3>
            <p className="detail-text">1 hour drive</p>
          </div>
        </div>
        </Link>
        <Link to="/oakland">
        <div className="image-detail">
          <div>
            <img src="/images/oakland.webp" className="city-images"></img>
          </div>
          <div className="city-detail">
            <h3>Oakland</h3>
            <p className="detail-text">15 minute drive</p>
          </div>
        </div>
        </Link>
        <Link to="/santa-barbara">
        <div className="image-detail">
          <div>
            <img src="/images/santaBarbara.webp" className="city-images"></img>
          </div>
          <div className="city-detail">
            <h3>Santa Barbara</h3>
            <p className="detail-text">6.5 hours drive</p>
          </div>
        </div>
        </Link>
        <Link to="/sacramento">
        <div className="image-detail">
          <div>
            <img src="/images/sacramento.webp" className="city-images"></img>
          </div>
          <div className="city-detail">
            <h3>Sacramento</h3>
            <p className="detail-text">2 hours drive</p>
          </div>
        </div>
        </Link>
        <Link to="/mammoth-lake">
        <div className="image-detail">
          <div>
            <img src="/images/mammothLake.webp" className="city-images"></img>
          </div>
          <div className="city-detail">
            <h3>Mammoth Lakes</h3>
            <p className="detail-text">6.5 hour drive</p>
          </div>
        </div>
        </Link>
        <Link to="/lake-tahoe">
        <div className="image-detail">
          <div>
            <img src="/images/lakeTahoe.webp" className="city-images"></img>
          </div>
          <div className="city-detail">
            <h3>Lake Tahoe</h3>
            <p className="detail-text">4 hour drive</p>
          </div>
        </div>
        </Link>
        <Link to="/berkeley">
        <div className="image-detail">
          <div>
            <img src="/images/berkeley.webp" className="city-images"></img>
          </div>
          <div className="city-detail">
            <h3>Berkeley</h3>
            <p className="detail-text">30 minute drive</p>
          </div>
        </div>
        </Link>
      </div>
    );
}

export default Explore;

