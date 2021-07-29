import React, { useEffect, useState } from "react";
import "./css/style.css";

function Tempapp() {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Mumbai");

  useEffect(() => {
    const fetchApi = async () => {
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=06a56786b3d984ddf23c5dd9b6169f04`;
      const resp = await fetch(url);
      const res = await resp.json();
      setCity(res.main);
    };
    fetchApi();
  }, [search]);

  return (
    <>
      <div className="box">
        <div className="inputdata">
          <input
            type="search"
            value={search}
            className="inputfield"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          
          {!city ? (
            <p>No Data Found</p>
          ) : (
            <div>
              <div className="info">
                <h2 className="location">
                  <i className="fas fa-street-view"></i>
                  {search}
                </h2>
                <h1 className="temp">{city.temp}°Cel</h1>
                <h3 className="tempminmax">
                  Min: {city.temp_min}°Cel | Max: {city.temp_max}°Cel)
                </h3>
              </div>

              <div className="wave one"></div>
              <div className="wave two"></div>
              <div className="wave three"></div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Tempapp;
