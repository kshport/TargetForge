import React from 'react';

const ProxiesListItem = ({ proxy }) => {
    return (
        <div>
            { `${proxy.ip}:${proxy.port}@${proxy.login}:${proxy.password}` }
        </div>
    );
};

export default ProxiesListItem;
