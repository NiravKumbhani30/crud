import { userAgent } from "next/server";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getEmpData, removeEmpData } from "../redux/action";
import { getSingleUserData, toggleChangeAction } from "../redux/reducer";

export default function Table() {
  const dispatch = useDispatch();
  const { emps } = useSelector((state) => state.app);

  useEffect(() => {
    dispatch(getEmpData());
  }, []);

  const onUpdate = (data) => {
    dispatch(toggleChangeAction());
    dispatch(getSingleUserData(data));
  };

  const removeEmp = async (id) => {
    await dispatch(removeEmpData(id));
    dispatch(getEmpData());
  };

  return (
    <>
      <table className="table text-center pt-5 mt-5">
        <thead>
          <tr className="table-dark">
            <th>No</th>
            <th>Profile</th>
            <th>Name</th>
            <th>Email</th>
            <th>Salery</th>
            <th>Bith Data</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {emps.map((data, i) => (
            <tr key={i}>
              <th className="align-middle">{i + 1}</th>
              <td className="align-middle">
                <img className="profile" src={data.avatar} />
              </td>
              <td className="align-middle">{data.name}</td>
              <td className="align-middle">{data.email}</td>
              <td className="align-middle">{data.salary}</td>
              <td className=" align-middle">{data.date}</td>
              <td className="align-middle">
                <span
                  className={`${
                    data.status == "Active" ? "span-green" : "span-red"
                  }`}
                >
                  {data.status}
                </span>
              </td>
              <td className="d-flex justify-content-center gap-3">
                <button className="btn text-success fs-5" onClick={() => onUpdate(data)}>
                  <i className="bi bi-pencil-square"></i>
                </button>
                <button
                  className="btn text-danger fs-5"
                  onClick={() => removeEmp(data._id)}
                >
                  <i className="bi bi-trash3"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
