import AdminDashboardNavbar from "../Shared/AdminDashboardNavbar";
import AdminDashboardSideNav from "../Shared/AdminDashboardSideNav";

const AdminLayout = ({ children }) => {
    return (
        <div>
            <AdminDashboardNavbar />
            <main className='flex '>
                <div className='w-[200px] '>
                    <AdminDashboardSideNav> </AdminDashboardSideNav>
                </div>
                <div className='w-full overflow-x-scroll bg-neutral-100'>
                    {children}
                </div>

            </main>
        </div>
    );
};

export default AdminLayout;