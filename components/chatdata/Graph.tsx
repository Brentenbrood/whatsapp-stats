import React from "react";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";
import { View } from "../Themed";
import InitParse from './InitParse';

export default class UserFrequencyChart extends React.Component {
  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.state = {};
  }
  render() {
    return(
      <View></View>
    );
  };
};