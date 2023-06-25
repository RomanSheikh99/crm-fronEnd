import axios from "axios";
import siteInfo from "../../siteInfo";
import { useDispatch } from "react-redux";
import { action } from "../store/store";

const dispatch = useDispatch();
const { setShowLeads } = action;


const getData = async (path) => {
  try {
    const res = await axios.get(`${siteInfo.api+path}`)
    console.log(res.data)
    dispatch(setShowLeads(res.data))
  } catch (err) {
    console.log(err)
  }
};


export default getData;