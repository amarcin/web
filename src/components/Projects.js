import React, { useState, useEffect, useCallback } from 'react';
import { client } from '../client';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Loader from './Home/Loader/Loader';


const Projects = () => {
  const [projects, setProjects] = useState({})
  const [isProjectsLoading, setIsProjectsLoading] = useState(false)

  // clean data from contentful
  const cleanProjects = useCallback((rawData) => {
    const cleanProj = rawData.map((rawData) => {
      const { sys, fields } = rawData
      const { id } = sys
      const projTitle = fields.title
      const projDescription = fields.description
      const projEntry = documentToReactComponents(fields.entry)
      const projBg = fields.image.fields.file.url
      const updatedProj = { id, projTitle, projDescription, projEntry, projBg }
      return updatedProj
    })
    setProjects(cleanProj)
  }, [])

  // retrieve data from contentful
  const getProjects = useCallback(async () => {
    setIsProjectsLoading(true)
    try {
      const response = await client.getEntries({ content_type: 'photoCarousel' })
      const responseData = response.items

      if (responseData) {
        cleanProjects(responseData)
      } else {
        setProjects([])
      }
      setIsProjectsLoading(false)
    } catch (error) {
      console.log(error)
      setIsProjectsLoading(false)
    }
  }, [cleanProjects])

  // call and pull data from getProjects()
  useEffect(() => {
    getProjects()
  }, [getProjects])

  // call the loader temporarily
  if (isProjectsLoading) {
    return <Loader />
  }

  // if no slides, don't render component
  if (!Array.isArray(projects) || !projects.length) {
    return null
  }

  // returns an array of '/projects/<project name w/o punctuation or spaces>' 
  // and the project ID to match to the window location pathname (current URL)
  function urlArr() {
    return projects.map((item) => {
      return ['/projects/' + removePunctuation(item.projTitle), item.id]
    })
  }

  // find the corresponding project title that matches the URL path
  function match(id) {
    return projects.find(project => project.id.includes(id))
  }

  return whichPage()

  // function to define which data is returned from contentful depending 
  // on which page the user is currently viewing
  function whichPage() {
    // general projects page 
    if (window.location.pathname === '/projects') {
      return projectsPage()
    }
    else { // return details page 
      return urlArr().map(([path, id]) => {
        if (window.location.pathname === path) {
          return detailsPage(match(id))
        }
      })
    }

  }

  function mapper() {
    return projects.map((item) => {
      const { projTitle, projDescription, projBg, projEntry } = item
      return item.projTitle
    })
  }

  function looper() {
    for (let i = 0; i < mapper().length; i++) {
      return mapper()[i]
    }
  }

  function removePunctuation(text) {
    return text.replace(/[^\w\s]/gi, '').replace(/\s+/g, '-')
  }

  function projectsPage() {
    return (
      <div className='projCont'>
        {
          projects.map((item) => {
            const { projTitle, projDescription, projBg, projEntry } = item
            const link = "/projects/" + removePunctuation(projTitle)
            return (
              <>
                <a className='cardRef' href={link}>
                  <div className='projCard'>
                    <img className='projImg' src={projBg} alt={projTitle} />
                    <div className='projText'>
                      <h4 className='projTitle'>{projTitle}</h4>
                      <p className='projDesc' >{projDescription}</p>
                    </div>
                  </div>
                </a>
              </>
            )
          })
        }
      </div>
    )
  }


  function detailsPage(item) {
    const { projTitle, projDescription, projBg, projEntry } = item
    console.log('projectdetails page')
    return (
      <>
        <div className='projDetailCard'>
          <img className='projBigImg' src={projBg} alt={projTitle} />
          <div className="projText2">
            <h1 className='projTitle2'>{projTitle}</h1>
            <div className='projEntry'>{projEntry}</div>
          </div>
        </div>
      </>
    )
  }
}
export default Projects