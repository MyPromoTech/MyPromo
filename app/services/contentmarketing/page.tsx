
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

import ContentImage from "@/app/assets/online-strategy-media-marketing-icons.jpg";

export default function ContentMarketing() {
  return (
    <>
      <PageHeader
        title={PageData.title}
        description={PageData.description}
        subtitle={PageData.subtitle}
        image={ContentImage}
      />

      {/* Content Marketing Services */}
      <div className="py-24">
        <div className="px-10 lg:px-20">
          <div className="bg-primary/20 px-4 py-2 w-fit rounded-full mb-5">
            <TextShimmer className="bg-primary/5 w-fit rounded-full [--base-color:theme(colors.white)] [--base-gradient-color:theme(colors.white)] dark:[--base-color:theme(colors.white)] dark:[--base-gradient-color:theme(colors.orange.800)]">
              What We Offer
            </TextShimmer>
          </div>

          <h1 className="text-3xl lg:text-4xl">
            Our Content Marketing Services Include
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
  title: "Content Marketing",
  subtitle:
    "Build Authority. Attract the Right Audience. Drive Business Growth.",
  description:
    "At MyPromo, we treat content as a growth asset—not just something to post. We combine audience research, search intent, brand positioning, storytelling, SEO, and performance data to create content that attracts the right people at every stage of the customer journey.",
};

/* =========================================================
   CONTENT MARKETING SERVICES
========================================================= */

const data = [
  {
    title: "Content Strategy & Planning",
    content: (
      <div>
        <p className="text-xl lg:text-2xl text-muted-foreground">
          We develop a complete content strategy based on your business
          objectives, target audience, industry, competitors, customer journey,
          and marketing funnel. We define what to communicate, who to
          communicate with, where to publish, and how each content asset
          contributes to your business goals.
        </p>
      </div>
    ),
  },

  {
    title: "Audience & Customer Research",
    content: (
      <div>
        <p className="text-xl lg:text-2xl text-muted-foreground">
          We identify your ideal customer profiles, pain points, interests,
          questions, objections, buying triggers, and content preferences. This
          allows us to create content that addresses real customer needs
          instead of producing content simply for the sake of publishing.
        </p>
      </div>
    ),
  },

  {
    title: "Content Audit & Gap Analysis",
    content: (
      <div>
        <p className="text-xl lg:text-2xl text-muted-foreground">
          We evaluate your existing website, blogs, landing pages, social media,
          and other content assets to identify what is performing, what is
          outdated, what is missing, and where new content opportunities exist.
        </p>
      </div>
    ),
  },

  {
    title: "Competitor Content Analysis",
    content: (
      <div>
        <p className="text-xl lg:text-2xl text-muted-foreground">
          We study your competitors content strategies, including their
          topics, keywords, content formats, publishing patterns, messaging,
          engagement, and search visibility. We use these insights to identify
          content gaps and opportunities for differentiation.
        </p>
      </div>
    ),
  },

  {
    title: "Content Pillar & Topic Clusters",
    content: (
      <div>
        <p className="text-xl lg:text-2xl text-muted-foreground">
          We build content pillars around your core products, services,
          expertise, and audience interests. Supporting topics are strategically
          connected to create topical depth, strengthen SEO authority, and guide
          users from informational content toward your commercial pages.
        </p>
      </div>
    ),
  },

  {
    title: "SEO Content Marketing",
    content: (
      <div>
        <p className="text-xl lg:text-2xl text-muted-foreground">
          We combine keyword research, search intent analysis, semantic
          relevance, topical authority, internal linking, and on-page
          optimization to create content designed to attract qualified organic
          traffic and support your overall SEO strategy.
        </p>
      </div>
    ),
  },

  {
    title: "Blog & Long-Form Content",
    content: (
      <div>
        <p className="text-xl lg:text-2xl text-muted-foreground">
          We create research-driven blogs, guides, industry articles, how-to
          content, listicles, comparison articles, case studies, and
          thought-leadership pieces designed to educate audiences while
          supporting brand visibility and business objectives.
        </p>
      </div>
    ),
  },

  {
    title: "Website & Landing Page Content",
    content: (
      <div>
        <p className="text-xl lg:text-2xl text-muted-foreground">
          We create conversion-focused website content for service pages,
          product pages, landing pages, category pages, About pages, and other
          important touchpoints. The content is structured to communicate value,
          address objections, build trust, and encourage action.
        </p>
      </div>
    ),
  },

  {
    title: "Social Media Content Strategy",
    content: (
      <div>
        <p className="text-xl lg:text-2xl text-muted-foreground">
          We develop platform-specific content strategies for Facebook,
          Instagram, LinkedIn, and other relevant channels. Content is planned
          around brand awareness, engagement, education, community building,
          lead generation, and conversion objectives.
        </p>
      </div>
    ),
  },

  {
    title: "Social Media Copywriting",
    content: (
      <div>
        <p className="text-xl lg:text-2xl text-muted-foreground">
          We create strategic captions, hooks, CTAs, carousel copy, campaign
          messaging, educational posts, promotional content, storytelling
          posts, and thought-leadership content aligned with your brand voice.
        </p>
      </div>
    ),
  },

  {
    title: "Video & Reels Content",
    content: (
      <div>
        <p className="text-xl lg:text-2xl text-muted-foreground">
          We develop concepts, hooks, scripts, storytelling structures, and
          content ideas for short-form videos, Reels, educational videos,
          promotional videos, testimonials, product demonstrations, and brand
          storytelling.
        </p>
      </div>
    ),
  },

  {
    title: "Thought Leadership Content",
    content: (
      <div>
        <p className="text-xl lg:text-2xl text-muted-foreground">
          Position your brand and key people as credible voices within your
          industry through expert articles, opinion-led content, LinkedIn
          content, industry insights, educational posts, and knowledge-driven
          campaigns.
        </p>
      </div>
    ),
  },

  {
    title: "Case Studies & Customer Stories",
    content: (
      <div>
        <p className="text-xl lg:text-2xl text-muted-foreground">
          Turn successful customer experiences into powerful marketing assets.
          We structure case studies around the problem, solution,
          implementation, measurable outcomes, and customer experience to build
          credibility and support the sales process.
        </p>
      </div>
    ),
  },

  {
    title: "Lead Generation Content",
    content: (
      <div>
        <p className="text-xl lg:text-2xl text-muted-foreground">
          Create content specifically designed to move prospects toward enquiry
          or purchase. This includes lead magnets, downloadable guides,
          checklists, ebooks, landing page content, comparison content,
          educational resources, and conversion-focused campaigns.
        </p>
      </div>
    ),
  },

  {
    title: "Email & Nurture Content",
    content: (
      <div>
        <p className="text-xl lg:text-2xl text-muted-foreground">
          Develop newsletters, promotional emails, educational sequences, lead
          nurturing content, product updates, and customer retention campaigns
          that keep your audience engaged throughout the buying journey.
        </p>
      </div>
    ),
  },

  {
    title: "Content Repurposing",
    content: (
      <div>
        <p className="text-xl lg:text-2xl text-muted-foreground">
          Maximize the value of every major content asset by transforming blogs
          into social posts, videos into Reels, webinars into articles,
          research into carousels, and long-form content into multiple
          distribution assets.
        </p>
      </div>
    ),
  },

  {
    title: "Content Distribution Strategy",
    content: (
      <div>
        <p className="text-xl lg:text-2xl text-muted-foreground">
          Creating great content is only part of the process. We develop
          distribution strategies across search engines, social media, email,
          communities, paid promotion, and other relevant channels to increase
          content reach and visibility.
        </p>
      </div>
    ),
  },

  {
    title: "AI-Assisted Content Strategy",
    content: (
      <div>
        <p className="text-xl lg:text-2xl text-muted-foreground">
          We use AI tools strategically for research, ideation, content
          structuring, analysis, and workflow efficiency while maintaining
          human oversight for brand voice, originality, accuracy, positioning,
          and quality.
        </p>
      </div>
    ),
  },

  {
    title: "Content Performance & Optimization",
    content: (
      <div>
        <p className="text-xl lg:text-2xl text-muted-foreground">
          We track content performance using relevant metrics such as organic
          traffic, rankings, engagement, reach, click-through rates, leads,
          conversions, and assisted conversions. Insights are used to improve
          existing content and guide future production.
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
    title: "Strategy Before Production",
    description:
      "We don't believe in creating content just to fill a content calendar. Every content asset is connected to a specific audience, objective, funnel stage, or business goal.",

    icon: (
      <IconClipboardCopy className="h-10 w-10 bg-primary/20 rounded-full p-2 ring-8 ring-primary/10 mb-3" />
    ),
  },

  {
    title: "SEO + Creative + Marketing",
    description:
      "Our content approach combines search optimization, creative storytelling, conversion strategy, and digital marketing rather than treating content as an isolated service.",

    icon: (
      <IconFileBroken className="h-10 w-10 bg-primary/20 rounded-full p-2 ring-8 ring-primary/10 mb-3" />
    ),
  },

  {
    title: "Full-Funnel Content",
    description:
      "We create content for different stages of the customer journey—from awareness and education to consideration, conversion, retention, and advocacy.",

    icon: (
      <IconSignature className="h-10 w-10 bg-primary/20 rounded-full p-2 ring-8 ring-primary/10 mb-3" />
    ),
  },

  {
    title: "Data-Driven Optimization",
    description:
      "We continuously analyze content performance and use real data to identify what should be improved, expanded, repurposed, or replaced.",

    icon: (
      <IconTableColumn className="h-10 w-10 bg-primary/20 rounded-full p-2 ring-8 ring-primary/10 mb-3" />
    ),
  },
];

/* =========================================================
   FINAL CTA
========================================================= */

const CTADATA = {
  title: "Ready to turn content",
  dualTitle: " into a growth engine?",
  description:
    "Build a content ecosystem that does more than generate likes and page views. Let MyPromo create strategic content that builds authority, attracts qualified audiences, generates demand, and supports measurable business growth.",
};