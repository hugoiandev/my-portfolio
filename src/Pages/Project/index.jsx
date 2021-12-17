import React from 'react'
import Container from '../../Components/Container'
import Preload from '../../Components/Preload'
import ProjectItem from '../../Components/ProjectItem'
import Title from '../../Components/Title'
import styles from './Project.module.scss'
import { GET_PROJECTS } from '../../Utils/endpoint'


const Project = () => {
  const [projects, setProjects] = React.useState([])

  React.useEffect(() => {

    const fetchProjects = async () => {
      const { url } = GET_PROJECTS()
      const response = await fetch(url)
      const json = await response.json()
      console.log(json)

      setProjects(json)
    }
    fetchProjects()

  }, [])

  return (
    <>
      <Container>
        <section className={styles.projects}>
          <Title text='Projetos' subTitle='Conheça meus projetos' />
          <div className={styles.item}>
            {projects.results && projects.results.map((item) => {
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
      <Preload text='Projetos' />
    </>
  )
}

export default Project
