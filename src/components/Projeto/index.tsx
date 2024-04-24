import Paragrafo from '../Paragrafo'
import { TituloSecundario } from '../Titulo/styles'
import { Card, LinkBotao } from './styles'

interface ProjetoProps {
  nome: string
  descricao: string
  link: string
}

const Projeto: React.FC<ProjetoProps> = ({ nome, descricao, link }) => (
  <Card>
    <TituloSecundario>{nome}</TituloSecundario>
    <Paragrafo tipo="secundario">{descricao}</Paragrafo>
    <LinkBotao href={link}>Visualizar</LinkBotao>
  </Card>
)

export default Projeto
