// Create a Tabs component in React with four city name tabs. On click of each tab show some content about that city.
import { useState } from "react";

export const Tab = () => {
  const cities = [
    {
      name: "London",
      population: 8.98,
      counrty: "UK",
      language: "English",
      description:
        "London is the capital city of the United Kingdom. It is the U.K.'s largest metropolis and its economic, transportation, and cultural centre. London is also among the oldest of the world's great cities, with its history spanning nearly two millennia."
    },
    {
      name: "Paris",
      population: 2.16,
      counrty: "France",
      language: "French",
      description:
        "Paris, city and capital of France, situated in the north-central part of the country. People were living on the site of the present-day city, located along the Seine River some 233 miles (375 km) upstream from the river's mouth on the English Channel (La Manche), by about 7600 bce."
    },
    {
      name: "Tokyo",
      population: 14.56,
      counrty: "Japan",
      language: "Japenese",
      description:
        "Tokyo is the administrative, cultural, financial, commercial, and educational centre of Japan and the focus of an extensive urban complex that includes Kawasaki and Yokohama. Attractions include the Imperial Palace, encircled by stone-walled moats and broad gardens, and numerous temples and shrines."
    },
    {
      name: "New-York",
      population: 8.47,
      counrty: "USA",
      language: "English",
      description:
        "New York is composed of five boroughs – Brooklyn, the Bronx, Manhattan, Queens and Staten Island - is home to 8.4 million people who speak more than 200 languages, hail from every corner of the globe, and, together, are the heart and soul of the most dynamic city in the world."
    }
  ];
  const [city, setCity] = useState();
  const CityClickHandler = (city1) => {
    setCity(city1);
    const { name, population, country, language, description } = city;
    console.log("clicked", city);
    return (
      <div>
        <h4>hey hello {city.name}</h4>
        <p>Shashank</p>
      </div>
    );
  };

  return (
    <div className="Tab Main">
      <nav style={{ display: "flex", listStyle: "none" }}>
        {cities.map((city2) => {
          return (
            <li>
              <button
                className="button"
                onClick={() => CityClickHandler(city2)}
              >
                {" "}
                {city2.name}
              </button>
            </li>
          );
        })}
      </nav>
    </div>
  );
};
