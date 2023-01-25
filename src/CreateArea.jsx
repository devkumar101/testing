import React, { useState } from "react";

function CreateArea(props) {
  
  const [item,setItem] = useState({
    title:"",
    content:""
  });
  
  // const [items,setItems] = useState([]);

  function todoTask(event) {
    const {name,value} = event.target;
    setItem((previousValue) =>{
      return {
        ...previousValue,
        [name]: value
      }
    });
  }

  function submit(event) {
    // setItems((previousValue) =>{
    //   props.getNote([...previousValue,item])
    //   return [...previousValue,item]
    // })

    event.preventDefault();
  }

  return (
    <div>
      <form onSubmit={submit} >
        <input name="title" placeholder="Title" onChange={todoTask}/>
        <textarea name="content" placeholder="Take a note..." rows="3" onChange={todoTask} />
        <button type="submit" onClick={() => props.getNote(item)}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;