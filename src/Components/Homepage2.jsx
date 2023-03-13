import Catlist2 from "./Catlist2";
import Phones from "./Phones";
import phones from "./phonesAcce";
import Navbar from "./Navbar";
import category from "./categorylist";
import Catpics from "./Catpics";
import Images from "./Images";
import items from "./supermarket";
import stationary from "./stationary";
import gaming from "./gaming";
import electronics from "./Elecctronics";
import health from "./health";
import fashion from "./fashion";

function Homepage() {
  return (
    <div>
      <Navbar />
      <Catlist2 categories={category} />
      <Catpics />
      <Images />

      <Phones phones={phones} names="Phones & Accesories" />

      <Phones phones={items} names="Supermarket" />

      <Phones phones={stationary} names="Computing" />

      <Images />
      <Phones phones={gaming} names="Gaming" />

      <Phones phones={electronics} names="Electronics" />

      <Images />
      <Phones phones={health} names="Health" />

      <Phones phones={fashion} names="Fashion" />
    </div>
  );
}

export default Homepage;
