// import SmallerSquare from "./SmallerSquare";
import React from 'react';
import { useDispatch } from 'react-redux';
import './Square.css';

export function Square(props) {
    const bkgrdColor = props.bkgrdColor;

    const dispatch = useDispatch();

    return (<div onClick={() => dispatch(
        {
            type: 'boardClick',
            x: props.x,
            y: props.y,
            bkgrdColor
        }
    )} id="square" className={bkgrdColor === '0' ? 'whiteBkgrd' : 'blackBkgrd'}>
    </div>);
}

