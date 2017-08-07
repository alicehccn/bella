const getPage = (state = [], action) => {
  switch (action.type) {
    case 'GET_PAGE':
      return state.map(data =>
        data
      )
    default:
      return state
  }
}

export default getPage
