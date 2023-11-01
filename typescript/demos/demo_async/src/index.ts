async function main() {
    const uriBase = 'https://jsonplaceholder.typicode.com';
    try {
        const resposta = await fetch(`${uriBase}/post`);
        if (resposta.ok) {
            const dados = await resposta.json();
            console.log(dados);
        } else {
            console.log(resposta.status);
            console.log(resposta.statusText);
        }
    } catch (error) {
        console.error('Falha no processamento!');
        console.error(error);
    }
}

main();