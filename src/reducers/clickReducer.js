

export default function clickReducer(
    state = 0, action
) {
    if (action.bkgrdColor === '0') {
        return state + 1;
    } else if (action.bkgrdColor === '1') {
        return state - 1;
    }
    return state;
}