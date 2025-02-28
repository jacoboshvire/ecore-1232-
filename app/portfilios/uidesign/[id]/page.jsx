"use client"
import { useState, useEffect } from 'react'
import * as React from 'react'


export default function uidesignid({ params }) {

    const { id } = React.use(params)
    // variable for Portfiliopost()
    const [portfilios, setPortfilios] = useState([]);
    const [error, setError] = useState(false)

    //fatch api

    async function portfiliopost() {
        let url = `https://jacob-shevy-api.onrender.com/api/uidesign/${id}`
        let response = await fetch(url)
        let data = await response.json();
        return data;
    }

    useEffect(() => {

        portfiliopost().then((data) => {
            setPortfilios(data.foundUidesign);
            console.log(data.foundUidesign)
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
