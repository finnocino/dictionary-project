import React, {useState} from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";


export default function Dictionary() {
    let [keyword, setKeyword] = useState("");
    let [results, setResults] = useState(null);
    
   
    function handleResponse(response) {
        setResults(response.data);
    }
   
   
    function search(event) {
        event.preventDefault();

        //documentation https://www.shecodes.io/learn/apis/dictionary//
        let apiKey = "cf2a3b53726tfaddf4o0d7a1400a5b31";
        let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}&per_page=4`;
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
            <Results results={results}/>
        </div>
         
    );
}