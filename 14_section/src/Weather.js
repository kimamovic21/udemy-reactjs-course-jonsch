import React from "react";
import Day from "./Day";

class Weather extends React.Component {
    componentWillUnmount() {
        console.log('Weather will unmount');
    };

    render() {
        // console.log(this.props);
        const { 
            temperature_2m_max: max,
            temperature_2m_min: min, 
            time: dates,
            weathercode: codes
        } = this.props.weather;

        return (
            <div>
                <h2>Weather {this.props.location}</h2>
                <ul className="weather">
                    {dates.map((date, index) => {
                        // console.log(date, index);
                        return (
                            <Day 
                                date={date}
                                max={max.at(index)}
                                min={min.at(index)}
                                code={codes.at(index)}
                                key={date}
                                isToday={index === 0}
                            />
                        )
                    })}
                </ul>
            </div>
        );
    };
};

export default Weather;