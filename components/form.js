import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addEmpData, editEmpData, getEmpData } from "../redux/action";
import { emtUser } from "../redux/reducer";

export default function Form() {
  const { emp } = useSelector((state) => state.app);
  const [user, setUser] = useState({
    name: emp.name,
    email: emp.email,
    salary: emp.salary,
    date: emp.date,
    status: emp.status,
    avatar: `https://randomuser.me/api/portraits/men/${Math.floor(
      Math.random() * 90 + 10
    )}.jpg`,
  });
  const dispatch = useDispatch();

  const EventHandler = (e) => {
    const { value, name } = e.target;
    setUser({ ...user, [name]: value });
  };

  const submitHandler = (e) => {
    dispatch(addEmpData(user));
    dispatch(emtUser());  
  };

  const Editdata = async () => {
    await dispatch(editEmpData(emp._id, user));
    dispatch(getEmpData());
  };

  return (
    <>
      <div className="col-9 m-auto">
        <form onSubmit={submitHandler}>
          <input
            className="input"
            type="text"
            name="name"
            placeholder="Enter Your First Name"
            onChange={EventHandler}
            value={user.name}
          />
          <input
            className="input"
            type="email"
            name="email"
            placeholder="Enter Your E-mail"
            onChange={EventHandler}
            value={user.email}
          />
          <input
            className="input"
            type="text"
            name="salary"
            placeholder="Enter Salary"
            onChange={EventHandler}
            value={user.salary}
          />
          <br />
          <input
            className="input"
            name="date"
            type="date"
            onChange={EventHandler}
            value={user.date}
          />
          <input
            className="mx-3"
            type="radio"
            onChange={EventHandler}
            value="Active"
            name="status"
            checked={user.status == "Active"}
          />
          Active
          <input
            className="mx-3"
            type="radio"
            onChange={EventHandler}
            value="Inactive"
            name="status"
            checked={user.status == "Inactive"}
          />
          Inactive <br />
          <br />
          {emp == "" ? (
            <button className="btn btn-success px-4" type="submit">
              Add
              <b>
                <i className="bi bi-plus-lg ps-2"></i>
              </b>
            </button>
          ) : (
            <button
              className="btn btn-warning px-4"
              type="button"
              onClick={Editdata}
            >
              Edit
              <b>
                <i className="bi bi-plus-lg ps-2"></i>
              </b>
            </button>
          )}
        </form>
      </div>
    </>
  );
}
