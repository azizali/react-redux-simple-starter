const initialState = {
    show: true
}

export default function(state = initialState, action) {
    state.show = !state.show
    var newState =  Object.assign({}, state)
    return newState
}