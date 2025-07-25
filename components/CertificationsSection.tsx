import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { VscAzure } from "react-icons/vsc";
import { FaAws } from "react-icons/fa";
import Image from "next/image";
import FadeContent from "@/blocks/Animations/FadeContent/FadeContent";

const certs = [
  {
    icon: <VscAzure size={48} className="text-blue-500" />,
    title: "Microsoft Certified: Azure Fundamentals (AZ-900)",
    date: "2025",
    badge: "Azure",
    link: "https://www.credly.com/badges/your-az900-link",
  },
  {
    icon: <VscAzure size={48} className="text-blue-400" />,
    title: "Microsoft Certified: Azure AI Fundamentals (AI-900)",
    date: "2025",
    badge: "Azure AI",
    link: "https://www.credly.com/badges/your-ai900-link",
  },
  {
    icon: <FaAws size={48} className="text-yellow-500" />,
    title: "AWS Certified Cloud Practitioner",
    date: "2025",
    badge: "AWS",
    link: "https://www.credly.com/badges/your-aws-link",
  },
  {
    icon: (
      <Image
        src="/ibm.png"
        alt="IBM Logo"
        width={64}
        height={64}
        className=""
      />
    ),
    title: "IBM Data Analytics",
    date: "2023",
    badge: "IBM",
    link: "https://www.credly.com/badges/your-ibm-link",
  },
];

export default function CertificationsSection() {
  return (
    <section className="w-full py-12 flex justify-center">
      <FadeContent blur={true} duration={1000} initialOpacity={0} className="w-full">
        <div className="relative max-w-3xl w-full mx-auto rounded-3xl shadow-2xl overflow-hidden border border-white/20 bg-black/60 px-4">
          <div className="relative z-10 w-full px-2 py-12">
            <h2 className="text-4xl font-semibold mb-8 text-center">Certifications</h2>
            <Carousel className="w-full max-w-xl mx-auto">
              <CarouselContent>
                {certs.map((cert) => (
                  <CarouselItem key={cert.title}>
                    <Card className="flex flex-col items-center justify-center p-8 bg-white/10 backdrop-blur-md border border-white/20 shadow-lg min-h-[340px]">
                      <CardHeader className="flex flex-col items-center justify-center w-full">
                          {cert.icon}
                        <CardTitle className="mt-4 text-xl text-center">{cert.title}</CardTitle>
                        <CardDescription className="mt-2 text-sm text-gray-400">{cert.date}</CardDescription>
                      </CardHeader>
                      <CardContent className="flex flex-col items-center justify-center w-full">
                        <span className="mt-2 px-3 py-1 rounded-full bg-white/10 text-primary text-xs font-semibold">{cert.badge}</span>
                        <a
                          href={cert.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-4 underline text-primary text-sm"
                        >
                          View Credential
                        </a>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </FadeContent>
    </section>
  );
}