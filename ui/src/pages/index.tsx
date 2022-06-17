import * as React from "react"
import EmailInput from "../components/emailInput"

const IndexPage = () => {
  return (
    <main>
      <title>We're coming soon</title>
      <p>Hello fellow shoppers! We're currently building our new fashion store. 
      Add your email below to stay up-to-date with announcements and our launch deals.</p>
      <EmailInput />
    </main>
  )
}

export default IndexPage
