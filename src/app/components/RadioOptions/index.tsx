import { useMemo } from 'react'
import * as Style from './style'

export interface Option {
   text: string
   value: string
   checked?: boolean
}

export interface IOptionChecked {
   id: string
   option: Option
}

export interface IRadioOptionsProps {
   id: string
   options: Option[]
   initChecked?: string
   onCheck?: (optionChecked: IOptionChecked) => void
}

export default function RadioOptions({ id, options, onCheck }: IRadioOptionsProps) {
   const htmlOptions = useMemo(() => {
      if (options?.length > 0) {
         return options?.map(option => (
            <Style.RadioGroup key={`${id}-${option.value}`}>
               <Style.Label htmlFor={option.value} onClick={() => onCheck?.({ id, option })}>
                  {option.text}
                  <Style.Radio
                     type="radio"
                     name={id}
                     id={option.value}
                     value={option.value}
                     onChange={() => onCheck?.({ id, option })}
                     checked={option.checked}
                  />
                  <Style.CheckMark className="check-mark" onClick={() => onCheck?.({ id, option })} />
               </Style.Label>
            </Style.RadioGroup>
         ))
      }
   }, [id, options, onCheck])

   return <Style.Options>{htmlOptions}</Style.Options>
}
