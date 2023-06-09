const DataTable = ({data}) => {
    return (
        <div className="overflow-x-auto">
            <table className=" w-full  ">
                {/* head*/}
                <thead className=''>
                    <tr className='border'>
                        <th className='bg-blue-500 rounded-tl-sm    py-3 rounded-bl-sm  font-extrabold'> SL </th>
                        <th className='bg-blue-500  font-extrabold  py-3'> Company </th>
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
                <tbody className='border font-semibold body-col  '>
                    {/* row 1 */}
                    {data.map((userInfo, index) => (
                        <tr key={index} className='h-4 bg-gray-200 border border-slate-300 '>
                            <th className='h-3 bg-gray-200 border border-slate-300 py-0 text-center px-0  m-1'> {index + 1}   </th>
                            <td className='h-3 bg-gray-200 border border-slate-300 py-0 text-center px-0  m-1'> {userInfo.company} </td>
                            <td className='h-3 bg-gray-200 border border-slate-300 py-0 text-center px-0  m-1'> {userInfo.country} </td>
                            <td className='h-3 bg-gray-200 border border-slate-300 py-0 text-center px-0  m-1'> {userInfo.website} </td>
                            <td className='h-3 bg-gray-200 border border-slate-300 py-0 text-center px-0  m-1'> {userInfo.category} </td>
                            <td className='h-3 bg-gray-200 border border-slate-300 py-0 text-center px-0  m-1'> {userInfo.minor} </td>
                            <td className='h-3 bg-gray-200 border border-slate-300 py-0 text-center px-0  m-1'> {userInfo.follower} </td>
                            <td className='h-3 bg-gray-200 border border-slate-300 py-0 text-center px-0  m-1'> {userInfo.status} </td>
                            <td className='h-3 bg-gray-200 border border-slate-300 py-0 text-center px-0  m-1'> {userInfo.possibility} </td>
                            <td className='h-3 bg-gray-200 border border-slate-300 py-0 text-center px-0  m-1'> {userInfo.next_followup} </td>
                            <td className='h-3 bg-gray-200 border border-slate-300 py-0 text-center px-0  m-1 w-24 '> {userInfo.created_at} </td>
                            <td className='h-3 bg-gray-200 border border-slate-300 py-0 text-center px-0  m-1'> {userInfo.phone} </td>
                            <td className='h-3 bg-gray-200 border border-slate-300 py-0 text-center px-0  m-1'> 13</td>
                        </tr>
                    ))}


                </tbody>
            </table>
        </div>
    )
}

export default DataTable;