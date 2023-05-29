import React from 'react';
import { Link } from 'react-router-dom';

const RegisterNav = () => {
    return (
        <div>
      <nav
  className="relative flex w-4/5 mx-auto flex-nowrap items-center justify-between rounded-sm bg-slate-900 py-2 text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 lg:flex-wrap lg:justify-start lg:py-3"
  data-te-navbar-ref>
  <div className="flex w-full flex-wrap items-center justify-between px-3">
    <button
      className="block border-0 bg-transparent px-2 text-neutral-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
      type="button"
      data-te-collapse-init
      data-te-target="#navbarSupportedContent3"
      aria-controls="navbarSupportedContent3"
      aria-expanded="false"
      aria-label="Toggle navigation">
      <span className="[&>svg]:w-7">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-7 w-7">
          <path
            fillRule="evenodd"
            d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
            clipRule="evenodd" />
        </svg>
      </span>
    </button>

    <div
      className="!visible mt-2 hidden flex-grow basis-[100%] items-center  lg:mt-0 lg:!flex lg:basis-auto"
      id="navbarSupportedContent3"
      data-te-collapse-item>

      <Link to={'/'} class="pr-2 text-xl text-slate-100 dark:text-neutral-200" 
        > Skill_CRM</Link>
      <ul
        className="list-style-none ml-auto flex flex-col pl-0 lg:flex-row "
        data-te-navbar-nav-ref>
        {/* { Login navlink option } */}
        <li className="my-4 lg:my-0 lg:pr-2" data-te-nav-item-ref>
          <Link to={'/login'}
            class="  lg:px-2 text-neutral-500 hover:text-slate-200"
            aria-current="page"
            data-te-nav-a-ref
            >Login</Link>
        </li>

        <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
          <Link to={'/signup'}
            class="p-0 text-neutral-500 hover:text-slate-200  "
            data-te-nav-a-ref
            > Sign up</Link>
        </li>

    {/* Optional */}
     <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
          <Link to={'/homepage-dashboard'}
            class="p-0 text-neutral-500 hover:text-slate-200  "
            data-te-nav-a-ref
            > Quarterly </Link>
        </li>

           {/* Optional */}
     <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
          <Link to={'/admin-dashboard'}
            class="p-0 text-neutral-500 hover:text-slate-200  "
            data-te-nav-a-ref
            > Admin Dashboard </Link>
        </li>

       

       
       </ul>
      </div>
     </div>
   </nav>
  </div>
    );
};

export default RegisterNav;