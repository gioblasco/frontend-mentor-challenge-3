import * as React from "react"
import EmailInput from "../components/emailInput"
import logo from "../images/logo.svg";
import "./index.scss";
import "@fontsource/josefin-sans";

const IndexPage = () => {
  return (
    <div className="container">
      <main className="left-side">
        <title>Coming soon</title>
        <article>
          <img src={logo} alt="Brand logo" />
          <h1><span className="title brown">We're</span> <span className="title black">coming soon</span></h1>
          <p>Hello fellow shoppers! We're currently building our new fashion store. 
          Add your email below to stay up-to-date with announcements and our launch deals.</p>
          <EmailInput />
        </article>
      </main>
      <aside className="right-side" />
    </div>
  )
}

export default IndexPage
