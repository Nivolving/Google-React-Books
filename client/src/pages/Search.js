import React, { useState } from "react";
import SearchForm from "../components/SearchForm";
import Results from "../components/Results";

function Search() {

    const [ results, setResult ] = useState([]);

    return (
        <div>
            <SearchForm setResult={setResult} />
            <Results results={results} />
        </div>
    );

}

export default Search;