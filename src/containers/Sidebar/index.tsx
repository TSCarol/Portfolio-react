import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'
import { BotaoTema, SidebarContainer } from './styles'

type Props = {
  trocaTema: () => void
}

const Sidebar = (props: Props) => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Titulo fontSize={18}>Thaís Carolina</Titulo>
      <Paragrafo tipo="principal" fontSize={12}>
        Engenheira Front-end
      </Paragrafo>
      <a>
        <a href="https://github.com/TSCarol">GitHub</a>
        <br />
        <a href="https://www.linkedin.com/in/thais-carolina/">LinkedIn</a>
        <br />
        <a href="https://vercel.com/thais-carolinas-projects">Vercel</a>
        <br />
      </a>
      <BotaoTema onClick={props.trocaTema}>Trocar tema</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar
