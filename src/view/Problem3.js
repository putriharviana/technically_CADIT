import React, { useState, useEffect }  from 'react';
import dataSensor from "../data/sensor_data.json"

const Problem2 = () => {
    const temperatureArray = dataSensor.array.map(item => {
        return item.temperature
    })
    const humidityArray = dataSensor.array.map(item => {
        return item.humidity
    })
    Array.prototype.median = function () {
        return this.slice().sort((a, b) => a - b)[Math.floor(this.length / 2)]; 
    };
    const averageTemperature = temperatureArray.reduce((a,v,i)=>(a*i+v)/(i+1));
    const averageHumidity = humidityArray.reduce((a,v,i)=>(a*i+v)/(i+1));
    return (
        <div>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">By Day</th>
                        <th scope="col">Room Area</th>
                        <th scope="col">Max Temperature</th>
                        <th scope="col">Min Temperature</th>
                        <th scope="col">Max Humidity</th>
                        <th scope="col">Min Humidity</th>
                        <th scope="col">Median Temperature</th>
                        <th scope="col">Median Humidity</th>
                        <th scope="col">Average Temperature</th>
                        <th scope="col">Average Humidity</th>
                    </tr>
                </thead>
                <tbody>
                    { dataSensor.array.map( (sensor, index) => {
                        return (
                            <tr key={ index }>
                                <td scope="row">{ sensor.id }</td>
                                <td scope="row">{ sensor.roomArea }</td>
                                <td scope="row">{ Math.max.apply(Math, temperatureArray) }</td>
                                <td scope="row">{ Math.min.apply(Math, temperatureArray) }</td>
                                <td scope="row">{ Math.max.apply(Math, humidityArray) }</td>
                                <td scope="row">{ Math.min.apply(Math, humidityArray) }</td>
                                <td scope="row">{ temperatureArray.median() }</td>
                                <td scope="row">{ humidityArray.median() }</td>
                                <td scope="row">{ averageTemperature }</td>
                                <td scope="row">{ averageHumidity }</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default Problem2;
