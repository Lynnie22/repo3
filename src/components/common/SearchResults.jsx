
const SearchResults = ({results, onSelectExercise}) => {
  return (
    <div className="w-2/3 bg-white flex flex-col shadow-md rounded-md mt-3 max-h-28 overflow-y-scroll">
      {
        results.map((result, id) => (
            <div key={id}
                onClick={()=>onSelectExercise(result)}
                className="p-2 cursor-pointer hover:bg-gray-200"
                >
                    {result.name}
                </div>
        ))
      }
    </div>
  )
}

export default SearchResults
