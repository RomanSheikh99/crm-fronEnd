import React from 'react';

const CreateNewLeadModal = () => {
    return (
        <div>
             <div className='px-2 py-4'>
         {/* The button to open modal */}
          <input type="checkbox" id="create_newlead_modal" className="modal-toggle" />
          <div className="modal">
            <div className="modal-box">
              <h3 className="font-bold text-lg"> Are you sure you want to logout ?</h3>
              <p className="py-4">  </p>
              <div className="modal-action">
              <label htmlFor="create_newlead_modal" className="btn btn-sm border-none bg-blue-500"> Close  </label>
              </div>
            </div>
          </div>
            </div>
        </div>
    );
};

export default CreateNewLeadModal;