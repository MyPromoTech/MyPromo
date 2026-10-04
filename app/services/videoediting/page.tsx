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

import VideoEditingImage from "@/app/assets/videoediting.jpg";

export default function VideoEditing() {
  return (
    <>
      <PageHeader
        title={PageData.title}
        description={PageData.description}
        subtitle={PageData.subtitle}
        image={VideoEditingImage}
      />

      <div className="py-24">
        <div className="px-10 lg:px-20">
          <div className="bg-primary/20 px-4 py-2 w-fit rounded-full mb-5">
            <TextShimmer className="bg-primary/5 w-fit rounded-full [--base-color:theme(colors.white)] [--base-gradient-color:theme(colors.white)] dark:[--base-color:theme(colors.white)] dark:[--base-gradient-color:theme(colors.orange.800)]">
              What We Offer
            </TextShimmer>
          </div>

          <h1 className="text-3xl lg:text-4xl">
            Our Video Editing Services Include
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
  title: "Video Editing",
  subtitle: "Turn Your Ideas Into Engaging Video Content",
  description:
    "At MyPromo, we transform raw footage, concepts, and creative ideas into professional video content designed for today's digital platforms. From short-form Reels and promotional videos to brand films and social media content, we combine creative editing with marketing-focused storytelling to help your videos attract attention and communicate your message effectively.",
};

const data = [
  {
    title: "Social Media Video Editing",
    content: (
      <div>
        <p className="text-xl lg:text-2xl text-muted-foreground">
          Create engaging videos for Instagram, Facebook, LinkedIn, YouTube,
          and other social platforms, optimized for the way audiences consume
          content online.
        </p>
      </div>
    ),
  },
  {
    title: "Reels & Short-Form Videos",
    content: (
      <div>
        <p className="text-xl lg:text-2xl text-muted-foreground">
          Edit attention-grabbing Reels, Shorts, and other short-form videos
          with strong hooks, fast-paced editing, transitions, captions,
          graphics, and platform-friendly formats.
        </p>
      </div>
    ),
  },
  {
    title: "Promotional Videos",
    content: (
      <div>
        <p className="text-xl lg:text-2xl text-muted-foreground">
          Turn your products, services, offers, and campaigns into compelling
          promotional videos designed to communicate your value proposition
          and encourage action.
        </p>
      </div>
    ),
  },
  {
    title: "Brand Videos",
    content: (
      <div>
        <p className="text-xl lg:text-2xl text-muted-foreground">
          Create professional brand videos that communicate your company
          story, personality, values, services, and unique positioning.
        </p>
      </div>
    ),
  },
  {
    title: "Product & Service Videos",
    content: (
      <div>
        <p className="text-xl lg:text-2xl text-muted-foreground">
          Showcase your products or services through demonstrations, explainers,
          feature highlights, tutorials, and other engaging video formats.
        </p>
      </div>
    ),
  },
  {
    title: "Video Ads",
    content: (
      <div>
        <p className="text-xl lg:text-2xl text-muted-foreground">
          Create marketing-focused video ads for Meta, Google, YouTube, and
          other advertising platforms, with attention-grabbing openings, clear
          messaging, branding, and strong calls-to-action.
        </p>
      </div>
    ),
  },
  {
    title: "Corporate & Business Videos",
    content: (
      <div>
        <p className="text-xl lg:text-2xl text-muted-foreground">
          Edit corporate presentations, company profiles, event videos,
          interviews, testimonials, announcements, and other professional
          business content.
        </p>
      </div>
    ),
  },
  {
    title: "Motion Graphics & Text Animation",
    content: (
      <div>
        <p className="text-xl lg:text-2xl text-muted-foreground">
          Enhance videos with animated text, titles, icons, callouts, graphics,
          and visual elements that make information easier to understand and
          more engaging.
        </p>
      </div>
    ),
  },
  {
    title: "Subtitles & Captions",
    content: (
      <div>
        <p className="text-xl lg:text-2xl text-muted-foreground">
          Add professionally styled subtitles and captions to improve
          accessibility, retention, and engagement—especially for viewers
          watching videos without sound.
        </p>
      </div>
    ),
  },
  {
    title: "Video Optimization",
    content: (
      <div>
        <p className="text-xl lg:text-2xl text-muted-foreground">
          Prepare videos in the right aspect ratios, resolutions, file formats,
          and durations for different platforms, including 9:16, 1:1, and
          16:9 formats.
        </p>
      </div>
    ),
  },
];

const CTADATA = {
  title: "Ready to Make Better Videos?",
  dualTitle: "",
  description:
    "Turn your raw footage and ideas into professional video content that captures attention and strengthens your digital presence. Get in touch with MyPromo today to discuss your video editing requirements.",
};

const items = [
  {
    title: "Marketing-Focused Editing",
    description:
      "We don't just edit footage—we structure videos to capture attention, communicate your message, and support your marketing objectives.",
    icon: (
      <IconClipboardCopy className="h-10 w-10 bg-primary/20 rounded-full p-2 ring-8 ring-primary/10 mb-3" />
    ),
  },
  {
    title: "Platform-Specific Content",
    description:
      "Your videos are edited according to the requirements and viewing behavior of each platform.",
    icon: (
      <IconFileBroken className="h-10 w-10 bg-primary/20 rounded-full p-2 ring-8 ring-primary/10 mb-3" />
    ),
  },
  {
    title: "Creative Storytelling",
    description:
      "We use pacing, visuals, transitions, text, music, and storytelling techniques to make your content more engaging.",
    icon: (
      <IconSignature className="h-10 w-10 bg-primary/20 rounded-full p-2 ring-8 ring-primary/10 mb-3" />
    ),
  },
  {
    title: "Brand Consistency",
    description:
      "We maintain your brand's visual identity, messaging, typography, and overall style across your video content.",
    icon: (
      <IconTableColumn className="h-10 w-10 bg-primary/20 rounded-full p-2 ring-8 ring-primary/10 mb-3" />
    ),
  },
];