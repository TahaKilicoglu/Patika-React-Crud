import React, { useEffect, useState } from 'react';
import { Table, Button } from 'semantic-ui-react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Read() {
    const [apiData, setApiData] = useState([]);
    useEffect(() => {
        axios.get(`https://631b266adc236c0b1eee6c45.mockapi.io/todos`)
            .then((getData) => {
                setApiData(getData.data);
            })
    }, [])

    const setData = (id, firstName) => {
        localStorage.setItem('ID', id)
        localStorage.setItem('firstName', firstName)
    }

    const getData = () => {
        axios.get(`https://631b266adc236c0b1eee6c45.mockapi.io/todos`)
            .then((getData) => {
                setApiData(getData.data);
            })
    }

    const onDelete = (id) => {
        axios.delete(`https://631b266adc236c0b1eee6c45.mockapi.io/todos/${id}`)
        .then(() => {
            getData();
        })
    }

    return (
        <div>
            <Table>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>ID</Table.HeaderCell>
                        <Table.HeaderCell>First Name</Table.HeaderCell>
                        <Table.HeaderCell>Update</Table.HeaderCell>
                        <Table.HeaderCell>Delete</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {apiData.map((data) => {
                        return (
                            <Table.Row>
                                <Table.Cell>{data.id}</Table.Cell>
                                <Table.Cell>{data.firstName}</Table.Cell>
                                <Table.Cell>
                                    <Link to='/update'>
                                        <Button
                                            color="green"
                                            onClick={() => setData(data.id, data.firstName)}>
                                            Update
                                        </Button>
                                    </Link>
                                </Table.Cell>
                                <Table.Cell>
                                    <Button color="red" onClick={() => onDelete(data.id)}>Delete</Button>
                                </Table.Cell>
                            </Table.Row>
                        )
                    })}

                </Table.Body>
            </Table>
        </div>
    )
}
