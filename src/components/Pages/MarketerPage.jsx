import React, { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import { useParams } from "react-router";
import AssignmentReturnedIcon from "@mui/icons-material/AssignmentReturned";
import DeleteIcon from "@mui/icons-material/Delete";
import EditCalendarIcon from "@mui/icons-material/EditCalendar";
import { Button } from "@mui/material";
import axios from "axios";
import siteInfo from "../../../siteInfo";
import ShowMsg from "../Shared/ShowMsg";
import { useSelector } from "react-redux";

const MarketerPage = () => {
  const { id } = useParams();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState("");
  const [show, setShow] = useState("Quarterly");
  const { theme } = useSelector((state) => state.app);

  useEffect(() => {
    setError(null);
    setLoading(true);
    axios
      .get(`${siteInfo.api}/users/${id}`)
      .then((res) => {
        setUser(res.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [id]);

  const getEfficiency = (achieve, target) => {
    const result = (achieve / target) * 100;
    if (result == "Infinity") {
      return 0;
    }
    return result ? result.toFixed(2) : 0;
  };

  const getOverAll = (data) => {
    let achive = 0;
    data.bit.map((b) => {
      b.status == "Contacted" && achive++;
      b.status == "New Test" && achive++;
      b.possibility == "High" && achive++;
    });
    const { newCall, highLead, newTest } = data.target;
    let target = newCall + highLead + newTest;
    const result = (achive / target) * 100;
    if (result == "Infinity") {
      return 0;
    }
    return result ? result.toFixed(2) : 0;
  };

  return (
    <Layout>
      {loading && <ShowMsg>Lead loading...</ShowMsg>}
      {error && <ShowMsg>{error.message}</ShowMsg>}
      {!loading && !error && (
        <div>
          <div className="flex justify-between items-center	 my-4 px-3 gap-4">
            <h2 className="font-bold my-3 text-3xl bolt capitalize">
              Showing datails of {user.name}
            </h2>
            <div className="flex">
              <h4
                onClick={() => setShow("Quarterly")}
                className={`${
                  show == "Quarterly" ? "bg-indigo-500" : "bg-slate-500"
                } text-white rounded mr-2 text-xl cursor-pointer bold px-3 py-2`}
              >
                Quarterly
              </h4>
              <h4
                onClick={() => setShow("Monthly")}
                className={`${
                  show == "Monthly" ? "bg-indigo-500" : "bg-slate-500"
                } text-white rounded mx-4 text-xl cursor-pointer bold px-3 py-2`}
              >
                Monthly
              </h4>
              <h4
                onClick={() => setShow("Daily")}
                className={`${
                  show == "Daily" ? "bg-indigo-500" : "bg-slate-500"
                } text-white rounded ml-2 text-xl cursor-pointer bold px-3 py-2`}
              >
                Daily
              </h4>
            </div>
            {/* <div>
              <Button
                variant="text"
                color="info"
                // onClick={() => setAssignItem(row.id)}
              >
                <label htmlFor="assign-lead-modal" className="cursor-pointer">
                  <AssignmentReturnedIcon />
                </label>
              </Button>
              <Button
                // onClick={() => setEditItem(row.id)}
                variant="text"
                color="warning"
              >
                <label htmlFor="edit-lead-modal" className="cursor-pointer">
                  <EditCalendarIcon />
                </label>
              </Button>
              <Button variant="text" color="error">
                <label htmlFor="addToTrashModal" className="cursor-pointer">
                  <DeleteIcon />
                </label>
              </Button>
            </div> */}
          </div>
          <div>
            

            {/* ======================================================================================================================================================================================================================================================================================================================================= */}

            {show === "Quarterly" && (
              <div className="w-full mx-auto mt-5 ">
                <table className=" w-full  ">
                  {/* head*/}
                  <thead className="text-center">
                    <tr className="h-12 font-extrabold">
                      <th className="bg-blue-500   ">
                        {" "}
                        Quarter
                      </th>
                      <th className="bg-blue-500   font-extrabold ">
                        {" "}
                        Criteria
                      </th>
                      <th className="bg-blue-500   font-extrabold ">
                        {" "}
                        New Call{" "}
                      </th>
                      <th className="bg-blue-500   font-extrabold ">
                        {" "}
                        High Lead
                      </th>
                      <th className="bg-blue-500   font-extrabold ">
                        {" "}
                        New Test{" "}
                      </th>
                      <th className="bg-blue-500 rounded-tr-sm rounded-br-sm font-extrabold ">
                        {" "}
                        Overall{" "}
                      </th>
                    </tr>
                  </thead>
                  {user?.quarter?.reverse().map((q) => (
                    <tbody
                      key={q.title}
                      style={{ borderBottom: "4px solid #666" }}
                      className={`border font-semibold  text-center`}
                    >
                      {/* row 1 */}
                      <tr className="h-1    ">
                        <th className="h-1   "> </th>
                        <td className="h-1   border border-slate-300">
                          {" "}
                          Target
                        </td>
                        <td className="h-1   border border-slate-300">
                          {" "}
                          {q.target.newCall}{" "}
                        </td>
                        <td className="h-1   border border-slate-300">
                          {" "}
                          {q.target.highLead}{" "}
                        </td>
                        <td className="h-1   border border-slate-300">
                          {" "}
                          {q.target.newTest}{" "}
                        </td>
                        <td className="h-1   "> </td>
                      </tr>
                      <tr className="     font-semibold">
                        <th className="text-blue-500 ">{q.title}</th>
                        <td className="  border border-slate-300">
                          {" "}
                          Archieve{" "}
                        </td>
                        <td className="  border border-slate-300">
                          {q.bit.filter((b) => b.status == "Contacted").length}
                        </td>
                        <td className="  border border-slate-300">
                          {q.bit.filter((b) => b.possibility == "High").length}{" "}
                        </td>
                        <td className="  border border-slate-300">
                          {q.bit.filter((b) => b.status == "New Test").length}{" "}
                        </td>
                        <td className="    border-none text-3xl">
                          {getOverAll(q)}%
                        </td>
                      </tr>
                      {/* row 3 */}
                      <tr className="">
                        <th className="  rounded-none">
                          {" "}
                        </th>
                        <td className="   border border-slate-300">
                          {" "}
                          Efficiency{" "}
                        </td>
                        <td className="   border border-slate-300 ">
                          {" "}
                          {getEfficiency(
                            q.bit.filter((b) => b.status == "Contacted").length,
                            q.target.newCall
                          )}
                          %
                        </td>
                        <td className="   border border-slate-300">
                          {" "}
                          {getEfficiency(
                            q.bit.filter((b) => b.possibility == "High").length,
                            q.target.highLead
                          )}
                          %{" "}
                        </td>
                        <td className="   border border-slate-300  ">
                          {getEfficiency(
                            q.bit.filter((b) => b.status == "New Test").length,
                            q.target.newTest
                          )}
                          %
                        </td>
                        <td className="border-none    rounded-none"> </td>
                      </tr>
                    </tbody>
                  ))}
                </table>

                <div className="w-full h-2 bg-gray-400"> </div>
              </div>
            )}

    

            {show === "Monthly" && (
              <div className="w-full mx-auto mt-5 ">
                <table className=" w-full  ">
                  {/* head*/}
                  <thead className="text-center">
                    <tr className="border h-12    ">
                      <th className="bg-blue-500 rounded-tl-sm rounded-bl-sm  font-extrabold ">
                        {" "}
                        Month
                      </th>
                      <th className="bg-blue-500   font-extrabold ">
                        {" "}
                        Criteria
                      </th>
                      <th className="bg-blue-500   font-extrabold ">
                        {" "}
                        New Call{" "}
                      </th>
                      <th className="bg-blue-500   font-extrabold ">
                        {" "}
                        High Lead
                      </th>
                      <th className="bg-blue-500   font-extrabold ">
                        {" "}
                        New Test{" "}
                      </th>
                      <th className="bg-blue-500 rounded-tr-sm rounded-br-sm font-extrabold ">
                        {" "}
                        Overall{" "}
                      </th>
                    </tr>
                  </thead>
                  {user?.month?.map((m) => (
                    <tbody
                      key={m.title}
                      style={{ borderBottom: "4px solid #666" }}
                      className="border font-semibold  text-center  "
                    >
                      {/* row 1 */}
                      <tr className="h-1   border-none ">
                        <th className="h-1   border-none"> </th>
                        <td className="h-1   border border-slate-300">
                          {" "}
                          Target
                        </td>
                        <td className="h-1   border border-slate-300">
                          {" "}
                          {m.target.newCall}{" "}
                        </td>
                        <td className="h-1   border border-slate-300">
                          {" "}
                          {m.target.highLead}{" "}
                        </td>
                        <td className="h-1   border border-slate-300">
                          {" "}
                          {m.target.newTest}{" "}
                        </td>
                        <td className="h-1   border-none"> </td>
                      </tr>
                      {/* row 2 */}
                      <tr className="     font-semibold">
                        <th className="  text-blue-500 border-none">
                          {m.title}
                        </th>
                        <td className="  border border-slate-300">
                          {" "}
                          Archieve{" "}
                        </td>
                        <td className="  border border-slate-300">
                          {m.bit.filter((b) => b.status == "Contacted").length}
                        </td>
                        <td className="  border border-slate-300">
                          {m.bit.filter((b) => b.possibility == "High").length}{" "}
                        </td>
                        <td className="  border border-slate-300">
                          {m.bit.filter((b) => b.status == "New Test").length}{" "}
                        </td>
                        <td className="    border-none text-3xl">
                          {getOverAll(m)}%
                        </td>
                      </tr>
                      {/* row 3 */}
                      <tr className="">
                        <th className="   rounded-none">
                          {" "}
                        </th>
                        <td className="   border border-slate-300">
                          {" "}
                          Efficiency{" "}
                        </td>
                        <td className="   border border-slate-300 ">
                          {" "}
                          {getEfficiency(
                            m.bit.filter((b) => b.status == "Contacted").length,
                            m.target.newCall
                          )}
                          %
                        </td>
                        <td className="   border border-slate-300">
                          {" "}
                          {getEfficiency(
                            m.bit.filter((b) => b.possibility == "High").length,
                            m.target.highLead
                          )}
                          %{" "}
                        </td>
                        <td className="   border border-slate-300  ">
                          {getEfficiency(
                            m.bit.filter((b) => b.status == "New Test").length,
                            m.target.newTest
                          )}
                          %
                        </td>
                        <td className="      rounded-none"> </td>
                      </tr>
                    </tbody>
                  ))}
                </table>

                <div className="w-full h-2 bg-gray-400"> </div>
              </div>
            )}

            {show === "Daily" && (
              <div className="w-full mx-auto mt-5 ">
                <table className=" w-full  ">
                  {/* head*/}
                  <thead className="text-center">
                    <tr className=" h-16">
                      <th className="bg-blue-500 capitalize  font-bold ">
                        {" "}
                        date
                      </th>
                      <th className="bg-blue-500 capitalize  font-bold ">
                        {" "}
                        call target
                      </th>
                      <th className="bg-blue-500 capitalize  font-bold ">
                        {" "}
                        call attempt{" "}
                      </th>
                      <th className="bg-blue-500 capitalize  font-bold ">
                        {" "}
                        call achieve
                      </th>
                      <th className="bg-blue-500 capitalize  font-bold ">
                        {" "}
                        high lead{" "}
                      </th>
                      <th className="bg-blue-500 capitalize  font-bold ">
                        {" "}
                        new test{" "}
                      </th>
                      <th className="bg-blue-500 capitalize  font-bold ">
                        stisfactory <br /> achievement
                      </th>
                      <th className="bg-blue-500 capitalize  font-bold ">
                        best effort
                      </th>
                      <th className="bg-blue-500 capitalize  font-bold ">
                        first login
                      </th>
                      <th className="bg-blue-500 capitalize  font-bold ">
                        last update
                      </th>
                    </tr>
                  </thead>
                  <tbody className=" text-center  ">
                    {user?.daily?.map((day) => (
                      <tr key={day.title} className=" h-20">
                        <td className="border">{day.title}</td>
                        <td className="border"> {day.callTarget} </td>
                        <td className="border">{day.bit.length}</td>
                        <td className="border">
                          {" "}
                          {
                            day.bit.filter((d) => d.status != "Not available")
                              .length
                          }
                        </td>
                        <td className="border">
                          {" "}
                          {
                            day.bit.filter((d) => d.possibility == "High")
                              .length
                          }{" "}
                        </td>
                        <td className="border">
                          {" "}
                          {
                            day.bit.filter((d) => d.status == "Contacted")
                              .length
                          }{" "}
                        </td>
                        <td className="border">
                          {getEfficiency(day.bit.length, day.callTarget)}%
                        </td>
                        <td className="border">
                          {getEfficiency(
                            day.bit.filter((d) => d.status != "Not available")
                              .length,
                            day.callTarget
                          )}
                          %
                        </td>
                        <td className="border">{day.firstLogin}</td>
                        <td className="border">{day.lastUpdate}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <div className="w-full h-2 bg-gray-400"> </div>
              </div>
            )}

            {/* ======================================================================================================================================================================================================================================================================================================================================= */}
          </div>
        </div>
      )}
    </Layout>
  );
};

export default MarketerPage;
