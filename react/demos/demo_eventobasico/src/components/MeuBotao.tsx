export function MeuBotao() {
    const handleClick = () => {
        alert('Clicou o botão!');
    };

    return (
        <button id='botao1' onClick={handleClick}>Clique Aqui</button>
    );
}