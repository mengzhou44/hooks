import React, { useState } from 'react'
import useResources  from '../hooks/use-resources'
import ResourceList from './resource-list'

export default function App() {
    const [resource, setResource] = useState('')
    return (
        <div>
            <Userlist />
            <div>
                <button onClick={() => setResource('posts')}>Posts</button>
                <button onClick={() => setResource('toDos')}>ToDos</button>
            </div>
            <hr />

            <ResourceList resource={resource} />
          
        </div>
    )
}

export function Userlist() {
    const users = useResources('users')

    return users.map(item=> <li key = {item.id}> {item.name}</li>)
}
