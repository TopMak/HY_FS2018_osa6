import React from 'react'

import { Card, Grid, Image } from 'semantic-ui-react'

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
       <Card>
        <Image src='https://upload.wikimedia.org/wikipedia/commons/7/79/Alan_Turing_az_1930-as_%C3%A9vekben.jpg' />
        <Card.Content>
          <Card.Header>Alan Turing</Card.Header>
          <Card.Meta>
            <span className='date'>23 June 1912 - 7 June 1954 (aged 41)</span>
          </Card.Meta>
          <Card.Description>Turing is widely considered to be the father of theoretical computer science and artificial intelligence.</Card.Description>
        </Card.Content>
        </Card>
      </Grid.Column>
    </Grid.Row>
  </Grid>
  </div>
)


export default About
