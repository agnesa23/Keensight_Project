import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { Cta } from "@/components/Cta";

import {
  benefitOne,
  benefitTwo,
  benefitThree,
  benefitFour,
} from "@/components/data";
export default function Home() {
  return (
    <Container>
      <Hero />
      <SectionTitle
        preTitle="AI Tools Benefits"
        title=" Why should you use these tools?"
      >
        AI Tools offers innovative solutions that enhance creativity and
        productivity. Powered by advanced machine learning algorithms, these
        tools help you generate high-quality content, automate repetitive tasks,
        and explore new possibilities with artificial intelligence
      </SectionTitle>

      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      <Benefits data={benefitThree} />
      <Benefits imgPos="right" data={benefitFour} />

      <SectionTitle title="Take the Next Leap in Your Business Evolution">
        Experience unparalleled technical excellence and financial growth by
        partnering with Keensight Analytics. Unlock the full potential of your
        data assets and transform insights into tangible financial results.
        <div className=" flex justify-center   hidden mr-3 lg:flex nav__item">
        <a
  href="/"
  className="inline-flex flex items-center justify-center w-full rounded-full bg-blue-500 px-2 py-4 text-white duration-500 ease-in-out hover:bg-[rgba(59,130,246,.5)] hover:text-black hover:border border-black dark:hover:border-gray-900 dark:bg-white dark:text-black dark:hover:bg-gray-900 dark:hover:text-white"
>
  Schedule a Free Consultation
</a>
        </div>
      </SectionTitle>

      
      <Cta />
    </Container>
  );
}
