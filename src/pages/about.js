import React from 'react'
import Layout from '../components/Layout'
import { StaticImage } from 'gatsby-plugin-image'
import { Link,graphql } from 'gatsby'
import RecipesLists from '../components/RecipesLists'
import SCO from '../components/SCO'

const About = ({data: {allContentfulRecipe:{nodes:recipes}}}) => {

  return (
    <Layout>
    <SCO title="About" description="This is about page"/>
      <main className='page'>
        <section className='about-page'>
            <article>
              <h2>I'm baby coloring book poke taxidermy</h2>
              <p>Taxidermy forage glossier letterpress heirloom before they sold
              out you probably haven't heard of them banh mi biodiesel chia.</p>
              <p>Taiyaki tumblr flexitarian jean shorts brunch, aesthetic salvia
              retro.</p>
              <Link to="/contact" className='btn'>contact</Link>
            </article>
            <StaticImage 
            src='../assets/images/about.jpeg'
            alt="person pouring Salt in bowl"
            className='about-img'
            placeholder='blurred'
            />
        </section>
        <section className='featured-recipes'>
          <h5>Look at this Awesomesource</h5>
          <RecipesLists recipes={recipes}/>
        </section>
      </main>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulRecipe(
      sort: {order: ASC, fields: title}
      filter: {featured: {eq: true}}
    ) {
      nodes {
        id
        title
        cookTime
        prepTime
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`


export default About