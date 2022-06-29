//styles
import "./Footer.scss";

//imported components
import Counter from "./Counter";
import DeleteBtn from "./DeleteBtn";
import StatusFilter from "./StatusFilter";

export default function Footer() {
  return (
    <div className="footer">
      <div className="counter-container">
        <Counter />
      </div>
      <div>
        <StatusFilter />
      </div>
      <div className="delete-btn-container">
        <DeleteBtn />
      </div>
    </div>
  );
}
