import Style from './style'

export interface ICounterProps {
   current: number
   total: number
}

export default function Counter({ current, total }: ICounterProps) {
   return (
      <Style>
         {current}/{total}
      </Style>
   )
}
