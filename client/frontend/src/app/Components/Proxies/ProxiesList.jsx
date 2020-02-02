import React from 'react'

const ProxiesList = ({ handleOnClickCreate, handleOnClickGetList }) => {
    return (
        <div>
            <h2>Proxies List</h2>
            <a onClick={() => handleOnClickCreate({
                ip: '192.168.1.1',
                port: 8888,
                login: 'login',
                password: 'password'
            })}>Click Me!</a>
            <br />
            <a onClick={() => handleOnClickGetList()}>Get list!</a>
        </div>
    )
};

export default ProxiesList;
