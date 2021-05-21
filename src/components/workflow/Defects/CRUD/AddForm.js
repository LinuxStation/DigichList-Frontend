import React from 'react'
import Button from '@material-ui/core/Button';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import FormStyle from '../../../auth/FormStyle';

import { DropzoneArea } from 'material-ui-dropzone'
import { Formik } from "formik";
import * as Yup from "yup";

const AddForm = () => {
    return (
        <Formik
            initialValues={{
                title: '',
                roomNumber: '',
                state: 'Open',
                send: 'Some Admin',
                openDate: new Date(),
                closeDate: '',
                image: [],
                description: '',
                decides: '',
            }}
            validationSchema={Yup.object().shape({
                title: Yup.string()
                    .min(5, 'Too Short!')
                    .max(80, 'Too Long!')
                    .required('Required'),
                roomNumber: Yup.string()
                    .max(5, 'Too long, we do not have this room in hotel!')
                    .required('Required'),
                send: Yup.string()
                    .min(6, 'Enter the full name of the sender')
                    .required('Send is required'),
                description: Yup.string()
                    .required('Required'),
                image: Yup.array()
                    .min(1, 'is required!'),
                decides: Yup.string()
                    .min(5, 'Too Short!')
                    .max(20, 'Too Long!')
                    .required('Required'),
            })}
            onSubmit={values => {
                console.log(values);
            }}
        >
            {function (formik) {
                const styles = FormStyle()
                return (
                    <form onSubmit={formik.handleSubmit} className={styles.form}>
                        <div>
                            <MuiDialogContent dividers className={styles.dialogContent}>
                                <TextField
                                    error={formik.errors.title == 'Required' || formik.errors.title == 'Too Short!'}
                                    className={styles.formInput}
                                    variant="outlined"
                                    margin="normal"
                                    helperText={formik.errors.title}
                                    {...formik.getFieldProps('title')}
                                    fullWidth
                                    size="small"
                                    label="Title"
                                    type="text"
                                    id="title"
                                />
                                <TextField
                                    error={formik.errors.roomNumber == 'Required'}
                                    className={styles.formInput}
                                    variant="outlined"
                                    margin="normal"
                                    helperText={formik.errors.roomNumber}
                                    {...formik.getFieldProps('roomNumber')}
                                    fullWidth
                                    size="small"
                                    label="Room Number"
                                    type="number"
                                    id="roomNumber"
                                />
                                <TextField
                                    error={formik.errors.description == 'Required'}
                                    className={styles.formInput}
                                    id="outlined-textarea"
                                    label="Description"
                                    multiline
                                    helperText={formik.errors.description}
                                    {...formik.getFieldProps('description')}
                                    rowsMax={4}
                                    margin="normal"
                                    size="small"
                                    fullWidth
                                    variant="outlined"
                                />
                                <TextField
                                    error={formik.errors.decides == 'Required'}
                                    className={styles.formInput}
                                    id="decides"
                                    label="Decides defect"
                                    helperText={formik.errors.decides}
                                    {...formik.getFieldProps('decides')}
                                    margin="normal"
                                    size="small"
                                    fullWidth
                                    variant="outlined"
                                />
                                <Typography variant="body2" className={formik.errors.image == 'is required!' ? styles.error : null}
                                    component="h1" gutterBottom>
                                    Chose image: {formik.errors.image}
                                </Typography>
                                <DropzoneArea
                                    dropzoneClass={styles.dopzoneAreaText}
                                    showPreviews={true}
                                    showPreviewsInDropzone={false}
                                    useChipsForPreview
                                    onChange={(files) => {
                                        formik.values.image = files
                                    }}
                                    previewGridProps={{ container: { spacing: 1, direction: 'row' } }}
                                    previewChipProps={{ classes: { root: styles.previewChip } }}
                                    previewText='' />
                            </MuiDialogContent>
                            <MuiDialogActions>
                                <Button
                                    size="small"
                                    className={styles.submitBtn}
                                    type="submit"
                                    disableRipple
                                    variant="contained">
                                    Add
                                </Button>
                            </MuiDialogActions>
                        </div>
                    </form>
                )
            }}
        </Formik>

    )
}

export default AddForm