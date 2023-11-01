import MainBody from "./MainBody";
import NavSideBarExhibitions from "./NavSideBarExhibitions";

const Exhibitions = () => {
  return (
    <div className="flex flex-row">
      <NavSideBarExhibitions />
      <MainBody />
    </div>
  );
};

export default Exhibitions;
