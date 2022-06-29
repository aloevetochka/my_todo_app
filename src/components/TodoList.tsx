//styles
import "./TodoList.scss";

//react things
import React from "react";

//imported components
import TodoListItem from "./TodoListItem";

//imported interface
import { ITodoListItem } from "./TodoListItem";

//imported context
import { ItemsContext } from "./App";

export default function TodoList() {
  const { items, filter } = React.useContext(ItemsContext);

  const filteredItems = (items: ITodoListItem[], filter: string) => {
    switch (filter) {
      case "all":
        return items;
      case "completed":
        return items.filter(({ completed }) => completed);
      case "active":
        return items.filter(({ completed }) => !completed);
      default:
        return items;
    }
  };

  const elements = filteredItems(items, filter).map((item: any) => {
    const { id } = item;
    return (
      <li key={id} className="list-group-item list-group list">
        <TodoListItem {...item} />
      </li>
    );
  });

  return <ul className="list-group todo-list">{elements}</ul>;
}
