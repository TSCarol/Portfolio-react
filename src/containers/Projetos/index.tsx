import { useEffect, useState } from 'react'
import Projeto from '../../components/Projeto'
import Titulo from '../../components/Titulo'
import { Lista } from './styles'
import { TituloSecundario } from '../../components/Titulo/styles'

interface Repo {
  id: number
  name: string
  description: string
  html_url: string
}

const Projetos: React.FC = () => {
  const [repos, setRepos] = useState<Repo[]>([])

  useEffect(() => {
    const nomeUsuario = 'TSCarol'
    fetch(`https://api.github.com/users/TSCarol/repos`)
      .then((response) => response.json())
      .then((data: Repo[]) => setRepos(data))
      .catch((error) => console.error('Erro ao obter repositórios:', error))
  }, [])

  return (
    <section>
      <TituloSecundario fontSize={18}>Projetos</TituloSecundario>
      <Lista>
        {repos.map((repo) => (
          <li key={repo.id}>
            <Projeto
              nome={repo.name}
              descricao={repo.description}
              link={repo.html_url}
            />
          </li>
        ))}
      </Lista>
    </section>
  )
}

export default Projetos
