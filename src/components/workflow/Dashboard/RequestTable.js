import * as React from 'react';
import Button from '@material-ui/core/Button';
import { DataGrid } from '@material-ui/data-grid';
import FormStyle from '../../auth/FormStyle';

const columns = [
  {
    field: 'date',
    headerName: 'Request number',
    width: 170,
    // eslint-disable-next-line react/display-name
    renderCell: (params) => {
      const classes = FormStyle()
      return (
      <strong>
        {params.value}
        <Button
          variant="contained"
          color="primary"
          size="small"
          className={classes.submitBtn}
          style={{ marginLeft: 16 }}
        >
          Accept 
        </Button>
      </strong>)
    }
  },
];

const rows = [
  {
    id: 1,
    date: 12,
  },
  {
    id: 2,
    date: 32,
  },
  {
    id: 3,
    date: 43,
  },
];

export default function RenderCellGrid() {
  const [selectionModel, setSelectionModel] = React.useState([]);
  return (
    <div style={{ height: 480, width: '100%' }}>
      <DataGrid
        rows={rows} 
        columns={columns} 
        onSelectionModelChange={(newSelection) => {
          setSelectionModel(newSelection.selectionModel);
        }}
        selectionModel={selectionModel}
      />
    </div>
  );
}
