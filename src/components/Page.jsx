import Heatmap from './Heatmap';
import List from './List';
import React, { useState } from 'react';

const Page = (props) => {
  const [filteredData, setFilteredData] = useState(props.userData);
  return (
    <>
      <Heatmap setFilteredData={setFilteredData} userData={props.userData}/>
      <List userData={filteredData}/>
    </>
  );
}

export default Page;
