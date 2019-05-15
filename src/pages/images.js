import React from 'react'
import Layout from '../components/layout'
import {graphql} from 'gatsby'

export default function images({data}) {
  const images = data.allFile.edges;
  
  return <Layout>
      <h1>All the images</h1>
      {images.map(({ node }, index)=>{
         return <h3 key={index}>{node.relativePath}</h3>
      })}
  </Layout>

  //return (
  //  <Layout>
  //    <h1>hello from image pages</h1>
  //    <h6>{data.allFile.edges[3].node.relativePath}</h6>
  //  </Layout>
  //)
}

export const query = graphql`
    {
        allFile {
        edges {
            node {
            relativePath
            }
        }
        }
    }
`    



