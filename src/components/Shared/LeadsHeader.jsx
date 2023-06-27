import React from "react";
import SearchLeads from "./SearchLeads";
import EditLeadModal from "./EditLeadModal";
import AddToTrashModal from "./AddToTrashModal";
import CreateNewLeadModal from "./CreateNewLeadModal";
import { useSelector } from "react-redux";
import ImportModal from "./ImportModal";

const LeadsHeader = ({
  editItem,
  setEditItem,
  dltItem,
  setDltItem,
  handleTrashModal,
  path,
}) => {
  const state = useSelector((state) => state.app);

  return (
    <div
      className={`${
        state.theme == "DARK" ? "dark" : "light"
      } flex justify-between px-2 items-center py-3  `}
    >
      <SearchLeads path={path}></SearchLeads>

      <div className="flex gap-2">
        <label
          htmlFor="import_modal"
          className=" bg-indigo-500 hover:bg-indigo-600  font-semibold  text-neutral-100  py-2 px-3 rounded-sm"
        >
          Imports
        </label>
        <label
          htmlFor="create_newlead_modal"
          className=" bg-indigo-500 hover:bg-indigo-600  font-semibold  text-neutral-100  py-2 px-3 rounded-sm"
        >
          Create New Lead
        </label>

        {editItem && (
          <EditLeadModal id={editItem} onClose={() => setEditItem(null)}>
            {" "}
          </EditLeadModal>
        )}
        {dltItem && (
          <AddToTrashModal
            item={dltItem}
            handleTrashModal={handleTrashModal}
            onClose={() => setDltItem(null)}
          >
            {" "}
          </AddToTrashModal>
        )}
        <ImportModal />
        <CreateNewLeadModal> </CreateNewLeadModal>
      </div>
    </div>
  );
};

export default LeadsHeader;
