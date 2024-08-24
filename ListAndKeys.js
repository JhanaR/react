const ListAndKeys = (props) => {
  console.log(props);
  const numbers = props.numbers;
  const doubleNumber = numbers.map((number) => <li>{numbers * 2}</li>);
  return <ul>{doubleNumber}</ul>;
};

export default ListAndKeys;
