import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";

const MonthlyPerform = () => {
  const { currentUser } = useSelector((state) => state.users);
  const [monthlyReports, setMonthlyReports] = useState([]);

  const { pathname } = useLocation();

  useEffect(() => {
    if (!currentUser?.month?.length) {
      setMonthlyReports([]);
    } else if (currentUser?.month?.length > 1) {
      setMonthlyReports(currentUser?.month.reverse());
    } else {
      setMonthlyReports(currentUser?.month);
    }
  }, [pathname]);

  const getEfficiency = (achieve, target) => {
    const result = (achieve / target) * 100;
    if (result == "Infinity") {
      return 0;
    }
    return result ? result.toFixed(2) : 0;
  };

  const getOverAll = (m) => {
    let achive = 0;
    m.bit.map((b) => {
      b.status == "Contacted" && achive++;
      b.status == "New Test" && achive++;
      // b.status == "Gatekeeper" && achive++;
      b.possibility == "High" && achive++;
    });
    const { newCall, highLead, newTest } = m.target;
    let target = newCall + highLead + newTest;
    const result = (achive / target) * 100;
    if (result == "Infinity") {
      return 0;
    }
    return result ? result.toFixed(2) : 0;
  };
  return (
    // <Dashboard>
      <div className="w-full mx-auto mt-5 ">
        <table className=" w-full  ">
          {/* head*/}
          <thead className="text-center">
            <tr className="border h-12    ">
              <th className="bg-blue-500 rounded-tl-sm rounded-bl-sm  font-extrabold ">
                {" "}
                Month 
              </th>
              <th className="bg-blue-500   font-extrabold "> Criteria</th>
              <th className="bg-blue-500   font-extrabold "> New Call </th>
              <th className="bg-blue-500   font-extrabold "> High Lead</th>
              <th className="bg-blue-500   font-extrabold "> New Test </th>
              {/* <th className="bg-blue-500   font-extrabold "> New File </th> */}
              <th className="bg-blue-500 rounded-tr-sm rounded-br-sm font-extrabold ">
                {" "}
                Overall{" "}
              </th>
            </tr>
          </thead>
          {monthlyReports.map((m) => (
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
                {/* <td className="h-1   border border-slate-300">
                  {" "}
                  {m.target.newFil}{" "}
                </td> */}
                <td className="h-1   border-none"> </td>
              </tr>
              {/* row 2 */}
              <tr className="     font-semibold">
                <th className="  text-blue-500 border-none">
                  {m.title}
                </th>
                <td className="  border border-slate-300">
                  {" "}
                  Achieve{" "}
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
                {/* <td className="  border border-slate-300">
                  {m.bit.filter((b) => b.status == "Gatekeeper").length}{" "}
                </td> */}
                <td className="    border-none text-3xl">
                  {getOverAll(m)}%
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
                {/* <td className="   border border-slate-300  ">
                  {getEfficiency(
                    m.bit.filter((b) => b.status == "Gatekeeper").length,
                    m.target.newFil
                  )}
                  %
                </td> */}
                <td className="    rounded-none">
                  {" "}
                </td>
              </tr>
            </tbody>
          ))}
        </table>

        <div className="w-full h-2 bg-gray-400"> </div>
      </div>
    // </Dashboard>
  );
};

export default MonthlyPerform;
