import { useEffect, useState } from 'react';

const ReposList = () => {
    const [repos, setRepos] = useState([])
    const [estaCarregando, setEstaCarregando] = useState(true); // esta carregando = true enquanto a página carrega e ainda nao apareceram os repositorios

    useEffect(() => {
        fetch('https://api.github.com/users/Khai221/repos')
        .then(response => response.json())
        .then(data => {
            setTimeout(() => {
                setEstaCarregando(false) // esta carregando = false depois de 5 segundos do settimeout para simular um carregamento
                setRepos(data)
            }, 5000)
        })
    }, []);

    return (
        <>
        {estaCarregando && (
            <h1>Carregando...</h1>
        )}
        <ul>
            {repos.map(repositorio => (
                <li key={repositorio.id}>
                    <b>Nome: </b> {repositorio.name} <br />
                    <b>Linguagem: </b> {repositorio.language} <br />
                    <a target="_blank" href={repositorio.html_url}>Visitar no Github</a>
                </li>
            ))}
            <li>Repositório</li>
        </ul>
        </>
    )
}

export default ReposList;