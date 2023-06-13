import React from 'react';
import Navbar from '../Shared/Navbar';
import profile from '../../assets/image/profile.jpg'
import { Link } from 'react-router-dom';
import { FaFacebookSquare, FaLinkedin, FaYoutubeSquare,FaBriefcase } from 'react-icons/fa';
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import LogOutModal from '../Shared/LogOutModal';


const UserProfile = () => {
  return (
    <div className='bg-gray-100 w-full'>
      <Navbar/>
        <div className="bg-gray-100 flex gap-4  p-6 w-11/12 mx-auto">
        {/* Left side of user profile */}
        <section className='bg-slate-50 h-screen rounded-sm shadow-md px-10 py-6 w-2/5'>
            {/*User photo and name*/}
           <div>
          
            <PhotoProvider>
            <div className="foo">
             <PhotoView  src={profile}>
             <img src={profile} alt="" className='w-32 h-32 rounded-full border-2 cursor-pointer  border-blue-800 ' />
             </PhotoView>
             </div>
             </PhotoProvider>

            <h1 className='text-2xl font-semibold mt-2'> Skill CRM User </h1>
            <h5 className='flex items-center gap-2 text-lg'> <FaBriefcase/> Job name  or job  type  </h5>
           </div> 

           {/* Email address  */}
           <div className='mt-6'>
            <h4 className='text-gray-400 text-lg'> Email Address : </h4>
            <h4 className='text-lg font-semibold'> skilcrmuser@gmail.com </h4>
           </div>

            {/* Home address  */}
            <div className='mt-6'>
            <h4 className='text-gray-400 text-lg'> Home Address : </h4>
            <h4 className='text-lg font-semibold'> 31/3 California, USA  </h4>
           </div>

            {/* contact Info   */}
            <div className='mt-6'>
            <h4 className='text-gray-400 text-lg'> Contact : </h4>
            <h4 className='text-lg font-semibold'> Phone: 0154875455 </h4> 
            <div className='flex text-2xl gap-2 mt-2'>
              <Link to={''}> <FaFacebookSquare className='text-blue-500 hover:text-blue-600'/>  </Link>
              <Link to={''}> <FaLinkedin className='text-blue-800 hover:text-blue-900'/>  </Link>
              <Link to={''}> <FaYoutubeSquare className='text-red-600 hover:text-red-800'/>  </Link>
              
            </div>
           </div>
           
           {/* Logout section  */}
           <div className='mt-8 '>
           <label  htmlFor="logout_modal"   className=' bg-red-500 hover:bg-red-600 rounded-sm text-neutral-50 px-8 py-2  '> Log out  </label>
            <LogOutModal/>
           </div>
        </section>



        {/* Right side of uer profile section  */}
        <section className='bg-slate-50 h-screen rounded-sm shadow-md px-10 py-6 w-3/5'>
          {/* General Information  */}
         <div>
         <h1 className='text-2xl text-slate-800 font-medium'> General Information: </h1>
          <h4 className='text-xl font-medium mt-2'> About me </h4>
           <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non, maiores corrupti dolor nobis eos, eaque libero minus quam consequatur alias provident omnis nisi illo labore placeat atque. Officia, suscipit alias!</p>
         </div>

          {/* Educational Information  */}
          <div className='grid grid-cols-2 gap-6'>
            <div className='mt-5'>
              <h4 className='text-gray-400 text-lg'> Education :</h4>
              <h2 className='text-lg font-medium'> Thomas Jeff High School, Stanford University</h2>
            </div>
            <div className='mt-5'>
              <h4 className='text-gray-400 text-lg'> Work History :</h4>
              <h2 className='text-lg font-medium'> Twitch ,  Google </h2>
            </div>
          </div>
           
           {/* Start info  and language  */}
          <div className='grid grid-cols-2 mt-5 gap-6'>
          <div className='mt-5'>
              <h4 className='text-gray-400 text-lg'> Join Date :</h4>
              <h2 className='text-lg font-medium'> 12/03/23 </h2>
            </div>
            <div className='mt-5'>
              <h4 className='text-gray-400 text-lg'> Language  :</h4>
              <h2 className='text-lg font-medium'> English  </h2>
            </div>
          </div>

           {/* Company name and user role   */}
           <div className='grid grid-cols-2 mt-5 gap-6'>
          <div className='mt-5'>
              <h4 className='text-gray-400 text-lg'> Organization :</h4>
              <h2 className='text-lg font-medium'> LLC tech  </h2>
            </div>
            <div className='mt-5'>
              <h4 className='text-gray-400 text-lg'> Category :</h4>
              <h2 className='text-lg font-medium'> Photographer  </h2>
            </div>
          </div>

        </section>
       </div>
    </div>
  
  );
};

export default UserProfile;
