import React from 'react';
import DefectsTable from '../../components/workflow/Defects/DefectsTable'

import WorkflowStyle from "../../components/workflow/WorkflowStyle";
import Paper from '@material-ui/core/Paper';

const data = [
  {
    id: 1,
    title: 'df.',
    state: 'Open',
    room: 47,
    send: 'Misha Mischo',
    openDate: `${new Date()}`,
    closedDate: `${new Date()}`,
    solved: 34,
  },
  {
    id: 2,
    title: 'sd.',
    state: 'Solved',
    room: 47,
    send: 'Misha Mischo',
    openDate: `${new Date()}`,
    closedDate: `${new Date()}`,
    solved: 14,
  },
  {
    id: 3,
    title: 'sd.',
    state: 'Solved',
    room: 47,
    send: 'Misha Mischo',
    openDate: `${new Date()}`,
    closedDate: `${new Date()}`,
    solved: 12,
  },
  {
    id: 4,
    title: 'sd.',
    state: 'Fixing',
    room: 47,
    send: 'Misha Mischo',
    openDate: `${new Date()}`,
    closedDate: `${new Date()}`,
    solved: 31,
  },
  {
    id: 8,
    title: 'sd.',
    state: 'Fixing',
    room: 47,
    send: 'Misha Mischo',
    openDate: `${new Date()}`,
    closedDate: `${new Date()}`,
    solved: 31,
  },
  {
    id: 9,
    title: 'sd.',
    state: 'Fixing',
    room: 47,
    send: 'Misha Mischo',
    openDate: `${new Date()}`,
    closedDate: `${new Date()}`,
    solved: 31,
  },
  {
    id: 10,
    title: 'sd.',
    state: 'Fixing',
    room: 47,
    send: 'Misha Mischo',
    openDate: `${new Date()}`,
    closedDate: `${new Date()}`,
    solved: 31,
  },
  {
    id: 11,
    title: 'sd.',
    state: 'Fixing',
    room: 47,
    send: 'Misha Mischo',
    openDate: `${new Date()}`,
    closedDate: `${new Date()}`,
    solved: 31,
  },
  {
    id: 12,
    title: 'sd.',
    state: 'Fixing',
    room: 47,
    send: 'Misha Mischo',
    openDate: `${new Date()}`,
    closedDate: `${new Date()}`,
    solved: 31,
  },
  {
    id: 5,
    title: 'sd.',
    state: 'Solved',
    room: 47,
    send: 'Misha Mischo',
    openDate: `${new Date()}`,
    closedDate: `${new Date()}`,
    solved: 1,
  },
  {
    id: 6,
    title: 'ds.',
    state: 'Open',
    room: 47,
    send: 'Misha Mischo',
    openDate: `${new Date()}`,
    closedDate: `${new Date()}`,
    solved: 5,
  },
  {
    id: 7,
    title: 'd',
    state: 'Open',
    room: 47,
    send: 'Misha Mischo',
    openDate: `${new Date()}`,
    closedDate: `${new Date()}`,
    solved: 4,
  },
]

export default function Defects() {
  const classes = WorkflowStyle();
  return (
    <Paper className={classes.paper}>
      <strong>Defects</strong>
      <DefectsTable data={data} />
    </Paper>

  )
}