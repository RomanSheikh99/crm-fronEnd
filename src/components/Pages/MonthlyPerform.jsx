import React from "react";
import Dashboard from "./Dashboard";
import { useSelector } from "react-redux";

const MonthlyPerform = () => {
  const { currentUser } = useSelector((state) => state.users);
  console.log(currentUser?.month)

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
      b.status == "Gatekeeper" && achive++;
      b.possibility == "High" && achive++;
    });
    const { newCall, highLead, newTest, newFil } = m.target;
    let target = newCall + highLead + newTest + newFil;
    const result = (achive / target) * 100;
    if (result == "Infinity") {
      return 0;
    }
    return result ? result.toFixed(2) : 0;
  };
  return (
    <Dashboard>
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
              <th className="bg-blue-500   font-extrabold "> New File </th>
              <th className="bg-blue-500 rounded-tr-sm rounded-br-sm font-extrabold ">
                {" "}
                Overall{" "}
              </th>
            </tr>
          </thead>
          {currentUser?.month?.map((m) => (
            <tbody
              key={m.title}
              style={{ borderBottom: "4px solid #666" }}
              className="border font-semibold  text-center  "
            >
              {/* row 1 */}
              <tr className="h-1 bg-gray-200 border-none ">
                <th className="h-1 bg-gray-200 border-none"> </th>
                <td className="h-1 bg-gray-200 border border-slate-300">
                  {" "}
                  Target
                </td>
                <td className="h-1 bg-gray-200 border border-slate-300">
                  {" "}
                  {m.target.newCall}{" "}
                </td>
                <td className="h-1 bg-gray-200 border border-slate-300">
                  {" "}
                  {m.target.highLead}{" "}
                </td>
                <td className="h-1 bg-gray-200 border border-slate-300">
                  {" "}
                  {m.target.newTest}{" "}
                </td>
                <td className="h-1 bg-gray-200 border border-slate-300">
                  {" "}
                  {m.target.newFil}{" "}
                </td>
                <td className="h-1 bg-gray-200 border-none"> </td>
              </tr>
              {/* row 2 */}
              <tr className="  bg-gray-200  font-semibold">
                <th className="bg-gray-200 text-blue-500 border-none">
                  {m.title}
                </th>
                <td className="text-slate-900 border border-slate-300">
                  {" "}
                  Archieve{" "}
                </td>
                <td className="text-slate-900 border border-slate-300">
                  {m.bit.filter((b) => b.status == "Contacted").length}
                </td>
                <td className="text-slate-900 border border-slate-300">
                  {m.bit.filter((b) => b.possibility == "High").length}{" "}
                </td>
                <td className="text-slate-900 border border-slate-300">
                  {m.bit.filter((b) => b.status == "New Test").length}{" "}
                </td>
                <td className="text-slate-900 border border-slate-300">
                  {m.bit.filter((b) => b.status == "Gatekeeper").length}{" "}
                </td>
                <td className="bg-gray-200 text-slate-900 border-none text-3xl">
                  {getOverAll(m)}%
                </td>
              </tr>
              {/* row 3 */}
              <tr className="border">
                <th className=" bg-gray-200 border border-r-slate-300 rounded-none">
                  {" "}
                </th>
                <td className=" bg-gray-200 border border-slate-300">
                  {" "}
                  Efficiency{" "}
                </td>
                <td className=" bg-gray-200 border border-slate-300 ">
                  {" "}
                  {getEfficiency(
                    m.bit.filter((b) => b.status == "Contacted").length,
                    m.target.newCall
                  )}
                  %
                </td>
                <td className=" bg-gray-200 border border-slate-300">
                  {" "}
                  {getEfficiency(
                    m.bit.filter((b) => b.possibility == "High").length,
                    m.target.highLead
                  )}
                  %{" "}
                </td>
                <td className=" bg-gray-200 border border-slate-300 text-slate-900">
                  {getEfficiency(
                    m.bit.filter((b) => b.status == "New Test").length,
                    m.target.newTest
                  )}
                  %
                </td>
                <td className=" bg-gray-200 border border-slate-300 text-slate-900">
                  {getEfficiency(
                    m.bit.filter((b) => b.status == "Gatekeeper").length,
                    m.target.newFil
                  )}
                  %
                </td>
                <td className=" bg-gray-200 border  text-slate-900 rounded-none">
                  {" "}
                </td>
              </tr>
            </tbody>
          ))}
        </table>

        <div className="w-full h-2 bg-gray-400"> </div>
      </div>
    </Dashboard>
  );
};

export default MonthlyPerform;
