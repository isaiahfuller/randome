import React from 'react';
import '../App.css';
import { Card, Image, Media, MediaContent, MediaLeft, Content, CardContent, Title, Subtitle } from 'bloomer';

function Result(props) {

  

  return (
    <div>
      <Card>
        <CardContent>
          <Media>
            <MediaLeft>
              <Image src={props.img} />
            </MediaLeft>
            <MediaContent key={props.id}>
              <Title isSize="4">{props.title}</Title>
              <Subtitle style={{paddingBottom:0}} isSize="6">{props.season} {props.year} - {props.episodes} Episodes</Subtitle>
              <Content>
                {props.description}
              </Content>
            </MediaContent>
          </Media>
        </CardContent>
      </Card>
    </div>
  );
}

export default Result;
