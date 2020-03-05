import React, { useState } from 'react';
import '../App.css';
import { Control, Checkbox, Field } from 'bloomer';

function GenreCheckboxes(props) {
    const [genres, setGenres] = useState([]);

    function useClicks(click){
        const item = click.target.value;
        const isChecked = click.target.checked;
        let temp = props.selected;
        if(isChecked){
            temp.push(item)
        }
        if(!isChecked){
            let i = temp.indexOf(item);
            if(i != -1)
                temp.splice(i, 1);
        }
        if(temp == [])
            props.setSelected(genres)
        else
            props.setSelected(temp);
    }

    props.data.then((data) => {
        let temp = data.data.GenreCollection;
        setGenres(temp);
    })

    return (
        <React.Fragment>
        {   
            genres.map(element => (
                <Field>
                    <Control>
                        <Checkbox value={element} key={element} onChange={useClicks}>{element}</Checkbox>
                    </Control>
                </Field>
                ))
            }
        </React.Fragment>
    );
}

export default GenreCheckboxes;
