import React from 'react'
import useResources from '../hooks/use-resources'

export default function ResourceList({ resource }) {
    const list = useResources(resource)

    return list.map((item) => <li key={item.id}>{item.title}</li>)
}
