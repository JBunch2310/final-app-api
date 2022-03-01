import { useEffect, useState } from "react"

export default function UserList({token}) {
    const [UserList, setUserList] = useState()
    useEffect(() => {
        fetch('http://localhost:3001/users')
            .then(response => response.json())
            .then(data => setUserList(data.users))
            .catch(alert)
    }, [token])
    return (
        <>
        <h1>User List Component</h1>
        {!UserList
        ? <h2>Loading...</h2>
        : UserList.map(user => {
            return <p key={user.id}>{user.email}, {user.userRole}</p>
        })
        }
        </>
    )
}