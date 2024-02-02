import * as Style from './style'

export interface IProgressProps {
   percent: number
}

export default function Progress({ percent }: IProgressProps) {
   return <Style.Container percent={percent}></Style.Container>
}
