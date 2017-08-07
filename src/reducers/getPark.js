const getPark = (state = {}, action) => {
  switch (action.type) {
    case 'GET_PARK':
      return Object.assign({}, state, {
        ...action.getPark
      });
    default:
      return state
  }
}

export default getPark
