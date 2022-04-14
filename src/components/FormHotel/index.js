import React from 'react';
import { Button, Form } from 'react-bootstrap';

export function FormHotel(props) {

    return (
        <>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Hotéis" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Menos de 1km" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Apartamentos" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Banheira" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Hotéis com acessibilidade" />
                </Form.Group>
                <Button variant="primary" onClick={() => props.filter(2) }>
                    Aplicar Filtros
                </Button>
            </Form>
        </>
    );
}