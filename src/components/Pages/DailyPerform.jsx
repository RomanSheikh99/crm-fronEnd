import React from "react";
import Dashboard from "./Dashboard";

const DailyPerform = () => {
  return (
    <Dashboard>
      <div className="w-full mx-auto mt-5 ">
        <table className=" w-full  ">
          {/* head*/}
          <thead className="text-center">
            <tr className=" h-16">
              <th className="bg-blue-500 capitalize  font-bold "> date</th>
              <th className="bg-blue-500 capitalize  font-bold "> call target</th>
              <th className="bg-blue-500 capitalize  font-bold "> call attempt </th>
              <th className="bg-blue-500 capitalize  font-bold "> call achieve</th>
              <th className="bg-blue-500 capitalize  font-bold "> high lead </th>
              <th className="bg-blue-500 capitalize  font-bold "> new test </th>
              <th className="bg-blue-500 capitalize  font-bold ">
                stisfactory <br /> achievement
              </th>
              <th className="bg-blue-500 capitalize  font-bold ">best effort</th>
              <th className="bg-blue-500 capitalize  font-bold ">first login</th>
              <th className="bg-blue-500 capitalize  font-bold ">last update</th>
            </tr>
          </thead>
          <tbody className=" text-center  ">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <tr className=" h-20">
                <td className="border">12 may 2023</td>
                <td className="border"> 5 </td>
                <td className="border">4</td>
                <td className="border"> 5</td>
                <td className="border"> 3 </td>
                <td className="border"> 7 </td>
                <td className="border">3%</td>
                <td className="border">85%</td>
                <td className="border">11:30am</td>
                <td className="border">2:37pm</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="w-full h-2 bg-gray-400"> </div>
      </div>
    </Dashboard>
  );
};

export default DailyPerform;
