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
                <div className='w-full'>
                    {children}
                </div>

            </main>
        </div>
    );
};

export default AdminLayout;