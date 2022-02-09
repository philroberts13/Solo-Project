import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { createPlace } from "../../store/places";
import * as sessionActions from "../../store/session";


function CreateListingPage() {
    const dispatch = useDispatch();
    const history = useHistory();
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [country, setCountry] = useState("");
    const [price, setPrice] = useState(0);


    const handleSubmit = async (e) => {
        e.preventDefault();

        const newPlace = {
            name,
            address,
            city,
            state,
            country,
            price,
        };



        let createdPlace = await dispatch(createPlace(newPlace));

        if (createdPlace.id) {
          history.push(`/places/${createdPlace.id}`);

        }
      };

    return (
    <div>
        <h1>
            Hello!
        </h1>
        <form>
        <label>
        Title
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>
      <label>
        Address
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
      </label>
      <label>
        City
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          required
        />
      </label>
      <label>
        State
        <input
          type="text"
          value={state}
          onChange={(e) => setState(e.target.value)}
          required
        />
      </label>
      <label>
        Country
        <input
          type="text"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          required
        />
      </label>
      <label>
        Price
        <input
          type="text"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
      </label>
      <button type="submit">Create</button>
      </form>
    </div>
    )
}

export default CreateListingPage;
