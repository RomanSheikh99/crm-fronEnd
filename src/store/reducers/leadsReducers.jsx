import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import siteInfo from "../../../siteInfo";

export const fetchData = createAsyncThunk("leads/fetchData", async (path) => {
  const res = await axios.get(`${siteInfo.api + path}`);
  return res.data;
});

const leads = createSlice({
  name: "leads",
  initialState: {
    pending: false,
    leadsError: null,
    showLeads: [],
  },
  reducers: {
    addLead: (state,action)=>{
    state.showLeads.unshift(action.payload)
  },
  setLead: (state,action)=>{
    state.showLeads = action.payload
  },
  updateLead: (state,action)=>{
    const itemToEdit = state.showLeads.find(lead => lead.id === action.payload.id);
    itemToEdit.email = action.payload.email;
    itemToEdit.phone = action.payload.phone;
    itemToEdit.designation = action.payload.designation;
    itemToEdit.contactParson = action.payload.contactParson;
    itemToEdit.category = action.payload.category;
    itemToEdit.country = action.payload.country;
    itemToEdit.website = action.payload.website;
    itemToEdit.company = action.payload.company;
  },
},
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state, action) => {
      state.pending = true
      state.leadsError = null
      state.showLeads = []
    });
    builder.addCase(fetchData.rejected, (state, action) => {
      state.pending = false
      state.leadsError = action.error.message
      state.showLeads = []
    });
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.pending = false;
      state.leadsError = null;
      state.showLeads = action.payload;
    });
  },
});

export const { addLead, setLead , updateLead } = leads.actions;


export default leads.reducer;
