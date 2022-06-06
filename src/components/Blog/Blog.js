import React, { useState, useEffect, useCallback } from 'react'
import {client} from '../../client'
import BlogPost from './BlogPost'
import Loader from '../Home/Loader/Loader.js'

const Blog = () => {
  const [isBlogLoading, setIsBlogLoading] = useState(false)
  const [blogPosts, setBlogPosts] = useState([])

  const cleanBlogPosts = useCallback((rawData) => {
    const cleanPosts = rawData.map((post) => {
      const { sys, fields } = post
      const { id } = sys
      const postTitle = fields.title
      const postArticle = fields.article
      const postDate = fields.postDate
      const updatedPosts = { id, postTitle, postArticle, postDate }
      return updatedPosts
    })
    setBlogPosts(cleanPosts)
  },[])

  const getBlogPosts = useCallback(async () => {
    setIsBlogLoading(true)
    try {
      const response = await client.getEntries({ content_type: 'blogPost' })
      const responseData = response.items
      if (responseData) { console.log('retrieved blog posts'); cleanBlogPosts(responseData) }
      else { setBlogPosts([]) }
      setIsBlogLoading(false)
    }
    
    catch (error) {
      console.log(error)
      setIsBlogLoading(false)
    }
  }, [cleanBlogPosts])

  useEffect(() => {
    getBlogPosts()
  }, [getBlogPosts])

  if (isBlogLoading) {
    return <Loader />
  }

  // if no slides, don't render component
  if (!Array.isArray(blogPosts) || !blogPosts.length) {
    return null
  }

  return (
    <div className='blog'>
      <div className="blog-card">
        {blogPosts.map((item) => {
          const {id, postTitle, postArticle, postDate} = item
          return (
            <div>
              <BlogPost key={id} postTitle={postTitle} postArticle={postArticle} postDate={postDate} />
            </div>
          ) 
        })} 
      </div>
    </div>
  )
}

export default Blog