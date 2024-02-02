import * as Style from './style'

export interface ILineProps {
   text: string
}

export default function Line({ text }: ILineProps) {
   return <Style.Container>{text}</Style.Container>
}
