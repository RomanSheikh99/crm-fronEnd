import React, { useEffect, useState } from 'react';
import DefaultLayout from '../Layout/DefaultLayout';
import DataTable from '../Shared/DataTable';
import { toast } from 'react-toastify';

const FavouriteLeads = () => {
  const [userData,setUserData] = useState([])

  useEffect(()=> {
    const FetchData = async () => {
        try{
        const response = await fetch('../../../followupData.json')
        const data = await response.json()
         setUserData(data)
        }catch(error){
            toast.error('Failed to fetch data')
        }
    }
    FetchData()
  },[])
    return (
        <DefaultLayout>
            <div>
                <DataTable data={userData} />
            </div>
        </DefaultLayout>
    );
};

export default FavouriteLeads;