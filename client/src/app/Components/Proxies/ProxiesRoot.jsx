import React from 'react'
import Card from 'react-bootstrap/Card';
import ProxiesList from './ProxiesList';

const ProxiesRoot = ({ handleOnClickCreate, handleOnClickGetList }) => {
    return (
        <Card className="text-center">
            <Card.Header>Proxies</Card.Header>
            <Card.Body>
                <ProxiesList
                    handleOnClickCreate={handleOnClickCreate}
                    handleOnClickGetList={handleOnClickGetList}
                />
            </Card.Body>
            <Card.Footer className="text-muted">2 days ago</Card.Footer>
        </Card>
    )
};

export default ProxiesRoot;
