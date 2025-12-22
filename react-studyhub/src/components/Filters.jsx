export default function Filters({ filter, setFilter, search, setSearch }) {
  return (
    <div>
      <select value={filter} onChange={(e) => setFilter(e.target.value)}>
        <option value="ALL">Toutes</option>
        <option value="DONE">Terminées</option>
        <option value="TODO">Non terminées</option>
      </select>

      <input
        placeholder="Rechercher..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}
