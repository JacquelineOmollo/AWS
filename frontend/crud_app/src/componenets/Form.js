import React, {useState} from 'react'
import {Button} from  'bootstrap-4-react'

const Form = (props) => {
   
        const initialFormState = { id: null, name: '', username: '' }
        const [ user, setUser ] = useState(initialFormState)

        const handleInputChange = event => {
            const { name, value } = event.target

		setUser({ ...user, [name]: value })
	}

	return (
		<form
			onSubmit={event => {
				event.preventDefault()
				if (!user.name || !user.username) return

				props.addUser(user)
				setUser(initialFormState)
			}}
		>
	
			<label>Name</label>
			<input type="text" name="name" value={user.name} onChange={handleInputChange} />
			<label>Username</label>
			<input type="text" name="username" value={user.username} onChange={handleInputChange} />
			<Button>Add new user</Button>
		
		</form>
    )
}

export default Form
