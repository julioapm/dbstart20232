import { useRef } from "react";

export function UncontrolledForm() {
    const nomeInputRef = useRef<HTMLInputElement>(null);
    const jediInputRef = useRef<HTMLInputElement>(null);
    const nomeInputDefault = 'Luke';
    const jediInputDefault = true;

    const handleSubmit:React.FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();
        console.log(`nome=${nomeInputRef.current?.value}`);
        console.log(`jedi=${jediInputRef.current?.checked}`);
    };

    return (
        <>
            <h1>Uncontrolled Form</h1>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <label>
                        <p>Nome</p>
                        <input type='text' name='nome' ref={nomeInputRef} defaultValue={nomeInputDefault} />
                    </label>
                    <label>
                        <p>Jedi</p>
                        <input type='checkbox' name='jedi' ref={jediInputRef} defaultChecked={jediInputDefault} />
                    </label>
                </fieldset>
                <button type='submit'>Enviar</button>
            </form>
        </>
    );
}