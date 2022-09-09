import React, { useState } from 'react';
import { Form, Button } from 'semantic-ui-react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Create() {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState('');

  const sendDataToAPI = () => {
    axios.post(`https://631b266adc236c0b1eee6c45.mockapi.io/todos`, {
      firstName
    }).then(() => {
      navigate('/read')
    })
  }
  return (
    <div>
      <Form>
        <Form.Field>
          <label>First Name</label>
          <input name="fname" 
          onChange={(e) => setFirstName(e.target.value)} 
          placeholder='First Name' />
        </Form.Field>
        <Button type='submit' onClick={sendDataToAPI}>Submit</Button>
      </Form>
    </div>
  )
}
