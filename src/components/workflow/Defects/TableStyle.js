import { makeStyles } from "@material-ui/core/styles";

const defaultTextColor = '#2A8BF2'

export default makeStyles((theme) => ({
    root: {
        height: theme.spacing(107),
        width: '100%',
    },
    dataTable: {
        fontSize: 12.5,
        '& .MuiDataGrid-colCell-draggable .MuiDataGrid-colCellTitle': {
            fontWeight: 'bold',
        },
        '& .MuiDataGrid-cell': {
            '&:focus': {
                outline:`solid ${defaultTextColor} 1px`,
            },
            '& .Mui-checked': {
                color: defaultTextColor,
            },
        },
        '& .MuiDataGrid-colCell':{
            '& .Mui-checked': {
                color: defaultTextColor,
            },
        },
        '& .MuiDataGrid-root':{
            '& .MuiDataGrid-root': {
              '&.Mui-checked': {
                backgroundColor: defaultTextColor,
            },  
            }
        }
    },
    toolIcon: {
        color: defaultTextColor,
    },
    toolGrid: {
        textAlign: 'end',
        '& .MuiButtonBase-root': {
            '& .Mui-disabled': {
                '& .MuiSvgIcon-root': {
                    color: 'rgba(0, 0, 0, 0.26)',
                }

            }
        }
    },
    toolButton: {
        color: defaultTextColor,
        textTransform: 'none',
        '& .MuiBadge-badge': {
            backgroundColor: defaultTextColor,
        }
    },

}));