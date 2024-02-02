import { Routes, Route } from 'react-router-dom'
import LoveLanguage from './LoveLanguage'

export default function Router() {
   return (
      <Routes>
         <Route index Component={LoveLanguage} />
      </Routes>
   )
}
