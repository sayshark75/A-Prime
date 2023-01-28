import NavbarComp from "../../Components/NavbarComp";
import Filter from "./Filters";
import CardsContainer from "./CardsContainer";
import CopyrightClaim from "../../Components/CopyrightClaim";

const HomePage = () => {
  return (
    <>
      <NavbarComp type={true} />
      <Filter />
      <CardsContainer />
      <CopyrightClaim />
    </>
  );
};

export default HomePage;
