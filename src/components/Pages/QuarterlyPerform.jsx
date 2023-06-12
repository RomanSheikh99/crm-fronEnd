import React from 'react';
import PerformLayout from '../Layout/PerformLayout';
import PerformDataTable from '../Shared/PerformDataTable';

const QuarterlyPerform = () => {
    return (
        <PerformLayout>
            <div>
                <PerformDataTable /> 
            </div>
        </PerformLayout>
    );
};

export default QuarterlyPerform;