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
  const { id, postTitle, postByline, postArticle, postDate } = props

  return (
    <div className='postWrap'>
      <div className='titleDate'>
        <h2> {postTitle} </h2>
        <h6> {postDate} </h6>
      <div>
          <h3> {postByline} </h3>
      </div>
        {/* <div className='article'> {documentToReactComponents(postArticle, options)} </div> */}
      </div>
    </div>
  )
}

export default BlogPost