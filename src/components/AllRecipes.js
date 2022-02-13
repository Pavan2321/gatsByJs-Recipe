import React from 'react'
import RecipesLists from './RecipesLists'
import TagsLists from './TagsLists'
import { graphql, useStaticQuery } from 'gatsby'

const query = graphql`
  {
    allContentfulRecipe(sort: {order: ASC, fields: title}) {
      nodes {
        id
        title
        cookTime
        prepTime
        content {
          tags
        }
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }
`

const AllRecipes = () => {
    const data = useStaticQuery(query)
    const recipes = data.allContentfulRecipe.nodes
  return (
    <section className='recipes-container'>
        <TagsLists recipes={recipes}/>
        <RecipesLists recipes={recipes}/>
    </section>
  )
}

export default AllRecipes