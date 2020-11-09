import React, {useState, Fragment} from 'react'
import CRUD from './CRUD'
import Table from  "./Table"

export const Data = (propss) => {
    // placement data
    const data = [
        {id: 1, name: "Jackie", username: "jackbird" },
        {id: 2, name: "Mary", username: "maryloo" },
        {id: 3, name: "Hunter", username: "huntergreen" }
    ]

    // the initial state of dat
    const initialState = {id: null, name: "", username: ""}

    // Setting state
    const [users, setUser] = useState(user)
    const [urrentUsers, setCurrentUser] = useState(initialState)
    const [editing, setEditing] = useState(false)


    return (
        <>
        <CRUD/>
        <Table/>
        </>
    )
}
