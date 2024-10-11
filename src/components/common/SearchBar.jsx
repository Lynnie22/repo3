import { useState } from "react"

const SearchBar = ({setResults}) => {
    const [input, setInput] = useState("");

    const fetchData = (value) => {
        fetch("https://wger.de/api/v2/exercise/")
        .then((response)=> response.json())
        .then((json)=>{
            const results = json.results.filter((exercise)=>{
                return (
                    exercise &&
                    exercise.name &&
                    exercise.name.toLowerCase().includes(value.toLowerCase())
                );
            });
            setResults(results);
        })
        .catch((error)=> console.error("error fetching data:", error));
    }

    const handleChange = (value) => {
        setInput(value);
        if(value) {
            fetchData(value);
        } else {
            setResults ([]);
        }
    }
  return (
    <div>
      <input 
      type="text"
      value={input}
      placeholder="Search Exercise like '3d lunge warmup' "
      onChange={(e)=> handleChange(e.target.value)}
      className="border-2 border-darkpink w-full rounded-full p-2 text-center" />
    </div>
  );
};

export default SearchBar
