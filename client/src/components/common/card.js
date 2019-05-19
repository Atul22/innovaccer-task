import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { unstable_Box as Box } from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";

const styles = {
  card: {
    marginLeft: 10,
    marginRight: 10,
    padding: 10
  },
  title: {
    fontSize: 12
  },
  pos: {
    marginBottom: 5
  }
};

class HomeCard extends Component {
  render() {
    const { classes, header, tabs, summary, lead } = this.props;
    return (
      <div>
        <Box m={2} />

        <Card className={classes.card}>
            
              <Typography variant="h6" component="h3">
                {header}
              </Typography>

              <Typography variant="h6" component="h3">
                {tabs}
              </Typography>

              <Typography variant="h6" component="h3">
                {summary}
              </Typography>
                
              <Typography variant="h6" component="h3">
                {lead}
              </Typography>
        </Card>
      </div>
    );
  }
}

export default withStyles(styles)(HomeCard);