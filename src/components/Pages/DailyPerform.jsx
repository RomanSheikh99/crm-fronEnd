import React from 'react';
import PerformLayout from '../Layout/PerformLayout';
import PerformDataTable from '../Shared/PerformDataTable';

const DailyPerform = () => {
    return (
        <PerformLayout>
            <div>
                <PerformDataTable/> 
            </div>
        </PerformLayout>
    );
};

export default DailyPerform;