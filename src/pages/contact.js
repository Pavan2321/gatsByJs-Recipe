import React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import RecipesLists from '../components/RecipesLists'
import SCO from '../components/SCO'

const contact = ({data}) => {
    const recipes = data.allContentfulRecipe.nodes
  return (
    <Layout>
      <SCO title="contact"/>
        <main className='page'>
            <section className='contact-page'>
                <article className='contact-info'>
                    <h3>Want To Get In Touch?</h3>
                    <p>
                    Four dollar toast biodiesel plaid salvia actually pickled banjo
                    bespoke mlkshk intelligentsia edison bulb synth.
                    </p>
                    <p>Cardigan prism bicycle rights put a bird on it deep v.</p>
                    <p>
                    Hashtag swag health goth air plant, raclette listicle fingerstache
                    cold-pressed fanny pack bicycle rights cardigan poke.
                    </p>
                </article>
                <article>
                    <form className='form contact-from'>
                        <div className='from contact-from'>
                            <div className='from-row'>
                                <label htmlFor='name'>your name</label>
                                <input type="text" name="name" id="name"/>
                            </div>
                            <div className='from-row'>
                                <label htmlFor='email'>your Email</label>
                                <input type="text" name="email" id="email"/>
                            </div>
                            <div className='form-row'>
                                <label htmlFor='message'>message</label>
                                <textarea name="message" id='message'></textarea>
                            </div>
                            <button type='submit' className='btn block'> Submit </button>
                        </div>
                    </form>
                </article>
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
export default contact