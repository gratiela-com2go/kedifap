export const GlobalFilter = ({filter, setFilter}) => {
    return (
        <span>
            <input className="bg-gray-200 rounded-2xl shadow-lg p-1" value={filter || ''} onChange={(e) => setFilter(e.target.value)} />
        </span>
    )
}