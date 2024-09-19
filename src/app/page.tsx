"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import Header from "@/components/Header";

const Home: React.FC = () => {
  const { user, isLoaded } = useUser();
  const router = useRouter();

  React.useEffect(() => {
    if (isLoaded) {
      if (!user) {
        // Redirect to sign-in page if user is not authenticated
        router.replace("/sign-in");
      }
    }
  }, [isLoaded, user, router]);

  if (!isLoaded) {
    // Display a loading message while checking user status
    return <div className="text-center p-4">Loading...</div>;
  }

  if (!user) {
    // Display a redirect message while redirecting
    return <div className="text-center p-4">Redirecting...</div>;
  }

  return (
    <div>
      <Header />

      {/* Main Content Section */}
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          {/* Heading */}
          <div className="text-center mb-20">
            <h2 className="text-xs text-primary tracking-widest font-medium title-font mb-1">
              AI Content Generator Powered by SAMIR
            </h2>
            <h1 className="text-2xl sm:text-3xl font-semibold title-font mb-4 text-gray-900">
              Generate Content, Keywords, and Descriptions with Contentful AI
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-700">
              Unlock your creative potential with our AI content generator.
              Designed for writers, marketers, and content creators, our
              advanced tool uses cutting-edge technology to generate
              high-quality, personalized content in seconds. Whether you need
              engaging blog posts, compelling ad copy, or captivating social
              media updates, our AI assists you every step of the way.
            </p>
            <div className="mt-8">
              <button
                onClick={() => router.push("/dashboard")}
                className="text-white bg-mainColor hover:bg-primary-dark font-medium py-2 px-6 rounded-lg shadow-md transition duration-300"
              >
                Get Started
              </button>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                title: "Time Efficiency",
                description:
                  "Save hours on content creation. Our AI generates high-quality, relevant content in seconds, allowing you to focus on other important tasks.",
              },
              {
                title: "Consistency and Quality",
                description:
                  "Maintain a consistent tone and high-quality output across all your content. The AI ensures that every piece meets your standards, providing a seamless and professional experience for your audience.",
              },
              {
                title: "Cost-Effective",
                description:
                  "Reduce the need for extensive human resources. With our AI content generator, you get premium content without the high costs associated with hiring multiple writers and editors.",
              },
              {
                title: "Versatility",
                description:
                  "Adapt to any content need, from blog posts and social media updates to marketing copy and SEO articles. The AI is designed to handle diverse content requirements, making it a one-stop solution for all your writing needs.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="px-8 py-6 border-l-2 border-gray-200 border-opacity-60 shadow-lg rounded-lg hover:bg-gray-100 transition duration-300"
              >
                <h2 className="text-lg sm:text-xl text-gray-900 font-semibold title-font mb-2">
                  {feature.title}
                </h2>
                <p className="leading-relaxed text-base text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
