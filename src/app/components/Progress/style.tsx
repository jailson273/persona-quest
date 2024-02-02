import styled from 'styled-components'

interface IProgressStyleProps {
   percent: number
}

export const Container = styled.div<IProgressStyleProps>`
   width: ${({ percent }) => String(percent) + '%'};
   background: #d80075;
   height: 2px;
   transition: all 0.2s ease;
`
