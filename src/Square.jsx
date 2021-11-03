// import SmallerSquare from "./SmallerSquare";
import React from 'react';
import { useDispatch } from 'react-redux';
import './Square.css';

export function Square(props) {
    const symbol = props.symbol;
    
    // const [state, setState] = useState(props.symbol);
    let bkgrdColor = 'whiteBkgrd';
    if (symbol === '0') {
        bkgrdColor = 'blackBkgrd';
    } 
    // else if (symbol === '') {
    //     borderColor = 'blackBorder';
    // }

    const dispatch = useDispatch();

    return (<div onClick={() => dispatch(
        {
            type: 'boardClick',
            x: props.x,
            y: props.y,
        }
    )} id="square" class={bkgrdColor}>
        {symbol}
    </div>);
}

   // if (state === 'X') {
    //     setState('0');
    // } else if (state === '0') {
    //     setState('');
    // } else {
    //     setState('X')
    // }

// export function SmallerSquare(props) {
//     const [countState, setCountState] = useState(0)
//     return (<div onClick={() => setCountState(100 + countState)}>
//         Click Count: {countState}
//         </div>)
// }