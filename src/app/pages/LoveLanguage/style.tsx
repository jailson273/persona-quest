import styled from 'styled-components'

export const Container = styled.div`
   margin: 0 auto;
   max-width: 400px;
   height: 100vh;
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
   padding: 20px;
   border-radius: 4px;
`
export const FormQuest = styled.form`
   width: 100%;
   display: flex;
   flex-direction: column;
   gap: 20px;
   position: relative;
`

export const GroupButtons = styled.div`
   width: 100%;
   display: flex;
   gap: 10px;
   justify-content: flex-end;
   padding-top: 20px;
   border-top: 2px solid #ccc;
   position: relative;
`

export const ButtonPreview = styled.button`
   width: 50%;
   height: 50px;
   cursor: pointer;
   color: #777;
   background: #e8e8e8;
   border: none;
   text-decoration: none;
   transition: background 0.5s ease;
   display: inline-block;
   cursor: pointer;
   outline: 0;
   text-align: center;
   position: relative;
   font-size: 14px;
   font-size: 0.875rem;
   font-weight: 600;
   border-radius: 3px;
   line-height: 1;
   padding: 12px 30px;
`

export const ButtonNext = styled.button`
   width: 50%;
   height: 50px;
   cursor: pointer;
   background: #d80075;
   color: #fff;
   border: none;
   text-decoration: none;
   transition: background 0.5s ease;
   display: inline-block;
   cursor: pointer;
   outline: 0;
   text-align: center;
   position: relative;
   font-size: 14px;
   font-size: 0.875rem;
   font-weight: 600;
   border-radius: 3px;
   line-height: 1;
   padding: 12px 30px;
`

export const ButtonFinish = styled.button`
   width: 50%;
   height: 50px;
   cursor: pointer;
   color: #fff;
   background: #d80075;
   border: none;
   text-decoration: none;
   transition: background 0.5s ease;
   display: inline-block;
   cursor: pointer;
   outline: 0;
   text-align: center;
   position: relative;
   font-size: 14px;
   font-size: 0.875rem;
   font-weight: 600;
   border-radius: 3px;
   line-height: 1;
   padding: 12px 30px;
`

export const ButtonStart = styled.button`
   width: 100%;
   height: 50px;
   cursor: pointer;
   color: #fff;
   background: #d80075;
   border: none;
   text-decoration: none;
   transition: background 0.5s ease;
   display: inline-block;
   cursor: pointer;
   outline: 0;
   text-align: center;
   position: relative;
   font-size: 14px;
   font-size: 0.875rem;
   font-weight: 600;
   border-radius: 3px;
   line-height: 1;
   padding: 12px 30px;
`

export const ButtonRefresh = styled.button`
   width: 100%;
   height: 50px;
   cursor: pointer;
   color: #fff;
   background: #d80075;
   border: none;
   text-decoration: none;
   transition: background 0.5s ease;
   display: inline-block;
   cursor: pointer;
   outline: 0;
   text-align: center;
   position: relative;
   font-size: 14px;
   font-size: 0.875rem;
   font-weight: 600;
   border-radius: 3px;
   line-height: 1;
   padding: 12px 30px;
   margin-top: 20px;
`

export const ErroMessage = styled.span`
   transition: all 0.3s ease-in-out;
   font-size: 12px;
   position: absolute;
   border-radius: 3px;
   top: -40px;
   z-index: 2;
   width: 100%;
   line-height: 1;
   background-color: #d80075;
   color: #fff;
   font-weight: 400;
   display: inline-block;
   padding: 8px;
`

export const List = styled.ul`
   list-style: none;
   display: flex;
   flex-direction: column;
   gap: 10px;
   margin-top: 20px;
`
export const ListItem = styled.li`
   display: flex;
   gap: 20px;
   line-height: 1.3;
   font-size: 20px;
   font-weight: 300;
   color: #222;
   align-items: center;
`

export const Cicle = styled.span`
   width: 50px;
   height: 50px;
   display: flex;
   align-items: center;
   justify-content: center;
   color: #222;
   border: 1px solid #ccc;
   font-weight: 600;
   &.primary {
      background-color: #d80075;
      color: #fff;
      border: none;
   }
`

export const Title = styled.h3`
   line-height: 1.3;
   text-align: center;
   padding: 0;
   font-weight: 500;
   font-size: 20px;
   color: #222;
`
export const Line = styled.p`
   text-align: center;
   margin-top: -20px;
   font-size: 20px;
   font-weight: 300;
   line-height: 1.3;
   margin-bottom: 10px;
`
export const Description = styled.span`
   display: flex;
   flex-direction: column;
   align-items: start;
`

export const Legend = styled.span`
   font-weight: 400;
   font-size: 14px;
`
export const Modal = styled.div`
   width: 100%;
   height: 100%;
   position: fixed;
   background-color: #000;
   opacity: 0.8;
`

export const ModalContent = styled.div`
   position: fixed;
   z-index: 2;
   min-width: 400px;
   min-height: 400px;
   background-color: #fff;
   opacity: 1;
   top: 50%;
   left: 50%;
   translate: -50% -50%;
   padding: 20px;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: space-around;
`
export const Close = styled.span`
   font-weight: 700;
   font-size: 26px;
   position: absolute;
   top: 10px;
   right: 20px;
   color: #ccc;
`

export const Info = styled.span`
   display: flex;
   justify-content: center;
   align-items: center;
   font-weight: 600;
   font-size: 18px;
   color: #fff;
   border-radius: 50%;
   width: 26px;
   height: 26px;
   background-color: #d80075;
   cursor: pointer;
`
export const Text = styled.span`
   display: flex;
   justify-content: space-between;
   gap: 10px;
`
