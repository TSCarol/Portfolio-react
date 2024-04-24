import styled from 'styled-components'
import { P } from '../../components/Paragrafo/styles'

export const Descricao = styled(P)`
  margin-top: 24px;
  margin-bottom: 40px;
`
export const BotaoTema = styled.button`
  border-radius: 12px;
  padding: 8px;
  color: ${(props) => props.theme.corSecundaria};
  font-size: 10px;
  font-weight: bold;
  background-color: ${(props) => props.theme.corDeFundo};
  cursor: pointer;
  margin: 15px;
`
export const SidebarContainer = styled.div`
  position: sticky;
  top: 80px;
  left: 0;
  background-color: ${(props) => props.theme.corDeFundoBotao};
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 20px;

  a {
    color: ${(props) => props.theme.corPrincipal};
    text-decoration: none;
    transition: color 0.3s;
    margin: 25px;

    &:hover {
      color: ${(props) => props.theme.corSecundaria};
    }
  }

  @media (max-width: 768px) {
    margin-bottom: 40px;
    text-align: center;
  }
`
