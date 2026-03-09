import { useState, useEffect } from 'react'
import { client } from '../lib/sanity'

export function useContent(query: string) {
    const [data, setData] = useState<any>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<any>(null)

    useEffect(() => {
        client
            .fetch(query)
            .then((data) => {
                setData(data)
                setLoading(false)
            })
            .catch((err) => {
                setError(err)
                setLoading(false)
            })
    }, [query])

    return { data, loading, error }
}
