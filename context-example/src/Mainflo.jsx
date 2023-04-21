import React, { useContext } from "react";
import { FormContext } from "./Form";

export default (props) => {
    const ctx = useContext(FormContext);
    return(
        <div>
            <input 
              onChange={(e) => ctx.setEmail(e.target.value)}
              type="email" 
              value={ctx.email}
            />
            <input
              onChange={(e) => ctx.setPassword(e.target.value)} 
              type="password" 
              value={ctx.password}
            />
        </div>
    );
}