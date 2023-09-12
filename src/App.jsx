import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setRedingTime] = useState(0)

 const  handleBookmarks = blog =>{
    const newBookmarks = [...bookmarks, blog]
    setBookmarks(newBookmarks)
  }

  const handleMarkTime = time =>{
     const newRedingTime = readingTime + time;
     setRedingTime(newRedingTime)
  }

  return (
    <> 
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto'>
      <Blogs handleBookmarks ={handleBookmarks} handleMarkTime={handleMarkTime}></Blogs>
      <Bookmarks bookmarks = {bookmarks} readingTime={readingTime}></Bookmarks>
      </div>
    </>
  )
}

export default App
