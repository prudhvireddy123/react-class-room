import React, { useEffect, useState } from 'react'
import axios from 'axios';

export default function useCustomHttp(props) {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const { url } = props

    useEffect(() => {
        setLoading(true)
        axios.get(url).then((res) => {
            setData(res.data)
            setLoading(false)
            setError(false)
        }).catch(error => {
            console.log("Error failed to connect api")
            setData(null)
            setLoading(false)
            setError(true)
        })
    }, [])

    return [loading, error, data]
}
