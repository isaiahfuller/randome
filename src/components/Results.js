import React from 'react';
import '../App.css';
import Result from './Result.js';
import { Columns, Column, Section } from 'bloomer';

function Results(props) {
  return (
      <Section>
        <Columns isCentered>
            <React.Fragment>
              {
                props.data.map((anime, i) => (
                  <Column isSize="1/2">
                    <Result id={anime.id} title={anime.title.romaji} description={anime.description} season={anime.season} year={anime.seasonYear} episodes={anime.episodes} img={anime.coverImage.medium} />
                  </Column>
                ))
              }
            </React.Fragment>
        </Columns>
      </Section>
  );
}

export default Results;
