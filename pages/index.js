import { useDispatch, useSelector } from "react-redux";
import Form from "../components/form";
import Table from "../components/table";
import { emtUser, toggleChangeAction } from "../redux/reducer";

export default function HomePage() {
  const dispatch = useDispatch();
  const { toggleForm } = useSelector((state) => state.app.client);

  const Form_tog = () => {
    dispatch(emtUser());
    dispatch(toggleChangeAction());
  };
  return (
    <>
      <div className="container">
        <h1 className="text-center pt-4">Employee Mangement</h1>
        <button className="btn btn-dark mt-3" onClick={Form_tog}>
          Add Employee
          <i className="bi bi-person-add fs-4 align-middle ps-3"></i>
        </button>
        <hr />
        {toggleForm && (
          <>
            <Form />
            <hr />
          </>
        )}
        <Table />
      </div>
    </>
  );
}
