import React from 'react';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Link from '@material-ui/core/Link';

export default ({name, link}) => (
  <Card>
    <CardContent>
      <Typography gutterBottom variant="h5" component="h2" align="center">
        {name}
      </Typography>
    </CardContent>

    <CardActions>
      <Button
        size="small"
        color="primary"
        variant="contained"
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        component={Link}
        fullWidth
      >
        More
      </Button>
    </CardActions>
  </Card>
);
