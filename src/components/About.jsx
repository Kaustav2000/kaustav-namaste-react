import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends Component {
  constructor(props) {
    super(props);

    console.log("Parent Constructor");
  }

  async componentDidMount() {
    console.log("Parent Component Did Mount");

    const data = await fetch("https://api.github.com/users/kaustav2000");
    const json = await data.json();

    console.log(json);
  }
  render() {
    console.log("Parent Render");

    return (
      <div>
        <h1>About</h1>
        <h2>This is Namaste React</h2>
        {/* <User name={"Kaustav"} /> */}
        <UserClass name={"Kaustav"} location={"Kolkata"} />
      </div>
    );
  }
}

// const About = () => {
//   return (
//     <div>
//       <h1>About</h1>
//       <h2>This is Namaste React</h2>
//       {/* <User name={"Kaustav"} /> */}
//       <UserClass name={"Kaustav"} location={"Kolkata"} />
//     </div>
//   );
// };

export default About;
