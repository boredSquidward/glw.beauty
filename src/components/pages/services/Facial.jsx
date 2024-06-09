import { Link } from "react-router-dom";
import HydraFacialOne from "../../../assets/images/shutterstock_1932957878.avif";
import HydraFacialTwo from "../../../assets/images/U9A8255-4_1.avif";
import HydraFacialThree from "../../../assets/images/Hydrafacial-Orion-10-scaled.avif";
import Scaffold from "../../scaffold/Scaffold";

export const Facial = () => (
  <Scaffold>
    <article className="py-10 leading-tight text-justify">
      <div className="flex sm:flex-row">
        <div className="w-1/3">
          <img
            src={HydraFacialOne}
            alt="hydra-facial-1"
            className="h-full object-cover object-center"
          />
        </div>
        <div className="w-2/3 pl-5">
          <div className="text-start">
            <Link id="hydra-facial"></Link>
            <h1 className="text-3xl xl:text-4xl 2xl:text-5xl font-bold tracking-tight text-black">
              HYDRA FACIAL
            </h1>
            <h2 className="py-2 text-sm xl:text-base 2xl:text-xl text-gray-600">
              HYDRAFACIAL VS. TRADITIONAL FACIALS: WHICH IS BETTER FOR YOU?
            </h2>
          </div>
          <p className="text-xs lg:text-sm xl:text-base 2xl:text-xl 2xl:leading-normal 2xl:mt-10 text-justify text-gray-600">
            No matter how young or old you are, getting a facial is a wonderful
            way to stay on top of skin issues while keeping your skin looking
            refreshed and glowing. Facials provide a more youthful and hydrated
            complexion. <br />
            But many of the fans of facials today are confused after getting
            introduced to a newly popular member of the facial family –
            Hydrafacial. Hydrafacial is giving traditional facials a lot of
            competition and has become popular at a rapid pace. <br />
            But is it really worth the hype? Choosing the best type of facials
            that best suits you can be challenging and the biggest question
            floating in everyone’s mind is, “Which is better, Facial or
            Hydrafacial?”
            <br />
            If you are thinking of the same, this blog is for you. Scroll ahead
            to explore all about regular facials and Hydrafacial, their
            benefits, and their biggest differences so you can decide which one
            is better for you.
          </p>
          <h2 className="pt-10 font-bold text-start text-black text-xl 2xl:text-2xl">
            What is Hydrafacial?
          </h2>
          <p className="pt-2 text-xs lg:text-sm xl:text-base 2xl:text-xl 2xl:leading-normal 2xl:mt-10 text-justify text-gray-600">
            Hydrafacial is a result-driven facial treatment that combines the
            benefits of the latest technology. It is a type of advanced skin
            treatment known as hydra dermabrasion and uses various
            microdermabrasion consisting of skin exfoliation and hydration with
            serums. The treatment works by removing all the makeup, oil, and
            dirt from the deepest layer of the skin.
          </p>
        </div>
      </div>
      <div>
        <h2 className="pt-10 font-bold text-start text-black text-xl 2xl:text-2xl">
          How does Hydrafacial Work?
        </h2>
        <p className="pt-2 text-xs lg:text-sm xl:text-base 2xl:text-xl 2xl:leading-normal 2xl:mt-10 text-justify text-gray-600">
          Hydrafacial is generally a three-step treatment. First, the trained
          aesthetician or dermatologist cleanses your skin and exfoliates it.
          Once the pores are clear, the aesthetician infuses hydrating serums
          into your skin to make your skin glowing, hydrated, and protected.
          Lastly, the advanced device is used to replenish your face with
          rejuvenating methods. This involves the addition of protective serums,
          that will protect your pores from attracting dirt and other impurities
          after the procedure. Hydrafacial provides instantaneous and long-term
          results in comparison to regular facials. Moreover, Hydrafacial helps
          address various skincare issues, such as:
          <ul className="pt-5 pl-3 list-disc">
            <li>Elasticity + Firmness</li>
            <li>Brown spots and even tone</li>
            <li>Skin texture</li>
            <li>Acne</li>
            <li>Fine lines and wrinkles</li>
            <li>Large Pores</li>
            <li>Rosacea and sensitive skin</li>
            <li>An oily and congested skin</li>
          </ul>
        </p>
        <h2 className="pt-10 font-bold text-start text-black text-xl 2xl:text-2xl">
          What are Traditional Facials?
        </h2>
        <p className="pt-2 text-xs lg:text-sm xl:text-base 2xl:text-xl 2xl:leading-normal 2xl:mt-10 text-justify text-gray-600">
          Regular facials are facials commonly performed at beauty salons. It
          can also be done at home by buying a facial kit or mask. <br />
          Facial is a multi-step manual therapy process that helps skin look
          better by making it brighter and smoother. The process involves face
          cleansing with creams, skin exfoliation with scrubs, and peel-off
          masks. <br />
          There are various types of facials available in the market for
          specific skin conditions and concerns. Regular facials help regain
          skin nourishment lost due to daily exposure to sun, pollution, dust,
          and impurities. <br />
          Various personalized facial treatments are also performed to promote
          blood flow circulation, and collagen production.
          <br />
          Regular facials help address various skin health issues, such as:
          <ul className="pt-5 pl-3 list-disc">
            <li>Blackheads</li>
            <li>Acne</li>
            <li>Large pores</li>
            <li>Rough textures</li>
            <li>Wrinkles</li>
            <li>Dullness</li>
          </ul>
        </p>
      </div>
      <div className="flex sm:flex-row pt-10">
        <div className="w-2/3 pr-5">
          <h2 className="font-bold text-start text-black text-xl 2xl:text-2xl">
            What are the Benefits of Hydrafacial?
          </h2>
          <div className="pt-2">
            <h3>Gentle On Skin:</h3>
            <p className="pt-1 text-xs lg:text-sm xl:text-base 2xl:text-xl 2xl:leading-normal 2xl:mt-10 text-justify text-gray-600">
              Unlike traditional facials, Hydrafacial treatment provides a
              gentle cleansing and rejuvenating experience, as well as does not
              cause any abrasions.
            </p>
          </div>
          <div className="pt-5">
            <h3>Deeply Hydrates:</h3>
            <p className="pt-1 text-xs lg:text-sm xl:text-base 2xl:text-xl 2xl:leading-normal 2xl:mt-10 text-justify text-gray-600">
              Hydrafacial deeply hydrates your skin by infusing hydrating serums
              and keeping it moisturized. The treatment makes skin feel softer,
              smooth, and glowing.
            </p>
          </div>
          <div className="pt-5">
            <h3>Tightens Skin:</h3>
            <p className="pt-1 text-xs lg:text-sm xl:text-base 2xl:text-xl 2xl:leading-normal 2xl:mt-10 text-justify text-gray-600">
              Hydrafacial restores your skin’s firmness and makes it tight,
              which prevents the collection of dirt in the pores.
            </p>
          </div>
          <div className="pt-5">
            <h3>Suitable For All Skin Types:</h3>
            <p className="pt-1 text-xs lg:text-sm xl:text-base 2xl:text-xl 2xl:leading-normal 2xl:mt-10 text-justify text-gray-600">
              The most loved benefit of Hydrafacial is that it is suitable for
              all skin types and tones. It doesn’t cause any side effects or
              pain to any skin tone or type undergoing the treatment.
            </p>
          </div>
          <div className="pt-5">
            <h3>Long-Lasting Results:</h3>
            <p className="pt-1 text-xs lg:text-sm xl:text-base 2xl:text-xl 2xl:leading-normal 2xl:mt-10 text-justify text-gray-600">
              Hydrafacial provides instant and long-lasting results that can
              last up to 4-6 weeks.
            </p>
          </div>
          <div className="pt-5">
            <h3>Customizable:</h3>
            <p className="pt-1 text-xs lg:text-sm xl:text-base 2xl:text-xl 2xl:leading-normal 2xl:mt-10 text-justify text-gray-600">
              This advanced facial treatment can be easily customized according
              to your skin type, tone, and texture. Customizing your treatment
              makes it safer and more effective.
            </p>
          </div>
          <div className="pt-5">
            <h3>No Downtime:</h3>
            <p className="pt-1 text-xs lg:text-sm xl:text-base 2xl:text-xl 2xl:leading-normal 2xl:mt-10 text-justify text-gray-600">
              Another significant advantage of Hydrafacials is there is no
              downtime and no discomfort or irritation in getting the treatment.
            </p>
          </div>
          <div className="pt-5">
            <h3>Heals Your Skin:</h3>
            <p className="pt-1 text-xs lg:text-sm xl:text-base 2xl:text-xl 2xl:leading-normal 2xl:mt-10 text-justify text-gray-600">
              Hydrafacial doesn’t only give an instant glow but is also
              effective in addressing various skin conditions.
            </p>
          </div>
        </div>
        <div className="w-1/3">
          <img
            src={HydraFacialTwo}
            alt="hydra-facial-2"
            className="h-full object-cover object-center"
          />
        </div>
      </div>
      <div className="flex flex-row pt-10 ">
        <img
          src={HydraFacialThree}
          alt="facial-3"
          className="w-1/3 object-cover object-center"
        />
        <div className="w-2/3 pl-5">
          <h2 className="font-bold text-start text-black text-xl 2xl:text-2xl">
            What are the Benefits of Traditional Facials?
          </h2>
          <div className="pt-2">
            <h3>Cleanses Your Skins:</h3>
            <p className="pt-1 text-xs lg:text-sm xl:text-base 2xl:text-xl 2xl:leading-normal 2xl:mt-10 text-justify text-gray-600">
              Regular facials are a great way to cleanse your skin and remove
              all dead skin and dust from your skin.
            </p>
          </div>
          <div className="pt-5">
            <h3>Prevents Aging:</h3>
            <p className="pt-1 text-xs lg:text-sm xl:text-base 2xl:text-xl 2xl:leading-normal 2xl:mt-10 text-justify text-gray-600">
              Facials are also found to help minimize the signs of aging as they
              replenish your skin with the required dose of nutrients and
              serums.
            </p>
          </div>
          <div className="pt-5">
            <h3>Encourages Cell Turnover:</h3>
            <p className="pt-1 text-xs lg:text-sm xl:text-base 2xl:text-xl 2xl:leading-normal 2xl:mt-10 text-justify text-gray-600">
              Facial massages help in improving blood circulation, cell
              regeneration, and collagen development.
            </p>
          </div>
          <div className="pt-5">
            <h3>Detox Skin:</h3>
            <p className="pt-1 text-xs lg:text-sm xl:text-base 2xl:text-xl 2xl:leading-normal 2xl:mt-10 text-justify text-gray-600">
              Facials can remove toxic waste products from the skin and enhance
              skin detoxification.
            </p>
          </div>
          <div className="pt-5">
            <h3>Reduce Stress:</h3>
            <p className="pt-1 text-xs lg:text-sm xl:text-base 2xl:text-xl 2xl:leading-normal 2xl:mt-10 text-justify text-gray-600">
              Regular facial massages are good for reducing stress and relieving
              psychological distress.
            </p>
          </div>
          <div className="pt-5">
            <h3>Makes Skin Healthy:</h3>
            <p className="pt-1 text-xs lg:text-sm xl:text-base 2xl:text-xl 2xl:leading-normal 2xl:mt-10 text-justify text-gray-600">
              Facials can lessen the severe effect of environmental pollution
              that causes the skin pores to clog, resulting in acne and pimple
              problems.
            </p>
          </div>
          <div className="pt-5">
            <h3>Regeneration Of Collagen:</h3>
            <p className="pt-1 text-xs lg:text-sm xl:text-base 2xl:text-xl 2xl:leading-normal 2xl:mt-10 text-justify text-gray-600">
              There are many facials available that are mainly performed for the
              regeneration of collagen tissues. This regeneration of collagen
              tightens the skin and reduces the signs of aging, like wrinkles
              and sagging of the skin.
            </p>
          </div>
        </div>
      </div>
      <div>
        <div>
          <div>
            <h2 className="pt-10 font-bold text-start text-black text-xl 2xl:text-2xl">
              Which is better, Regular Facials or Hydrafacial?
            </h2>
            <p className="pt-2 text-xs lg:text-sm xl:text-base 2xl:text-xl 2xl:leading-normal 2xl:mt-10 text-justify text-gray-600">
              Hydrafacial is a facial treatment where a state-of-the-art device
              is used to deeply cleanse the skin and provide instant glowing
              skin, whereas regular facials are traditional methods of treating
              skin for maintaining skin health.
            </p>
            <p className="pt-2 text-xs lg:text-sm xl:text-base 2xl:text-xl 2xl:leading-normal 2xl:mt-10 text-justify text-gray-600">
              If we talk about the results, Hydrafacials are more instant and
              long-lasting than traditional facials. Sometimes the results of
              regular facials are not even worth the money, but Hydrafacial
              provides more satisfactory results. It rejuvenates the skin
              without causing any pain.
            </p>
            <p className="pt-2 text-xs lg:text-sm xl:text-base 2xl:text-xl 2xl:leading-normal 2xl:mt-10 text-justify text-gray-600">
              Moreover, Hydrafacial customizes treatment according to individual
              skin concerns, which makes it safe and effective without any side
              effects. In contrast, products used in regular facials might
              contain chemicals that might cause side effects and worsen certain
              skin concerns like acne, pimples, and rosacea.
            </p>
            <p className="pt-2 text-xs lg:text-sm xl:text-base 2xl:text-xl 2xl:leading-normal 2xl:mt-10 text-justify text-gray-600">
              Hydrafacial is also the most preferred choice for pregnant women,
              as they should not undergo chemical procedures that might cause
              harm to the baby.
            </p>
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
        </div>
      </div>
    </article>
  </Scaffold>
);
