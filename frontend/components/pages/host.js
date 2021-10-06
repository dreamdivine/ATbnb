import React from 'react';
import ListingIndexContainer from "../listings/listing_index_container";
import ListingShowContainer from "../listings/listing_show_container";
import EditListingFormContainer from "../listings/edit_listing_form_container";

const Host = () => {
    return(
        <div className="hostFormPage">
            <ListingIndexContainer />
            <ListingShowContainer />
            <EditListingFormContainer />
        
        </div>
    )
}

export default Host;