import React from 'react'

const ProxiesList = ({ handleOnClick }) => {
    return (
        <div>
            <h2>Proxies List</h2>
            <a onClick={() => handleOnClick()}>Click Me!</a>
        </div>
    )
};

export default ProxiesList;
