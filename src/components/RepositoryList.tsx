import { useState, useEffect } from "react";
import { RepositoryItem } from "./RepositoryItem";

interface Repository {
  name: string;
  description: string;
  html_url: string;
}

export function RepositoryList(){
  const [repositories, setRepositories] = useState<Repository[]>([]);
  
  useEffect(() => {
    fetch('https://api.github.com/users/abraao2501/repos')
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