import React from 'react'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ProxiesList from './ProxiesList';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

const ProxiesRoot = ({ proxiesList }) => {
    const { t } = useTranslation();

    return (
        <Card>
            <Card.Header>
                <Row>
                    <Col>
                        {t('proxies:page_list_title')}
                    </Col>
                    <Col style={{ textAlign: 'right' }}>
                        <NavLink to="/proxies/create">
                            <Button variant="primary" size="sm">
                                {t('proxies:page_list_add_button_label')}
                            </Button>
                        </NavLink>
                    </Col>
                </Row>
            </Card.Header>
            <Card.Body>
                <ProxiesList
                    proxiesList={ proxiesList }
                />
            </Card.Body>
        </Card>
    )
};

export default ProxiesRoot;
