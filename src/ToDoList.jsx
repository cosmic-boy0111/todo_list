import React,{useState} from 'react'
import Button from '@material-ui/core/Button';
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import ListCom from './ListCom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';




const ToDoList = () => {

    const [item, seItem] = useState('');
    const [newitem, setNewItem] = useState([])

    const itemEvent = (e) =>{
        seItem(e.target.value);
    }

    const listOfItems = () =>{
        if(item!==''){
            setNewItem((pre)=>{
                return [...pre,item];
            })
        }

        seItem('')
    }

    return (
        <>
            <div className="main_div">
                <div className="center_div">
                    <br />
                    <h1>ToDo List</h1>
                    <br />
                    
                    <input type="text" placeholder='Add an Items'
                     onChange={itemEvent}
                        value={item}
                     />
                    <Button className='newBtn' onClick={listOfItems}>
                        <AddRoundedIcon />
                    </Button>

                    <br />
                    <ol>
                            {newitem.map((val, index) => {
                                return <ListCom key={index} text={val}/>
                            })}
                    </ol>
                    <br />
                </div>
            </div>
        </>
    )
}

export default ToDoList
