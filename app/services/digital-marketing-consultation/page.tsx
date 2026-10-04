import { CTASection } from "@/components/layout/sections/cta";
import { CTAWithCard } from "@/components/layout/sections/cta-with-card";
import PageHeader from "@/components/layout/sections/page-header";
import { TextShimmer } from "@/components/ui/text-shimmer";

import { Timeline } from "@/components/ui/timeline-effect";
import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

import ConsultationImage from "@/app/assets/Digital-marketing-consultation.jpg";

export default function DigitalMarketingConsultation() {
  return (
    <>
      <PageHeader
        title={PageData.title}
        description={PageData.description}
        subtitle={PageData.subtitle}
        image={ConsultationImage}
      />

      <div className="py-24">
        <div className="px-10 lg:px-20">
          <div className="bg-primary/20 px-4 py-2 w-fit rounded-full mb-5">
            <TextShimmer className="bg-primary/5 w-fit rounded-full [--base-color:theme(colors.white)] [--base-gradient-color:theme(colors.white)] dark:[--base-color:theme(colors.white)] dark:[--base-gradient-color:theme(colors.orange.800)]">
              What We Offer
            </TextShimmer>
          </div>

          <h1 className="text-3xl lg:text-4xl">
            Our Digital Marketing Consultation Services Include
          </h1>
        </div>

        <Timeline data={data} />
      </div>

      <CTAWithCard items={items} title="Why Choose MyPromo?" />

      <CTASection
        title={CTADATA.title}
        description={CTADATA.description}
        dualtitle={CTADATA.dualTitle}
      />
    </>
  );
}

const PageData = {
  title: "Digital Marketing Consultation",
  subtitle: "Get Expert Guidance to Build a Smarter Digital Strategy",
  description:
    "At MyPromo, we help businesses understand where they stand, identify growth opportunities, and build a clear digital marketing roadmap. Our consultation services combine business analysis, competitor research, digital audits, and strategic planning to help you make informed marketing decisions.",
};

const data = [
  {
    title: "Business Analysis",
    content: (
      <div>
        <p className="text-xl lg:text-2xl text-muted-foreground">
          We analyze your business, target audience, market, goals, and
          current digital presence to understand your strengths, challenges,
          and growth opportunities.
        </p>
      </div>
    ),
  },
  {
    title: "Competitor Analysis",
    content: (
      <div>
        <p className="text-xl lg:text-2xl text-muted-foreground">
          Understand what your competitors are doing online, including their
          SEO, social media, advertising, content, positioning, and customer
          engagement strategies.
        </p>
      </div>
    ),
  },
  {
    title: "Digital Marketing Audit",
    content: (
      <div>
        <p className="text-xl lg:text-2xl text-muted-foreground">
          Get a comprehensive review of your existing digital marketing
          activities across your website, SEO, social media, Google Business
          Profile, advertising, and other digital channels.
        </p>
      </div>
    ),
  },
  {
    title: "Marketing Planning & Strategy",
    content: (
      <div>
        <p className="text-xl lg:text-2xl text-muted-foreground">
          Develop a structured marketing plan based on your business
          objectives, target audience, budget, and market opportunities.
        </p>
      </div>
    ),
  },
  {
    title: "Customer & Audience Analysis",
    content: (
      <div>
        <p className="text-xl lg:text-2xl text-muted-foreground">
          Identify your ideal customers, their online behavior, needs,
          interests, and search patterns to create more targeted marketing
          campaigns.
        </p>
      </div>
    ),
  },
  {
    title: "Channel Selection",
    content: (
      <div>
        <p className="text-xl lg:text-2xl text-muted-foreground">
          Determine which digital marketing channels are most suitable for
          your business, including SEO, Social Media, Google Ads, Meta Ads,
          Email Marketing, and Lead Generation.
        </p>
      </div>
    ),
  },
  {
    title: "Budget & Resource Planning",
    content: (
      <div>
        <p className="text-xl lg:text-2xl text-muted-foreground">
          Plan your marketing budget and resources effectively by prioritizing
          the activities that align with your business goals.
        </p>
      </div>
    ),
  },
  {
    title: "Growth Roadmap",
    content: (
      <div>
        <p className="text-xl lg:text-2xl text-muted-foreground">
          Get a clear, actionable roadmap with recommended marketing
          activities, priorities, timelines, and next steps for your business.
        </p>
      </div>
    ),
  },
];

const CTADATA = {
  title: "Ready to plan",
  dualTitle: "your digital growth?",
  description:
    "Let's analyze your business, understand your market, and create a digital marketing strategy designed around your goals. Book your Digital Marketing Consultation with MyPromo today.",
};

const items = [
  {
    title: "Business-Focused Approach",
    description:
      "We create strategies around your actual business goals rather than using a one-size-fits-all approach.",
    icon: (
      <IconClipboardCopy className="h-10 w-10 bg-primary/20 rounded-full p-2 ring-8 ring-primary/10 mb-3" />
    ),
  },
  {
    title: "Data-Driven Insights",
    description:
      "Our recommendations are based on analysis, research, market insights, and your existing digital performance.",
    icon: (
      <IconFileBroken className="h-10 w-10 bg-primary/20 rounded-full p-2 ring-8 ring-primary/10 mb-3" />
    ),
  },
  {
    title: "Practical Strategies",
    description:
      "Get clear and actionable recommendations that you can implement to improve your digital marketing.",
    icon: (
      <IconSignature className="h-10 w-10 bg-primary/20 rounded-full p-2 ring-8 ring-primary/10 mb-3" />
    ),
  },
  {
    title: "End-to-End Expertise",
    description:
      "Our experience across SEO, social media, paid advertising, content, websites, and lead generation helps us create a complete digital strategy.",
    icon: (
      <IconTableColumn className="h-10 w-10 bg-primary/20 rounded-full p-2 ring-8 ring-primary/10 mb-3" />
    ),
  },
];