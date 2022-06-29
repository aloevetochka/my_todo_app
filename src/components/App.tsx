//styles
import "./App.scss";

//react things
import { createContext } from "react";
import { useState } from "react";

//imported components
import ItemAddForm from "./ItemAddForm";
import AppHeader from "./AppHeader";
import Footer from "./Footer";
import TodoList from "./TodoList";

//imported interface
import { ITodoListItem } from "./TodoListItem";

//imported constants
import { FILTER_VALUE } from "../constants";

export interface AppContextInterface {
  items: ITodoListItem[];
  updateItems?: any;
  updateFilter?: any;
  filter: string;
}

interface IApp {
  itemsMockup?: ITodoListItem[];
}

export const ItemsContext = createContext<AppContextInterface>({
  items: [],
  filter: FILTER_VALUE.ALL,
});

export default function App({ itemsMockup }: IApp) {
  const [todoData, updateItems] = useState(itemsMockup || []);
  const [filter, updateFilter] = useState(FILTER_VALUE.ALL);

  const itemsContext = {
    items: todoData,
    updateItems,
    filter,
    updateFilter,
  };

  return (
    <div className="app-container d-flex justify-content-center">
      <div className="app">
        <AppHeader />
        <ItemsContext.Provider value={itemsContext}>
          <ItemAddForm />
          <TodoList />
          <Footer />
        </ItemsContext.Provider>
      </div>
    </div>
  );
}
