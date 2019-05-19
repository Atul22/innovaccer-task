import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { unstable_Box as Box } from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from "@material-ui/core/CardActionArea";

const styles = {
  title: {
    fontSize: 12
  },
  pos: {
    marginBottom: 12
  }
};

class HomeCard extends Component {
  render() {
    const { classes, header, tabs, summary, lead } = this.props;
    return (
      <div>
        <Box m={2} />

        <Card className={classes.card}>
            <CardContent>
              <Typography variant="h5" component="h2">
                {header}
              </Typography>

              <Typography variant="h5" component="h2">
                {tabs}
              </Typography>

              <Typography variant="h5" component="h2">
                {summary}
              </Typography>
                
              <Typography variant="h5" component="h2">
                {lead}
              </Typography>
            </CardContent>
        </Card>
      </div>
    );
  }
}

export default withStyles(styles)(HomeCard);