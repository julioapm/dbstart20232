import React, { useState } from "react";

interface FormData {
    nome: string;
    jedi: boolean;
}

export function ControlledForm() {
    const [formData,setFormData] = useState<FormData>({nome:'Luke', jedi:true});

    const handleChangeNome:React.ChangeEventHandler<HTMLInputElement> = (event) => {
        setFormData({
            ...formData,
            nome: event.target.value
        });
    };

    const handleChangeJedi:React.ChangeEventHandler<HTMLInputElement> = (event) => {
        setFormData({
            ...formData,
            jedi: event.target.checked
        });
    };

    const handleSubmit:React.FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();
        console.log(`nome=${formData.nome}`);
        console.log(`jedi=${formData.jedi}`);
    };

    return (
        <>
            <h1>Controlled Form</h1>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <label>
                        <p>Nome</p>
                        <input type='text' name='nome' value={formData.nome} onChange={handleChangeNome} />
                    </label>
                    <label>
                        <p>Jedi</p>
                        <input type='checkbox' name='jedi' checked={formData.jedi} onChange={handleChangeJedi}/>
                    </label>
                </fieldset>
                <button type='submit'>Enviar</button>
            </form>
        </>
    );
}