
import AboutClient from './AboutClient';


export const metadata = {
  title: "Our Story", // This will be automatically combined with the template in your layout.js
  description: "Discover the journey of Qasar Al Haya, from a simple idea to a leader in premium valet services. Meet our founders and learn about the mission that drives us.",
  
  // Open Graph data for social sharing
  openGraph: {
    title: "Our Story | Qasar Al Haya Valet Parking",
    description: "Meet the founders and discover the mission behind our commitment to excellence in valet services.",
  },

  // Twitter card data
  twitter: {
    title: "Our Story | Qasar Al Haya Valet Parking",
    description: "Meet the founders and discover the mission behind our commitment to excellence in valet services.",
    images: ['/founders/ceo.jpg', '/founders/general-manager.jpg', '/founders/owner.png'],
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
