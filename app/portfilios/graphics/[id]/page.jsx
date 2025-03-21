"use client"
import React, { useState, useEffect } from 'react'


export default function Graphicsid({ params }) {

    const { id } = React.use(params)
    // variable for Portfiliopost()
    const [graphic, setGraphic] = useState([]);
    const [error, setError] = useState(false)

    //fatch api

    async function portfiliopost() {
        let url = `https://jacob-shevy-api.onrender.com/api/graphics/${id}`
        let response = await fetch(url)
        let data = await response.json();
        return data;
    }

    useEffect(() => {

        portfiliopost().then((data) => {
            setGraphic(data.foundgraphics);
            console.log(data.foundgraphics)
        }).catch(e => {
            setError(true);
        })
    }, [])
    return (

        <div>
            me {id}
        </div>
    )
}
