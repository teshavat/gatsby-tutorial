import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from '../components/banner'

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
     <div className="container">
       <div className="row">
       <div className="col-6">Hello world</div>
       <div className="col-6">Hello world</div>
       </div>
     </div>
  
    

    <h1 className="title">Hi from the second page</h1>
    <Banner />
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
