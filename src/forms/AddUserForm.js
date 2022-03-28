import React, { useState } from 'react'

const AddUserForm = (props) => {
    return (
        <form>
            <label>Nome</label>
            <input type="text" name="name" value="" />
            <label>Usuário</label>
            <input type="text" name="username" value="" />
            <button>Adicionar novo usuário</button>
        </form>
    )
}

export default AddUserForm