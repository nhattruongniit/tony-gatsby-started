import React from "react"

// components
import Layout from "../components/Layout"

// css modules
import styles from "../styles/products.module.css"

console.log(styles)

export default function Home() {
  return (
    <Layout>
      <div className={styles.uppercase}>Hello products!</div>
    </Layout>
  )
}
