import { useState } from "react"
import books from "../booksData"

function Search(){
    const [searchTerm, onSearchChange] = useState("")
    function filterOut(){
        books.filter((value) =>{
            if(searchTerm === ""){
                console.log(value)
            } else if (value.title.toLowerCase().includes(searchTerm.toLowerCase())){
                console.log(value)
            }
        })
    }
    return (
        <div className="serch-bar">
            <input
                type="text"
                id="search"
                placeholder="Type a name to search..."
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
            />
            <button onClick={filterOut}>Search</button>
        </div>
    )
}
export default Search