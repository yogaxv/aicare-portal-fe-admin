import { Routes, Route } from 'react-router-dom'
import Article from './article/Article'

const ContentsWrapper = () => {
  return (
    // <Route path="/" element={<App />}>
    //   <Route path="article" element={<Article />} />
    // </Route>

    <Routes>
      <Route path="/article" element={<Article />} />
    </Routes>
  )
}

export default ContentsWrapper