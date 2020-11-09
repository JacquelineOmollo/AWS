import React, {useState, Fragment} from 'react'
import Table from  "./Table"
import EditUser from "./EditUser"
import Form from "./Form"

export const Data = () => {
    // placement data
    const data = [
        {id: 1, name: "Jackie", username: "jackbird" },
        {id: 2, name: "Mary", username: "maryloo" },
        {id: 3, name: "Hunter", username: "huntergreen" }
    ]

    // the initial state of dat
    const initialState = {id: null, name: "", username: ""}

    // Setting state
    const [users, setUsers] = useState(data)
    const [currentUser, setCurrentUser] = useState(initialState)
    const [editing, setEditing] = useState(false)

     //Crud operations
     const addUser = user => {
		user.id = users.length + 1
		setUsers([ ...users, user ])
	}

	const deleteUser = id => {
		setEditing(false)

		setUsers(users.filter(user => user.id !== id))
	}

	const updateUser = (id, updatedUser) => {
		setEditing(false)

		setUsers(users.map(user => (user.id === id ? updatedUser : user)))
	}

	const editRow = user => {
		setEditing(true)

		setCurrentUser({ id: user.id, name: user.name, username: user.username })
	}



    return (
        <div>
        <h1>Users</h1>
        <div className="flex-row">
            <div className="flex-large">
                {editing ? (
                    <Fragment>
                        <h2>Edit user</h2>
                        <EditUser
                            editing={editing}
                            setEditing={setEditing}
                            currentUser={currentUser}
                            updateUser={updateUser}
                        />
                    </Fragment>
                ) : (
                    <Fragment>
                        <h2>Add user</h2>
                        <Form addUser={addUser} />
                    </Fragment>
                )}
            </div>
            <div className="flex-large">
                <h2>View users</h2>
                <Table users={users} editRow={editRow} deleteUser={deleteUser} />
            </div>
        </div>
    </div>
    )
}
