import axios from "axios";
import siteInfo from "../../siteInfo";


const addLoginUpdate = async (id) => {
  try {
   const res = await axios.patch(`${siteInfo.api}/users//addLoginUpdate/${id}`)
  } catch (error) {
  }
}


export default addLoginUpdate;