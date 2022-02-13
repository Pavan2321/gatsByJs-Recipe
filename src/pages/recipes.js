import React from 'react'
import AllRecipes from '../components/AllRecipes'
import Layout from '../components/Layout'
import SCO from '../components/SCO'

const Recipes = () => {
  return (
    <Layout>
      <SCO title="recipes"/>
      <main className='page'>
      <AllRecipes/>
      </main>
    </Layout>
  )
}


export default Recipes