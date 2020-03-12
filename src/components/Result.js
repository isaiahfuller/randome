import React from 'react';
import '../App.css';
import { textLimit, fixFormat, capitalize } from '../functions/text';
import { Card, Image, Media, MediaContent, MediaLeft, Content, CardContent, Title, Subtitle } from 'bloomer';
import ReactHtmlParser from 'react-html-parser';

function Result(props) {

  return (
    <>
      <Card>
        <CardContent>
          <Media>
            <MediaLeft>
              <Image src={props.img} />
            </MediaLeft>
            <MediaContent>
              <Title isSize="4">{props.title}</Title>
              <Subtitle style={{paddingBottom:0}} isSize="6">{capitalize(props.season)} {props.year} - {props.episodes} Episodes</Subtitle>
              <Content>
                {ReactHtmlParser(fixFormat(textLimit(props.description)))}
              </Content>
            </MediaContent>
          </Media>
        </CardContent>
      </Card>
    </>
  );
}

export default Result;
