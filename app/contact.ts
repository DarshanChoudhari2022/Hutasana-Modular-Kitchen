export const phoneDisplay = "+91 83909 98088";
export const phoneHref = "tel:+918390998088";
export const whatsappNumber = "918390998088";

const baseMessage =
  "Hello Hutasana Intelligent Kitchen Designs LLP, I want a modular kitchen quotation.";

export const whatsappMessages = {
  general:
    "Hello Hutasana Intelligent Kitchen Designs LLP, I am sharing my details for a modular kitchen quotation.",
  default: baseMessage,
  b2b: `${baseMessage} This is a B2B project enquiry.`,
  individual: `${baseMessage} This is for my home kitchen.`,
};

export function whatsappHref(message: string) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}
