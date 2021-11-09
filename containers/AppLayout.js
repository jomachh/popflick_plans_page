import { NavBar } from "../components/NavBar";

export const AppLayout = ({ children }) => {
  return (
    <div>
      <NavBar />
      {children}
    </div>
  );
};
