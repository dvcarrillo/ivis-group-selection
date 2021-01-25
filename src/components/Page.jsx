import Heatmap from './Heatmap';
import List from './List';

const Page = (props) => {
  return (
    <>
      <Heatmap userData={props.userData}/>
      <List userData={props.userData}/>
    </>
  );
}

export default Page;
