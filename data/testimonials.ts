import { Testimonial } from "@/types";

// `avatar` is left empty on purpose — the Avatar component falls back to a
// gradient initial badge, so no external photo is required.
export const testimonials: Testimonial[] = [
  {
    id: "t-1",
    name: "Priya Sharma",
    role: "Founder, Lumé Fashion",
    avatar: "",
    review:
      "Arjun rebuilt our storefront from scratch and the difference is night and day. Beautiful design, blazing fast, and our conversion rate jumped noticeably within weeks.",
    rating: 5,
  },
  {
    id: "t-2",
    name: "Daniel Osei",
    role: "Product Lead, FlowBase",
    avatar: "",
    review:
      "One of the most detail-oriented developers I've worked with. He turned our Figma designs into a pixel-perfect, animated landing page ahead of schedule.",
    rating: 5,
  },
  {
    id: "t-3",
    name: "Meera Iyer",
    role: "CEO, Studio Martin",
    avatar: "",
    review:
      "Great communicator, fast turnaround, and genuinely cares about the end result. Our new site has received so many compliments from clients.",
    rating: 5,
  },
  {
    id: "t-4",
    name: "Thomas Wright",
    role: "CTO, Nexora",
    avatar: "",
    review:
      "Arjun's frontend work on our analytics dashboard was rock solid — clean code, thoughtful component structure, and excellent performance out of the box.",
    rating: 4,
  },
];
