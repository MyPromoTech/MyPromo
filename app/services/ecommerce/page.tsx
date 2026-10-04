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

import EcommerceImage from "@/app/assets/16544.jpg";

export default function EcommerceServices() {
  return (
    <>
      <PageHeader
        title={PageData.title}
        description={PageData.description}
        subtitle={PageData.subtitle}
        image={EcommerceImage}
      />

      <div className="py-24">
        <div className="px-10 lg:px-20">
          <div className="bg-primary/20 px-4 py-2 w-fit rounded-full mb-5">
            <TextShimmer className="bg-primary/5 w-fit rounded-full [--base-color:theme(colors.white)] [--base-gradient-color:theme(colors.white)] dark:[--base-color:theme(colors.white)] dark:[--base-gradient-color:theme(colors.orange.800)]">
              What We Offer
            </TextShimmer>
          </div>

          <h1 className="text-3xl lg:text-4xl">
            Our Ecommerce Services Include
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
  title: "Ecommerce Services",
  subtitle: "Grow Your Online Store with Expert Ecommerce Solutions",
  description:
    "At MyPromo, we help businesses build, manage, and grow successful ecommerce brands. From setting up your online store and optimizing product listings to driving targeted traffic and increasing conversions, our comprehensive ecommerce solutions are designed to turn visitors into customers and maximize your online sales.",
};

const data = [
  {
    title: "Ecommerce Website Development",
    content: (
      <div>
        <p className="text-xl lg:text-2xl text-muted-foreground">
          Build a professional, user-friendly, and conversion-focused
          ecommerce website tailored to your business. We create responsive
          online stores with seamless navigation, secure payment integration,
          product management, and a smooth shopping experience.
        </p>
      </div>
    ),
  },
  {
    title: "Ecommerce Store Setup",
    content: (
      <div>
        <p className="text-xl lg:text-2xl text-muted-foreground">
          Get your online store ready for business across platforms such as
          Shopify, WooCommerce, and other ecommerce solutions. We handle store
          configuration, categories, product organization, payment gateways,
          shipping settings, and essential integrations.
        </p>
      </div>
    ),
  },
  {
    title: "Product Listing & Optimization",
    content: (
      <div>
        <p className="text-xl lg:text-2xl text-muted-foreground">
          Create optimized product listings that attract customers and improve
          visibility. We work on product titles, descriptions, images,
          keywords, specifications, and other elements to make your products
          more discoverable and compelling.
        </p>
      </div>
    ),
  },
  {
    title: "Ecommerce SEO",
    content: (
      <div>
        <p className="text-xl lg:text-2xl text-muted-foreground">
          Improve your ecommerce website visibility on search engines with
          strategic SEO. Our approach includes keyword research, product page
          optimization, technical SEO, category optimization, internal
          linking, and content strategies to attract relevant organic traffic.
        </p>
      </div>
    ),
  },
  {
    title: "Marketplace Management",
    content: (
      <div>
        <p className="text-xl lg:text-2xl text-muted-foreground">
          Expand your reach across leading marketplaces such as Amazon,
          Flipkart, and other relevant platforms. We assist with product
          listings, catalog optimization, store management, promotional
          strategies, and marketplace visibility.
        </p>
      </div>
    ),
  },
  {
    title: "Ecommerce Performance Marketing",
    content: (
      <div>
        <p className="text-xl lg:text-2xl text-muted-foreground">
          Drive targeted traffic and sales through data-driven advertising
          campaigns. We create and manage campaigns across Google, Meta, and
          other relevant platforms with a focus on product discovery,
          conversions, remarketing, and return on ad spend.
        </p>
      </div>
    ),
  },
  {
    title: "Social Media Marketing for Ecommerce",
    content: (
      <div>
        <p className="text-xl lg:text-2xl text-muted-foreground">
          Build your brand and generate product demand through engaging social
          media content and campaigns. We create product-focused creatives,
          reels, promotional campaigns, and social media strategies designed to
          attract and engage potential customers.
        </p>
      </div>
    ),
  },
  {
    title: "Conversion Rate Optimization",
    content: (
      <div>
        <p className="text-xl lg:text-2xl text-muted-foreground">
          Turn more website visitors into paying customers. We analyze your
          ecommerce store and optimize product pages, CTAs, navigation, checkout
          experience, offers, and other conversion elements to reduce drop-offs
          and improve sales.
        </p>
      </div>
    ),
  },
  {
    title: "Ecommerce Analytics & Reporting",
    content: (
      <div>
        <p className="text-xl lg:text-2xl text-muted-foreground">
          Track your ecommerce performance with meaningful data and insights.
          We monitor traffic, product performance, conversions, customer
          behavior, advertising performance, and other key metrics to identify
          opportunities for growth.
        </p>
      </div>
    ),
  },
  {
    title: "Remarketing & Customer Retention",
    content: (
      <div>
        <p className="text-xl lg:text-2xl text-muted-foreground">
          Reconnect with customers and visitors who have already interacted
          with your brand. Our remarketing strategies help bring potential
          customers back to your store while retention campaigns encourage
          repeat purchases and long-term customer relationships.
        </p>
      </div>
    ),
  },
];

const CTADATA = {
  title: "Ready to grow",
  dualTitle: "your ecommerce business?",
  description:
    "Take your online store to the next level with MyPromo's ecommerce solutions. Whether you're launching a new ecommerce business or looking to scale an existing store, we're here to help you attract customers, increase sales, and build a stronger online brand.",
};

const items = [
  {
    title: "Complete Ecommerce Solutions",
    description:
      "From launching your online store to generating traffic and improving conversions, we provide end-to-end ecommerce marketing and growth solutions.",
    icon: (
      <IconClipboardCopy className="h-10 w-10 bg-primary/20 rounded-full p-2 ring-8 ring-primary/10 mb-3" />
    ),
  },
  {
    title: "Customized Strategies",
    description:
      "Every ecommerce business is different. We develop strategies based on your products, target audience, business goals, budget, and market.",
    icon: (
      <IconFileBroken className="h-10 w-10 bg-primary/20 rounded-full p-2 ring-8 ring-primary/10 mb-3" />
    ),
  },
  {
    title: "Focus on Sales & Growth",
    description:
      "Our strategies are designed not just to generate traffic, but to create meaningful customer journeys that support conversions, sales, and sustainable growth.",
    icon: (
      <IconSignature className="h-10 w-10 bg-primary/20 rounded-full p-2 ring-8 ring-primary/10 mb-3" />
    ),
  },
  {
    title: "Data-Driven Approach",
    description:
      "We use performance data and analytics to understand what's working, identify opportunities, and continuously optimize your ecommerce campaigns.",
    icon: (
      <IconTableColumn className="h-10 w-10 bg-primary/20 rounded-full p-2 ring-8 ring-primary/10 mb-3" />
    ),
  },
  {
    title: "Transparent Reporting",
    description:
      "Get clear and regular reports on your ecommerce performance, including traffic, campaigns, conversions, sales-related metrics, insights, and recommendations.",
    icon: (
      <IconClipboardCopy className="h-10 w-10 bg-primary/20 rounded-full p-2 ring-8 ring-primary/10 mb-3" />
    ),
  },
];