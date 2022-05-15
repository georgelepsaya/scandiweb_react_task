import React from 'react';
import { useQuery } from "@apollo/client";
import { GET_DATA } from "../GraphQL/Queries";
import MainWrap from './MainWrap';

const DataProvider = () => {
  const { error, loading, data } = useQuery(GET_DATA);
  let allData = data;
  return (
    <MainWrap data={allData} />
  )
}

export default DataProvider