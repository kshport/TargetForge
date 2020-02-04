import React from 'react'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

const ProxiesRoot = ({ proxiesList }) => {
    const { t } = useTranslation();

    return (
        <Card>
            <Card.Header>
                {t('dashboard:page_title')}
            </Card.Header>
            <Card.Body>

            </Card.Body>
        </Card>
    )
};

export default ProxiesRoot;
