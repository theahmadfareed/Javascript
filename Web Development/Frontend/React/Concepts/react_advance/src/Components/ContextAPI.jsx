import { createContext, useContext, useState } from "react";
import "tachyons";

const UserContext = createContext(undefined);

const UserProvider = ({ children }) => {
  const [user] = useState({
    name: "Ali",
    email: "Ali@gmail.com",
    dob: "27/07/1994",
  });
  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
};

const useUser = () => useContext(UserContext);

const LoggedInUser = () => {
  const { user } = useUser();
  return (
    <p>
      Hello <span>{user.name}</span>
    </p>
  );
};

const Header = () => {
  return (
    <header>
      <h5>Blog App</h5>
      <LoggedInUser />
    </header>
  );
};

const Page = () => {
  const { user } = useUser();
  return (
    <div>
      <h5>What is Lorem ipsum</h5>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
        fugiat repellat neque doloribus ex, ullam, labore harum id debitis magni
        numquam quasi, quaerat qui deleniti consectetur commodi illo obcaecati
        alias aliquid molestiae eum animi explicabo nam. Fuga, doloremque.
        Aliquam totam quis velit, beatae doloremque repudiandae quasi
        exercitationem est temporibus obcaecati?
      </p>
      <p>Written by {user.name}</p>
    </div>
  );
};

function Root() {
  return (
    <div className="App">
      <Header />
      <Page />
    </div>
  );
}

function ContextAPI() {
  return (
    <UserProvider>
      <div className="bg-light-purple">
        <h1>ContextAPI</h1>
        <Root />
      </div>
    </UserProvider>
  );
}

export default ContextAPI;
