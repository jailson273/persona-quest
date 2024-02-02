import * as Style from './style'

export interface ITitleProps {
   text: string
}

export default function Title({ text }: ITitleProps) {
   return <Style.Container>{text}</Style.Container>
}
