import { HoverEffect } from "../src/components/ui/card-hover-effect";

export default function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}

export const projects = [
  {
    title: "Address",
    description:
      "Pahadi Market, Near Main Market, Nangal, Nangal Township, India, Punjab region",
    link: "https://stripe.com",
  },
  {
    title: "Email",
    description:
      "hlooooobababalaknathnangal@.com.",
    link: "https://netflix.com",
  },
  {
    title: "Phone",
    description:
      "+91 9041282139 , +91 9417370414 ,  +91 9465365964",
    link: "https://google.com",
  },
  
];
