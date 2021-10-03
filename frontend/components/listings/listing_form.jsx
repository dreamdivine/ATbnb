import React from "react";

class ListingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.listing;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  update(e, field) {
    this.setState({ [field]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.action(this.state)
    // .then(()=>this.props.history.push(`/`))
  }

// this.props.history.push(`/businesses/${this.state.businessId}`)

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Title
          <input
            type="text"
            value={this.state.title}
            onChange={(e) => this.update(e, "title")}
          />
        </label>
        <label>
          Description
          <textarea
            value={this.state.description}
            onChange={(e) => this.update(e, "description")}
          />
        </label>
        <label>
          Guests
          <input
            type="text"
            value={this.state.guests}
            onChange={(e) => this.update(e, "guests")}
          />
        </label>
        <label>
          Bedroom
          <input
            type="text"
            value={this.state.bedroom}
            onChange={(e) => this.update(e, "bedroom")}
          />
        </label>
        <label>
          Bathroom
          <input
            type="text"
            value={this.state.bathroom}
            onChange={(e) => this.update(e, "bathroom")}
          />
        </label>
        <label>
          Price
          <input
            type="text"
            value={this.state.price}
            onChange={(e) => this.update(e, "price")}
          />
        </label>
        <label>
          Location
          <input
            type="text"
            value={this.state.location}
            onChange={(e) => this.update(e, "location")}
          />
        </label>
        <label>
          Latitude
          <input
            type="text"
            value={this.state.latitude}
            onChange={(e) => this.update(e, "latitude")}
          />
        </label>
        <label>
          Longitude
          <input
            type="text"
            value={this.state.longitude}
            onChange={(e) => this.update(e, "longitude")}
          />
        </label>
        <label>
          Picture Url
          <input
            type="text"
            value={this.state.picture_url}
            onChange={(e) => this.update(e, "picture_url")}
          />
        </label>
        <button>{this.props.listingFormType}</button>
      </form>
    );
  }
}

export default ListingForm;

