import { Link } from "react-router-dom";
import { useState } from "react";

import Img1 from "../../../assets/images/Hydrofacial-page.avif";
import Scaffold from "../../scaffold/Scaffold";

export const Facial = () => {
  const [isImg1Loaded, setIsImg1Loaded] = useState(false);

  return (
    <Scaffold>
      <article className="flex flex-col items-center justify-center leading-tight">
        <section className="h-screen flex flex-col sm:flex-row justify-between items-center">
          <div className="bg-hydro-facial xs:w-full h-full sm:w-1/2 bg-cover bg-center bg-no-repeat">
            <img
              className={`${
                isImg1Loaded ? "opacity-100" : "opacity-0"
              } relative h-full w-full object-cover object-center transition-opacity`}
              onLoad={() => setIsImg1Loaded(true)}
              loading="eager"
              alt="derma"
              src={Img1}
            />
          </div>
          <div
            className={`absolute sm:relative bottom-5 flex flex-col justify-start sm:justify-center items-center xs:px-5 sm:p-5 sm:w-1/2 sm:h-full tracking-tight text-center`}
          >
            <h1 className="text-xl xl:text-4xl 2xl:text-5xl font-bold xs:text-white sm:text-black">
              HYDRA FACIAL
            </h1>
            <h2 className="text-xs xl:text-base 2xl:text-xl font-bold xs:text-white sm:text-black">
              HYDRAFACIAL VS. TRADITIONAL FACIALS: WHICH IS BETTER FOR YOU?
            </h2>

            <p className="pt-2 text-center text-xs lg:text-sm xl:text-base 2xl:text-xl 2xl:leading-normal xs:text-white sm:text-black">
              No matter how young or old you are, getting a facial is a
              wonderful way to stay on top of skin issues while keeping your
              skin looking refreshed and glowing. Facials provide a more
              youthful and hydrated complexion.
            </p>
            <Link
              to="https://book.squareup.com/appointments/zt4ca7luehw7ut/location/LZR19TJKEN977/services/42ZWJ7CT3XVFPGFN2OVCGUJX"
              target="_blank"
              id="book-now"
            >
              <div className="flex flex-row justify-center items-center gap-2 py-2 px-4 xs:mt-2 sm:mt-5 text-center bg-black text-white 2xl:text-4xl xl:text-2xl text-base font-bold rounded-full hover:ring-2 hover:ring-blue-500">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="size-5"
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
        <section className="h-screen w-screen flex flex-col justify-center items-center px-3 bg-black text-white text-justify">
          <div className="max-w-96">
            <p className="text-xs lg:text-sm xl:text-base 2xl:text-xl 2xl:leading-normal 2xl:mt-10 text-justify">
              But many of the fans of facials today are confused after getting
              introduced to a newly popular member of the facial family –
              Hydrafacial. Hydrafacial is giving traditional facials a lot of
              competition and has become popular at a rapid pace.
            </p>
            <p className="pt-2 text-xs lg:text-sm xl:text-base 2xl:text-xl 2xl:leading-normal 2xl:mt-10 text-justify">
              But is it really worth the hype? Choosing the best type of facials
              that best suits you can be challenging and the biggest question
              floating in everyone’s mind is, “Which is better, Facial or
              Hydrafacial?”
            </p>
            <p className="pt-2 text-xs lg:text-sm xl:text-base 2xl:text-xl 2xl:leading-normal 2xl:mt-10 text-justify">
              If you are thinking of the same, this blog is for you. Scroll
              ahead to explore all about regular facials and Hydrafacial, their
              benefits, and their biggest differences so you can decide which
              one is better for you.
            </p>
          </div>
        </section>
        <section className="bg-white-bg h-screen w-screen flex flex-col justify-center items-center bg-cover bg-no-repeat text-justify">
          <div className="max-w-96 px-3">
            <h2 className="pt-10 w-full font-bold text-start text-black text-xl 2xl:text-2xl">
              What is Hydrafacial?
            </h2>
            <p className="pt-2 text-xs lg:text-sm xl:text-base 2xl:text-xl 2xl:leading-normal 2xl:mt-10 text-justify text-gray-600">
              Hydrafacial is a result-driven facial treatment that combines the
              benefits of the latest technology.
            </p>
            <p className="pt-2 text-xs lg:text-sm xl:text-base 2xl:text-xl 2xl:leading-normal 2xl:mt-10 text-justify text-gray-600">
              It is a type of advanced skin treatment known as hydra
              dermabrasion and uses various microdermabrasion consisting of skin
              exfoliation and hydration with serums.
            </p>
            <p className="pt-2 text-xs lg:text-sm xl:text-base 2xl:text-xl 2xl:leading-normal 2xl:mt-10 text-justify text-gray-600">
              The treatment works by removing all the makeup, oil, and dirt from
              the deepest layer of the skin.
            </p>
          </div>
        </section>
        <section className="h-screen w-screen flex flex-col justify-center items-center bg-black text-white">
          <div className="p-3 max-w-96">
            <h2 className="font-bold text-start text-xl 2xl:text-2xl">
              How does Hydrafacial Work?
            </h2>
            <p className="pt-2 text-xs lg:text-sm xl:text-base 2xl:text-xl 2xl:leading-normal 2xl:mt-10 text-justify">
              Hydrafacial is generally a three-step treatment. First, the
              trained aesthetician or dermatologist cleanses your skin and
              exfoliates it.
            </p>
            <p className="pt-2 text-xs lg:text-sm xl:text-base 2xl:text-xl 2xl:leading-normal 2xl:mt-10 text-justify">
              Once the pores are clear, the aesthetician infuses hydrating
              serums into your skin to make your skin glowing, hydrated, and
              protected.
            </p>
            <p className="pt-2 text-xs lg:text-sm xl:text-base 2xl:text-xl 2xl:leading-normal 2xl:mt-10 text-justify">
              Lastly, the advanced device is used to replenish your face with
              rejuvenating methods. This involves the addition of protective
              serums, that will protect your pores from attracting dirt and
              other impurities after the procedure.
            </p>
            <p className="pt-2 text-xs lg:text-sm xl:text-base 2xl:text-xl 2xl:leading-normal 2xl:mt-10 text-justify">
              Hydrafacial provides instantaneous and long-term results in
              comparison to regular facials. Moreover, Hydrafacial helps address
              various skincare issues, such as:
            </p>
            <ul className="pt-3 pl-3 text-xs lg:text-sm xl:text-base 2xl:text-xl 2xl:leading-normal 2xl:mt-10 text-justify list-disc">
              <li>Elasticity + Firmness</li>
              <li>Brown spots and even tone</li>
              <li>Skin texture</li>
              <li>Acne</li>
              <li>Fine lines and wrinkles</li>
              <li>Large Pores</li>
              <li>Rosacea and sensitive skin</li>
              <li>An oily and congested skin</li>
            </ul>
          </div>
        </section>
        <section className="bg-white-bg w-screen h-screen bg-cover bg-no-repeat flex flex-col justify-center items-center">
          <div className="max-w-96 px-3">
            <h2 className="pt-10 font-bold text-start text-black text-xl 2xl:text-2xl">
              What are Traditional Facials?
            </h2>
            <p className="pt-2 text-xs lg:text-sm xl:text-base 2xl:text-xl 2xl:leading-normal 2xl:mt-10 text-justify text-gray-600">
              Regular facials are facials commonly performed at beauty salons.
              It can also be done at home by buying a facial kit or mask.
            </p>
            <p className="pt-2 text-xs lg:text-sm xl:text-base 2xl:text-xl 2xl:leading-normal 2xl:mt-10 text-justify text-gray-600">
              Facial is a multi-step manual therapy process that helps skin look
              better by making it brighter and smoother. The process involves
              face cleansing with creams, skin exfoliation with scrubs, and
              peel-off masks.
            </p>
            <p className="pt-2 text-xs lg:text-sm xl:text-base 2xl:text-xl 2xl:leading-normal 2xl:mt-10 text-justify text-gray-600">
              There are various types of facials available in the market for
              specific skin conditions and concerns. Regular facials help regain
              skin nourishment lost due to daily exposure to sun, pollution,
              dust, and impurities.
            </p>
            <p className="pt-2 text-xs lg:text-sm xl:text-base 2xl:text-xl 2xl:leading-normal 2xl:mt-10 text-justify text-gray-600">
              Various personalized facial treatments are also performed to
              promote blood flow circulation, and collagen production. Regular
              facials help address various skin health issues, such as:
            </p>
            <ul className="pt-3 pl-3 text-xs lg:text-sm xl:text-base 2xl:text-xl 2xl:leading-normal 2xl:mt-10 text-justify text-gray-600 list-disc">
              <li>Blackheads</li>
              <li>Acne</li>
              <li>Large pores</li>
              <li>Rough textures</li>
              <li>Wrinkles</li>
              <li>Dullness</li>
            </ul>
          </div>
        </section>
        <section className="min-h-screen w-screen flex flex-col justify-center items-center bg-black text-white border-b border-gray-900">
          <div className="max-w-96 px-3">
            <h2 className="font-bold text-start text-white text-xl 2xl:text-2xl">
              What are the Benefits of Hydrafacial?
            </h2>
            <div className="pt-4">
              <h3>Gentle On Skin:</h3>
              <p className="pt-2 text-xs lg:text-sm xl:text-base 2xl:text-xl 2xl:leading-normal 2xl:mt-10 text-justify">
                Unlike traditional facials, Hydrafacial treatment provides a
                gentle cleansing and rejuvenating experience, as well as does
                not cause any abrasions.
              </p>
            </div>
            <div className="pt-4">
              <h3>Deeply Hydrates:</h3>
              <p className="pt-2 text-xs lg:text-sm xl:text-base 2xl:text-xl 2xl:leading-normal 2xl:mt-10 text-justify">
                Hydrafacial deeply hydrates your skin by infusing hydrating
                serums and keeping it moisturized. The treatment makes skin feel
                softer, smooth, and glowing.
              </p>
            </div>
            <div className="pt-4">
              <h3>Tightens Skin:</h3>
              <p className="pt-2 text-xs lg:text-sm xl:text-base 2xl:text-xl 2xl:leading-normal 2xl:mt-10 text-justify">
                Hydrafacial restores your skin’s firmness and makes it tight,
                which prevents the collection of dirt in the pores.
              </p>
            </div>
            <div className="pt-4">
              <h3>Suitable For All Skin Types:</h3>
              <p className="pt-2 text-xs lg:text-sm xl:text-base 2xl:text-xl 2xl:leading-normal 2xl:mt-10 text-justify">
                The most loved benefit of Hydrafacial is that it is suitable for
                all skin types and tones. It doesn’t cause any side effects or
                pain to any skin tone or type undergoing the treatment.
              </p>
            </div>
          </div>
        </section>
        <section className="bg-white-bg w-screen min-h-screen bg-cover bg-no-repeat flex flex-col justify-center items-center">
          <div className="max-w-96 px-3">
            <div>
              <h3>Long-Lasting Results:</h3>
              <p className="pt-2 text-xs lg:text-sm xl:text-base 2xl:text-xl 2xl:leading-normal 2xl:mt-10 text-justify">
                Hydrafacial provides instant and long-lasting results that can
                last up to 4-6 weeks.
              </p>
            </div>
            <div className="pt-4">
              <h3>Customizable:</h3>
              <p className="pt-2 text-xs lg:text-sm xl:text-base 2xl:text-xl 2xl:leading-normal 2xl:mt-10 text-justify">
                This advanced facial treatment can be easily customized
                according to your skin type, tone, and texture. Customizing your
                treatment makes it safer and more effective.
              </p>
            </div>
            <div className="pt-4">
              <h3>No Downtime:</h3>
              <p className="pt-2 text-xs lg:text-sm xl:text-base 2xl:text-xl 2xl:leading-normal 2xl:mt-10 text-justify">
                Another significant advantage of Hydrafacials is there is no
                downtime and no discomfort or irritation in getting the
                treatment.
              </p>
            </div>
            <div className="pt-4">
              <h3>Heals Your Skin:</h3>
              <p className="pt-2 text-xs lg:text-sm xl:text-base 2xl:text-xl 2xl:leading-normal 2xl:mt-10 text-justify">
                Hydrafacial doesn’t only give an instant glow but is also
                effective in addressing various skin conditions.
              </p>
            </div>
          </div>
        </section>
        <section className="min-h-screen w-screen flex justify-center items-center bg-black text-white border-b border-gray-900">
          <div className="max-w-96 px-3">
            <h2 className="pt-10 font-bold text-start text-white text-xl 2xl:text-2xl">
              Which is better, Regular Facials or Hydrafacial?
            </h2>
            <p className="pt-2 text-xs lg:text-sm xl:text-base 2xl:text-xl 2xl:leading-normal 2xl:mt-10 text-justify">
              Hydrafacial is a facial treatment where a state-of-the-art device
              is used to deeply cleanse the skin and provide instant glowing
              skin, whereas regular facials are traditional methods of treating
              skin for maintaining skin health.
            </p>
            <p className="pt-2 text-xs lg:text-sm xl:text-base 2xl:text-xl 2xl:leading-normal 2xl:mt-10 text-justify">
              If we talk about the results, Hydrafacials are more instant and
              long-lasting than traditional facials. Sometimes the results of
              regular facials are not even worth the money, but Hydrafacial
              provides more satisfactory results. It rejuvenates the skin
              without causing any pain.
            </p>
            <p className="pt-2 text-xs lg:text-sm xl:text-base 2xl:text-xl 2xl:leading-normal 2xl:mt-10 text-justify">
              Moreover, Hydrafacial customizes treatment according to individual
              skin concerns, which makes it safe and effective without any side
              effects. In contrast, products used in regular facials might
              contain chemicals that might cause side effects and worsen certain
              skin concerns like acne, pimples, and rosacea.
            </p>
            <p className="pt-2 text-xs lg:text-sm xl:text-base 2xl:text-xl 2xl:leading-normal 2xl:mt-10 text-justify">
              Hydrafacial is also the most preferred choice for pregnant women,
              as they should not undergo chemical procedures that might cause
              harm to the baby.
            </p>
          </div>
        </section>
        <section className="bg-white-bg w-screen min-h-screen bg-cover bg-no-repeat flex flex-col justify-center items-center">
          <div className="max-w-96 px-3">
            <h2 className="pt-5 pb-2 font-bold text-start text-black text-xl 2xl:text-2xl">
              Over to You
            </h2>
            <h3 className="text-start">
              After knowing all these details, which facial treatment do you
              find the best?
            </h3>
            <p className="pt-2 text-xs lg:text-sm xl:text-base 2xl:text-xl 2xl:leading-normal 2xl:mt-10 text-justify text-gray-600">
              There’s no doubt that discovering the best facial is quite a
              chore. To help you out, we’ve listed above every detail related to
              both regular facials and Hydrafacial to make it easy to choose the
              best one.
            </p>
            <p className="pt-2 text-xs lg:text-sm xl:text-base 2xl:text-xl 2xl:leading-normal 2xl:mt-10 text-justify text-gray-600">
              After looking at the above benefits and results, if you find
              Hydrafacial a clear winner, it’s time to book one at Glisten
              Wellness.
            </p>
          </div>
        </section>
      </article>
    </Scaffold>
  );
};
