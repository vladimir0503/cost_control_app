import React, { useState } from 'react';
import { Form } from 'semantic-ui-react';

function Autorization() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = () => {
        const data = {
            name,
            email
        };
        console.log(data);
        setName('');
        setEmail('');
    }

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Input
                        placeholder='Name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <Form.Input
                        placeholder='Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Form.Button content='Войти' />
                </Form.Group>
            </Form>
        </div>
    )
}

export default Autorization
