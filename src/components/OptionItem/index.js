import React, { useState, useEffect, useRef } from 'react'
import { Line } from "./style"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencilAlt, faTimes } from '@fortawesome/free-solid-svg-icons'

function OptionItem(props) {
    const [option, setOption] = useState("")
    const [isClicked, setIsClicked] = useState(false);
    const [oldOption, setOldOption] = useState("")
    const searchInput = useRef(null)
    useEffect(() => {
        setOption(props.item)
        setOldOption(props.item)
        return () => {
        }
    }, [props.item])
    const handleChangeText = (tmp) => {
        var arr = (String)(props.options).split("\n")
        setIsClicked(!isClicked)
        if (tmp === "") {
            setOption(oldOption)
            return props.handleEdit(option, props.index, 1)
        }
        else if (arr.indexOf(tmp) === -1 || tmp === oldOption) {
            setOldOption(tmp)
            setOption(tmp)
            return props.handleEdit(option, props.index, 0)
        } else {
            setOption(oldOption)
            return props.handleEdit(option, props.index, 2)
        }
    }
    return (
        <Line>
            <input
                type="text"
                id={props.index}
                ref={searchInput}
                value={option}
                onChange={(e) => {
                    setOption(e.target.value)
                }}
                onBlur={(e) => {
                    var tmp = e.target.value.trim("\s")
                    handleChangeText(tmp)

                }}
                onKeyDown={(e) => {
                    var tmp = e.target.value.trim("\s")
                    if (e.keyCode === 13) {
                        handleChangeText(tmp)
                    }
                }}
                disabled="disabled"
            />
            <button
                type="submit"
                onClick={(e) => {
                    console.log(isClicked)
                    if (isClicked) {
                        document.getElementById(props.index).disabled = "";
                    }
                    else {
                        document.getElementById(props.index).disabled = "";
                    }
                    e.preventDefault();
                    setIsClicked(!isClicked)
                    searchInput.current.focus()
                }}>
                <FontAwesomeIcon
                    id="edit"
                    icon={faPencilAlt} />
            </button>
            <button
                type="submit"
                onClick={(e) => {
                    e.preventDefault();
                    return props.handleDelete(props.index)
                }}>
                <FontAwesomeIcon
                    id="trash"
                    icon={faTimes} />
            </button>
        </Line>
    )
}
export default OptionItem;
