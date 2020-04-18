import React from "react"
import OptionItem from "../OptionItem"
import { List } from "./style"

function OptionList(props) {
    const fetchOptionList = () => {
        var str = (String)(props.options)
        if (str !== "") {
            str = str.trim("\n")
            var arr = str.split("\n");
            return arr.map((obj, i) => {
                return (
                    <OptionItem
                        options={str}
                        item={obj}
                        key={i}
                        index={i}
                        handleEdit={(option, index, textState) => { return props.handleEditOption(option, index, textState) }}
                        handleDelete={(index) => { return props.handleDeleteOption(index) }}
                    />
                )
            })
        }
    }
    return (
        <div>
            {props.options !== "" &&
                <List>
                    {fetchOptionList()}
                </List>
            }
        </div>

    )
}
export default OptionList;