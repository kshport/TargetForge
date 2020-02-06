import React from 'react'
import Card from 'react-bootstrap/Card';
import { useTranslation } from 'react-i18next';

const DashboardRoot = () => {
    const { t } = useTranslation();

    return (
        <Card>
            <Card.Header>
                {t('dashboard:page_title')}
            </Card.Header>
            <Card.Body>
                Тут будут виджеты
            </Card.Body>
        </Card>
    )
};

export default DashboardRoot;
