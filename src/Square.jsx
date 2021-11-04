// import SmallerSquare from "./SmallerSquare";
import React from 'react';
import { useDispatch } from 'react-redux';
import './Square.css';

export function Square(props) {
    const symbol = props.symbol;
    
    // const [state, setState] = useState(props.symbol);
    let bkgrdColor = 'whiteBkgrd';
    if (symbol === '1') {
        bkgrdColor = 'blackBkgrd';
    } 

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

