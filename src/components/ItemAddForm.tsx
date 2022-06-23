//styles
import "./ItemAddForm.scss";

//react things
import { useContext, useState } from "react";

//imported interface
import { ITodoListItem } from "./TodoListItem";

//imported context
import { ItemsContext } from "./App";

let prevId = 0;

const createNewList = (label: string, items: ITodoListItem[], id: number) => {
  return [
    ...items,
    {
      label,
      completed: false,
      id,
    },
  ];
};

//component body
export default function ItemAddForm() {
  const { updateItems, items = [] } = useContext(ItemsContext);
  const [value, setValue] = useState("");

  const onInputChange = (e: any) => {
    setValue(e.target.value);
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    if (value) {
      updateItems(createNewList(value, items, prevId++));
      setValue("");
    }
  };

  return (
    <form className="input-group" onSubmit={onSubmit}>
      <input
        value={value}
        pattern="^[а-яА-ЯёЁa-zA-Z0-9 _]*[а-яА-ЯёЁa-zA-Z0-9][а-яА-ЯёЁa-zA-Z0-9 _]*$"
        type="text"
        className="form-control shadow-none custom-input"
        placeholder="What needs to be done?"
        aria-label="What needs to be done?"
        aria-describedby="button-addon2"
        onChange={onInputChange}
      ></input>
    </form>
  );
}
