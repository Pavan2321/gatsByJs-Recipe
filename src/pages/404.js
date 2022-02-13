import React from 'react'
import Layout from '../components/Layout'
import SCO from '../components/SCO'

const Error = () => {
  return (
    <Layout>
      <SCO title="ERROR"/>
        <main className="error-page">
            <section>
                <h1>404</h1>
                <h3>page not found</h3>
            </section>
        </main>
    </Layout>
  )
}

export default Error