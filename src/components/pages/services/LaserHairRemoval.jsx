import { Link } from "react-router-dom";
import LaserHairRemovalPic from "../../../assets/images/service-laser-hair.avif";
import LaserDevicePic from "../../../assets/images/laiser-device.avif";

export const LaserHairRemoval = () => {
  const width = window.innerWidth;
  return (
    <div className="py-10 flex flex-col sm:flex-row border-b border-gray-200">
      <Link id="hair-removal"></Link>
      <div className="sm:hidden">
        <h1 className="text-3xl xl:text-4xl 2xl:text-5xl font-bold tracking-tight">
          LASER HAIR REMOVAL
        </h1>
        <h2 className="py-2 text-sm xl:text-base 2xl:text-xl text-gray-600">
          TOP 5 REASONS WHY LASER HAIR REMOVAL IS BECOMING POPULAR
        </h2>
      </div>
      <div className="flex flex-col sm:flex-row">
        <div className="flex flex-row sm:flex-col sm:w-1/3">
          <img
            src={LaserHairRemovalPic}
            className="h-80 sm:flex sm:h-1/2 object-cover"
            alt="laser-hair-removal"
            style={width < 640 ? { width: "49%" } : { width: "100%" }}
          />
          <div className="w-2 h-2"></div>
          <img
            src={LaserDevicePic}
            className="sm:flex sm:h-1/2 object-cover"
            alt="laser-hair-removal"
            style={width < 640 ? { width: "49%" } : { width: "100%" }}
          />
        </div>
        <div className="sm:pl-5 sm:w-2/3">
          <div className="hidden sm:flex flex-col">
            <h1 className="text-3xl xl:text-4xl 2xl:text-5xl font-bold tracking-tight">
              LASER HAIR REMOVAL
            </h1>
            <h2 className="py-2 text-sm xl:text-base 2xl:text-xl text-gray-600">
              TOP 5 REASONS WHY LASER HAIR REMOVAL IS BECOMING POPULAR
            </h2>
          </div>
          <p className="pt-2 text-xs lg:text-sm xl:text-base 2xl:text-xl 2xl:leading-normal 2xl:mt-10 text-justify text-gray-600">
            Body hairs protect the skin from pollution and contagious diseases.
            But, sometimes, they become the cause of skin allergies. Hence, not
            only for aesthetic concerns but also for hygiene reasons, hair
            removal is necessary. When considering hair removal, laser hair
            removal is in high demand. Regarding this, the top 5 factors
            contributing to the popularity are as follows:
          </p>
          <ul className="text-xs lg:text-sm xl:text-base 2xl:text-xl 2xl:leading-normal 2xl:mt-10 text-justify text-gray-600">
            <li className="pt-2">
              1. Ease of Using Laser The convenience of laser hair removal is
              the major factor driving its increase in popularity. The laser
              hair removal method offers pain-free, long-lasting solutions with
              fewer sessions over time than conventional hair removal techniques
              like waxing or shaving. When compared to the more frequent
              maintenance required by traditional hair removal techniques, laser
              hair removal offers long-lasting freedom from unwanted hairs just
              after a few sessions. The process is also reasonably quick and can
              be finished in a short time. As a result, individuals with hectic
              schedules can fit the treatment into their day without taking a
              significant amount of time out of it.
            </li>
            <li className="pt-2">
              2. Long-term Cost Savings Initially, laser hair removal appears
              pricey but is inexpensive in the long term. Conventional hair
              removal techniques demand ongoing upkeep, such as frequent waxing
              or shaving, which can mount up quickly over time. On the other
              side, laser hair removal provides long-term hair removal, so
              eventually, you will require fewer sessions.
            </li>
            <li className="pt-2">
              3. Effectiveness The efficacy of the treatment is an additional
              factor fueling the popularity of laser hair removal. In this
              treatment, laser light penetrates the dermal layer, targets the
              hair follicles, and burns them. As a result, the chances of
              further hair growth are reduced. In other words, the hair won't
              grow back, or if it does, it will be considerably lighter in color
              and a lot thinner. Initially, laser lights destroyed the melanin
              in the hair follicle. Hence it worked effectively on dark hairs.
              But day by day, the technique is getting more advanced, and now,
              with the help of Lumenis Splandor X, the effective removal of all
              types of hair is possible. As a result, the treatment is
              extensively used by a larger population across the globe.
            </li>
            <li className="pt-2">
              4. Less Pain and Discomfort Laser hair removal is a painless
              procedure compared to traditional hair removal techniques. For
              instance, waxing strips yank hairs out from the root.
              Additionally, shaving can be painful, especially if you have
              sensitive skin. Contrarily, laser hair removal causes only a small
              amount of discomfort during the procedure and feels like a
              moderate sunburn. Also, there is no downtime necessary for the
              treatment, allowing you to resume your normal activities right
              away.
            </li>
            <li className="pt-2">
              5. Confidence boost Last but not least, laser hair removal can
              significantly enhance confidence for those who deal with excessive
              hair growth. Many people find it embarrassing when their hair
              grows excessively, especially if it does so on their arms or
              faces, which are highly visible areas. The appearance of hair in
              these regions can be diminished with laser hair removal, enhancing
              people's self-confidence. Also, those who have had laser hair
              removal frequently state that they feel more at ease in their
              skin, which can benefit their overall confidence.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
