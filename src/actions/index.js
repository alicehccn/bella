let nextTodoId = 0
export const addTodo = (text) => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
})

export const setVisibilityFilter = (filter) => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  id
})

export const getPark = (data) => ({
	type: 'GET_PARK',
	data
})

// export const getPark = (url) => {
//   return dispatch => {
//     dispatch({ type: 'GET_PARK', loading: true });
//     return new Promise(resolve => {
//       superagent.get(url)
//       .end((error, response) => {
//         if(error) {
//           console.error(error);
//         }
//         else {
//           const data = JSON.parse(response.text).data;
//           dispatch({ type: 'GET_PARK', data });
//         }
//         resolve();
//       });
//     });
//   }
// }

export const setHourFilter = (filter) => ({
	type: 'SET_HOUR_Filter',
	filter
})

export const setFeatureFilter = (filter) => ({
	type: 'SET_FEATURE_FILTER',
	filter
})

export const sortByLocatoin = (point) => ({
	type: 'SORT_BY_LOCATION',
	point
})
