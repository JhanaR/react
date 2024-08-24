function ReactList() {
  const Movies = [
    { id: 123, name: "aadhi" },
    { id: 456, name: "Goat" },
    { id: 789, name: "Beast" },
  ];
  return (
    <ul>
      {Movies.map((data) => (
        <li key={data.id}>{data.name}</li>
      ))}
    </ul>
  );
}

export default ReactList;
