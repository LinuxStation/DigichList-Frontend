import React from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import FormStyle from '../../../components/auth/FormStyle';


const DeleteForm = (props) => {
    const styles = FormStyle();
    const handleSubmit = () => {
        console.log(props.data);
    }
    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <div>
                <MuiDialogContent dividers>
                    <Typography variant="body2" className={styles.title}>
                        You really want delete this data?
                    </Typography>
                    <div className={styles.demo}>
                        <List>
                            {props.data.map((item) => {
                                const { name, id } = item
                                return (
                                    <ListItem key={id}>
                                        <ListItemText variant="body2" primary={`${id}: ${name}`}/>
                                    </ListItem>
                                )
                            })}
                        </List>
                    </div>
                </MuiDialogContent>
                <MuiDialogActions>
                    <Button
                        className={styles.submitBtn}
                        type="submit"
                        disableRipple
                        variant="contained">
                        Yes, I want
                    </Button>
                </MuiDialogActions>
            </div>
        </form>
    )
}

DeleteForm.propTypes = {
    data: PropTypes.array,
}

export default DeleteForm