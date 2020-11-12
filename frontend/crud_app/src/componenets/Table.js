import React from 'react'
import { Form, Button} from 'bootstrap-4-react';

const Table = (props) => {
    return (
      <Form>
        <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Username</th>
            <th>Occupation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {props.users.length > 0 ? (
            props.users.map(user => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.occupation}</td>
                <td>
                  <Button
                    onClick={() => {
                      props.editRow(user)
                    }}
                    className="button muted-button"
                  >
                    Edit
                  </Button>
                  <Button
                    onClick={() => props.deleteUser(user.id)}
                    className="button muted-button"
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={3}>No users</td>
            </tr>
          )}
        </tbody>
      </table>
      </Form>
    )
}

export default Table
