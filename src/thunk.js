const FETCH_START = 'start'
const FETCH_SUCCESS = 'success'
const FETCH_ERROR = 'error'

const fetchStart = () => ({
    type: FETCH_START,
})

const fetchSuccess = payload => ({
    type: FETCH_START,
    payload
})

const fetchError = error => ({
    type: FETCH_START,
    error
})

const url = 'https://jsonplaceholder.typicode.com/users'


export default payload =>
async (dispatch, getState) => {
    dispatch(fetchStart())
    try {
        const result = await fetch(url)
        const json = await result.json()
        dispatch(fetchSuccess(json))
        console.log(json)
        
    } catch (error) {
        dispatch(fetchError(error))
        
    }
     
}