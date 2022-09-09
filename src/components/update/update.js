import React, { useState, useEffect } from 'react';
import { Form, Button } from 'semantic-ui-react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
export default function Update() {
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState('');
    const [ID, setID] = useState(null);
    const sendDataToAPI = () => {
        axios.put(`https://631b266adc236c0b1eee6c45.mockapi.io/todos/${ID}`, {
            firstName
        }).then(() => {
            navigate('/read')
        })
    }

    useEffect(() => {
        setFirstName(localStorage.getItem('firstName'));
        setID(localStorage.getItem('ID'))
    }, [])

    return (
        <div>
            <Form>
                <Form.Field>
                    <label>First Name</label>
                    <input name="fname"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder='First Name' />
                </Form.Field>
                
                <Button type='submit' onClick={sendDataToAPI}>Update</Button>
            </Form>
        </div>
    )
}
