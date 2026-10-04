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

import LocalSEOImage from "@/app/assets/image.png";

export default function LocalSEO() {
  return (
    <>
      <PageHeader
        title={PageData.title}
        description={PageData.description}
        subtitle={PageData.subtitle}
        image={LocalSEOImage}
      />

      <div className="py-24">
        <div className="px-10 lg:px-20">
          <div className="bg-primary/20 px-4 py-2 w-fit rounded-full mb-5">
            <TextShimmer className="bg-primary/5 w-fit rounded-full [--base-color:theme(colors.white)] [--base-gradient-color:theme(colors.white)] dark:[--base-color:theme(colors.white)] dark:[--base-gradient-color:theme(colors.orange.800)]">
              What We Offer
            </TextShimmer>
          </div>

          <h1 className="text-3xl lg:text-4xl">
            Our Local SEO & Google Maps Optimization Services Include
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
  title: "Local SEO & Google Maps Optimization",
  subtitle: "Get Found Locally with Powerful Local SEO",
  description:
    "At MyPromo, we help businesses improve their visibility on Google Search and Google Maps. Our comprehensive local SEO strategies are designed to help your business reach nearby customers, improve local rankings, and generate more calls, visits, enquiries, and leads.",
};

const data = [
  {
    title: "Google Business Profile Optimization",
    content: (
      <div>
        <p className="text-xl lg:text-2xl text-muted-foreground">
          Optimize your Google Business Profile with accurate business
          information, relevant categories, services, descriptions, images,
          and other important elements to improve your local search presence.
        </p>
      </div>
    ),
  },
  {
    title: "Google Maps Ranking",
    content: (
      <div>
        <p className="text-xl lg:text-2xl text-muted-foreground">
          Improve your visibility on Google Maps for relevant local searches.
          We optimize your local presence to help your business get discovered
          by customers searching for your products or services.
        </p>
      </div>
    ),
  },
  {
    title: "Local Keyword Research",
    content: (
      <div>
        <p className="text-xl lg:text-2xl text-muted-foreground">
          Identify high-intent keywords that customers use to find businesses
          like yours. We target location-specific search terms that can help
          drive relevant traffic and enquiries.
        </p>
      </div>
    ),
  },
  {
    title: "Local On-Page SEO",
    content: (
      <div>
        <p className="text-xl lg:text-2xl text-muted-foreground">
          Optimize your website for local searches through location-based
          keywords, meta tags, content, internal linking, service pages, and
          other important on-page SEO elements.
        </p>
      </div>
    ),
  },
  {
    title: "Local Citations",
    content: (
      <div>
        <p className="text-xl lg:text-2xl text-muted-foreground">
          Build and manage your business presence across relevant online
          directories and local platforms. We focus on maintaining consistent
          business information across the web.
        </p>
      </div>
    ),
  },
  {
    title: "NAP Optimization",
    content: (
      <div>
        <p className="text-xl lg:text-2xl text-muted-foreground">
          Ensure your business Name, Address, and Phone Number remain accurate
          and consistent across your website, Google Business Profile,
          directories, and other online platforms.
        </p>
      </div>
    ),
  },
  {
    title: "Review Management",
    content: (
      <div>
        <p className="text-xl lg:text-2xl text-muted-foreground">
          Build trust and strengthen your local reputation through a structured
          customer review strategy. We help businesses encourage genuine
          reviews and maintain professional responses.
        </p>
      </div>
    ),
  },
];

const CTADATA = {
  title: "Ready to get found",
  dualTitle: "by more local customers?",
  description:
    "Let's grow your business with Digital Marketing, Local SEO, Google Maps Optimization, and other digital solutions designed to improve your local visibility and generate more opportunities.",
};

const items = [
  {
    title: "Proven Strategies",
    description:
      "Our local SEO strategies are designed using industry best practices and data-driven insights to improve your local online presence.",
    icon: (
      <IconClipboardCopy className="h-10 w-10 bg-primary/20 rounded-full p-2 ring-8 ring-primary/10 mb-3" />
    ),
  },
  {
    title: "Customized Solutions",
    description:
      "We tailor our local SEO approach according to your business type, target locations, audience, competition, and business objectives.",
    icon: (
      <IconFileBroken className="h-10 w-10 bg-primary/20 rounded-full p-2 ring-8 ring-primary/10 mb-3" />
    ),
  },
  {
    title: "Better Local Visibility",
    description:
      "We focus on improving your visibility across Google Search and Google Maps so potential customers can discover your business when they are looking for relevant products or services.",
    icon: (
      <IconSignature className="h-10 w-10 bg-primary/20 rounded-full p-2 ring-8 ring-primary/10 mb-3" />
    ),
  },
  {
    title: "Transparent Reporting",
    description:
      "Receive clear reports on your local SEO performance, including rankings, insights, activities, and recommendations.",
    icon: (
      <IconTableColumn className="h-10 w-10 bg-primary/20 rounded-full p-2 ring-8 ring-primary/10 mb-3" />
    ),
  },
];