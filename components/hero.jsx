"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const HeroSection = () => {
  const imageRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 100;

      setIsScrolled(scrollPosition > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="pt-40 pb-20 px-4">
      <div className="container mx-auto text-center">
        <h1
          className="text-5xl md:text-8xl lg:text-[105px] pb-6"
          style={{
            backgroundImage: "linear-gradient(to bottom right, #2563EB, #7C3AED)", // from-blue-600 to-purple-600
            fontWeight: "800",
            letterSpacing: "-0.05em",
            paddingBottom: "0.5rem",
            paddingRight: "0.5rem",
            color: "transparent",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Manage Your Finances <br /> with Intelligence
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          An AI-powered financial management platform that helps you track,
          analyze, and optimize your spending with real-time insights.
        </p>
        <div className="flex justify-center space-x-4">
          <Link href="/dashboard">
            <Button size="lg" className="px-8">
              Get Started
            </Button>
          </Link>
          <Link href="https://www.youtube.com/@poshitrathi6570">
            <Button size="lg" variant="outline" className="px-8">
              Watch Demo
            </Button>
          </Link>
        </div>

        {/* Inline styles for perspective and transform */}
        <div style={{ perspective: "1000px", marginTop: "1.25rem" }}>
          <div
            ref={imageRef}
            style={{
              transform: isScrolled
                ? "rotateX(0deg) scale(1) translateY(40px)"
                : "rotateX(15deg) scale(1)",
              transition: "transform 0.5s ease-out",
              willChange: "transform",
            }}
          >
            <Image
              src="/banner.jpeg"
              width={1280}
              height={720}
              alt="Dashboard Preview"
              className="rounded-lg shadow-2xl border mx-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
