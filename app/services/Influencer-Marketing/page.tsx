
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

import InfluencerImage from "@/app/assets/influencer.png";

export default function InfluencerMarketing() {
  return (
    <>
      <PageHeader
        title={PageData.title}
        description={PageData.description}
        subtitle={PageData.subtitle}
        image={InfluencerImage}
      />

      {/* Influencer Marketing Services */}
      <div className="py-24">
        <div className="px-10 lg:px-20">
          <div className="bg-primary/20 px-4 py-2 w-fit rounded-full mb-5">
            <TextShimmer className="bg-primary/5 w-fit rounded-full [--base-color:theme(colors.white)] [--base-gradient-color:theme(colors.white)] dark:[--base-color:theme(colors.white)] dark:[--base-gradient-color:theme(colors.orange.800)]">
              What We Offer
            </TextShimmer>
          </div>

          <h1 className="text-3xl lg:text-4xl">
            Our Influencer Marketing Services Include
          </h1>
        </div>

        <Timeline data={data} />
      </div>

      {/* Why Choose MyPromo */}
      <CTAWithCard
        items={items}
        title="Why Choose MyPromo?"
      />

      {/* Final CTA */}
      <CTASection
        title={CTADATA.title}
        description={CTADATA.description}
        dualtitle={CTADATA.dualTitle}
      />
    </>
  );
}

/* =========================================================
   PAGE HEADER
========================================================= */

const PageData = {
  title: "Influencer Marketing",
  subtitle:
    "Build Trust, Reach New Audiences & Drive Brand Growth",
  description:
    "At MyPromo, we connect brands with relevant influencers and creators to build authentic awareness, reach targeted audiences, and support business growth. From influencer discovery and campaign planning to content execution, coordination, and performance tracking, we manage the complete influencer marketing process.",
};

/* =========================================================
   INFLUENCER MARKETING SERVICES
========================================================= */

const data = [
  {
    title: "Influencer Discovery & Selection",
    content: (
      <div>
        <p className="text-xl lg:text-2xl text-muted-foreground">
          We identify influencers based on your industry, target audience,
          location, content style, engagement, audience relevance, and campaign
          objectives.
        </p>
      </div>
    ),
  },

  {
    title: "Influencer Campaign Strategy",
    content: (
      <div>
        <p className="text-xl lg:text-2xl text-muted-foreground">
          We develop influencer campaigns around your marketing goals—whether
          you want to build awareness, launch a product, generate enquiries,
          drive website traffic, or increase sales.
        </p>
      </div>
    ),
  },

  {
    title: "Micro & Macro Influencer Campaigns",
    content: (
      <div>
        <p className="text-xl lg:text-2xl text-muted-foreground">
          We help brands work with micro, mid-tier, and larger influencers
          depending on campaign objectives, audience size, niche, location, and
          budget.
        </p>
      </div>
    ),
  },

  {
    title: "Local Influencer Marketing",
    content: (
      <div>
        <p className="text-xl lg:text-2xl text-muted-foreground">
          Connect with relevant local creators to reach customers in specific
          cities, regions, or communities and build stronger local brand
          awareness.
        </p>
      </div>
    ),
  },

  {
    title: "Influencer Outreach & Coordination",
    content: (
      <div>
        <p className="text-xl lg:text-2xl text-muted-foreground">
          We manage communication with influencers, campaign requirements,
          deliverables, timelines, pricing discussions, and coordination
          throughout the campaign.
        </p>
      </div>
    ),
  },

  {
    title: "Campaign Brief & Content Direction",
    content: (
      <div>
        <p className="text-xl lg:text-2xl text-muted-foreground">
          We create clear influencer briefs covering campaign messaging, key
          USPs, content requirements, brand guidelines, CTAs, hashtags, and
          deliverables while allowing creators to maintain their authentic
          style.
        </p>
      </div>
    ),
  },

  {
    title: "Sponsored Content & Product Promotion",
    content: (
      <div>
        <p className="text-xl lg:text-2xl text-muted-foreground">
          Plan and execute sponsored Reels, posts, Stories, videos, product
          reviews, demonstrations, unboxing content, and other creator-led
          promotional formats.
        </p>
      </div>
    ),
  },

  {
    title: "Influencer-Generated Content",
    content: (
      <div>
        <p className="text-xl lg:text-2xl text-muted-foreground">
          Leverage creator content to produce authentic marketing assets that
          can also be used across your brand social media, website,
          advertising campaigns, and other digital channels, subject to agreed
          usage rights.
        </p>
      </div>
    ),
  },

  {
    title: "Campaign Monitoring",
    content: (
      <div>
        <p className="text-xl lg:text-2xl text-muted-foreground">
          Track influencer deliverables, publishing schedules, content
          quality, audience response, engagement, reach, and campaign progress.
        </p>
      </div>
    ),
  },

  {
    title: "Influencer Campaign Reporting",
    content: (
      <div>
        <p className="text-xl lg:text-2xl text-muted-foreground">
          Measure campaign performance through relevant metrics such as reach,
          impressions, engagement, clicks, enquiries, content performance, and
          other agreed KPIs.
        </p>
      </div>
    ),
  },
];

/* =========================================================
   WHY CHOOSE MYPROMO
========================================================= */

const items = [
  {
    title: "Right Influencer for Your Brand",
    description:
      "We focus on audience relevance and campaign objectives rather than selecting influencers based only on follower count.",

    icon: (
      <IconClipboardCopy className="h-10 w-10 bg-primary/20 rounded-full p-2 ring-8 ring-primary/10 mb-3" />
    ),
  },

  {
    title: "Targeted Campaigns",
    description:
      "We help you reach specific audiences based on location, interests, niche, demographics, and business requirements.",

    icon: (
      <IconFileBroken className="h-10 w-10 bg-primary/20 rounded-full p-2 ring-8 ring-primary/10 mb-3" />
    ),
  },

  {
    title: "End-to-End Management",
    description:
      "From influencer discovery and outreach to campaign execution and reporting, we manage the complete campaign process.",

    icon: (
      <IconSignature className="h-10 w-10 bg-primary/20 rounded-full p-2 ring-8 ring-primary/10 mb-3" />
    ),
  },

  {
    title: "Performance-Focused",
    description:
      "We track campaign performance and provide insights that help you understand the impact of your influencer marketing investment.",

    icon: (
      <IconTableColumn className="h-10 w-10 bg-primary/20 rounded-full p-2 ring-8 ring-primary/10 mb-3" />
    ),
  },
];

/* =========================================================
   FINAL CTA
========================================================= */

const CTADATA = {
  title: "Ready to collaborate",
  dualTitle: " with the right creators?",
  description:
    "Put your brand in front of the right audience through strategic influencer marketing campaigns designed around your business goals. Get in touch with MyPromo today to plan your influencer marketing campaign.",
};
