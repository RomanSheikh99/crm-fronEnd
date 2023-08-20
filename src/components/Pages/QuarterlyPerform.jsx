import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";

const QuarterlyPerform = () => {
  const { currentUser } = useSelector((state) => state.users);
  // const [quarterlyReports, setQuarterlyReports] = useState([]);

  const { pathname } = useLocation();

  const quarterlyReports = [...currentUser?.quarter];

  // useEffect(() => {
  //   if (?.length) {
  //     setQuarterlyReports([]);
  //   } else if (currentUser?.quarter?.length > 1) {
  //     setQuarterlyReports(currentUser?.quarter.reverse());
  //   } else {
  //     setQuarterlyReports(currentUser?.quarter);
  //   }
  // }, [pathname]);

  const getEfficiency = (achieve, target) => {
    const result = (achieve / target) * 100;
    if (result == "Infinity") {
      return 0;
    }
    return result ? result.toFixed(2) : 0;
  };

  const getOverAll = (q) => {
    let achive = 0;
    q.bit.map((b) => {
      b.status == "Contacted" && achive++;
      b.status == "New Test" && achive++;
      // b.status == "Gatekeeper" && achive++
      b.possibility == "High" && achive++;
    });
    const { newCall, highLead, newTest } = q.target;
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
                Quarter
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
          {quarterlyReports.reverse().map((q) => (
            <tbody
              key={q.title}
              style={{ borderBottom: "4px solid #666" }}
              className="border font-semibold  text-center  "
            >
              {/* row 1 */}
              <tr className="h-1  border-none ">
                <th className="h-1  border-none"> </th>
                <td className="h-1  border border-slate-300">
                  {" "}
                  Target
                </td>
                <td className="h-1  border border-slate-300">
                  {" "}
                  {q.target.newCall}{" "}
                </td>
                <td className="h-1  border border-slate-300">
                  {" "}
                  {q.target.highLead}{" "}
                </td>
                <td className="h-1  border border-slate-300">
                  {" "}
                  {q.target.newTest}{" "}
                </td>
                {/* <td className="h-1  border border-slate-300">
                {" "}
                {q.target.newFil}{" "}
              </td> */}
                <td className="h-1  border-none"> </td>
              </tr>
              {/* row 2 */}
              <tr className="    font-semibold">
                <th className=" text-blue-500 border-none">
                  {q.title}
                </th>
                <td className="  border border-slate-300">
                  {" "}
                  Achieve{" "}
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
                {/* <td className="  border border-slate-300">
                {q.bit.filter((b) => b.status == "Gatekeeper").length}{" "}
              </td> */}
                <td className="   border-none text-3xl">
                  {getOverAll(q)}%
                </td>
              </tr>
              {/* row 3 */}
              <tr className="">
                <th className="  rounded-none">
                  {" "}
                </th>
                <td className="  border border-slate-300">
                  {" "}
                  Efficiency{" "}
                </td>
                <td className="  border border-slate-300 ">
                  {" "}
                  {getEfficiency(
                    q.bit.filter((b) => b.status == "Contacted").length,
                    q.target.newCall
                  )}
                  %
                </td>
                <td className="  border border-slate-300">
                  {" "}
                  {getEfficiency(
                    q.bit.filter((b) => b.possibility == "High").length,
                    q.target.highLead
                  )}
                  %{" "}
                </td>
                <td className="  border border-slate-300  ">
                  {getEfficiency(
                    q.bit.filter((b) => b.status == "New Test").length,
                    q.target.newTest
                  )}
                  %
                </td>
                {/* <td className="  border border-slate-300  ">
                {getEfficiency(
                  q.bit.filter((b) => b.status == "Gatekeeper").length,
                  q.target.newFil
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

export default QuarterlyPerform;
