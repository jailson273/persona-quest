import * as Style from './style'
import Counter from '@quest/app/components/Counter'
import RadioOptions, { Option } from '@quest/app/components/RadioOptions'
import Progress from '@quest/app/components/Progress'
import useLoveLanguage from './hooks/useLoveLanguage'
import { LoveLanguageCode, LoveLanguageDescription, LoveLanguageText } from './data/questions'
import Line from '@quest/app/components/Line'
import Title from '@quest/app/components/Title'

export default function LoveLanguage() {
   const {
      questionFinished,
      isStarted,
      error,
      currentQuestion,
      progress,
      totalQuestions,
      result,
      showModal,
      currentCodeInfo,
      handleSetCurrentCodeInfo,
      handleOpenModal,
      handleCloseModal,
      handleSaveResponseQuestion,
      handleNextQuestion,
      handlePreviewQuestion,
      handleFinishQuestion,
      handleStartQuestion,
      handleRefreshQuestion
   } = useLoveLanguage()

   return (
      <Style.Container>
         {!isStarted && !questionFinished && (
            <Style.FormQuest>
               <Style.Title>{'Qual a sua Linguagem do Amor?'}</Style.Title>
               <Line text="Você sabia que a maioria dos casais brigam por não saberem se comunicar?" />
               <Line text="Acontece que cada um de nós tem uma forma de demonstrar amor e se sentir amado." />
               <Line text="Descubra a linguagem do amor que toca o seu coração ou da pessoa amada! <3" />
               <Style.ButtonStart type="button" onClick={handleStartQuestion}>
                  Quero saber minha Linguagem do Amor
               </Style.ButtonStart>
            </Style.FormQuest>
         )}
         {isStarted && (
            <Style.FormQuest>
               <Progress percent={progress} />
               <Counter current={currentQuestion.order} total={totalQuestions} />
               <RadioOptions
                  id={String(currentQuestion?.order)}
                  options={
                     currentQuestion?.options?.map(option => ({
                        value: option.loveLanguageCode,
                        text: option.answer,
                        checked: option.loveLanguageCode === currentQuestion?.responded
                     })) as Option[]
                  }
                  onCheck={optionChecked =>
                     handleSaveResponseQuestion(
                        Number(optionChecked?.id),
                        optionChecked?.option?.value as LoveLanguageCode
                     )
                  }
               />

               <Style.GroupButtons>
                  {currentQuestion.order > 1 && (
                     <Style.ButtonPreview type="button" onClick={handlePreviewQuestion}>
                        Anterior
                     </Style.ButtonPreview>
                  )}
                  {currentQuestion.order < totalQuestions && (
                     <Style.ButtonNext type="button" onClick={handleNextQuestion}>
                        Próxima
                     </Style.ButtonNext>
                  )}
                  {currentQuestion.order === totalQuestions && (
                     <Style.ButtonFinish type="button" onClick={handleFinishQuestion}>
                        Resultado
                     </Style.ButtonFinish>
                  )}
               </Style.GroupButtons>
               {error && <Style.ErroMessage>{error}</Style.ErroMessage>}
            </Style.FormQuest>
         )}
         {questionFinished && (
            <Style.FormQuest>
               <Style.Title>Resultado</Style.Title>
               <Style.Line> Sua Linguagem do Amor é </Style.Line>
               <Title text={result[0].text} />
               <Style.List>
                  {result.map((language, index) => (
                     <Style.ListItem key={language.code}>
                        <Style.Cicle className={language.primaryLanguage ? 'primary' : ''}>{index + 1}</Style.Cicle>
                        <Style.Description>
                           <Style.Text>
                              {language.text}
                              <Style.Info
                                 onClick={() => {
                                    handleOpenModal()
                                    handleSetCurrentCodeInfo(language.code)
                                 }}
                              >
                                 ?
                              </Style.Info>
                           </Style.Text>
                           <Style.Legend>{language.count} respostas</Style.Legend>
                        </Style.Description>
                     </Style.ListItem>
                  ))}
               </Style.List>
               <Style.ButtonRefresh type="button" onClick={handleRefreshQuestion}>
                  Refazer o teste
               </Style.ButtonRefresh>
            </Style.FormQuest>
         )}
         {showModal && (
            <>
               <Style.Modal onClick={handleCloseModal} />
               <Style.ModalContent>
                  <Style.Close onClick={handleCloseModal}>X</Style.Close>
                  <Title text={LoveLanguageText[currentCodeInfo as LoveLanguageCode]} />
                  <Style.Line>{LoveLanguageDescription[currentCodeInfo as LoveLanguageCode]} </Style.Line>
               </Style.ModalContent>
            </>
         )}
      </Style.Container>
   )
}
