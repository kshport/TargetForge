import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useTranslation } from 'react-i18next';
import { useHistory } from "react-router-dom";

const ProxiesForm = ({ onSaveHandler, proxy }) => {
    const { t } = useTranslation();
    let history = useHistory();

    return (
        <Card>
            <Card.Header>
                {
                    proxy ?
                        t('proxies:page_edit_title') :
                        t('proxies:page_add_title')
                }
            </Card.Header>
            <Card.Body>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>
                            {t('proxies:page_add_form_ip_label')}
                        </Form.Label>
                        <Form.Control
                            type="text"
                            placeholder={t('proxies:page_add_form_ip_placeholder')}
                            value={proxy ? proxy.ip : null}
                        />
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>
                            {t('proxies:page_add_form_port_label')}
                        </Form.Label>
                        <Form.Control
                            type="text"
                            placeholder={t('proxies:page_add_form_port_placeholder')}
                            value={proxy ? proxy.port : null}
                        />
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>
                            {t('proxies:page_add_form_login_label')}
                        </Form.Label>
                        <Form.Control
                            type="text"
                            placeholder={t('proxies:page_add_form_login_placeholder')}
                            value={proxy ? proxy.login : null}
                        />
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>
                            {t('proxies:page_add_form_password_label')}
                        </Form.Label>
                        <Form.Control
                            type="text"
                            placeholder={t('proxies:page_add_form_password_placeholder')}
                            value={proxy ? proxy.password : null}
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>
                            {t('proxies:page_add_form_type_label')}
                        </Form.Label>
                        <Form.Control as="select">
                            <option>HTTP/HTTPS</option>
                            <option>SOCKS</option>
                        </Form.Control>
                    </Form.Group>

                    <Button variant="primary" onClick={onSaveHandler}>
                        {
                            proxy ?
                                t('universal:update') :
                                t('universal:store')
                        }
                    </Button>
                    {' '}
                    <Button variant="link" onClick={() => history.goBack()}>
                        {t('universal:cancel')}
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    );
};

export default ProxiesForm;
