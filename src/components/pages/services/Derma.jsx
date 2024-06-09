import { Link } from "react-router-dom";
import MicroNeedle from "../../../assets/images/microneedling-darauf-solltest-du-achten.webp";
import Scaffold from "../../scaffold/Scaffold";

export const Derma = () => (
  <Scaffold>
    <article className="text-justify py-10 leading-tight border-b border-gray-200">
      <div className="flex flex-row ">
        <div className="pr-5 w-2/3 text-xs lg:text-sm xl:text-base 2xl:text-xl 2xl:leading-normal 2xl:mt-10 text-justify text-gray-600">
          <div className=" text-start">
            <Link id="derma-frac"></Link>
            <h1 className="text-3xl xl:text-4xl 2xl:text-5xl font-bold tracking-tight text-black">
              DERMAFRAC MICRO CHANNELING
            </h1>
            <h2 className="py-2 text-sm xl:text-base 2xl:text-xl text-gray-600">
              MICRO-NEEDLING WITH THE DERMAFRAC SYSTEM
            </h2>
          </div>
          <p className="pt-2">
            Micro-needling is rapidly becoming one of the most popular
            techniques used to smooth out rough, brittle, or wrinkled skin. As
            we age, our skin holds less moisture and is subject to folding and
            creasing because of the effects of gravity.
          </p>
          <p className="pt-2">
            Pore size tends to increase, and any discolorations such as injury
            scars or freckles become more noticeable. Micro-needling involves
            the creation of tiny controlled wounds. As these microchannels heal,
            the body replaces old tissue with healthier cells.
          </p>
          <p className="pt-2">
            The DermaFrac system is unique in that it not only creates channels
            in the skin, but it also delivers nutrients and performs a
            crystal-free microdermabrasion. We highly recommend this all-in-one
            treatment for those who show signs of aging skin on the face.
          </p>
          <p className="pt-2">
            About Micro-Needling The idea behind this treatment is that
            controlled wounds will heal over with new, healthier tissue. The
            channels created by the multitude of tiny micro-needles kick starts
            a recovery process. The nutrients in blood platelets and the healthy
            tissue that lies between the individual punctures stimulate the
            creation of new skin tissue. Collagen production also increases.
          </p>
          <p className="pt-2">
            The DermaFrac system is a newer technique that involves using a
            specialized instrument containing a delivery mechanism for nutrient
            introduction. The pen-style wand with the tiny needles at one end
            makes small punctures in the skin, usually to a depth of about two
            millimeters. The actual depth of the puncture is determined by
            closely examining the thickness of the skin. For maximum efficiency,
            the punctures should only be as deep as the dermal-epidermal
            junction.
          </p>
        </div>
        <img
          src={MicroNeedle}
          alt="micro-niddle"
          className="w-1/3 object-cover object-center"
        />
      </div>
      <div>
        <h2 className="pt-10 font-bold text-start text-black text-xl 2xl:text-2xl">
          How the Procedure is Performed?
        </h2>
        <div className="text-xs lg:text-sm xl:text-base 2xl:text-xl 2xl:leading-normal 2xl:mt-10 text-justify text-gray-600">
          <p className="pt-2">
            We first examine the areas of concern and note the depth of any
            discolorations, the thickness of the epidermis, and the amount of
            wrinkling. We then use the handheld pen device to create the channel
            wounds. Next, we introduce peptides and other nutritional agents
            directly into the wounds.
          </p>
          <p className="pt-2">
            The instrument also has a strong, broad-spectrum, light-emitting
            bulb that gently heats up the subdermal tissues without causing
            damage to the skin itself. This is similar to intense pulsed light
            therapy.
          </p>
          <p className="pt-2">
            A typical treatment session usually takes only about an hour.
            Recovery time is practically nonexistent, meaning that the client
            can resume normal activities on the same day.
          </p>
          <p className="pt-2">
            Advantages of the DermaFrac System Most abrasive resurfacing
            procedures treat only the epidermis. Deeper scars and other
            discolorations remain. Plumping and filling compounds do not address
            the problem of unhealthy skin cells, nor do they stimulate collagen
            production.
          </p>
          <p className="pt-2">
            The DermaFrac system is a complete cleaning, exfoliation, and tissue
            regeneration procedure. It is an outpatient procedure that requires
            no surgery or overnight hospital stay. The effects of the procedure
            are almost immediate, but as is the case with any type of skin
            needling, the growth of healthy skin tissue continues for several
            months. This is another advantage of the DermaFrac system over most
            other forms of skin rejuvenation.
          </p>
        </div>
      </div>
    </article>
  </Scaffold>
);
