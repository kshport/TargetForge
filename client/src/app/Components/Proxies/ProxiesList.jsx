import React from 'react'
import ProxiesListItem from './ProxiesListItem';

const ProxiesList = ({ proxiesList }) => {
    return proxiesList.map(item => <ProxiesListItem proxy={item} />);
};

export default ProxiesList;
