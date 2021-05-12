import * as React from 'react';
import {
  Chart,
  ArgumentAxis,
  ValueAxis,
  LineSeries,
  Title,
  Legend,
  Tooltip,
} from '@devexpress/dx-react-chart-material-ui';
import { withStyles } from '@material-ui/core/styles';
import { Animation } from '@devexpress/dx-react-chart';
import PropTypes from 'prop-types';
import { EventTracker } from '@devexpress/dx-react-chart';


const format = () => tick => tick;
const legendStyles = () => ({
  root: {
    display: 'flex',
    margin: 'auto',
    flexDirection: 'row',
    paddingBottom: 'unset',
  },
});
const legendLabelStyles = theme => ({
  label: {
    paddingTop: theme.spacing(1),
    whiteSpace: 'nowrap',
    '& .MuiTypography-body1':{
        fontSize: 14,
    },
  },
});
const legendItemStyles = () => ({
  item: {
    flexDirection: 'column',
  },
});

const data = [
    {
      year: 1993, tvNews: 19, church: 29,
    }, {
      year: 1995, tvNews: 13, church: 32, 
    }, {
      year: 1997, tvNews: 14, church: 35, 
    }, {
      year: 1999, tvNews: 13, church: 32,
    }, {
      year: 2001, tvNews: 15, church: 28, 
    }, {
      year: 2003, tvNews: 16, church: 27, 
    }, {
      year: 2006, tvNews: 12, church: 28, 
    }, {
      year: 2008, tvNews: 11, church: 26,
    }, {
      year: 2010, tvNews: 10, church: 25, 
    }, {
      year: 2012, tvNews: 11, church: 25, 
    }, {
      year: 2014, tvNews: 10, church: 25, 
    }, {
      year: 2016, tvNews: 8, church: 20, 
    }, {
      year: 2018, tvNews: 10, church: 20,
    },
  ];

const legendRootBase = ({ classes, ...restProps }) => (
  <Legend.Root {...restProps} className={classes.root} />
);
const legendLabelBase = ({ classes, ...restProps }) => (
  <Legend.Label className={classes.label} {...restProps} />
);
const legendItemBase = ({ classes, ...restProps }) => (
  <Legend.Item className={classes.item} {...restProps} />
);
const Root = withStyles(legendStyles, { name: 'LegendRoot' })(legendRootBase);
const Label = withStyles(legendLabelStyles, { name: 'LegendLabel' })(legendLabelBase);
const Item = withStyles(legendItemStyles, { name: 'LegendItem' })(legendItemBase);
const demoStyles = () => ({
  chart: {
    paddingRight: '20px',
    
  },
  title: {
    whiteSpace: 'pre',
  },
});

const ValueLabel = (props) => {
  const { text } = props;
  return (
    <ValueAxis.Label
      {...props}
      text={`${text}`}
    />
  );
};
ValueLabel.propTypes = {
    text: PropTypes.string,
}

const titleStyles = {
  title: {
    whiteSpace: 'pre',
  },
};
const TitleText = withStyles(titleStyles)(({ classes, ...props }) => (
  <Title.Text {...props} className={classes.title} />
));

class Demo extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data,
      targetItem: undefined,
    };
    this.changeTargetItem = targetItem => this.setState({ targetItem });
  }

  render() {
    const { data: chartData, targetItem } = this.state;
    const { classes } = this.props;

    return (
        <Chart
          data={chartData}
          className={classes.chart}
        >
          <ArgumentAxis tickFormat={format} />
          <ValueAxis
            max={50}
            labelComponent={ValueLabel}
          />
          <LineSeries
            name="New bug request"
            valueField="tvNews"
            argumentField="year"
          />
          <LineSeries
            name="Fixed bugs"
            valueField="church"
            argumentField="year"
          />
          <EventTracker/>
          <Tooltip targetItem={targetItem} onTargetItemChange={this.changeTargetItem} />
          <Legend position="bottom" rootComponent={Root} itemComponent={Item} labelComponent={Label} />
          <Title
            text={`Bug statistics  ${'\n'}`}
            textComponent={TitleText}
          />
          <Animation />
        </Chart>
    );
  }
}
Demo.propTypes = {
    classes: PropTypes.object,
}

export default withStyles(demoStyles, { name: 'Demo' })(Demo);
