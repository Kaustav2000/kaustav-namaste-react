import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

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
        <div className="">
          Loggedin User:
          <UserContext.Consumer>
            {(data) => <h1> {data.loggedInUser}</h1>}
          </UserContext.Consumer>
        </div>
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
