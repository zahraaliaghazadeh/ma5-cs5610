const defaultState = {
    gameBoard: 
    [['0','0'],
    ['0','0']]
}
// const defaultState = 
//     [
//     ['',''],
//     ['','']
//     ];


function generateGameBoard(){
    return defaultState.gameBoard;
}

// export default function gameReducer(state = defaultState, action) {
    export default function gameReducer(state, action) {

    if(state === undefined){
        // const gameBoard = generateGameBoard()
        return generateGameBoard()
    }

    if (action.type === 'boardClick') {
        const value = state[action.x][action.y];
        if (value === '1') {
            state[action.x][action.y] = '0';
        } else {
            state[action.x][action.y] = '1';
        }
        return [...state];
        // return {...state};

    }
    return state;
}