import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../../public/img/openai.png";
import benefitTwoImg from "../../public/img/nvidia.png";
import benefitThreeImg from "../../public/img/anthropicc.png";
import benefitFourImg from "../../public/img/cube.png";



const benefitOne = {
  title: "Open AI",
  desc: "With advanced models like GPT, OpenAI is transforming industries by empowering businesses to generate content, solve problems, and enhance productivity.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Leverage AI Insights",
      desc: "Leverage AI to analyze customer behavior and preferences, ensuring personalized communication and service.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Boost Customer Acquisition with AI",
      desc: "Use AI-driven tools to identify new sales opportunities and optimize advertising strategies, further increasing customer acquisition.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Enhance Customer Retention Using AI",
      desc: "Utilize AI to predict customer needs and provide faster, more efficient service, boosting loyalty and retention.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Power Your Vision with NVIDIA",
  desc: "Leverage NVIDIA’s advanced technology to accelerate AI, enhance graphics, and optimize performance across industries. Highlight key benefits with an engaging image and bullet points for maximum impact.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "AI-Driven Innovation",
      desc: "Harness the power of NVIDIA’s GPUs to accelerate AI and machine learning applications.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Seamless Integration",
      desc: " Designed to integrate effortlessly with modern frameworks like Next.js and TailwindCSS.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Adaptive Performance",
      desc: "Experience optimized performance with support for both dark and light mode environments, ensuring flexibility and user-friendly experiences across devices.",
      icon: <SunIcon />,
    },
  ],
};
const benefitThree = {
  title: "Anthropic",
  desc: "With a focus on safety and reliability, Anthropic is advancing AI systems designed to align with human intentions, offering businesses solutions that are ethical, transparent, and capable of solving complex challenges while prioritizing human values.",
  image: benefitThreeImg,
  bullets: [
    {
      title: "Leverage Insights with Anthropic AI",
      desc: "Use Anthropic's AI to analyze customer behavior and provide personalized, transparent communication.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Boost Acquisition with Anthropic AI",
      desc: "Utilize Anthropic's AI tools to identify sales opportunities and optimize strategies while maintaining ethical standards.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Enhance Retention with Anthropic AI",
      desc: "Leverage Anthropic's AI to predict customer needs and deliver efficient, reliable service, fostering loyalty with trustworthy solutions.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};
const benefitFour = {
  title: "Mistral",
  desc: "Mistral is a leading AI company focused on developing advanced models that drive innovation and efficiency across industries. With cutting-edge technology, Mistral enables businesses to leverage AI for data-driven insights, automation, and improved decision-making.",
  image: benefitFourImg,
  bullets: [
    {
      title: "Leverage AI Insights with Mistral",
      desc: "Use Mistral's AI to analyze customer behavior and preferences, enabling personalized communication and service.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Boost Acquisition with Mistral AI",
      desc: "Utilize Mistral's tools to identify new opportunities, optimize marketing strategies, and accelerate customer acquisition.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Enhance Retention with Mistral AI",
      desc: "Predict customer needs with Mistral's AI, offering faster, more efficient service to build long-term loyalty.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

export {benefitOne, benefitTwo,benefitThree,benefitFour};
