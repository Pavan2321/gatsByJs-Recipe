import React from 'react'
import { graphql } from 'gatsby'
import RecipesLists from '../components/RecipesLists'
import Layout from '../components/Layout'
import SCO from '../components/SCO'
const Tagtemplate = ({data, pageContext}) => {
  const recipe = data.allContentfulRecipe.nodes
  return (
    <Layout>
      <SCO title={pageContext.tag}/>
      <main className='page'>
        <h2>{pageContext.tag}</h2>
        <div className='tag-recipes'>
          <RecipesLists recipes={recipe} />
        </div>
      </main>
    </Layout>
  )
}

export const query = graphql`
query GetRecipesByTag($tag:String) {
  allContentfulRecipe(
    sort: {fields: title, order: ASC}
    filter: {content: {tags: {eq: $tag}}}
  ) {
    nodes {
      title
      id
      cookTime
      prepTime
      image {
        gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
      }
    }
  }
}
`

export default Tagtemplate