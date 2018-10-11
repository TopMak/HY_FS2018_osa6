import React from 'react'

import { Grid, Image } from 'semantic-ui-react'

const About = () => (
  <div>
<h2>About anecdote app</h2>
  <Grid columns={2} stackable divided >
    <Grid.Row >
    <Grid.Column>
      <p>According to Wikipedia:</p>
      <em>An anecdote is a brief, revealing account of an individual person or an incident.
        Occasionally humorous, anecdotes differ from jokes because their primary purpose is not simply to provoke laughter but to reveal a truth more general than the brief tale itself,
        such as to characterize a person by delineating a specific quirk or trait, to communicate an abstract idea about a person, place, or thing through the concrete details of a short narrative.
        An anecdote is "a story with a point."</em>
      <p>Software engineering is full of excellent anecdotes, at this app you can find the best and add more.</p>
      </Grid.Column>
      <Grid.Column>
      <Image size='small' src='http://www.turingarchive.org/images/noflash/a36/a36.insidephoto.jpg' />
      </Grid.Column>
    </Grid.Row>
  </Grid>
  </div>
)


export default About
