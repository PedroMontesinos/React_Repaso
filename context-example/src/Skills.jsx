import React, { useContext } from "react";
import { FormContext } from "./Form";

export default (props) => {
    const ctx = useContext(FormContext);

    const addToList = (value, list) =>{
        ctx.setLikes([value].concat(ctx.likes))
    }

    const removeFromList  = (value, list) => {
        ctx.setLikes(ctx.likes.filter(v => v !== value))
    }

    return(
        <div>
            <p>
                Email: {ctx.email}
            </p>
            <label>
                <input 
                type="checkbox"
                name="likes[]"
                onChange={(e) => e.target.checked ? addToList('Ruby') : removeFromList('Ruby')}
                />
                Ruby
            </label>
            <label>
                <input 
                type="checkbox"
                name="likes[]"
                onChange={(e) => e.target.checked ? addToList('JavaScript') : removeFromList('JavaScript')}
                />
                JavaScript
            </label>
        </div>
    );
}