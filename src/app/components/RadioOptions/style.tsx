import styled from 'styled-components'

export const Options = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   min-height: 160px;
`

export const RadioGroup = styled.div`
   display: flex;
   padding: 4px;
`

export const Label = styled.label`
   position: relative;
   cursor: pointer;
   font-size: 16px;
   padding: 6px 0 0 45px;
   min-height: 66px;
   display: flex;
   flex-direction: column;
   justify-content: center;
`

export const Radio = styled.input`
   position: absolute;
   opacity: 0;
   &:checked ~ .check-mark::before {
      opacity: 1;
   }
   &:checked ~ .check-mark::after {
      opacity: 1;
   }
`

export const CheckMark = styled.span`
   position: absolute;
   top: 50%;
   translate: 0 -50%;
   left: 0;
   height: 30px;
   width: 30px;
   border: 1px solid #ccc;
   border-radius: 50%;
   &::before {
      display: block;
      content: '';
      position: absolute;
      opacity: 0;
      -moz-transition: all 0.3s ease-in-out;
      -o-transition: all 0.3s ease-in-out;
      -webkit-transition: all 0.3s ease-in-out;
      -ms-transition: all 0.3s ease-in-out;
      transition: all 0.3s ease-in-out;
      left: 12px;
      top: 8px;
      width: 5px;
      height: 10px;
      border: solid #fff;
      z-index: 999;
      border-width: 0 2px 2px 0;
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      transform: rotate(45deg);
   }
   &::after {
      width: inherit;
      height: inherit;
      display: block;
      content: '';
      position: absolute;
      opacity: 0;
      -moz-transition: all 0.3s ease-in-out;
      -o-transition: all 0.3s ease-in-out;
      -webkit-transition: all 0.3s ease-in-out;
      -ms-transition: all 0.3s ease-in-out;
      transition: all 0.3s ease-in-out;
      border-radius: 50%;
      background: #d80075;
      -moz-transition: all 0.3s ease-in-out;
      -o-transition: all 0.3s ease-in-out;
      -webkit-transition: all 0.3s ease-in-out;
      -ms-transition: all 0.3s ease-in-out;
      transition: all 0.3s ease-in-out;
   }
`
