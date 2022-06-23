//styles
import "./TodoListItem.scss";

//react things
import { useContext } from "react";

//react icons
import { FiCircle } from "react-icons/fi";
import { FiCheckCircle } from "react-icons/fi";

//imported context
import { ItemsContext } from "./App";

//INTERFACE
export interface ITodoListItem {
  label?: string;
  id?: number;
  completed?: boolean;
}

//component body
export default function TodoListItem({ label, completed, id }: ITodoListItem) {
  let itemClassName = "todo-list-item-label";
  let iconClassName = "rgb(77, 73, 73)";

  if (completed) {
    itemClassName += " done";
    iconClassName = "rgb(206, 206, 206)";
  }

  const { items, updateItems } = useContext(ItemsContext);

  const updateCompleteState = () => {
    const updatedItems = items.map((item) => {
      const { id: itemId } = item;
      if (itemId === id) {
        return {
          ...item,
          completed: !completed,
        };
      }
      return item;
    });
    updateItems(updatedItems);
  };
  return (
    <span className="todo-list-item d-flex" onClick={updateCompleteState}>
      <div className="icon">
        {completed ? (
          <FiCheckCircle size="20px" color={iconClassName} />
        ) : (
          <FiCircle size="20px" color="rgb(80, 80, 80)" />
        )}
      </div>
      <span className={itemClassName}>{label}</span>
    </span>
  );
}
