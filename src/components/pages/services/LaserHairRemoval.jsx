import { Link } from "react-router-dom";
import { useState } from "react";

import Img1 from "../../../assets/images/hair-removal-page.avif";
import Scaffold from "../../scaffold/Scaffold";

const LaserHairRemoval = () => {
  const [isImg1Loaded, setIsImg1Loaded] = useState(false);

  return (
    <Scaffold>
      <article className="leading-tight">
        <section className="h-screen flex flex-col sm:flex-row justify-between items-center">
          <div className="bg-hair-removal-page xs:w-full h-full sm:w-1/2 bg-cover bg-center bg-no-repeat">
            <img
              className={`${isImg1Loaded ? "opacity-100" : "opacity-0"
                } relative h-full w-full object-cover object-center transition-opacity`}
              onLoad={() => setIsImg1Loaded(true)}
              loading="eager"
              alt="derma"
              src={Img1}
            />
          </div>
          <div
            className={`absolute sm:relative bottom-5 flex flex-col justify-start sm:justify-center items-center xs:px-5 px-3 sm:w-1/2 sm:h-full tracking-tight text-center`}
          >
            <h1 className="text-xl xl:text-4xl font-bold xs:text-white sm:text-black">
              LASER HAIR REMOVAL
            </h1>
            <h2 className="text-xs xl:text-base font-bold xs:text-white sm:text-black">
              TOP 5 REASONS WHY LASER HAIR REMOVAL IS BECOMING POPULAR
            </h2>

            <p className="pt-2 text-center text-xs 2xl:text-sm xl:leading-normal xs:text-white sm:text-black"
              style={{ width: "80%" }}>
              Body hairs protect the skin from pollution and contagious
              diseases. But, sometimes, they become the cause of skin allergies.
              Hence, not only for aesthetic concerns but also for hygiene
              reasons, hair removal is necessary. When considering hair removal,
              laser hair removal is in high demand.
            </p>
            <Link
              to="https://book.squareup.com/appointments/zt4ca7luehw7ut/location/LZR19TJKEN977/services/"
              target="_blank"
              id="book-now"
            >
              <div className="flex flex-row justify-center items-center gap-2 py-2 px-4 xs:mt-2 sm:mt-5 text-center bg-black text-white text-base 2xl:text-xl font-bold rounded-full hover:ring-2 hover:ring-blue-500">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="size-3 lg:size-4 xl:size-5"
                    strokeWidth={4}
                    fill="none"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                </span>
                <span>Book Now</span>
              </div>
            </Link>
          </div>
        </section>
        <section className="bg-white-bg h-screen flex justify-center items-center bg-cover bg-no-repeat">
          <div className="max-w-96 px-3">
            <h1 className="font-bold text-sm">
              Regarding this, the top 5 factors contributing to the popularity
              are as follows:
            </h1>
            <p className="pt-2 text-sm">
              <span className="font-bold">1. </span>
              Ease of Using Laser The
              convenience of laser hair removal is the major factor driving
              its increase in popularity.

            </p>
            <p className="pt-2 text-sm">
              The laser hair removal method offers pain-free, long-lasting
              solutions with fewer sessions over time than conventional hair
              removal techniques like waxing or shaving.
            </p>
            <p className="pt-2 text-sm">
              When compared to the more frequent maintenance required by
              traditional hair removal techniques, laser hair removal offers
              long-lasting freedom from unwanted hairs just after a few
              sessions.
            </p>
            <p className="pt-2 text-sm">
              The process is also reasonably quick and can be finished in a
              short time. As a result, individuals with hectic schedules can
              fit the treatment into their day without taking a significant
              amount of time out of it.
            </p>
          </div>
        </section>
        <section className="h-screen flex flex-col justify-center items-center text-sm px-3 bg-black text-white">
          <p className="max-w-96 px-3">
            <span className="font-bold">2. </span> Long-term Cost Savings
            Initially, laser hair removal appears pricey but is inexpensive in
            the long term.
          </p>
          <p className="pt-2 max-w-96 px-3">
            Conventional hair removal techniques demand ongoing upkeep, such
            as frequent waxing or shaving, which can mount up quickly over
            time.
          </p>
          <p className="pt-2 max-w-96 px-3">
            On the other side, laser hair removal provides long-term hair
            removal, so eventually, you will require fewer sessions.
          </p>
        </section>
        <section className="flex flex-col bg-white-bg bg-cover bg-no-repeat h-screen justify-center items-center text-sm">
          <p className="px-3 max-w-96">
            <span className="font-bold">3. </span> Effectiveness The efficacy
            of the treatment is an additional factor fueling the popularity of
            laser hair removal. In this treatment, laser light penetrates the
            dermal layer, targets the hair follicles, and burns them.
          </p>
          <p className="pt-2 px-3 max-w-96">
            As a result, the chances of further hair growth are reduced. In
            other words, the hair won't grow back, or if it does, it will be
            considerably lighter in color and a lot thinner. Initially, laser
            lights destroyed the melanin in the hair follicle.
          </p>
          <p className="pt-2 px-3 max-w-96">
            Hence it worked effectively on dark hairs. But day by day, the
            technique is getting more advanced, and now, with the help of
            Lumenis Splandor X, the effective removal of all types of hair is
            possible. As a result, the treatment is extensively used by a
            larger population across the globe.
          </p>
        </section>
        <section className="h-screen flex flex-col items-center justify-center bg-black text-white text-sm">
          <p className="max-w-96 px-3">
            <span className="font-bold">4. </span> Less Pain and Discomfort
            Laser hair removal is a painless procedure compared to traditional
            hair removal techniques. For instance, waxing strips yank hairs
            out from the root.
          </p>
          <p className="pt-2 max-w-96 px-3">
            Additionally, shaving can be painful, especially if you have
            sensitive skin. Contrarily, laser hair removal causes only a small
            amount of discomfort during the procedure and feels like a
            moderate sunburn. Also, there is no downtime necessary for the
            treatment, allowing you to resume your normal activities right
            away.
          </p>
          <p className="pt-2 max-w-96 px-3">
            Also, there is no downtime necessary for the treatment, allowing
            you to resume your normal activities right away.
          </p>
        </section>
        <section className="bg-white-bg bg-cover bg-no-repeat h-screen flex flex-col justify-center items-center text-sm">
          <p className="max-w-96 px-3">
            <span className="font-bold">5. </span> Confidence boost Last but
            not least, laser hair removal can significantly enhance confidence
            for those who deal with excessive hair growth.
          </p>
          <p className="pt-2 max-w-96 px-3">
            Many people find it embarrassing when their hair grows
            excessively, especially if it does so on their arms or faces,
            which are highly visible areas. The appearance of hair in these
            regions can be diminished with laser hair removal, enhancing
            people's self-confidence. Also, those who have had laser hair
            removal frequently state that they feel more at ease in their
            skin, which can benefit their overall confidence.
          </p>
          <p className="pt-2 max-w-96 px-3">
            Also, those who have had laser hair removal frequently state that
            they feel more at ease in their skin, which can benefit their
            overall confidence.
          </p>
        </section>
      </article>
    </Scaffold>
  );
};

export default LaserHairRemoval;
