
import PerformHeader from "../Shared/PerformHeader";

const AdminLayout = ({ children }) => {
    return (
        <div>
            <div className='w-full '>
                <PerformHeader />
                { children }
            </div>
        </div>
    );
};

export default AdminLayout;