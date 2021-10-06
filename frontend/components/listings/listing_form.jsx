import React from "react";
import {withRouter} from "react-router"


class ListingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.listing;
    console.log("listing")
    console.log(this.props.listing)
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }
  update(e, field) {
    this.setState({ [field]: e.target.value });
  }

  handleFile(e) {
    // this.setState({photoFile: e.currentTarget.files[0]});

    const file = e.currentTarget.files[0];

    this.setState({ photoFile: file });
  }

  handleSubmit(e) {
    e.preventDefault();
    // this.props
    //   .action(this.state)
    // .then(() => this.props.history.push("/"));
    const formData = new FormData();
    formData.append("listing[title]", this.state.title);
    // formData.append("listing[photo]", this.state.photoUrl);
    formData.append("listing[guests]", this.state.guests);
    formData.append("listing[bedroom]", this.state.bedroom);
    formData.append("listing[bathroom]", this.state.bathroom);
    formData.append("listing[latitude]", this.state.latitude);
    formData.append("listing[longitude]", this.state.longitude);
    formData.append("listing[price]", this.state.price);
    formData.append("listing[owner_Id]", this.state.owner_Id);
    formData.append("listing[location]", this.state.location);
    formData.append("listing[description]", this.state.description);

    if (this.state.photoFile) {
      formData.append("listing[photo]", this.state.photoFile);
    }
    this.props.action(formData, this.props.listing);
  }

  render() {
    return (
      <div className="listingForm">
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>
              Title
              <input
                required
                type="text"
                value={this.state.title}
                onChange={(e) => this.update(e, "title")}
              />
            </label>
          </div>
          <div>
            <label>
              Description
              <textarea
                required
                value={this.state.description}
                onChange={(e) => this.update(e, "description")}
              />
            </label>
          </div>
          <div>
            <label>
              Guests
              <input
                required
                type="number"
                value={this.state.guests}
                onChange={(e) => this.update(e, "guests")}
              />
            </label>
          </div>
          <div>
            <label>
              Bedroom
              <input
                required
                type="number"
                value={this.state.bedroom}
                onChange={(e) => this.update(e, "bedroom")}
              />
            </label>
          </div>
          <div>
            <label>
              Bathroom
              <input
                required
                type="number"
                value={this.state.bathroom}
                onChange={(e) => this.update(e, "bathroom")}
              />
            </label>
          </div>
          <div>
            <label>
              Price
              <input
                required
                type="number"
                value={this.state.price}
                onChange={(e) => this.update(e, "price")}
              />
            </label>
          </div>
          <div>
            <label>
              Location
              <input
                required
                type="text"
                value={this.state.location}
                onChange={(e) => this.update(e, "location")}
              />
            </label>
          </div>
          <div>
            <label>
              Latitude
              <input
                required
                type="number"
                value={this.state.latitude}
                onChange={(e) => this.update(e, "latitude")}
              />
            </label>
          </div>
          <div>
            <label>
              Longitude
              <input
                required
                type="number"
                value={this.state.longitude}
                onChange={(e) => this.update(e, "longitude")}
              />
            </label>
          </div>
          <div>
            {/* <label>
              Picture Url
              <input
                type="text"
                value={this.state.picture_url}
                onChange={(e) => this.update(e, "picture_url")}
              />
            </label> */}
          </div>
          <div>
            <input type="file" onChange={this.handleFile.bind(this)} />
          </div>
          <div>
            <button>{this.props.listingFormType}</button>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(ListingForm);

