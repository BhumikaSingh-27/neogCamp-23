// import React from 'react'

import { useContext } from "react"
import { EmailContext } from "../context/EmailContext"
import { useParams } from "react-router"

const EmailPage = () => {
    const {state} = useContext(EmailContext)
    const {mailId} = useParams()

    const emailDetails = state.emailData.find(({mId})=> mId.toString() === mailId)

  return (
    <div>

       <h1> {emailDetails.subject}</h1>
       <p>{emailDetails.content}</p>
    </div>
  )
}

export default EmailPage