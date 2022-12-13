import React, { useState, useEffect, useCallback } from 'react';
import { Card, Container, Row, Col, CardGroup, Button } from 'react-bootstrap';
import { client } from '../client';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Loader from './Home/Loader/Loader';
import { map } from 'itertools';


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

  //     else if (window.location.pathname === '/projects/') {
  //   console.log('details page')
  //   detailsPage()
  // }
  // else {
  //   console.log('nothing here')
  //   return (
  //     <div>
  //       <h1>Nothing here. </h1>
  //     </div>
  //   )
  // }


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
  //console.log(projects.map((item) => { return item.projTitle }))

  function removePunctuation(text) {
    return text.replace(/[^\w\s]/gi, '').replace(/\s+/g, '-')
  }

  function projectsPage() {
    return (
      <div>
        <Container className='projWrapper'>
          {
            projects.map((item) => {
              const { projTitle, projDescription, projBg, projEntry } = item
              return (
                <>
                  <Card classname='projCards' onClick={() => window.location.href = '/projects/' + removePunctuation(projTitle)} border='0' style={{ margin: '10px', cursor: 'pointer', transition: 'all ease 200ms' }}>
                    <Card.Img classname='projImgs' variant="top" src={projBg} alt={projTitle} style={{ height: '18rem', objectFit: "cover" }} />
                    <Card.Text as="h2" style={{ padding: '20px 0 0 20px' }}>{projTitle}</Card.Text>
                    <Card.Body>
                      <Card.Text>{projDescription}</Card.Text>
                    </Card.Body>
                  </Card>
                </>
              )
            })
          }
        </Container>
      </div >
    )
  }


  function detailsPage(item) {
    const { projTitle, projDescription, projBg, projEntry } = item
    return (
      <>
        <Container className='projDetailWrapper'>
          <Card classname='projDetailCard' border='0' style={{ transition: 'all ease 200ms' }}>
            <Card.Img classname='projBigImgs' variant="top" src={projBg} alt={projTitle} style={{ objectFit: "cover" }} />
            <Card.Text as="h1" className='entryText'>{projTitle}</Card.Text>
            <Card.Body>
              {console.log(projEntry)}
              <Card.Text>{projEntry}</Card.Text>
            </Card.Body>
          </Card>
        </Container>
      </>
    )
  }
}
export default Projects