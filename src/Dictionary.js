import React, {useState} from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";


export default function Dictionary(props) {
    let [keyword, setKeyword] = useState(props.defaultKeyword);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);
    
   
    function handleResponse(response) {
        setResults(response.data);
    }
   
    function search(){
        //documentation https://www.shecodes.io/learn/apis/dictionary//
        let apiKey = "cf2a3b53726tfaddf4o0d7a1400a5b31";
        let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}&per_page=4`;
        axios.get(apiUrl).then(handleResponse);
    }
   
    function hnadleSubmit(event) {
        event.preventDefault();
        search();
    }

    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }

    function load() {
        setLoaded(true);
        search();
    }
   
    if (loaded) {
         return (
        <div className="Dictionary">
            <section>
                <h1>What word would you like to look up?</h1>
               <form onSubmit={hnadleSubmit}>
                <input type="search" onChange={handleKeywordChange}
                defaultValue={props.defaultKeyword}/>
            </form>
            <div className="hint">
                suggested words: sunset, yoga, cat, fall...
            </div>
            </section>
            <Results results={results}/>  
        </div>
    );
    } else {
        load();
        return "Loading";
    }
}
   