import React from 'react'
import { connect } from 'react-redux'
import { getPage } from '../actions'

import input from '../data/parks.json';

// export const getBook() {
//   return fetch('/api/data')
//     .then(response => response.json())
//     .then(json => dispatch(resolvedGetBook(json)))
// }

let GetPage = ({ dispatch }) => {
  const rows = fetch('https://data.seattle.gov/api/views/j9km-ydkc/rows.json')
    .then(response => response.json())
    .then(json => dispatch(getPage(json)))

  // console.log(dispatch(getPage(json)))
  return (
    <div className="wrapper">{rows.data}
    </div>
  )
}

// let GetPage = ({ dispatch }) => {
//   let rows = input.data.slice(0, 20);
//   console.log(dispatch(getPage(input)))
//   return (
    
//     <div className="wrapper">{rows.map((row) => 
//       <div key={row[0]}>{row[9]}</div>)}
//     </div>
//   )
// }
GetPage = connect()(GetPage)

export default GetPage
