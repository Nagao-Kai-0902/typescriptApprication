import { useState } from "react";

const Input = () =>{
    const [str, setStr] = useState("");
return(
    <div>
        <label> {str}
        <input
          type="text"
          defaultValue=""
          onChange={event => setStr(event.target.value)}
        />
        <input
          type="botton"
          defaultValue=""
          onChange={event => setStr(event.target.value)}
        />
        </label>
      </div>
)

}

export default Input