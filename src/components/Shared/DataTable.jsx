import { FaEdit,  FaTelegramPlane,  FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const DataTable = ({data}) => {
    return (
        <div className="w-full overflow-x-scroll ">

            <table className=" w-full whitespace-nowrap overflow-x-scroll  ">
                {/* head*/}
                <thead className=''>
                    <tr className='border'>
                        <th className='bg-blue-500 rounded-tl-sm    py-3 rounded-bl-sm  font-extrabold'> SL </th>
                        <th className='bg-blue-500  font-extrabold  py-3 '> Company  </th>
                        <th className='bg-blue-500  font-extrabold  py-3'> Country </th>
                        <th className='bg-blue-500  font-extrabold  py-3'> Website  </th>
                        <th className='bg-blue-500  font-extrabold  py-3'> Category </th>
                        <th className='bg-blue-500  font-extrabold  py-3'> Minor  </th>
                        <th className='bg-blue-500  font-extrabold  py-3'> Follower</th>
                        <th className='bg-blue-500  font-extrabold  py-3'> Status </th>
                        <th className='bg-blue-500  font-extrabold  py-3 '> Possiblity  </th>
                        <th className='bg-blue-500  font-extrabold  py-3'> Next Followup </th>
                        <th className='bg-blue-500  font-extrabold  py-3'> Created At </th>
                        <th className='bg-blue-500  font-extrabold  py-3'> Phone </th>
                        <th className='bg-blue-500 rounded-tr-sm    py-3 rounded-br-sm font-extrabold '> Action </th>
                    </tr>
                </thead>
                <tbody className='border font-semibold body-col    '>
                    {/* row 1 */}
                    {data.map((userInfo, index) => (
                        <tr key={index} className='h-4 bg-gray-200 border border-slate-300 '>
                            <th className='h-3 bg-gray-200 border border-slate-300 py-0 text-center px-0  m-1'> {index + 1}   </th>
                            <td className='h-3 bg-gray-200 border border-slate-300 py-0 text-center px-0  m-1 w-[400px]'> {userInfo.company} </td>
                            <td className='h-3 bg-gray-200 border border-slate-300 py-0 text-center px-0  m-1'> {userInfo.country} </td>
                            <td className='h-3 bg-gray-200 border border-slate-300 py-0 text-center px-0  m-1 cursor-pointer text-blue-500 hover:text-blue-600'> <Link to='/'> {userInfo.website} </Link>   </td>
                            <td className='h-3 bg-gray-200 border border-slate-300 py-0 text-center px-0  m-1'> {userInfo.category} </td>
                            <td className='h-3 bg-gray-200 border border-slate-300 py-0 text-center px-0  m-1'> {userInfo.minor} </td>
                            <td className='h-3 bg-gray-200 border border-slate-300 py-0 text-center px-0  m-1'> {userInfo.follower} </td>
                            <td className='h-3 bg-gray-200 border border-slate-300 py-0 text-center px-0  m-1'> {userInfo.status} </td>
                            <td className='h-3 bg-gray-200 border border-slate-300 py-0 text-center px-0  m-1'> {userInfo.possibility} </td>
                            <td className='h-3 bg-gray-200 border border-slate-300 py-0 text-center px-0  m-1'> {userInfo.next_followup} </td>
                            <td className='h-3 bg-gray-200 border border-slate-300 py-0 text-center px-0  m-1 w-24 '> {userInfo.created_at} </td>
                            <td className='h-3 bg-gray-200 border border-slate-300 py-0 text-center px-0  m-1'> {userInfo.phone} </td>
                            <td className='h-3 bg-gray-200 border border-slate-300 py-0 text-center px-0  m-1 w-24'>
                                <tr className="h-12    border border-slate-300">
                                    <td className="h-full w-8 border  border-slate-300   text-center px-0  ">
                                      <button className=" text-slate-700 hover:text-slate-500 text-xl  "> <FaEdit  className="" /> </button> 
                                    </td>
                                    <td className="h-full  border w-8  border-slate-300  ">
                                      <button className="   py-0 text-center px-0 text-red-400 hover:text-red-600 "> <FaTrashAlt className=" text-lg "/> </button>
                                    </td>
                                    <td className="h-full border w-8 border-slate-300  ">
                                      <button className=" bg-gray-200 py-0 text-center px-0  text-blue-400 hover:text-blue-600"> <FaTelegramPlane className=" text-xl"/> </button>
                                    </td>
                                    </tr>
                              </td>
                        </tr>
                    ))}


                </tbody>
            </table>
        </div>
    )
}

export default DataTable;