import React, { useEffect, useState } from "react";
import { FaRegTimesCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import siteInfo from "../../../siteInfo";
import { toast } from "react-toastify";
import ShowMsg from "./ShowMsg";
import { setLead, updateLead } from "../../store/reducers/leadsReducers";
import { useLocation } from "react-router";
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { Button } from "@mui/material";

const FollowUpModal = ({id, setFollowUp}) => {
  const { showLeads, leadsError, pending } = useSelector(
    (state) => state.leads
  );
  const { currentUser } = useSelector(
    (state) => state.users
  );
  const dispatch = useDispatch();
  const {pathname} = useLocation()
  const [lead, setLead] = useState([]);
  const [loading, setLoading] = useState(false);
  const [updating, setUpdating] = useState(false);
  const [error, setError] = useState(null);
  const [fav, setFav] = useState(null);
  const [follow, setFollow] = useState(null);

  const alert = {
    position: "top-center",
    autoClose: 500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  };

  useEffect(() => {
    setError(null)
    setLoading(true)
    axios
      .get(`${siteInfo.api}/leads/${id}`)
      .then((res) => {
        const lead = res.data
        setLead(lead);
        setLoading(false)
        if(lead.followerID == currentUser.id){
          setFollow(true)
        }
        if(lead.favOf == currentUser.id){
          setFav(true)
        }
      })
      .catch((error) => {
        setError(error)
        setLoading(false)
      });
  }, [id]);

  const handleFav = async () => {
    if(fav){
      await axios
      .patch(`${siteInfo.api}/leads/setFavOf/${id}`, {id: null})
      .then((res) => {
        setLead(res.data);
        setFav(false)
      })
      .catch((error) => {
        toast.error("Something Wrong, Try Again");
      });
    }else{
      if(lead.followerID == currentUser.id){
        await axios
        .patch(`${siteInfo.api}/leads/setFavOf/${id}`, {id: currentUser.id})
        .then((res) => {
          setLead(res.data);
          setFav(true)
        })
        .catch((error) => {
          toast.error("Something Wrong, Try Again");
        });
      }
      else{
        toast.error("YOU HAVE TO FOLLOW FIRST", alert)
      }
     
    }
  }

  const handleFollow = async () => {
    if(follow){
      toast.error("You Are Already Follwing This Lead")
    }else{
      await axios
    .patch(`${siteInfo.api}/leads/setFollower/${id}`, currentUser)
    .then((res) => {
      setLead(res.data);
      setFollow(true)
    })
    .catch((error) => {
      toast.error("Something Wrong, Try Again", alert);
    });
    }
  }

  const handleAddRemark = async (e) => {
    e.preventDefault();
    setUpdating(true);

    const data = {
      status: e.target.status.value,
      possibility:  e.target.possibility.value,
      nextPoke:  e.target.nfu.value,
      follower: currentUser.name,
      followerId: currentUser.id,
      desc:  e.target.desc.value
    }

    await axios
      .patch(`${siteInfo.api}/leads/addRemarks/${id}`, data)
      .then((res) => {
        toast.success("Remark Added", alert);
        setFollowUp(null)
      })
      .catch((error) => {
        toast.error("Something Wrong, Try Again");
        setFollowUp(null);
      });

    setUpdating(false);
  };

  const handleStatus = async (e) => {
    await axios
    .patch(`${siteInfo.api}/leads/setStatus/${id}`, {status: e.target.value})
    .then((res) => {
      setLead(res.data);
    })
    .catch((error) => {
      toast.error("Something Wrong, Try Again", alert);
    });
  }

  const handlePossibility = async (e) => {
    await axios
    .patch(`${siteInfo.api}/leads/setPosibility/${id}`, {possibility: e.target.value})
    .then((res) => {
      setLead(res.data);
    })
    .catch((error) => {
      toast.error("Something Wrong, Try Again", alert);
    });
  }

  const handleNextFollowUp = async (e) => {
    await axios
    .patch(`${siteInfo.api}/leads/setNextFollowUp/${id}`, {nfup: e.target.value})
    .then((res) => {
      setLead(res.data);
    })
    .catch((error) => {
      toast.error("Something Wrong, Try Again", alert);
    });
  }


  return (
    <div className="">
      <input type="checkbox" id="assign-lead-modal" className="modal-toggle" />
      <div className="modal">
        <div className="bg-neutral-100 w-4/6 max-w-3xl h-[75vh] overflow-y-scroll">
          <div className="flex justify-between">
            <h2 className="text-2xl font-smeibold mt-2 mb-4">
              Add Remarks {lead.leadsNo}
            </h2>
            <label
              htmlFor="assign-lead-modal"
              className="cursor-pointer text-slate-700 text-3xl hover:text-red-500 rounded-md"
            >
              {" "}
              <FaRegTimesCircle />{" "}
            </label>
          </div>
          {/* Create Marketer form start here  */}
          {loading && <ShowMsg>Lead loading...</ShowMsg>}
          {error && <ShowMsg>{error.message}</ShowMsg>}
          {lead?.followerId != null && lead?.followerId != currentUser.id && <ShowMsg>Someone Folloing This Lead</ShowMsg>}
          {!loading && !error && (
            <form
              onSubmit={handleAddRemark}
              className=" w-full mx-auto px-4 py-6 mb-10  items-start  flex flex-col rounded-b-md font-semibold "
            >
              {/* ================================================== */}

              <section className=" w-full ">
                <div className=" flex  justify-between">
                  {/* Left side of form  */}
                  <div className="mb-3 flex flex-col">
                    <label className="text-lg font-medium text-gray-700">
                      status
                    </label>
                    <select
                      name="status"
                      defaultValue={lead?.status}
                      onChange={handleStatus}
                      className=" select-bordered  border border-gray-300  w-72 ml-0 mr-2 h-10 rounded-md"
                    >
                      <option disabled>
                        {" "}
                      </option>
                      <option> Gatekeeper </option>
                      <option> Contacted </option>
                      <option> Follow-up </option>
                      <option> New test </option>
                      <option> Closed </option>
                      <option> Email </option>
                      <option> Not available </option>
                      <option> Voice mail </option>
                      <option> Others </option>
                    </select>
                  </div>
                  <div className="mb-3 flex flex-col">
                    <label className="text-lg font-medium text-gray-700">
                      Possibility
                    </label>
                    <select
                      name="possibility"
                      defaultValue={lead?.possibility}
                      onChange={handlePossibility}
                      className=" select-bordered  border border-gray-300  w-72 ml-0 mr-2 h-10 rounded-md"
                    >
                      <option disabled>
                        {" "}
                      </option>
                      <option> High </option>
                      <option> Medium </option>
                      <option> Low </option>
                    </select>
                  </div>

                  {/* Right side of form end   */}
                </div>
                <div className=" flex  justify-between">
                  {/* Left side of form  */}
                  <div className="mb-3 flex flex-col">
                    <label className="text-lg font-medium text-gray-700">
                      Next Follow Up
                    </label>
                    <input name="nfu" onChange={handleNextFollowUp} type="date" />
                  </div>
                  <div className="mb-3 flex flex-col">
                   <button>change followUp date</button>
                  </div>

                  {/* Right side of form end   */}
                </div>
                <div className="w-full mx-auto">
                  <label className="text-lg font-medium text-gray-700">
                    {" "}
                    Description{" "}
                  </label>
                  <textarea
                    placeholder=" "
                    name="desc"
                    className="textarea textarea-bordered textarea-lg w-full mt-2  "
                  ></textarea>
                </div>

                {/* Text area for  description   */}
              </section>

              {/* ============================================ */}

              <div style={{
                display: "flex",
                justifyContent: "end",
                gap: "20px",
                width: "100%",
              }}>
                <input
                  value={updating ? "Updating..." : "Add Remark"}
                  disabled={updating}
                  type="submit"
                  className="  bg-sky-600 border-none text-neutral-100 px-4 py-2 rounded-md hover:bg-sky-800 cursor-pointer"
                />
                <Button onClick={handleFollow}>
                {follow ? <CheckBoxIcon/> :<AddBoxOutlinedIcon/>}
                </Button>
                <Button color="error" onClick={handleFav}>
                {fav ? <FavoriteIcon/> :<FavoriteBorderIcon/>}
                </Button>
              </div>
            </form>
          )}

          {/* Create Marketer form end here  */}
        </div>
      </div>
    </div>
  );
};

export default FollowUpModal;