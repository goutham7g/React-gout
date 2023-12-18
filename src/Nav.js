import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import DataContext from './context/DataContext'
// import Post from './Post'

const Nav = () => {
  const {search, setSearch} = useContext(DataContext)
  return (
    <nav className="Nav">
      <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="search">SearchPosts</label>
        <input 
          id="search"
          type="text"
          placeholder="Search Posts"
          value={search}
          onChange={(e) =>setSearch(e.target.value)}
        />
      </form>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="Post">Post</Link></li>
        <li><Link to="about">About</Link></li>
      </ul>
    </nav>
  )
}

export default Nav