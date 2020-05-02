import {useState, useEffect } from 'react'
import { fetchResource } from '../actions/index'

export default function useResources(resource) {
    const [list, setList] = useState([])
    useEffect(() => {
        if (resource !== '') {
            fetchResource(resource, (data) => {
                setList(data)
            })
        }
    }, [resource])

    return list
}
