import React, {useState} from "react";
import "./Dictionary.css";
import axios from "axios";

export default function Dictionary() {
    let [keyword, setKeyword] = useState("");
    
   
    function handleResponse(response) {
        //console.log(response.data[0]);//
    }
   
   
    function search(event) {
        event.preventDefault();

        let apiKey = "cf2a3b53726tfaddf4o0d7a1400a5b31";
        let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
        axios.get(apiUrl).then(handleResponse);
        
    }

    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }
   
    return (
        <div className="Dictionary">
            <form onSubmit={search}>
                <input type="search" onChange={handleKeywordChange}/>
            </form>
        </div>
         
    );
}