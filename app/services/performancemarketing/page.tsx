
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
import LeadImage from "@/app/assets/services/lead generation.jpg";

export default function PerformanceMarketing() {
  return (
    <>
      <PageHeader
        title={PageData.title}
        description={PageData.description}
        subtitle={PageData.subtitle}
        image={LeadImage}
      />

      <div className="py-24">
        <div className="px-10 lg:px-20">
          <div className="bg-primary/20 px-4 py-2 w-fit rounded-full mb-5">
            <TextShimmer className="bg-primary/5 w-fit rounded-full [--base-color:theme(colors.white)] [--base-gradient-color:theme(colors.white)] dark:[--base-color:theme(colors.white)] dark:[--base-gradient-color:theme(colors.orange.800)]">
              What We Offer
            </TextShimmer>
          </div>

          <h1 className="text-3xl lg:text-4xl">
            Our Performance Marketing Services Include
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
  title: "Performance Marketing",
  description:
    "At MyPromo, we specialize in performance marketing strategies designed to help businesses generate measurable results. Our data-driven approach combines paid advertising, audience targeting, conversion optimization, and continuous campaign analysis to help you reach the right customers and maximize your marketing investment.",
  subtitle: "Drive Measurable Growth with Performance Marketing",
};

const data = [
  {
    title: "Google Ads",
    content: (
      <div>
        <p className="text-xl lg:text-2xl text-muted-foreground">
          Reach customers actively searching for your products or services
          through targeted Google Ads campaigns. We manage search, display,
          YouTube, shopping, and lead generation campaigns to improve
          visibility and drive qualified traffic.
        </p>
      </div>
    ),
  },
  {
    title: "Meta Ads",
    content: (
      <div>
        <p className="text-xl lg:text-2xl text-muted-foreground">
          Connect with your target audience through Facebook and Instagram
          advertising. We create and manage campaigns focused on lead
          generation, conversions, engagement, brand awareness, and customer
          acquisition.
        </p>
      </div>
    ),
  },
  {
    title: "LinkedIn Advertising",
    content: (
      <div>
        <p className="text-xl lg:text-2xl text-muted-foreground">
          Reach professionals, business owners, and decision-makers through
          targeted LinkedIn campaigns. Our B2B advertising strategies help
          businesses generate relevant leads and build valuable business
          connections.
        </p>
      </div>
    ),
  },
  {
    title: "Remarketing & Retargeting",
    content: (
      <div>
        <p className="text-xl lg:text-2xl text-muted-foreground">
          Reconnect with people who have already visited your website,
          interacted with your ads, or engaged with your brand. Retargeting
          campaigns help bring potential customers back and create additional
          conversion opportunities.
        </p>
      </div>
    ),
  },
  {
    title: "Conversion Rate Optimization",
    content: (
      <div>
        <p className="text-xl lg:text-2xl text-muted-foreground">
          Getting visitors to your website is only the beginning. We analyze
          your landing pages, advertisements, user journey, forms, and
          calls-to-action to identify opportunities to improve conversion
          rates and generate more results from your existing traffic.
        </p>
      </div>
    ),
  },
  {
    title: "Campaign Strategy & Planning",
    content: (
      <div>
        <p className="text-xl lg:text-2xl text-muted-foreground">
          Every business needs a different advertising strategy. We develop
          customized performance marketing plans based on your business
          objectives, target audience, industry, competition, budget, and
          customer journey.
        </p>
      </div>
    ),
  },
  {
    title: "Audience Targeting",
    content: (
      <div>
        <p className="text-xl lg:text-2xl text-muted-foreground">
          Reach the people who are most relevant to your business. We use
          demographics, interests, behaviors, location, search intent, website
          activity, and other audience signals to build targeted advertising
          campaigns.
        </p>
      </div>
    ),
  },
  {
    title: "Ad Creative & Copy Optimization",
    content: (
      <div>
        <p className="text-xl lg:text-2xl text-muted-foreground">
          Effective performance marketing requires more than targeting. We
          create and optimize ad creatives, headlines, descriptions, offers,
          and calls-to-action to improve engagement and encourage users to
          take action.
        </p>
      </div>
    ),
  },
  {
    title: "Performance Tracking & Analytics",
    content: (
      <div>
        <p className="text-xl lg:text-2xl text-muted-foreground">
          We monitor important campaign metrics such as clicks, conversions,
          cost per lead, cost per acquisition, conversion rate, and return on
          ad spend. Our data-driven analysis helps identify what is working and
          where improvements are needed.
        </p>
      </div>
    ),
  },
  {
    title: "E-commerce Performance Marketing",
    content: (
      <div>
        <p className="text-xl lg:text-2xl text-muted-foreground">
          For online businesses, we create campaigns focused on product
          discovery, website traffic, conversions, and sales. Our approach
          combines paid advertising, retargeting, audience optimization, and
          conversion-focused strategies.
        </p>
      </div>
    ),
  },
];

const CTADATA = {
  title: "Ready to Turn Your Advertising",
  dualTitle: "into Business Growth?",
  description:
    "Contact us today to discuss your performance marketing goals and discover how MyPromo can help you attract the right audience, generate better leads, and improve your marketing performance.",
};

const items = [
  {
    title: "Results-Focused Approach",
    description:
      "We focus on measurable outcomes such as leads, conversions, customers, and sales opportunities rather than simply generating impressions.",
    icon: (
      <IconClipboardCopy className="h-10 w-10 bg-primary/20 rounded-full p-2 ring-8 ring-primary/10 mb-3" />
    ),
  },
  {
    title: "Data-Driven Strategies",
    description:
      "Our campaigns are continuously analyzed using performance data to identify opportunities and improve results.",
    icon: (
      <IconFileBroken className="h-10 w-10 bg-primary/20 rounded-full p-2 ring-8 ring-primary/10 mb-3" />
    ),
  },
  {
    title: "Customized Campaigns",
    description:
      "We create strategies based on your business goals, industry, target audience, competition, and available budget.",
    icon: (
      <IconSignature className="h-10 w-10 bg-primary/20 rounded-full p-2 ring-8 ring-primary/10 mb-3" />
    ),
  },
  {
    title: "Continuous Optimization",
    description:
      "We continuously monitor campaigns and optimize audiences, creatives, messaging, placements, and budgets based on performance.",
    icon: (
      <IconTableColumn className="h-10 w-10 bg-primary/20 rounded-full p-2 ring-8 ring-primary/10 mb-3" />
    ),
  },
  {
    title: "Transparent Reporting",
    description:
      "Get clear insights into your campaign performance with regular reporting, important metrics, and actionable recommendations.",
    icon: (
      <IconClipboardCopy className="h-10 w-10 bg-primary/20 rounded-full p-2 ring-8 ring-primary/10 mb-3" />
    ),
  },
];
