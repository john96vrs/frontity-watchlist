import React, { useState } from "react"
import { connect, styled } from "frontity"

const Search = (props) => {
 
  return (
    <form class="form-inline my-2 my-lg-0">
        <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
        <button class="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
    </form>
  )
}


export default connect(Search)