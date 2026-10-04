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

import EmailWhatsappImage from "@/app/assets/email-whatsapp.png";

export default function EmailWhatsappMarketing() {
  return (
    <>
      <PageHeader
        title={PageData.title}
        description={PageData.description}
        subtitle={PageData.subtitle}
        image={EmailWhatsappImage}
      />

      <div className="py-24">
        <div className="px-10 lg:px-20">
          <div className="bg-primary/20 px-4 py-2 w-fit rounded-full mb-5">
            <TextShimmer
              className="bg-primary/5 w-fit rounded-full [--base-color:theme(colors.white)] [--base-gradient-color:theme(colors.white)] dark:[--base-color:theme(colors.white)] dark:[--base-gradient-color:theme(colors.orange.800)]"
            >
              What We Offer
            </TextShimmer>
          </div>

          <h1 className="text-3xl lg:text-4xl">
            Our Email & WhatsApp Marketing Services Include
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
  title: "Email & WhatsApp Marketing",
  subtitle: "Reach Customers. Build Relationships. Drive More Conversions.",
  description:
    "At MyPromo, we help businesses connect with their customers through targeted Email & WhatsApp Marketing campaigns. From promotional campaigns and customer engagement to lead nurturing and automated communication, we create strategies that help businesses stay connected and turn prospects into customers.",
};

const data = [
  {
    title: "Email Marketing Campaigns",
    content: (
      <p>
        Create targeted email campaigns that keep your audience informed,
        engaged, and connected with your brand. We manage campaign planning,
        content, design, audience segmentation, scheduling, and performance
        tracking.
      </p>
    ),
    icon: <IconClipboardCopy />,
  },
  {
    title: "WhatsApp Marketing",
    content: (
      <p>
        Reach customers directly through WhatsApp with personalized and
        engaging business communication. We help businesses use WhatsApp for
        promotions, lead nurturing, customer updates, offers, reminders, and
        enquiries.
      </p>
    ),
    icon: <IconFileBroken />,
  },
  {
    title: "Lead Nurturing",
    content: (
      <p>
        Not every lead is ready to buy immediately. We create communication
        strategies that keep your business connected with prospects throughout
        their buying journey.
      </p>
    ),
    icon: <IconSignature />,
  },
  {
    title: "Promotional Campaigns",
    content: (
      <p>
        Promote your latest offers, products, services, launches, events, and
        seasonal campaigns through targeted email and WhatsApp communication.
      </p>
    ),
    icon: <IconTableColumn />,
  },
  {
    title: "Customer Retention Marketing",
    content: (
      <p>
        Stay connected with existing customers and encourage repeat purchases
        through personalized offers, updates, reminders, and valuable content.
      </p>
    ),
    icon: <IconClipboardCopy />,
  },
  {
    title: "Email Automation",
    content: (
      <p>
        Automate important customer communication based on actions, interests,
        and customer journeys. This can include welcome emails, follow-ups,
        reminders, abandoned cart emails, and post-purchase communication.
      </p>
    ),
    icon: <IconFileBroken />,
  },
  {
    title: "WhatsApp Automation",
    content: (
      <p>
        Create automated WhatsApp communication workflows to respond faster,
        follow up with leads, share updates, and improve customer engagement.
      </p>
    ),
    icon: <IconSignature />,
  },
  {
    title: "Audience Segmentation",
    content: (
      <p>
        Send more relevant messages by dividing your audience based on
        demographics, interests, behavior, purchase history, engagement, and
        customer stage.
      </p>
    ),
    icon: <IconTableColumn />,
  },
  {
    title: "Email & WhatsApp Content",
    content: (
      <p>
        We create clear, engaging, and conversion-focused content designed
        specifically for email and WhatsApp communication.
      </p>
    ),
    icon: <IconClipboardCopy />,
  },
  {
    title: "Campaign Analytics & Reporting",
    content: (
      <p>
        Track campaign performance through important metrics such as open
        rates, click-through rates, engagement, responses, conversions, and
        customer actions.
      </p>
    ),
    icon: <IconFileBroken />,
  },
];

const items = [
  {
    title: "Personalized Communication",
    description:
      "We help you deliver relevant messages to the right audience instead of sending the same communication to everyone.",
    icon: <IconClipboardCopy />,
  },
  {
    title: "Conversion-Focused Strategy",
    description:
      "Our campaigns are designed to move customers from awareness and engagement toward enquiries, purchases, and repeat business.",
    icon: <IconFileBroken />,
  },
  {
    title: "Multi-Channel Approach",
    description:
      "Combine the reach of email with the direct communication of WhatsApp to create a stronger customer engagement strategy.",
    icon: <IconSignature />,
  },
  {
    title: "Automated Follow-Ups",
    description:
      "Automation helps your business stay connected with leads and customers without requiring every interaction to be handled manually.",
    icon: <IconTableColumn />,
  },
  {
    title: "Data-Driven Campaigns",
    description:
      "We monitor campaign performance and use customer engagement data to continuously improve communication strategies.",
    icon: <IconClipboardCopy />,
  },
  {
    title: "Transparent Reporting",
    description:
      "Get clear insights into campaign performance, audience engagement, and conversions so you know what your marketing is achieving.",
    icon: <IconFileBroken />,
  },
];

const CTADATA = {
  title: "Ready to Connect With Your",
  dualTitle: "Customers?",
  description:
    "Build stronger customer relationships and create more conversion opportunities with strategic Email & WhatsApp Marketing. Let's create a communication strategy that keeps your business connected with your customers at every stage of their journey.",
};