<div>
  <form>
    <div>
      <label>
        City:
        <select
          required
          type="text"
          value={this.state.city}
          onChange={(e) => this.update(e, "city")}
        >
          <option selected disabled>
            Where are you going?
          </option>
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
        <p className="checkin">CHECK-IN</p>
        <p className="add-date">Add date</p>
        <input
          required
          type="date"
          value={this.state.check_in_date}
          onChange={(e) => this.reservation(e, "check_in_date")}
        />
      </label>
    </div>
    <div>
      <label>
        <p className="checkin">CHECK-OUT</p>
        <p className="add-date">Add date</p>
        <input
          required
          type="date"
          value={this.state.check_out_date}
          onChange={(e) => this.reservation(e, "check_out_date")}
        />
      </label>
    </div>
    <div>
      <label>
        Guests:
        <select
          required
          type="number"
          value={this.state.guests}
          onChange={(e) => this.update(e, "guests")}
        >
          <option selected disabled></option>
          <option value="1 guest">1 guest</option>
          <option value="2 guest">2 guests</option>
          <option value="3 guest">3 guests</option>
          <option value="4 guest">4 guests</option>
          <option value="5 guest">5 guests</option>
          <option value="6 guest">6 guests</option>
          <option value="7 guest">7 guests</option>
          <option value="8 guest">8 guests</option>
          <option value="9 guest">9 guests</option>
          <option value="10 guest">10 guests</option>
        </select>
      </label>
    </div>
  </form>
</div>;
