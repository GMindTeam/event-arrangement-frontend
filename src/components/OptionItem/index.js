import React, { useState } from 'react'
import { Line } from "./style"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'

function OptionItem(props) {
    const [option, setOption] = useState(props.item)
    const [isClicked, setIsClicked] = useState(false);
    const [textState, setTextState] = useState(0);
    return (
        <Line>
            <input
                id="option"
                value={option}
                onChange={(e) => {
                    setOption(e.target.value)
                }}
                onBlur={(e) => {
                    setOption(e.target.value)
                    setIsClicked(!isClicked)
                }}
                onKeyDown={(e) => {
                    var tmp = e.target.value.trim("\s")
                    var arr = (String)(props.options).split("\n")
                    if (e.keyCode === 13) {
                        if (tmp === "") {
                            setTextState(1)
                            setIsClicked(!isClicked)
                            return props.handleEdit(option, props.index, 1)
                        }
                        else if (arr.indexOf(tmp) === -1) {
                            setTextState(0)
                            setOption(tmp)
                            setIsClicked(!isClicked)
                            return props.handleEdit(option, props.index, 0)
                        } else {
                            setTextState(2)
                            setIsClicked(!isClicked)
                            return props.handleEdit(option, props.index, 2)
                        }
                    }
                }}
                disabled={isClicked ? "" : "disabled"
                } />
            <button
                type="submit"
                onClick={(e) => {
                    e.preventDefault();
                    setIsClicked(!isClicked)
                }}>
                <FontAwesomeIcon id="edit" icon={faEdit} />
            </button>
            <button
                type="submit"
                onClick={(e) => {
                    e.preventDefault();
                    return props.handleDelete(props.index)
                }}>
                <FontAwesomeIcon id="trash" icon={faTrash} />
            </button>
        </Line>

    )
}
export default OptionItem;
