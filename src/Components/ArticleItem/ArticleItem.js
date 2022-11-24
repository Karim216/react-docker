import axios from 'axios'
import React, { useState, useEffect, Fragment } from 'react'
import { Link } from 'react-router-dom'
import Loader from '../Loader/Loader'
import './ArticleItem.css'

const ArticleItem = () => {

  const [article, setArticle] = useState({
    posts: null,
    isLoad: true
  })

  const [image, setImage] = useState(null)

  useEffect(() => {

    axios.get('https://jsonplaceholder.typicode.com/photos').
    then(res => {
      const tab = []
      const tabImg = []
      for (let index = 0; index < 30; index++) {
        tab.push(res.data[index])
      }

      tab.map(item => {
        tabImg.push(item.url)
      })
      
      setImage(tabImg)

    }).catch(err => {
      console.log(err)
    })

    const fetchData = async () => {
      const result = await axios('http://127.0.0.1:8000/api/posts')

      setArticle({posts: result.data['hydra:member'], isLoad: false})
    }
    
    fetchData()

  }, [])

  console.log(article)
  
  if (!article.posts) return null;

  return article.isLoad ? (<Loader />) : (
    <Fragment>
      {
        article.posts.map((item, index) => {
          return (
            <div key={item.id} className="col-md-3 article-item card p-0" style={{width: "18rem"}}>
              <img src={image[index]} className="card-img-top" alt="..." />
              <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.content.slice(0,50)}</p>
                  <Link to='/article' className="btn btn-primary">Lire l'article</Link>
              </div>
            </div>
          )
        })
      }
    </Fragment>
  )
}

export default ArticleItem