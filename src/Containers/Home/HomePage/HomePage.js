import React from 'react'
import ArticleItem from '../../../Components/ArticleItem/ArticleItem'
import './HomePage.css'

const HomePage = () => {
  return (
    <div className='home-page'>
        <div className='home'>
          <h2 className='mb-5'>Tous nos acticles</h2>
          <div className="row acticles-container">
            <ArticleItem />
          </div>
        </div>
    </div>
  )
}

export default HomePage