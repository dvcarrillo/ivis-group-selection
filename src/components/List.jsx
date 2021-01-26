import { makeStyles } from '@material-ui/core/styles';
import { DataGrid } from '@material-ui/data-grid';

const useStyles = makeStyles({
  table: {
    minWidth: '700px',
    backgroundColor: '#21242c',
    color: 'white!important',
    height: '400px', 
    width: '1300px',
    marginTop: '50px',
    marginLeft: '10px'
  },
});

const List = (props) => {
  const columns = Object.keys(props.userData[0]).map((value) => ({ field: value, headerName: value }));
  const rows = props.userData.map((value, id) => ({ ...value, id }));

  const classes = useStyles();
  
  return (
    <div className={classes.table}>
      <DataGrid rows={rows} columns={columns} />
    </div>
  );
}

export default List;
