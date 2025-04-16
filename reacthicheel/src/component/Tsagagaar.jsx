import React from "react";
import data from "../data/tsagagaar.json";
import "../style/Tsagagaar.css";
const Tsagagaar = () => {
  const ubData = data.xml.forecast5day.find(
    (data) => data.province == "Нийслэл"
  );
  console.log(ubData);
  let Huwsguldata = [];
  data.xml.forecast5day.map((data) =>
    data.city == "Улаанбаатар" ? Huwsguldata.push(data) : ""
  );

  console.log(Huwsguldata);
  return (
    <div className="container">
      <h1>{Huwsguldata[0].province}</h1>
      {Huwsguldata.map((data1) => (
        <div>
          <h2>{data1.city}</h2>
          <div className="fiveDay">
            {data1.data.map((day) => (
              <div>
                <div className="oneDay">
                  <div>
                    <h2>{day.weather.date}</h2>
                  </div>
                  <div>
                    <h2>Шөнө</h2>
                    <h2>{day.weather.temperatureNight}</h2>
                    <h2>Салхины хурд:{day.weather.windNight} м/с</h2>
                  </div>
                  <div>
                    <h2>Өдөр</h2>
                    <h2>{day.weather.temperatureDay}</h2>
                    <h2>Салхины хурд:{day.weather.windDay} м/с</h2>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Tsagagaar;
