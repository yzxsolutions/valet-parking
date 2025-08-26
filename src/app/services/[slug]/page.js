import { notFound } from 'next/navigation';
import services from '../../../../data/serviceData.json';
import ServicePageClient from './ServicePageClient';


// ... (generateStaticParams function stays the same)

export default async function ServicePage({ params }) {

 
  const { slug } = params;

  // --- START DEBUGGING ---
  console.log("--------------------");
  console.log("Slug from URL:", slug); 
  console.log("Available slugs in JSON:", Object.keys(services));
  // --- END DEBUGGING ---

  const serviceData = services[slug];

  if (!serviceData) {
    console.log(`Data lookup failed for slug: '${slug}'. Triggering 404.`);
    notFound();
  }

  return <ServicePageClient serviceData={serviceData} />;
}