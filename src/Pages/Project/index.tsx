import React from 'react'
import { Helmet } from 'react-helmet'
import Container from '../../Components/Container'
import Load from '../../Components/Load'
import ProjectItem from '../../Components/ProjectItem'
import Title from '../../Components/Title'
import styles from './Project.module.scss'
import { GET_PROJECTS } from '../../Utils/endpoint'

interface ProjectTypes {
  id: string
  data: {
    title: [{
      text: string
    }]
    description: [{
      text: string
    }]
    project_url: {
      url: string
    }
    project_img: {
      alt: string
      url: string
    }
    tech_imgs: []
  }
}

const Project = (): JSX.Element => {
  const [projects, setProjects] = React.useState<ProjectTypes[]>([])

  React.useEffect(() => {

    const fetchProjects = async (): Promise<void> => {
      const { url } = GET_PROJECTS()
      const response = await fetch(url)
      const json = await response.json()

      setProjects(json.results)
    }
    fetchProjects()

  }, [])

  return (
    <>
      <Container>
        <section className={styles.projects}>
          <Helmet>
            <title>Projetos</title>
          </Helmet>
          <Title text='Projetos' subTitle='Conheça meus projetos' />
          <div className={styles.item}>
            {projects && projects.map((item) => {
              return (
                <ProjectItem
                  key={item.id}
                  title={item.data.title[0].text}
                  text={item.data.description[0].text}
                  src={item.data.project_img.url}
                  alt={item.data.project_img.alt}
                  techSrc={item.data.tech_imgs}
                  url={item.data.project_url.url}
                />
              )
            })}
          </div>
        </section>
      </Container>
      <Load text='Projetos' />
    </>
  )
}

export default Project
