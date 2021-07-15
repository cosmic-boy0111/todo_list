import React,{useState} from 'react'
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';

const ListCom = (props) => {

    const [line, setLine] = useState(false)

    const cutIt = () => {
        setLine(true)
    }

    return (
    <div className="todo_style">
        <span onClick={cutIt}>
            <DeleteRoundedIcon className="deleteIcon" />
        </span>
        <li style={{textDecoration : line ? 'line-through' : 'none'}} > 
            {props.text} 
        </li>
    </div>
    )
}

export default ListCom
