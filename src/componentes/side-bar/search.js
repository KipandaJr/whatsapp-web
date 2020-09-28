import React from 'react';
import '../../source/css/side-bar/search.css';

function Search(){
    return (
        <div className="search">
            <form>
                <label className="search-field">
                    <i className="fa fa-search"></i>
                    <input type="text" name="searchServices" placeholder="Pesquise ou crie uma conversa"/>
                </label>
            </form>
        </div>
    );
}

export default Search;