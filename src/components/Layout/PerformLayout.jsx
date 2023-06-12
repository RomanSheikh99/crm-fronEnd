
import PerformHeader from "../Shared/PerformHeader";

const PerformLayout = ({ children }) => {
    return (
        <div>
            <div className='w-full '>
                <PerformHeader />
                { children }
            </div>
        </div>
    );
};

export default PerformLayout;