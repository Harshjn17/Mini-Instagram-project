import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import CreatePost from './Pages/Createpost'
import Feed from './Pages/Feed'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path='/create-post' element={<CreatePost />} />
            <Route path='/feed' element={<Feed />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App