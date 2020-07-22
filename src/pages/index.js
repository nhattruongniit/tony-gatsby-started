import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

// components
import Layout from "../components/Layout"
import { ButtonStyled } from "../components/Button"

export default function Home() {
  const data = useStaticQuery(graphql`
    {
      allSite {
        edges {
          node {
            host
            id
          }
        }
      }
    }
  `)

  console.log(data)
  return (
    <Layout>
      Hello people`!
      <Link to="/blog/"> blog page </Link>
      <br />
      <ButtonStyled>Styled Components</ButtonStyled>
    </Layout>
  )
}
