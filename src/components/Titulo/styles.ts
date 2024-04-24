import styled from 'styled-components'

import { Props } from '.'

export const Titulo = styled.h3<Props>`
  color: ${(props) => props.theme.corPrincipal};
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '14px')};
  font-weight: bold;
  margin-bottom: 16px;
  padding-top: 20px;
`
export const TituloSecundario = styled.h4<Props>`
  color: ${(props) => props.theme.corSecundaria};
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '14px')};
  font-weight: bold;
  margin-bottom: 16px;
  padding-top: 20px;
`
