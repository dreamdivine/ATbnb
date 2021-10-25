import React from "react";
import ListingIndexItem from "./listing_index_item";
import ListingMap from "../listing_map/listing_map";
import LeftDetails from "../listings/left_details_cities";

class ListingIndex extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchListings();
  }

  render() {
    const { listings, deleteListing } = this.props;
    if (!listings) return null;
    return (
      <div className="listing-plus-map">
        <div className="map-listings-middle">
          <div className="left-details">
            <LeftDetails />
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
          <div className="map-listing">
            <ListingMap listings={this.props.listings} />
          </div>
        </div>
        {/* <div className="random-text">
          <p>
            HISTORY, PURPOSE AND USAGE Lorem ipsum, or lipsum as it is sometimes
            known, is dummy text used in laying out print, graphic or web
            designs. The passage is attributed to an unknown typesetter in the
            15th century who is thought to have scrambled parts of Cicero's De
            Finibus Bonorum et Malorum for use in a type specimen book. It
            usually begins with: “Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.” The purpose of lorem ipsum is to create a
            natural looking block of text (sentence, paragraph, page, etc.) that
            doesn't distract from the layout. A practice not without
            controversy, laying out pages with meaningless filler text can be
            very useful when the focus is meant to be on design, not content.
            The passage experienced a surge in popularity during the 1960s when
            Letraset used it on their dry-transfer sheets, and again during the
            90s as desktop publishers bundled the text with their software.
            Today it's seen all around the web; on templates, websites, and
            stock designs. Use our generator to get your own, or read on for the
            authoritative history of lorem ipsum.
          </p>
        </div> */}
      </div>
    );
  }
}

export default ListingIndex;
