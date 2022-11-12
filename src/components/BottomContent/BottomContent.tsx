import { AboutDarkImg, AboutLightImg, Container, FurnitureArticle } from './bottomContent-styles'

const BottomContent = () => {
  return (
    <Container>
        <AboutDarkImg />
        <FurnitureArticle>
            <h2>ABOUT OUR FURNITURE</h2>   
            <p>Our multifunctional collection blends design and function to suit your individual taste. Make each room unique, or pick a cohesive theme that best express your interests and what inspires you. Find the furniture pieces you need, from traditional to contemporary styles or anything in between. Product specialists are available to help you create your dream space. </p> 
        </FurnitureArticle>  
        <AboutLightImg />
    </Container>
  )
}

export default BottomContent