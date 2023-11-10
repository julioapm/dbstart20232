import { useToggle } from "../hooks/useToggle";

export function AloMundoToggle() {
    const [visivel, alterarVisivel] = useToggle(false);
    return (
        <>
            <button onClick={alterarVisivel}>Clique</button>
            {visivel && <h1>Alô, Mundo!</h1>}
        </>
    );
}
