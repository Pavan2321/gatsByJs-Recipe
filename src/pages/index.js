import React from "react"
import Layout from "../components/Layout"
import {StaticImage} from 'gatsby-plugin-image'
import AllRecipes from '../components/AllRecipes'
import SCO from "../components/SCO"
export default function Home() {
  return (
  <Layout> 
    <SCO title="Home"/>
      <main className="page">
        <header className="hero">
          <StaticImage
            src="../assets/images/main.jpeg"
            alt="eggs"
            className="hero-img"
            placeholder="traceSVG"
            layout="fullWidth"
          ></StaticImage>
          <div className="hero-container">
            <div className="hero-text">
              <h1>Simple recipes</h1>
              <h4>no fluff, just recipes</h4>
            </div>
          </div>
        </header>
        <AllRecipes/>
      </main>
    </Layout>
  )
}
