function Greeting(props) {
  const { name, course } = props;
  return (
    <div>
      <h2>Hello {name}</h2>
      <h3>Is enrolled in {course}</h3>
    </div>
  );
}

export default Greeting;
