import { useCallback, useState, useMemo } from 'react'
import questions, { IQuestion, LoveLanguageCode, LoveLanguageText } from '../data/questions'

interface IResult {
   code: LoveLanguageCode
   text: LoveLanguageText
   count: number
   primaryLanguage: boolean
}

export interface IResponsedQuestion extends IQuestion {
   responded: LoveLanguageCode | undefined
}

export default function useLoveLanguage() {
   const [currentCodeInfo, setCurrentCodeInfo] = useState<LoveLanguageCode>()
   const [showModal, setShowModal] = useState(false)
   const [questionFinished, setQuestionFinished] = useState(false)
   const [isStarted, setIsStarted] = useState(false)
   const [responsedQuestions, setResponsedQuestions] = useState<IResponsedQuestion[]>([
      ...questions.map(question => ({ ...question, responded: undefined }))
   ] as IResponsedQuestion[])
   const [currentQuestion, setCurrentQuestion] = useState<IResponsedQuestion>({
      ...questions[0],
      responded: undefined
   } as IResponsedQuestion)
   const [error, setError] = useState('')

   const [result, setResult] = useState<IResult[]>([])

   const totalQuestions = useMemo(() => questions.length, [])

   const progress = useMemo(() => {
      return ((currentQuestion.order - 1) / totalQuestions) * 100
   }, [totalQuestions, currentQuestion])

   const handleSaveResponseQuestion = useCallback((order: number, responded: LoveLanguageCode) => {
      setError('')
      setCurrentQuestion(({ ..._currentQuestion }) => {
         return {
            ..._currentQuestion,
            responded
         }
      })

      setResponsedQuestions(([...currentRespondedQuestions]) => {
         const index = currentRespondedQuestions.findIndex(question => question.order === order)
         if (index > -1) {
            Object.assign(currentRespondedQuestions[index], { responded })
         }
         return currentRespondedQuestions
      })
   }, [])

   const handleNextQuestion = useCallback(() => {
      if (!currentQuestion?.responded) {
         setError('Escolha uma das opções antes de ir para a próxima')
         return
      }

      if (currentQuestion.order === totalQuestions) {
         return
      }

      const currentIndex = responsedQuestions.findIndex(question => question.order === currentQuestion.order)
      setCurrentQuestion(responsedQuestions[currentIndex + 1])
   }, [currentQuestion, responsedQuestions, totalQuestions])

   const handlePreviewQuestion = useCallback(() => {
      setError('')
      const currentIndex = responsedQuestions.findIndex(question => question.order === currentQuestion.order)
      if (currentIndex === 0) {
         return
      }
      setCurrentQuestion(responsedQuestions[currentIndex - 1])
   }, [currentQuestion, responsedQuestions])

   const handleFinishQuestion = useCallback(() => {
      if (!currentQuestion?.responded) {
         setError('Escolha uma das opções antes de terminar')
         return
      }

      const resultQuestion = Object.keys(LoveLanguageCode)
         .map(
            (key): IResult => ({
               code: LoveLanguageCode[key],
               text: LoveLanguageText[key],
               primaryLanguage: false,
               count: responsedQuestions.filter(question => question.responded === key).length
            })
         )
         .sort((a, b) => (a.count < b.count ? 1 : -1))

      resultQuestion[0].primaryLanguage = true

      setResult(resultQuestion)
      setQuestionFinished(true)
      setIsStarted(false)
   }, [responsedQuestions, currentQuestion])

   const handleStartQuestion = useCallback(() => {
      setIsStarted(true)
   }, [])

   const handleRefreshQuestion = useCallback(() => {
      const newResponsedQuestions = questions.map(question => ({ ...question, responded: undefined }))
      setCurrentQuestion({ ...newResponsedQuestions[0] } as IResponsedQuestion)
      setResponsedQuestions([...newResponsedQuestions] as IResponsedQuestion[])
      setResult([])
      setQuestionFinished(false)
      setIsStarted(true)
   }, [])

   const handleCloseModal = useCallback(() => {
      setShowModal(false)
      setCurrentCodeInfo(undefined)
   }, [])

   const handleOpenModal = useCallback(() => {
      setShowModal(true)
   }, [])

   const handleSetCurrentCodeInfo = useCallback((code: LoveLanguageCode) => {
      setCurrentCodeInfo(code)
   }, [])

   return {
      showModal,
      questionFinished,
      isStarted,
      error,
      progress,
      currentQuestion,
      totalQuestions,
      result,
      currentCodeInfo,
      handleSetCurrentCodeInfo,
      handleSaveResponseQuestion,
      handleNextQuestion,
      handlePreviewQuestion,
      handleFinishQuestion,
      handleStartQuestion,
      handleRefreshQuestion,
      handleCloseModal,
      handleOpenModal
   }
}
