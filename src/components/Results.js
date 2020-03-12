import React, { useEffect, useState } from 'react';
import '../App.css';
import Result from './Result.js';
import { Columns, Column, Section } from 'bloomer';

function Results(props) {
  const [data, setData] = useState([])

  useEffect(() => {
    if(data.length !== 3){
      setData(props.data)
      setData(split(props.data))
    }
  })

  function split(propData){
    let x = [[propData[0],propData[1]],[propData[2],propData[3]],[propData[4],propData[5]]]
    return x;
  }

  return(
    <Section>
      {
        data.map((anime, i) => (
          <React.Fragment key={i}>
            <Columns>
              <Column isSize="1/2">
                <Result id={anime[0].id} title={anime[0].title.romaji} description={anime[0].description} season={anime[0].season} year={anime[0].seasonYear} episodes={anime[0].episodes} img={anime[0].coverImage.medium} />
              </Column>
              <Column isSize="1/2">
                <Result id={anime[1].id} title={anime[1].title.romaji} description={anime[1].description} season={anime[1].season} year={anime[1].seasonYear} episodes={anime[1].episodes} img={anime[1].coverImage.medium} />
              </Column>
            </Columns>
          </React.Fragment>
        ))
      }
    </Section>
  )
}

export default Results;