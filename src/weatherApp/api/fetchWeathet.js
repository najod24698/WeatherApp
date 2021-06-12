import React from 'react';
import axios from 'axios';


const URL = "https://api.openweathermap.org/data/2.5/weather";
const API_Key = "acdc8848fe361f7542733cd200d5b9b5";

export const fetchWeather = async ( query ) => {
    const { data } = await axios.get(URL, {
        params: {
            q: query,
            units: "metric",
            APPID: API_Key,

        }
    }) 
    return data;
}




// const fetchWeathet = () => {
//     return (
//         <div className="fetchWeathet">
            
//         </div>
//     )
// }

// export default fetchWeathet
