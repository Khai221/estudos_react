import { useEffect, useState } from 'react';

const ReposList = () => {
    const [repos, setRepos] = useState([])

    useEffect(() => {
        fetch('https://api.github.com/users/Khai221/repos')
        .then(response => response.json())
        .then(data => {
            setRepos(data)
        })
    }, []);

    return (
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
    )
}

export default ReposList;