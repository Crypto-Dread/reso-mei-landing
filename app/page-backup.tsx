"use client";

import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Book, Instagram, Twitter, Youtube, Sun, Moon } from "lucide-react";
import Link from "next/link";
import { useTheme } from "next-themes";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export default function ResoMeiLanding() {
  const { theme, setTheme } = useTheme();
  const [age, setAge] = useState("");
  const [expertiseFactor, setExpertiseFactor] = useState<number | null>(null);

  const calculateExpertiseFactor = () => {
    const ageNum = parseFloat(age);
    if (!isNaN(ageNum) && ageNum > 0) {
      const factor = ageNum / 1.14;
      setExpertiseFactor(Number(factor.toFixed(2)));
    } else {
      setExpertiseFactor(null);
      alert("Please enter a valid age greater than 0.");
    }
  };

  const clearForm = () => {
    setAge("");
    setExpertiseFactor(null);
  };

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-white border-8 border-gray-200 shadow-inner m-4 md:m-8 rounded-lg overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/sunset.jpg"
            alt="Sunset over ocean"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto py-16">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 drop-shadow-lg">Reso-Mei</h1>
          <div className="space-y-4 mb-12">
            <h2 className="text-2xl text-[#b2ebf2] drop-shadow-lg">Discover</h2>
            <h2 className="text-3xl md:text-4xl italic text-white drop-shadow-lg">The Resonance Within</h2>
          </div>
          <div className="max-w-2xl mx-auto space-y-8">
            <p className="text-lg text-white drop-shadow-md backdrop-blur-sm bg-black/10 p-6 rounded-lg">
              Discover <span className="italic">The Resonance Within</span>, a groundbreaking guide to your unique
              resonance journey across 18 nodes and three layers—emotional, somatic, and spiritual. This book embraces
              you as a student, teacher, guiding you to align your story. Pre-order your copy and start exploring.
            </p>
            <p className="text-lg text-gray-100 drop-shadow-md backdrop-blur-sm bg-black/10 p-6 rounded-lg">
              Find out your expertise factor based on 10,000 hours of practise. Your factor (Age ÷ 1.14) reveals how
              your lived experience—every moment as student and teacher—shapes your unique mastery, guiding your
              resonance journey.
            </p>
          </div>
        </div>
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="absolute top-4 right-4 p-2 rounded-full bg-gray-200 hover:bg-gray-300 z-20"
        >
          {theme === "dark" ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
        </button>
      </section>

      {/* Waiting List Form Section */}
      <section className="py-12 px-4 bg-gray-50 border-8 border-gray-200 shadow-inner m-4 md:m-8 rounded-lg mb-16">
        <div className="max-w-md mx-auto text-center space-y-6">
          <h3 className="text-4xl font-bold text-[#00695c] mb-4">Join the Waiting List</h3>
          <p className="text-gray-700 text-lg">Be the first to know when The Resonance Within is available for pre-order.</p>
          <div className="space-y-4">
            <Input type="text" placeholder="Name" className="border-gray-300 bg-white text-gray-800 placeholder:text-gray-500" />
            <Input type="email" placeholder="Email" className="border-gray-300 bg-white text-gray-800 placeholder:text-gray-500" />
            <Button className="w-full bg-[#00695c] hover:bg-[#004d40] text-white transition-colors py-3 text-lg">
              Join the Waiting List
            </Button>
          </div>
        </div>
      </section>

      {/* Expertise Factor Calculator Section */}
      <section className="py-12 px-4 bg-white border-8 border-gray-200 shadow-inner m-4 md:m-8 rounded-lg mb-16">
        <div className="max-w-md mx-auto text-center space-y-6">
          <h3 className="text-2xl font-bold text-[#00695c]">Calculate Your Expertise Factor</h3>
          <p className="text-gray-700">
            Find out your expertise factor based on 10,000 hours of practice. Your factor (Age ÷ 1.14)
            reveals how your lived experience shapes your unique mastery.
          </p>
          <div className="space-y-4">
            <Input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              placeholder="Enter your age"
              className="border-gray-300 bg-white text-gray-800 placeholder:text-gray-500"
              min="0"
            />
            <div className="flex gap-4 justify-center">
              <Button
                onClick={calculateExpertiseFactor}
                className="bg-[#00695c] hover:bg-[#004d40] text-white transition-colors"
              >
                Calculate
              </Button>
              <Button
                onClick={clearForm}
                className="bg-gray-400 hover:bg-gray-500 text-white transition-colors"
              >
                Clear
              </Button>
            </div>
            {expertiseFactor !== null && (
              <p className="text-lg text-gray-700 font-semibold">
                Your Expertise Factor: {expertiseFactor}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Explore the 18 Nodes Section */}
      <section id="explore-18-nodes" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#00695c] text-center mb-12">Explore the 18 Nodes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Nodes 1-7 */}
            <div className="bg-background rounded-lg shadow-lg">
              <div className="relative w-full h-[300px]">
                <Image
                  src="/emotional.JPEG"
                  alt="Nodes 1 - 7 - Two people hugging"
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <Accordion type="single" collapsible className="p-4">
                <AccordionItem value="emotional">
                  <AccordionTrigger className="text-xl font-semibold text-[#00695c]">
                    Nodes 1 - 7
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-medium">Node 1: Life as a journey to Resonance</h3>
                        <p>The culmination of practicing the other nodes. The transforming of the internal layers of Resonance. Recognition of Resonance as both the path and destination.</p>
                      </div>
                      <div>
                        <h3 className="font-medium">Node 2: Awareness - The Foundation of Resonance</h3>
                        <p>Provides the 'light' to see misalignments. Transforms change from 'rearranging furniture in the dark' to a deliberate unfolding. Creates the initial clarity needed to recognize what true resonance feels like.</p>
                      </div>
                      <div>
                        <h3 className="font-medium">Node 3: Existence Beyond the Physical - Expanding Perspective</h3>
                        <p>Introduces the idea that life is more than tangible achievements. Suggests a deeper connection beyond material world. Helps understand resonance as a transcendent experience, not just a physical state.</p>
                      </div>
                      <div>
                        <h3 className="font-medium">Node 4: Experience as a Guide - Learning Through Life</h3>
                        <p>Views every moment as a potential teacher. Positive experiences reaffirm our direction. Challenging experiences push us towards growth and alignment. Provides the raw material for understanding personal resonance.</p>
                      </div>
                      <div>
                        <h3 className="font-medium">Node 5 & 6: Present Moment and Mindfulness - The Crucible of Resonance</h3>
                        <p>Present moment is where resonance takes root. Mindfulness creates the space to truly experience alignment. Helps distinguish between reactive living and intentional being. Allows for moment-to-moment attunement to one's inner truth.</p>
                      </div>
                      <div>
                        <h3 className="font-medium">Node 7: Self-Reflection and Shadow Work - Integrating the Whole Self</h3>
                        <p>Explores hidden aspects of self. Transforms ignored parts into sources of strength. Leads to wholeness, where every part is acknowledged. Creates a more authentic foundation for resonance.</p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            {/* Nodes 8-14 */}
            <div className="bg-background rounded-lg shadow-lg">
              <div className="relative w-full h-[300px]">
                <Image
                  src="/somatic.JPEG"
                  alt="Nodes 8 - 14 - Somatic yoga"
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <Accordion type="single" collapsible className="p-4">
                <AccordionItem value="somatic">
                  <AccordionTrigger className="text-xl font-semibold text-[#00695c]">
                    Nodes 8 - 14
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-medium">Node 8: Acceptance of Your Unique Journey - Embracing Individual Path</h3>
                        <p>Stops comparison with others. Honors personal experiences and growth. Allows resonance to emerge from one's unique narrative. Recognizes that alignment is deeply personal.</p>
                      </div>
                      <div>
                        <h3 className="font-medium">Node 9: Resonance Over Achievement - Redefining Success</h3>
                        <p>Directly challenges external validation. Prioritizes inner alignment over external milestones. Creates space for a more meaningful definition of success.</p>
                      </div>
                      <div>
                        <h3 className="font-medium">Node 10: Presence - Fully Inhabiting the Moment</h3>
                        <p>Goes beyond mere attention. Engages with life wholeheartedly. Requires meeting the moment with clarity and compassion. Creates the conditions for deep resonance.</p>
                      </div>
                      <div>
                        <h3 className="font-medium">Node 11: Acceptance - Aligning with Reality</h3>
                        <p>Not about resignation, but courageous openness. Creates space for growth and transformation. Removes resistance to what is. Allows natural alignment to emerge.</p>
                      </div>
                      <div>
                        <h3 className="font-medium">Node 12: Curiosity - The Pathway to Discovery</h3>
                        <p>Drives exploration beyond surface level. Questions assumptions. Opens door to new perspectives. Keeps the journey of resonance dynamic and alive.</p>
                      </div>
                      <div>
                        <h3 className="font-medium">Node 13: Compassion - The Binding Force</h3>
                        <p>Builds bridges of connection. Extends grace and understanding. Allows for self-acceptance. Creates the emotional environment for resonance to flourish.</p>
                      </div>
                      <div>
                        <h3 className="font-medium">Node 14: Authenticity - The True Self</h3>
                        <p>Goes beyond surface-level expression. Requires deep understanding of self. Stems from awareness and higher consciousness. Becomes the vehicle for genuine resonance.</p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            {/* Practices 15-18 */}
            <div className="bg-background rounded-lg shadow-lg">
              <div className="relative w-full h-[300px]">
                <Image
                  src="/spiritual1.JPG"
                  alt="Practices 15 - 18 - Meditation"
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <Accordion type="single" collapsible className="p-4">
                <AccordionItem value="spiritual">
                  <AccordionTrigger className="text-xl font-semibold text-[#00695c]">
                    Practices 15 - 18
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-medium">Node 15: Journaling</h3>
                        <p>Acts as a mirror reflecting one's authentic self. Documents the evolution of personal resonance over time. Creates a dialogue between the conscious and subconscious mind. Transforms fleeting awareness into concrete understanding. Provides a safe space to explore the true self without judgment.</p>
                      </div>
                      <div>
                        <h3 className="font-medium">Node 16: Meditation & Breathwork</h3>
                        <p>Provide tools for internal dialogue. Create space for reflection. Cultivate presence and awareness. Help refine the experience of resonance.</p>
                      </div>
                      <div>
                        <h3 className="font-medium">Node 17: Compassionate Reflection - Healing Through Gentleness</h3>
                        <p>Transforms self-review from harsh judgment to kind understanding. Views challenges as opportunities for growth. Softens the internal dialogue. Creates a compassionate lens for personal transformation. Allows for healing and integration of experiences. Provides a gentle approach to understanding one's journey.</p>
                      </div>
                      <div>
                        <h3 className="font-medium">Node 18: Connection with Nature - Expanding Resonance Beyond Self</h3>
                        <p>Offers a profound teacher of presence and interconnectedness. Recalibrates personal energy. Inspires awe and a sense of belonging. Provides a broader context for individual experience. Demonstrates resonance with the wider world. Shows how alignment can extend beyond personal consciousness to a larger ecosystem.</p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* Discover Your Resonance Journey Banner */}
      <div className="my-20 h-[300px] bg-white border-8 border-gray-200 shadow-inner flex items-center justify-center text-[#00695c] relative overflow-hidden rounded-lg">
        <Image
          src="/placeholder.svg?height=300&width=1200&text=Resonance Journey"
          alt="Discover Your Resonance Journey"
          fill
          className="object-cover opacity-70"
        />
        <div className="relative z-10 text-center">
          <h3 className="text-3xl font-bold mb-4">Discover Your Resonance Journey</h3>
          <Button
            asChild
            className="bg-[#00695c] hover:bg-[#004d40] text-white transition-colors"
          >
            <Link href="#explore-18-nodes">Learn More</Link>
          </Button>
        </div>
      </div>

      {/* Blog Subscription Section */}
      <section className="py-12 px-4 bg-white border-8 border-gray-200 shadow-inner m-4 md:m-8 rounded-lg mb-16">
        <div className="max-w-md mx-auto text-center space-y-6">
          <h3 className="text-2xl font-bold text-[#00695c]">Subscribe to Our Blog</h3>
          <p className="text-gray-700">Get the latest insights on your resonance journey.</p>
          <div className="space-y-4">
            <Input type="text" placeholder="Name" className="border-gray-300 bg-white text-gray-800 placeholder:text-gray-500" />
            <Input type="email" placeholder="Email" className="border-gray-300 bg-white text-gray-800 placeholder:text-gray-500" />
            <Button className="w-full bg-[#00695c] hover:bg-[#004d40] text-white transition-colors">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA and Social Media Section */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <div className="space-y-6">
            <p className="text-xl text-gray-700">
              Start aligning your unique story across 18 nodes—emotional, somatic, and spiritual—with your free
              Resonance guide.
            </p>
            <Button size="lg" className="bg-[#00695c] hover:bg-[#004d40] hover:scale-[1.03] transition-transform text-lg py-6 text-white">
              DOWNLOAD YOUR COMPLIMENTARY GUIDE
            </Button>
          </div>
          <div className="flex justify-center space-x-6 py-10">
            {[
              { Icon: Book, label: "TikTok", href: "https://tiktok.com/@reso.mei" },
              { Icon: Instagram, label: "Instagram", href: "https://instagram.com/reso.mei" },
              { Icon: Twitter, label: "X", href: "https://x.com/@ResoMeiConcept" },
              { Icon: Youtube, label: "YouTube", href: "https://youtube.com/@resomei" },
            ].map(({ Icon, label, href }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[#00695c] transition-colors"
                aria-label={`Follow Reso-Mei on ${label}`}
              >
                <Icon size={40} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#333] text-white text-sm py-6 px-4 text-center">
        <p>
          © {new Date().getFullYear()} Reso-Mei. All rights reserved. |{" "}
          <Link href="/privacy-policy" className="underline hover:text-[#00695c]">
            Privacy Policy
          </Link>
        </p>
      </footer>
    </div>
  );
}