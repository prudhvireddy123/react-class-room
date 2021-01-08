import React, { Component, PureComponent } from 'react'
import "./ClassRoom.css"
import Radium, { Style } from 'radium';
import { render } from '@testing-library/react';

export default class ClassRoom extends PureComponent {
    constructor(props) {
        super(props)
    }

    render() {
        const { name, onClassRoomSelected, color = "white", id } = this.props
        return (
            <div className="card">
                <div onClick={(event) => {
                    onClassRoomSelected(id)
                }}>
                    <p>Name:{name}</p>
                    <button className="select-button">Select to View the Class</button>
                </div>
            </div>

        )

    }
}

