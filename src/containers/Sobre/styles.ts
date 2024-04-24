import styled from 'styled-components'

export const GithubSecao = styled.div`
  margin-top: 32px;
  margin-bottom: 64px;
  text-align: center;
  display: flex;
  flex-direction: center;
  justify-content: center;
  align-items: center;

  img {
    height: 157px;

    @media (max-width: 768px) {
      height: auto;
      width: 100%;
    }
  }
`
export const SobreSecao = styled.section`
  border: 1px solid #f0f0f0;
  padding: 20px;
  background-color: ${(props) => props.theme.corDeFundoBotao};
`
