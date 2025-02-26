"use client"
import { useState, useEffect } from 'react'
import * as React from 'react'


export default function page({ params }) {

    const { id } = React.use(params)
    // variable for Portfiliopost()
    let [portfilios, setPortfilios] = useState([]);
    let [error, setError] = useState(false)

    //fatch api

    async function portfiliopost() {
        let url = `https://jacob-shevy-api.onrender.com/api/graphics/${id}`
        let response = await fetch(url)
        let data = await response.json();
        return data;
    }

    useEffect(() => {

        portfiliopost().then((data) => {
            setPortfilios(data.foundgraphics);
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
