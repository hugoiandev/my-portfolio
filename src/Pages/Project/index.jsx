import React from 'react'
import Container from '../../Components/Container'
import Overload from '../../Components/Overload'
import ProjectItem from '../../Components/ProjectItem'
import Title from '../../Components/Title'
import styles from './Project.module.scss'
import { gsap, Power4 } from 'gsap'

const Project = () => {
  const [translate, setTranslate] = React.useState(0)
  const [status, setStatus] = React.useState(0)
  const itemRef = React.useRef()

  React.useEffect(() => {
    setStatus(-(100 * itemRef.current.offsetWidth) / window.innerWidth + 100)
    const changeItemAnimation = () => {
      gsap.to(itemRef.current, {
        x: `${translate}vw`,
        duration: 1,
        ease: Power4.easeInOut
      })
    }
    changeItemAnimation()
  }, [translate])
  

  return (
    <>
      <Container>
        <section className={styles.projects}>
          <button
            className={styles.arrow}
            onClick={() => {
              if (translate === status) {
                setTranslate(0)
              } else {
                setTranslate(translate - 100)
              }
            }}
          >
            <img src="arrow-pointer.svg" alt="Arrow" />
          </button>
          <Title text='Projetos' />
          <div ref={itemRef} className={styles.item}>
            <ProjectItem
              name='Breaking Bad'
              text='Este app consome uma api publica da série Braking Bad, basicamente ele lista todos os personagens da série e quando clicado ele mostra os atributos e de quais episódeos eles participaram.'
              src='img-brb.jpg'
              alt='Imagem Breaking Bad'
              techSrc={['next_js.svg', 'icon-react-native.svg', 'icon-sass.svg']}
            />
            <ProjectItem
              name='Breaking Bad'
              text='Este app consome uma api publica da série Braking Bad, basicamente ele lista todos os personagens da série e quando clicado ele mostra os atributos e de quais episódeos eles participaram.'
              src='img-brb.jpg'
              alt='Imagem Breaking Bad'
              techSrc={['next_js.svg', 'icon-react-native.svg', 'icon-sass.svg']}
            />
            <ProjectItem
              name='Breaking Bad'
              text='Este app consome uma api publica da série Braking Bad, basicamente ele lista todos os personagens da série e quando clicado ele mostra os atributos e de quais episódeos eles participaram.'
              src='img-brb.jpg'
              alt='Imagem Breaking Bad'
              techSrc={['next_js.svg', 'icon-react-native.svg', 'icon-sass.svg']}
            />
            <ProjectItem
              name='Breaking Bad'
              text='Este app consome uma api publica da série Braking Bad, basicamente ele lista todos os personagens da série e quando clicado ele mostra os atributos e de quais episódeos eles participaram.'
              src='img-brb.jpg'
              alt='Imagem Breaking Bad'
              techSrc={['next_js.svg', 'icon-react-native.svg', 'icon-sass.svg']}
            />
          </div>
        </section>
      </Container>
      <Overload text='Projetos' />
    </>
  )
}

export default Project
