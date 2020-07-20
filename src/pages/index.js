import React from "react"
import { Link } from 'gatsby';

// components
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div>
      <Navbar />
      Hello people`!
      <Link to="/blog/"> blog page </Link>
    </div>
  )
}
