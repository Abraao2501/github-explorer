interface RepositoryItem {
  repository : {
    name: string;
    description: string;
    html_url: string;
  }
}

export function RepositoryItem(props:RepositoryItem){
  return (
  <li className="mt-4 first:m-0">
    <strong>
      {props.repository.name}
    </strong>

    <p className="text-sm text-gray-800 mt-2">
      {props.repository.description}
    </p>

    <a className="inline-block text-violet-700" href={props.repository.html_url}>
      Acessar Portfólio
    </a>
  </li>
  )
}



