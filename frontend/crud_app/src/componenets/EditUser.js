import React, {useState, useEffect} from 'react'
import { Form, Button} from 'bootstrap-4-react';

const EditUser = (props) => {
    const [user, setUser] = useState(props.currentUser)

    useEffect(
        () => {
          setUser(props.currentUser)
        },
        [ props ]
      )  


      const handleInputChange = event => {
        const { name, value } = event.target
    
        setUser({ ...user, [name]: value })
      }
    
    return (
        <Form
      onSubmit={event => {
        event.preventDefault()

        props.updateUser(user.id, user)
      }}
    >
      <label>Name</label>
      <input type="text" name="name" value={user.name} onChange={handleInputChange} />
      <label>Username</label>
      <input type="text" name="username" value={user.username} onChange={handleInputChange} />
      <Button>Update user</Button>
      <Button onClick={() => props.setEditing(false)} className="button muted-button">
        Cancel
      </Button>
    </Form>
    )
}

export default EditUser
