import styled from 'styled-components'

export const Card = styled.div`
  border: 1px solid ${(props) => props.theme.corDaBorda};
  padding: 16px;
  height: 270px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
export const LinkBotao = styled.a`
  color: ${(props) => props.theme.corDeFundo};
  font-size: 14px;
  background-color: ${(props) => props.theme.corDeFundoBotao};
  text-decoration: none;
  padding: 8px 16px;
  display: inline-block;
  width: fit-content;
  margin-top: auto;
  border-radius: 20px;
  align-self: center;
`
