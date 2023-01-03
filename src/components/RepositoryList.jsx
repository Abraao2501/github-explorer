import { useState, useEffect } from "react";
import { RepositoryItem } from "./RepositoryItem";

export function RepositoryList(){
  const [repositories, setRepositories] = useState([]);
  
  useEffect(() => {
    fetch('https://api.github.com/orgs/rocketseat/repos')
      .then(response => response.json())
      .then(data => setRepositories(data))
  }, []);

  return ( 
    <section className="m-10">
      <h1 className="text-2xl mb-4 font-bold text-violet-900">
        Lista de Repositórios
      </h1>

      <ul> 
        {repositories.map(repository => {
          return <RepositoryItem repository={repository} key={repository.name} />
        })}
      </ul>
    </section>
  )
}