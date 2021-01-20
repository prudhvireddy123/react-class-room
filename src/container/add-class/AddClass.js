import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { createClassRoom } from "../../api/classroom-api";
import Input from '../../components/Input/Input';
import './AddClass.css'

export default class AddClass extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: {
                elementType: "input",
                config: {
                    "value": "",
                    "name": "name",
                    "label": "ClassRoom Name",
                    "type": "text",
                    "placeholder": "Class name",
                    "error": false
                }
            }, maxNoOfStudents: {
                elementType: "input",
                config: {
                    "value": "0",
                    "name": "maxNoOfStudents",
                    "label": "Max No Of Students ",
                    "type": "number",
                    "error": false
                }
            },
            classDescription: {
                elementType: "textarea",
                config: {
                    "value": "",
                    "name": "classDescription",
                    "label": "ClassRoom Description",
                    "type": "text",
                    "error": false
                }
            },
            classRules: {
                elementType: "input",
                config: {
                    "value": "",
                    "name": "classRules",
                    "label": "class Rules",
                    "type": "text",
                    "error": false
                }
            },
            section: {
                elementType: "select",
                config: {
                    "value": "",
                    "name": "section",
                    "label": "Sections",
                    "type": "select",
                    "error": false,
                    "options": ["A", "B"]
                }
            }
        }
    }

    onInputChange = (event) => {
        const tmpState = { ...this.state }
        tmpState[event.target.name].config.value = event.target.value
        this.setState(tmpState)
    }
    onInputBlur = (event) => {
        const target = event.target.name
        const value = event.target.value
        let isError = false
        if (target === "name") {
            if (value && value.length < 4) {
                isError = true
            }
        } else if (target == 'maxNoOfStudents') {
            if (value && value < 40) {
                isError = true
            }
        }

        const tmpState = { ...this.state }
        tmpState[target].config.error = isError
        this.setState(tmpState)
    }
    verifyFormIsValid = () => {
        let formStatus = Object.values(this.state).every((inputFiled) => {
            return inputFiled.config.error === false
        })
        console.log(formStatus)
        return formStatus
    }
    onAddingClass = (event) => {
        event.preventDefault()
        if (this.verifyFormIsValid()) {
            const data = Object.keys(this.state).reduce((acc, cur) => {
                // const name = this.state[cur].name.config.name
                const value = this.state[cur].config.value
                acc[cur] = value
                return acc
            }, {})
            createClassRoom(data).then(res => {
                this.props.history.push('/')
            }).catch(error => {

            })
        }
    }

    render() {
        return (
            <div className="add-class">
                <h2>Class Details</h2>
                <form onSubmit={this.onAddingClass}>
                    {Object.keys(this.state).map((inputKey, key) => {
                        return <Input key={key} elementType={this.state[inputKey].elementType}
                            config={this.state[inputKey].config}
                            onInputChange={this.onInputChange} onInputBlur={this.onInputBlur}></Input>
                    })}
                    <button type="submit">Submit</button>
                </form>
            </div >
        )
    }
}
