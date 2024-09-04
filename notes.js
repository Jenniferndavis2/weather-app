import { useEffect } from "react";
import React, [ useEffect, useState ] from 'react';

const Notes = () => {
    const [text, setText] = useState('');
    // componentDidMount - component is rendered
    // componentDidUpdate - component with something that is changeable, checks
    // componentWillUnmount - component is about to leave the page

    useEffect(() => {
        console.log('i am componentDidMount')
        setText('meow')
        return () => {
            console.log('i am componentWillUnmount');
            console.log('i did some cleanup')
       }
    }, []); //componentDidMount

    // useEffect(() => {
    //     console.log('i am componentDidUpdate')
    //    console.log(text);
    // }, [text]); //componentDidUpdate

    useEffect(() => {
        return () => {}
        }, {}); //componentWillUnmount

        return (
            <div>Notes</div>
        )
    }   