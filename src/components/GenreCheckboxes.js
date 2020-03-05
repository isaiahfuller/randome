import React, { useState } from 'react';
import '../App.css';
import { Control, Checkbox, Field } from 'bloomer';

function GenreCheckboxes(props) {
    const [genres, setGenres] = useState([]);
    const [used, setUsed] = useState(false);

    function useClicks(click){
        const item = click.target.value;
        const isChecked = click.target.checked;
        let temp = [];
        if(!used){
            props.setSelected([]);
            setUsed(true);
            temp.push(item)
        } else{
            temp = props.selected;
            if(isChecked){
                temp.push(item)
            }
            if(!isChecked){
                let i = temp.indexOf(item);
                if(i !== -1)
                    temp.splice(i, 1);
            }
        }
        if(temp.length < 1)
            props.setSelected(genres)
        else
            props.setSelected(temp);
    }
        if(genres.length < 1 && !used)
            props.data().then((data) => {
                let temp = data.data.GenreCollection;
                setGenres(temp);
                if(!used)
                    props.setSelected(temp);
            })

    return (
        <div>
        {   
            genres.map((element, i) => (
                <React.Fragment key={i}>
                    <Field>
                        <Control>
                            <Checkbox value={element} key={element} onChange={useClicks}>{element}</Checkbox>
                        </Control>
                    </Field>
                </React.Fragment>
                ))
            }
        </div>
    );
}

export default GenreCheckboxes;
