import { makeStyles } from '@material-ui/core/styles';
import { DataGrid } from '@material-ui/data-grid';

const useStyles = makeStyles({
  table: {
    minWidth: 700,
    backgroundColor: '#21242c',
    color: 'white!important',
    height: 400, 
    width: '100%',
    marginTop: '50px'
  },
});

const List = (props) => {
  const columns = Object.keys(props.userData[0]).map((value) => ({ field: value, headerName: value }));
  const rows = props.userData.map((value, id) => ({ ...value, id }));

  const classes = useStyles();
  debugger;
  return (
    <div className={classes.table}>
      <DataGrid rows={rows} columns={columns} />
    </div>
  );
}

export default List;
