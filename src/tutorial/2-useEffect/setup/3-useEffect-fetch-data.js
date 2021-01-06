import React, { useState, useEffect } from "react";

const url = "https://api.github.com/users";

const UseEffectFetchData = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    let response = await fetch(url);
    let result = await response.json();
    setUsers(result);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <h3>Github Users</h3>
      <ul className="users">
        {users.map(({ id, login, avatar_url, html_url }) => {
          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h4>{login}</h4>
                <a href={html_url}>Profile</a>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default UseEffectFetchData;
