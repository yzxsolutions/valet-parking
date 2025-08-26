import ContactClient from './ContactClient'; // Import the client component you just renamed

// --- SEO Metadata for the Contact Page ---
export const metadata = {
  title: "Contact Us", // This will be automatically combined with the template in your layout.js
  description: "Get in touch with the Qasar Al Haya team. Reach out for questions, inquiries, or to get a quote for our premium valet parking services in Dubai.",
  
  // Open Graph data for social sharing
  openGraph: {
    title: "Contact Us | Qasar Al Haya Valet Parking",
    description: "We're here to help. Contact us today to learn more about our professional valet services.",
    // You can specify a unique image for this page, or it will use the default from layout.js
    // For a contact page, the default is usually fine.
  },

  // Twitter card data
  twitter: {
    title: "Contact Us | Qasar Al Haya Valet Parking",
    description: "We're here to help. Contact us today to learn more about our professional valet services.",
  },
};


// The Server Component that renders your page
export default function ContactPage() {
  // This component fetches the metadata above and then renders the interactive client component.
  return <ContactClient />;
}