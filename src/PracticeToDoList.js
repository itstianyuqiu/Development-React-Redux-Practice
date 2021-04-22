import React, { useEffect, useState } from 'react'

const ToDoListItem = (props) => {

  const { onClick, item, onChange } = props

  return (
    <div>
      <input type="checkbox" onChange={() => { onChange(item.done) }}></input>
      <input type="text" value={item.value} onChange={() => { onChange(item.value) }}></input>
      <button onClick={() => { onClick(item.id) }} >Delete</button>
    </div>)
}

const ToDoList = (props) => {

  const { toDoList, onClick, onChange } = props

  return (
    <div>
      {toDoList && toDoList.length > 0 && toDoList.map(item => {
        return (
          <ToDoListItem onClick={onClick} item={item} onChange={onChange} />
        )
      })}
    </div>
  )
}

const TypeNew = (props) => {

  const { onClick } = props

  const [addNewItem, setAddNewItem] = useState("")

  const handleOnAddNewItem = (e) => {
    setAddNewItem(e.target.value)
  }

  return (
    <div>
      <input type="text" value={addNewItem} onChange={handleOnAddNewItem}></input>
      <button onClick={() => { onClick(addNewItem) }}>+</button>
    </div>
  )
}


const PracticeToDoList = () => {

  const [toDoList, setToDoList] = useState([])

  const handleClick = (value) => {
    const target = {
      id: toDoList.length,
      value: value,
      done: false
    }
    const newItem = toDoList.concat([target])
    setToDoList(newItem)
  }

  const handleOnDeleteItem = (id) => {
    const deleteItem = toDoList.filter(item => {
      return item.id !== id
    })
    setToDoList(deleteItem)
  }
  
  const handleOnUpdateItem = (id, value) => {

  

    const updateItem =

      setToDoList(updateItem)
  }

  

  const handleOnCheckDone = (done) => {

    const checkDoneItem = toDoList.map(item => {
      return item.done !== done
    })
    setToDoList(checkDoneItem)
  }

  return (
    <div>
      <TypeNew onClick={handleClick} />
      <ToDoList toDoList={toDoList} onClick={handleOnDeleteItem} onChange={handleOnUpdateItem} onChange={handleOnCheckDone} />
    </div>
  )

}

export default PracticeToDoList
