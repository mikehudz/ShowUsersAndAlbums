import React, { useEffect, useState } from "react";
import UserInfo from './UserInfo';

export default function App() {

  const [ users, setUsers ] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => res.json())
    .then(setUsers)
    .catch((err) => {
      console.log(err);
    });
  }, []);

  const userList = users.map((user) => {
    return (
      <div style={{border:"1px solid black", padding:20}}>
      <ul>
        <UserInfo user={user} />
      </ul>
    </div>
    )
  })

  return (
    <div>
      <ul>
        {userList}
      </ul>
    </div>
  )
}