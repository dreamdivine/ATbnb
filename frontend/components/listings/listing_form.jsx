import React from "react";
import {withRouter} from "react-router";
import ReservationForm from "../reservations/reservation_form";
import NavBarCity from "../navbar_city/navbar_city";

class ListingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.listing;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.renderListingErrors = this.renderListingErrors.bind(this);
  }
  update(e, field) {
    this.setState({ [field]: e.target.value });
  }

  // componentWillUnmount(){
  //   this.props.clearErrors()
  // }

  renderListingErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error ${i}`}>{error}</li>
        ))}
      </ul>
    );
  }

  handleFile(e) {
    // this.setState({photoFile: e.currentTarget.files[0]});

    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({ photoFile: file, photoUrl: fileReader.result });
    };
    if (file) {
      fileReader.readAsDataURL(file);
    } else {
      this.setState({ photoUrl: "", photoFile: null });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("listing[title]", this.state.title);
    formData.append("listing[guests]", this.state.guests);
    formData.append("listing[bedroom]", this.state.bedroom);
    formData.append("listing[bathroom]", this.state.bathroom);
    formData.append("listing[latitude]", this.state.latitude);
    formData.append("listing[longitude]", this.state.longitude);
    formData.append("listing[price]", this.state.price);
    formData.append("listing[owner_Id]", this.state.owner_Id);
    formData.append("listing[location]", this.state.location);
    formData.append("listing[description]", this.state.description);
    formData.append("listing[city]", this.state.city);
    if (this.state.photoFile) {
      formData.append("listing[photo]", this.state.photoFile);
    }
    if (this.props.currentUser) {
      this.props
        .action(formData, this.props.listing)
        .then((list) =>
          this.props.history.push(`/listings/${list.listing.id}`)
        );
    } else {
      this.props.openModal("login");
    }
  }

  render() {
    return (
      <div className="listingForm">
        <NavBarCity />
        <form onSubmit={this.handleSubmit}>
          <div>
            {this.renderListingErrors()}
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
                min="1"
                max="10"
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
                min="1"
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
                min="1"
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
                min="1"
                type="number"
                value={this.state.price}
                onChange={(e) => this.update(e, "price")}
              />
            </label>
          </div>
          <div>
            <label>
              City
              <select
                required
                type="text"
                value={this.state.city}
                onChange={(e) => this.update(e, "city")}
              >
                <option selected disabled></option>
                <option value="San Francisco">San Francisco</option>
                <option value="San Jose">San Jose</option>
                <option value="Oakland">Oakland</option>
                <option value="Santa Barbara">Santa Barbara</option>
                <option value="Sacramento">Sacramento</option>
                <option value="Mammoth Lakes">Mammoth Lakes</option>
                <option value="Lake Tahoe">Lake Tahoe</option>
                <option value="Berkeley">Berkeley</option>
              </select>
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

export default withRouter(ListingForm)

