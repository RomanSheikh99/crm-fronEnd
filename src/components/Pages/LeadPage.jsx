import React, { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import { useParams } from "react-router";
import AssignmentReturnedIcon from "@mui/icons-material/AssignmentReturned";
import DeleteIcon from "@mui/icons-material/Delete";
import EditCalendarIcon from "@mui/icons-material/EditCalendar";
import { Button } from "@mui/material";
import axios from "axios";
import siteInfo from "../../../siteInfo";
import ShowMsg from "../Shared/ShowMsg";

const LeadPage = () => {
  const { id } = useParams();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [lead, setLead] = useState("");

  useEffect(() => {
    setError(null);
    setLoading(true);
    axios
      .get(`${siteInfo.api}/leads/${id}`)
      .then((res) => {
        setLead(res.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [id]);

  return (
    <Layout>
      {loading && <ShowMsg>Lead loading...</ShowMsg>}
      {error && <ShowMsg>{error.message}</ShowMsg>}
      {!loading && !error && (
        <div>
          <div className="flex justify-between my-4 px-3 gap-4">
            <h2 className="font-bold my-3">Showing Lead {lead.leadsNo}</h2>
            <div>
              <Button
                variant="text"
                color="info"
                // onClick={() => setAssignItem(row.id)}
              >
                <label htmlFor="assign-lead-modal" className="cursor-pointer">
                  <AssignmentReturnedIcon />
                </label>
              </Button>
              <Button
                // onClick={() => setEditItem(row.id)}
                variant="text"
                color="warning"
              >
                <label htmlFor="edit-lead-modal" className="cursor-pointer">
                  <EditCalendarIcon />
                </label>
              </Button>
              <Button variant="text" color="error">
                <label htmlFor="addToTrashModal" className="cursor-pointer">
                  <DeleteIcon />
                </label>
              </Button>
            </div>
          </div>
          <div className="flex justify-between px-3 gap-4">
            <div className=" border border-2 w-full">
              <div className="flex justify-between">
                <h3 className="text-center w-full border p-2 font-black">
                  Company :
                </h3>
                <h3 className="text-center w-full border p-2 ">
                  {lead.company}
                </h3>
              </div>
              <div className="flex justify-between">
                <h3 className="text-center w-full border p-2 font-black">
                  Website :
                </h3>
                <h3 className="text-center w-full border p-2 ">
                  {lead.website}
                </h3>
              </div>
              <div className="flex justify-between">
                <h3 className="text-center w-full border p-2 font-black">
                  Country :
                </h3>
                <h3 className="text-center w-full border p-2 ">
                  {lead.country}
                </h3>
              </div>
              <div className="flex justify-between">
                <h3 className="text-center w-full border p-2 font-black">
                  Catagory :
                </h3>
                <h3 className="text-center w-full border p-2 ">
                  {lead.category}
                </h3>
              </div>
              <div className="flex justify-between">
                <h3 className="text-center w-full border p-2 font-black">
                  Posibility :
                </h3>
                <h3 className="text-center w-full border p-2 ">
                  {lead.posibility}
                </h3>
              </div>
              <div className="flex justify-between">
                <h3 className="text-center w-full border p-2 font-black">
                  Created :
                </h3>
                <h3 className="text-center w-full border p-2 ">
                  {lead.created}
                </h3>
              </div>
              <div className="flex justify-between">
                <h3 className="text-center w-full border p-2 font-black">
                  Minor :
                </h3>
                <h3 className="text-center w-full border p-2 ">{lead.minor}</h3>
              </div>
            </div>
            <div className=" border border-2 w-full">
              <div className="flex justify-between">
                <h3 className="text-center w-full border p-2 font-black">
                  Contact Parson :
                </h3>
                <h3 className="text-center w-full border p-2 ">
                  {lead.contactParson}
                </h3>
              </div>
              <div className="flex justify-between">
                <h3 className="text-center w-full border p-2 font-black">
                  Designation :
                </h3>
                <h3 className="text-center w-full border p-2 ">
                  {lead.designation}
                </h3>
              </div>
              <div className="flex justify-between">
                <h3 className="text-center w-full border p-2 font-black">
                  Phone :
                </h3>
                <h3 className="text-center w-full border p-2 ">{lead.phone}</h3>
              </div>
              <div className="flex justify-between">
                <h3 className="text-center w-full border p-2 font-black">
                  Email :
                </h3>
                <h3 className="text-center w-full border p-2 ">{lead.email}</h3>
              </div>
              <div className="flex justify-between">
                <h3 className="text-center w-full border p-2 font-black">
                  Status :
                </h3>
                <h3 className="text-center w-full border p-2 ">
                  {lead.status}
                </h3>
              </div>
              <div className="flex justify-between">
                <h3 className="text-center w-full border p-2 font-black">
                  Updated :
                </h3>
                <h3 className="text-center w-full border p-2 ">
                  {lead?.updated}
                </h3>
              </div>
              <div className="flex justify-between">
                <h3 className="text-center w-full border p-2 font-black">
                  Follower :
                </h3>
                <h3 className="text-center w-full border p-2 ">
                  {lead.followerName}
                </h3>
              </div>
            </div>
          </div>
          <div className="px-3 my-3">
            <p>
              <span className="font-bold">Description: </span>
              {lead.description}
            </p>
          </div>
          <div className="px-3 my-4">
            <h2 className="text-center font-bold mb-4 border-b-2 py-3">
              All followup remarks show hare
            </h2>
            {lead?.remarks?.map((remark) => (
              <div key={remark.id} className="flex justify-between border-b-2 py-3">
                <div>
                  <h3>
                    <span className="font-bold">Status : </span>
                    {remark.status}
                  </h3>{" "}
                  <h3>
                    <span className="font-bold">Next Poke : </span>
                    {remark.nextPoke}
                  </h3>{" "}
                </div>
                <div>
                  <p>{remark.desc}</p>
                </div>
                <div>
                  <h3>
                    <span className="font-bold">Follower : </span>
                    {remark.follower}
                  </h3>{" "}
                  <span>{remark.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </Layout>
  );
};

export default LeadPage;
// onClick={() => setDltItem(row)}
