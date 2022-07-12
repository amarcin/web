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
  const { postTitle, postByline, postArticle, postDate } = props //include id item here if needed later
  if (window.location.pathname === '/blog') {
    return (
      <a href={'/blog/' + postTitle.replace(/[^\w\s']/g, "").replace(/\s+/g, "-")}>
        <div className='blog-post'>
          <div className='title-date'>
            <h1> {postTitle} </h1>
            <h2> {postDate} </h2>
          </div>
          <h3> {postByline} </h3>
          {/* <div className='article'> {documentToReactComponents(postArticle, options)} </div> */}
        </div>
      </a>
    )
  }
  else if (window.location.pathname === '/blog/' + postTitle.replace(/[^\w\s']/g, "").replace(/\s+/g, "-")) {
    return (
      <p>
        <div className='blog-post'>
          <div className='title-date'>
            <h1> {postTitle} </h1>
            <h2> {postDate} </h2>
          </div>
          <h3> {postByline} </h3>
          <div className='article'> {documentToReactComponents(postArticle, options)} </div>
        </div>
      </p>
    )
  }
}

export default BlogPost