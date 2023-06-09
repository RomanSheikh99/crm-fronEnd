import React, { useEffect, useState } from 'react';
import DefultLayout from '../Layout/DefultLayout';
import DataTable from '../Shared/DataTable';

const AllLeads = () => {


  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const FetchData = async () => {
      try {
        const response = await fetch('../../../followupData.json');
        const data = await response.json()
        setUserData(data)

      } catch (error) {
        console.log("Failed to fetch data ", error)
      }
    }
    FetchData()
  }, [])

  return (
    <DefultLayout>
      <div className='w-full '>
      
      <DataTable data={userData}></DataTable>
      </div>
    </DefultLayout>
  );
};

export default AllLeads;