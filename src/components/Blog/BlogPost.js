import React from 'react'
import {documentToReactComponents} from '@contentful/rich-text-react-renderer'
import { BLOCKS, INLINES } from '@contentful/rich-text-types';


const options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => {
      return <p className='article-paragraph'>{ children }</p>
    },
    [INLINES.HYPERLINK]: (node, children) => {
      return <a className='article-link' href={node.data.uri}>{children}</a>;
    },
  },
}

const BlogPost = (props) => {
  const { id, postTitle, postArticle, postDate } = props

  return (
    <div className='postWrap'>
      <div className='articleWrap'>
        <h2> {postTitle} </h2>
        <h6> {postDate} </h6>
        <div className='article'> {documentToReactComponents(postArticle, options)} </div>
        <a href='/' className='blog-btn'>Continue Reading</a>
      </div>
    </div>
  )
}

export default BlogPost