import React from 'react';
import ListingIndexItem from "./listing_index_item";
import CreateListingFormContainer from "./create_listing_form_container";

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
            <ListingIndexItem listing={listing} deleteListing={deleteListing} key={i} />
          ))}
        </ul>
        <CreateListingFormContainer />
      </div>
    );
  }
}

export default ListingIndex;