
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
import SEOImage from "@/app/assets/services/search engine optimization.jpg";

export default function SEOAEO() {
  return (
    <>
      <PageHeader
        title={PageData.title}
        description={PageData.description}
        subtitle={PageData.subtitle}
        image={SEOImage}
      />

      <div className="py-24">
        <div className="px-10 lg:px-20">
          <div className="bg-primary/20 px-4 py-2 w-fit rounded-full mb-5">
            <TextShimmer className="bg-primary/5 w-fit rounded-full [--base-color:theme(colors.white)] [--base-gradient-color:theme(colors.white)] dark:[--base-color:theme(colors.white)] dark:[--base-gradient-color:theme(colors.orange.800)]">
              What We Offer
            </TextShimmer>
          </div>

          <h1 className="text-3xl lg:text-4xl">
            Our SEO & AEO Services Include
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
  title: "SEO & AEO",
  description:
    "At MyPromo, we help businesses improve their visibility across search engines and AI-powered search platforms. Our SEO & AEO strategies combine technical optimization, quality content, search intent, authority building, and structured information to help your business reach the right audience.",
  subtitle: "Get Found. Get Discovered. Get Chosen.",
};

const data = [
  {
    title: "Technical SEO",
    content: (
      <div>
        <p className="text-xl lg:text-2xl text-muted-foreground">
          We optimize your website technical foundation to make it easier
          for search engines to crawl, understand, and index your website.
        </p>
      </div>
    ),
  },
  {
    title: "On-Page SEO",
    content: (
      <div>
        <p className="text-xl lg:text-2xl text-muted-foreground">
          We optimize your website pages with relevant keywords, headings,
          meta tags, content, internal links, images, and search-intent-focused
          information.
        </p>
      </div>
    ),
  },
  {
    title: "Off-Page SEO",
    content: (
      <div>
        <p className="text-xl lg:text-2xl text-muted-foreground">
          Build your website authority and credibility through strategic link
          building, brand mentions, citations, and relevant external
          platforms.
        </p>
      </div>
    ),
  },
  {
    title: "Local SEO",
    content: (
      <div>
        <p className="text-xl lg:text-2xl text-muted-foreground">
          Improve your visibility in local searches and help nearby customers
          discover your business through Google Business Profile optimization,
          local citations, location pages, and review strategies.
        </p>
      </div>
    ),
  },
  {
    title: "Keyword Research",
    content: (
      <div>
        <p className="text-xl lg:text-2xl text-muted-foreground">
          We identify relevant keywords based on search volume, competition,
          search intent, and customer behavior to build a focused SEO
          strategy.
        </p>
      </div>
    ),
  },
  {
    title: "SEO Content Strategy",
    content: (
      <div>
        <p className="text-xl lg:text-2xl text-muted-foreground">
          We create content around the questions, problems, and topics your
          target audience is searching for, helping your website attract
          relevant organic traffic.
        </p>
      </div>
    ),
  },
  {
    title: "AEO – Answer Engine Optimization",
    content: (
      <div>
        <p className="text-xl lg:text-2xl text-muted-foreground">
          Search is evolving beyond traditional Google results. AEO helps
          structure your content so search engines, voice assistants, and
          AI-powered answer platforms can better understand and surface your
          information.
        </p>
      </div>
    ),
  },
  {
    title: "AI Search Optimization",
    content: (
      <div>
        <p className="text-xl lg:text-2xl text-muted-foreground">
          We optimize your content for conversational, question-based, and
          AI-driven searches by developing clear answers, FAQs, structured
          information, and topical content.
        </p>
      </div>
    ),
  },
  {
    title: "Schema & Structured Data",
    content: (
      <div>
        <p className="text-xl lg:text-2xl text-muted-foreground">
          We implement relevant structured data to help search engines better
          understand your business, services, products, articles, and other
          website information.
        </p>
      </div>
    ),
  },
  {
    title: "SEO Audit & Competitor Analysis",
    content: (
      <div>
        <p className="text-xl lg:text-2xl text-muted-foreground">
          We analyze your website, competitors, keywords, content, backlinks,
          and technical performance to identify opportunities and areas that
          require improvement.
        </p>
      </div>
    ),
  },
  {
    title: "SEO Analytics & Reporting",
    content: (
      <div>
        <p className="text-xl lg:text-2xl text-muted-foreground">
          We track important SEO metrics including organic traffic, keyword
          visibility, rankings, conversions, backlinks, and local search
          performance to measure your progress.
        </p>
      </div>
    ),
  },
];

const CTADATA = {
  title: "Ready to Get Found",
  dualTitle: "Online?",
  description:
    "Let's build a stronger search presence for your business with a customized SEO & AEO strategy designed to increase visibility, attract relevant traffic, and create more opportunities for growth.",
};

const items = [
  {
    title: "SEO + AEO Strategy",
    description:
      "We combine traditional SEO with AEO to help your business stay visible across both search engines and emerging AI-powered search experiences.",
    icon: (
      <IconClipboardCopy className="h-10 w-10 bg-primary/20 rounded-full p-2 ring-8 ring-primary/10 mb-3" />
    ),
  },
  {
    title: "Data-Driven Approach",
    description:
      "Our strategies are built around keyword research, search intent, competitor analysis, website data, and ongoing performance insights.",
    icon: (
      <IconFileBroken className="h-10 w-10 bg-primary/20 rounded-full p-2 ring-8 ring-primary/10 mb-3" />
    ),
  },
  {
    title: "Customized SEO Solutions",
    description:
      "Every business is different. We develop SEO strategies based on your industry, target audience, competition, location, and business objectives.",
    icon: (
      <IconSignature className="h-10 w-10 bg-primary/20 rounded-full p-2 ring-8 ring-primary/10 mb-3" />
    ),
  },
  {
    title: "Quality-Focused Optimization",
    description:
      "We focus on creating useful content, improving technical performance, building authority, and strengthening your overall online presence.",
    icon: (
      <IconTableColumn className="h-10 w-10 bg-primary/20 rounded-full p-2 ring-8 ring-primary/10 mb-3" />
    ),
  },
  {
    title: "Continuous Optimization",
    description:
      "Search is constantly evolving. We continuously monitor your performance and refine your strategy to adapt to changing search behavior and algorithms.",
    icon: (
      <IconClipboardCopy className="h-10 w-10 bg-primary/20 rounded-full p-2 ring-8 ring-primary/10 mb-3" />
    ),
  },
  {
    title: "Transparent Reporting",
    description:
      "Get clear performance reports and actionable insights so you can understand your SEO progress and identify new growth opportunities.",
    icon: (
      <IconFileBroken className="h-10 w-10 bg-primary/20 rounded-full p-2 ring-8 ring-primary/10 mb-3" />
    ),
  },
];
