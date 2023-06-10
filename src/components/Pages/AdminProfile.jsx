import React from 'react';
import AdminLayout from '../Layout/AdminLayout';
import { FaCamera} from 'react-icons/fa';
import LogOutModal from '../Shared/LogOutModal';

 const AdminProfile = () => {
  const sectionStyle = {
    backgroundImage: `url(https://images.pexels.com/photos/389818/pexels-photo-389818.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '250px',
    display: 'flex',
    alignItems: 'start',
    justifyContent: 'end',
    flexDirection: 'row',
    color: 'white',
  };


    return (
        <AdminLayout>
      <div className='w-full h-screen bg-slate-200 mx-auto'>
    <div className="w-11/12 mx-auto bg-gray-300">
      {/* cover picture  */}
      <div className="h-48 w-full mx-auto" style={sectionStyle}>
      <div className=' '>
       <button className='float-right  p-4 rounded-full bg-gray-500 hover:bg-gray-600 cursor-pointer  '> <FaCamera/> </button>
       </div>
      </div>
     
      {/* profile picture  */}
      <div className="flex -mt-20">
      <div className=' flex'>
        <img className="w-40 h-40 rounded-full border-4 border-white ml-2" src={'https://images.pexels.com/photos/5669641/pexels-photo-5669641.jpeg?auto=compress&cs=tinysrgb&w=600'} alt="Profile Picture" />
        <div className=' -ml-1'>
        <button className=' h-10 mt-20 w-10 flex items-center justify-center bg-gray-400 hover:bg-gray-500 rounded-full  cursor-pointer  '> <FaCamera /> </button>
        </div>
       </div>
      </div>
        <div className="mt-4 px-4 pb-4">
          <h2 className="text-2xl font-bold"> CRM_Admin  </h2>
          <p className="text-gray-600"> CRM_Skills Admin  </p>
         </div>
         
          
         <label  htmlFor="logout_modal"   className='bg-red-500 hover:bg-red-600 rounded-md text-neutral-50 px-4 py-2 ml-4 '> Log out </label>
         <LogOutModal> </LogOutModal>

        </div>
       </div>
     </AdminLayout>
      
    );
 };

export default AdminProfile;