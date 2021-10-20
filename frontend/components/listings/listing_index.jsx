import React from 'react';
import ListingIndexItem from "./listing_index_item";


class ListingIndex extends React.Component {
  constructor(props){
    super(props)
  }
    componentDidMount(){
        this.props.fetchListings();
    }
 
  render() {
      const {listings, deleteListing} = this.props
       if (!listings) return null;
    return (
      <div>
        <ul>
          {listings.map((listing, i) => (
            <ListingIndexItem
              listing={listing}
              // deleteListing={deleteListing}
              key={i}
            />
          ))}
        </ul>
       
      </div>
    );
  }
}

export default ListingIndex;
