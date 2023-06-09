
import PerformHeader from "../Shared/PerformHeader";

const AdminLayout = ({ children }) => {
    return (
        <div>
            <div className='w-4/5 mx-auto'>
                <PerformHeader />
                { children }
            </div>
        </div>
    );
};

export default AdminLayout;