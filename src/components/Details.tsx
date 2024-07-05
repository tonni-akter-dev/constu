import DetailsLeft from "./DetailsLeft";
import DetailsRight from "./DetailsRight";

const Details = () => {
  return (
    <section id="details" className="py-[160px] bg-clr_18">
      <div className="container">
        <div className="flex flex-wrap lg:grid lg:grid-cols-12 gap-14">
          <div className="col-span-12 lg:col-span-6">
            <DetailsLeft />
          </div>
          <div className="col-span-12 lg:col-span-6">
            <DetailsRight />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Details;
