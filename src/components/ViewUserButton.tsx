"use client"
import React from "react"

type IViewUserButton = {
    userId: number
}

const ViewUserButton: React.FC<IViewUserButton> = (props) => {
    const handleClick = () => alert(`User ID: ${props.userId}`)

    return <button onClick={handleClick}>Lihat User</button>
}

export default ViewUserButton