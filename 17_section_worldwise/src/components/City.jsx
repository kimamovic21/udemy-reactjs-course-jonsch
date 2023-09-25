import { React, useEffect } from "react";
import styles from "./City.module.css";
import { useParams, useSearchParams } from "react-router-dom";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: "long",
  }).format(new Date(date));

const City = () => {
    const { id } = useParams();
    // console.log(id);

    const [searchParams, setSearchParams] = useSearchParams();

    const lat = searchParams.get('lat');
    const lng = searchParams.get('lng');
    // console.log(lat, lng);
  
    return (
        <>
            <h1>City {id}</h1>  
            <p>
                Position: {lat}, {lng}
            </p>
        </>
    );
};

export default City;