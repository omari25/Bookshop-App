import { useState } from "react"
import books from "../booksData"

function Books(){
    const [seleted, setSelected] = useState("All")

    function handleFilter(event){
        setSelected(event.target.value)
    }

    const itemsToDisplay = books.filter((book) => {
        if(seleted === "All")return true
        return book.categories === seleted
    })

    return (
        
        <div className="books">
            
            <select className="select-filter" name="filter" onChange={handleFilter}>
                <option value="All">Filter by category</option>
                <option value="Open Source">Open source</option>
                <option value="Java">Java</option>
                <option value="Web Development">Web Development</option>
                <option value="Internet">Internet</option>
                <option value="Miscellaneous">Miscellaneous</option>
                <option value="Microsoft">Microsoft</option>
                <option value="Next Generation Databases">Next Generation Databases</option>
                <option value="PowerBuilder">PowerBuilder</option>
            </select>
            <div className="filtered-div">
                {itemsToDisplay.map((item) => (
                    <div className="one-item" key={item.id}>
                        <img src={item.thumbnailUrl} alt="" />
                        <p>{item.title}</p>
                        <p>{item.price}</p>
                        <p>{`PAGES: ${item.pageCount}`}</p>
                    </div>
                ))}
            </div>
        </div>
    )

}
export default Books