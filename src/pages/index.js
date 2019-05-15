import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { Button } from '../components/Button'
import { FaApple } from 'react-icons/fa'
//import Section from '../components/section/section'
import Info from '../components/info'
//import img from '../images/bcg-images/cy.jpg'
import Dude from '../components/dude'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Link to="/products/"><h1>Product page</h1></Link>
    <Info />
    <Dude />
    <Link to="/images/" >images page</Link>
    <h1>Hi people11</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
      <Dude />
    </div>
    <FaApple className="icon" />
    <Button>i'm styled</Button>
    <Link to="/page-2/">Go to page 2</Link>
    <Link to="/products/testing/">Go to testing</Link>

  </Layout>
)



export default IndexPage
