import React, { useState, useRef } from "react";
//import serialize from 'form-serialize';

const AddTask = ({ addTask }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");

  const handleTextChange = (e) => setText(e.target.value);
  const handleDayChange = (e) => setDay(e.target.value);

  // const text = useRef();
  // const day = useRef();

  const onSubmit = (e) => {
    e.preventDefault();

    //form-serialize
    // var { text, day } = serialize(e.target, { hash: true });

    !text ? alert("Please add a task") : addTask({ text, day, isDone: false });

    setText("");
    setDay("");

    // with useRef
    // !text.current.value
    //   ? alert('Please add a task')
    //   : addTask({
    //       text: text.current.value,
    //       day: day.current.value,
    //       isDone: false,
    //     });

    // text.current.value = '';
    // day.current.value = '';
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label htmlFor="task">Task</label>
        <input
          id="task"
          name="text"
          type="text"
          placeholder="AddTask"
          //ref={text}
          required
          value={text}
          onChange={handleTextChange}
        />
      </div>
      <div className="form-control">
        <label htmlFor="day">Day & Time</label>
        <input
          id="day"
          name="day"
          type="text"
          placeholder="Add Day & Time"
          //ref={day}
          value={day}
          onChange={handleDayChange}
        />
      </div>
      <input type="submit" value="Save Task" className="btn btn-block" />
    </form>
  );
};

export default AddTask;
