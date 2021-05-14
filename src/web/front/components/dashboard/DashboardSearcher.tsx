import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/core/Autocomplete";
import MapSearcher from "./MapSearcher";

export default function DashboardSearcher(props) {
  function changeStore(e, value) {
    if (value != null) {
      const newPlacekey: string = value.placekey;
      props.setPlacekey(newPlacekey);
      props.setFilteredData(
        props.data.filter(
          (object) =>
            object.placekey == newPlacekey &&
            object.date >= props.dates[0] &&
            object.date <= props.dates[1]
        )
      );
    }
  }
  const [mapVisibility, setMapVisibility] = useState("hidden");

  return (
    <div className="d-flex">
      <img
        src="images/map-icon.svg"
        style={{ width: 40, marginRight: 20 }}
        onClick={() => setMapVisibility("flex")}
      />
      <MapSearcher
        mapVisibility={mapVisibility}
        setMapVisibility={setMapVisibility}
        {...props}
      />

      <Autocomplete
        id="combo-box-demo"
        options={props.uniqueStores}
        getOptionLabel={(option: any) => option.street_address}
        style={{ width: 200, height: 50 }}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search store"
            variant="outlined"
            style={{ backgroundColor: "#fff", fontSize: "16pt" }}
          />
        )}
        onChange={changeStore}
      />
    </div>
  );
}
