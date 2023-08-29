function AboutMe() {
  let myName = {
    firstName: 'Biljana',
    lastName: 'Kotevska',
  };

  let myNumbers = [1, 2, 3, 4, 5, 6, 7];
  return (
    <div>
      <h1 id="main-h1" className="main-paragraphs">
        Hello my name is {myName.firstName}
      </h1>
      <h2>{myNumbers}</h2>
      <img src="./logo192.png" alt="" />
    </div>
  );
}

export default AboutMe;
