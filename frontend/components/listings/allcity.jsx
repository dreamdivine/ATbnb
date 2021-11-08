import React from 'react';
import { Link } from "react-router-dom";


export default function AllCity() {
    return (
      <div className="allCity">
          <div className="not-sure">Not sure where to go? Perfect.</div>
        <Link to={"/all-city"}>
            <div className="flexible">
              <p className="flexible-text">I'm flexible</p>
            </div>
        </Link>
      </div>
    );
}
