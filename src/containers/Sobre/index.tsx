import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { GithubSecao, SobreSecao } from './styles'

const Sobre = () => (
  <SobreSecao>
    <Titulo fontSize={18}>Sobre mim</Titulo>
    <Paragrafo tipo="principal">
      Com formação em Arquitetura e Urbanismo, redirecionei meu caminho
      profissional para o fascinante mundo do desenvolvimento web. Meu objetivo
      primordial é absorver e compartilhar conhecimentos acerca dos conceitos
      mais recentes e inovadores no âmbito do desenvolvimento web. Acredito
      firmemente na harmonia entre design e usabilidade, buscando
      incessantemente integrar beleza estética e praticidade em cada projeto que
      empreendo. Estou pronta para enfrentar os desafios que se apresentarem,
      encarando-os como oportunidades de crescimento e aprimoramento.
      Mantenho-me sempre receptiva a novas ideias e aprendizados, disposta a
      expandir minhas habilidades e perspectivas constantemente. E, é claro,
      nada como um bom café para manter a mente afiada e pronta para novos
      desafios. Skills: JavaScript, CSS, HTML, Bootstrap e JQuery. Campos em
      desenvolvimento: TypeScript, React, Angular e Figma.
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=TSCarol&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=TSCarol&layout=compact&langs_count=7&theme=dracula" />
    </GithubSecao>
  </SobreSecao>
)

export default Sobre
