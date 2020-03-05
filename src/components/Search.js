import React, { useState } from 'react';
import '../App.css';
import { genreQuery, pageQuery } from '../functions/anilist.js';
import { Button, Field, Control, Section, Input } from 'bloomer';
import GenreCheckboxes from './GenreCheckboxes';

//{genreVisibility ? <GenreCheckboxes data={genreQuery()} /> : null}

function Search(props) {
  const [genreVisibility, setGenreVisibility] = useState(false)
  const [selectedGenres, setSelectedGenres] = useState([])
  const [startYearInput, setStartYearinput] = useState()
  const [endYearInput, setEndYearinput] = useState()

  function useYears(e){
    console.log(e.target.placeholder)
    console.log(e.target.value)
    if(e.target.name.startsWith("S"))
      setStartYearinput(e.target.value)
    if(e.target.name.startsWith("E"))
      setEndYearinput(e.target.value)
  }

  function useSearch(e){
    pageQuery(selectedGenres,[],startYearInput,endYearInput, 1).then(data => {
      let entries = [];
      console.log(data)
      console.log(data.data.Page.media)
      console.log(data.data.Page.pageInfo.lastPage)
      console.log(data.data.Page.pageInfo.total)
      for(let i=0; i<12; i++){
        let t1, t2 = 0;
        t1 = Math.floor((Math.random() * 6) + 1);
        while(true){
          t2 = Math.floor((Math.random() * data.data.Page.pageInfo.lastPage) + 1);
          if((t1 * t2) < data.data.Page.pageInfo.total || data.data.Page.pageInfo.total < 1)
            break;
        }
        entries.push([t1, t2]);
      }
      console.log(entries);
      props.setResultData(entries);
      //props.setResultData(data.data.Page.media);
      props.getResults(entries);
    });
  }

  return(
      <Section className="Search">
        <Field isHorizontal hasAddons>
          <Control>
            <Button isStatic>Years:</Button>
          </Control>
          <Control>
            <Input type='number' name="Start Year" placeholder="Start Year" value={startYearInput} onChange={useYears}></Input>
          </Control>
          <Control>
            <Button isStatic>-</Button>
          </Control>
          <Control>
            <Input type='number' name="End Year" placeholder="End Year" value={endYearInput} onChange={useYears}></Input>
          </Control>
        </Field>
        <Field hasAddons>
          <Control>
            <Button isColor='info' onClick={() => setGenreVisibility(!genreVisibility)}>
              Genres
            </Button>
          </Control>
          <Control>
            <Button isColor='info'>
              Tags
            </Button>
          </Control>
        </Field>
        <Field>
          <Control>
            <Button isColor='info' onClick={useSearch}>
              Search
            </Button>
          </Control>
        </Field>
        <Field className={genreVisibility ? "GenreVisible" : "GenreHidden"}>
          <GenreCheckboxes data={genreQuery} selected={selectedGenres} setSelected={setSelectedGenres} />
        </Field>
      </Section>
  )
}

export default Search;
