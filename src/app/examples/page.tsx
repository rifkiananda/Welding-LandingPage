'use client';

import React from 'react';
import Link from 'next/link';

const ExamplesPage = () => {
  const exampleCategories = [
    {
      id: 1,
      title: "Workshop & Business",
      examples: [
        {
          id: 1,
          title: "Hero Banner Image",
          description: "Professional workshop interior with welding in progress",
          fileName: "workshop-hero.jpg",
          size: "1200x600px",
          tips: "Show organized tools, good lighting, and active welding"
        },
        {
          id: 2,
          title: "Workshop Interior",
          description: "Wide shot of entire workshop with equipment",
          fileName: "workshop-interior.jpg",
          size: "800x600px",
          tips: "Include various machines and organized material storage"
        }
      ]
    },
    {
      id: 2,
      title: "Project Examples",
      examples: [
        {
          id: 3,
          title: "Fence Welding",
          description: "Completed residential or commercial fence project",
          fileName: "fence-project.jpg",
          size: "800x600px",
          tips: "Show both wide shot and close-up of weld details"
        },
        {
          id: 4,
          title: "Canopy Structure",
          description: "Metal canopy or carport installation",
          fileName: "canopy-project.jpg",
          size: "800x600px",
          tips: "Highlight structural integrity and finish quality"
        },
        {
          id: 5,
          title: "Window Grilles",
          description: "Decorative security grilles for windows",
          fileName: "grilles-project.jpg",
          size: "800x600px",
          tips: "Focus on pattern design and secure installation"
        },
        {
          id: 6,
          title: "Gate Installation",
          description: "Custom entrance gate (swing or sliding)",
          fileName: "gate-project.jpg",
          size: "800x600px",
          tips: "Show both closed and open positions if possible"
        }
      ]
    },
    {
      id: 3,
      title: "Process Photos",
      examples: [
        {
          id: 7,
          title: "Welding in Progress",
          description: "Professional welder working on a project",
          fileName: "welding-process.jpg",
          size: "800x600px",
          tips: "Capture sparks and welding arc for dynamic effect"
        },
        {
          id: 8,
          title: "Measuring & Planning",
          description: "Blueprint review and measurement process",
          fileName: "planning-process.jpg",
          size: "800x600px",
          tips: "Show precision tools and technical drawings"
        },
        {
          id: 9,
          title: "Finishing Work",
          description: "Grinding, polishing, or coating application",
          fileName: "finishing-process.jpg",
          size: "800x600px",
          tips: "Highlight attention to detail and surface quality"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Link href="/" className="inline-block text-green-600 hover:text-green-700 mb-4">
            ← Back to Home
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">Image Examples for Welding Service</h1>
          <p className="text-gray-600 mt-2 max-w-3xl mx-auto">
            These examples show the types of images you should use for your welding service website. 
            Take similar photos of your actual work for the best results.
          </p>
        </div>

        {exampleCategories.map(category => (
          <div key={category.id} className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
              {category.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.examples.map(example => (
                <div key={example.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="bg-gradient-to-br from-gray-700 to-gray-900 w-full h-48 flex flex-col items-center justify-center text-center p-4">
                    <div className="bg-gray-200 border-2 border-dashed border-gray-400 rounded-xl w-16 h-16 mx-auto mb-3" />
                    <h3 className="font-bold text-white text-lg">{example.title}</h3>
                    <p className="text-gray-300 text-sm mt-1">{example.fileName}</p>
                    <span className="inline-block mt-2 px-2 py-1 bg-gray-600 text-gray-200 text-xs rounded">
                      {example.size}
                    </span>
                  </div>
                  <div className="p-4">
                    <p className="text-gray-600 text-sm">{example.description}</p>
                    <div className="mt-3">
                      <p className="text-xs text-gray-500 italic">Tip: {example.tips}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-12">
          <h3 className="text-lg font-semibold text-blue-900 mb-3">Photography Guidelines</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-blue-800 mb-2">Technical Requirements:</h4>
              <ul className="list-disc list-inside space-y-1 text-blue-700 text-sm">
                <li>Use natural lighting when possible</li>
                <li>Ensure images are in focus and sharp</li>
                <li>Maintain consistent color balance</li>
                <li>Shoot in landscape orientation</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-blue-800 mb-2">Composition Tips:</h4>
              <ul className="list-disc list-inside space-y-1 text-blue-700 text-sm">
                <li>Fill the frame with your subject</li>
                <li>Include both wide and close-up shots</li>
                <li>Show before/after when possible</li>
                <li>Capture details of weld quality</li>
              </ul>
            </div>
          </div>
          <div className="mt-4 p-4 bg-white rounded-lg">
            <h4 className="font-medium text-gray-900 mb-2">File Organization:</h4>
            <p className="text-gray-700 text-sm">
              Save your images in <code className="bg-gray-200 px-1 rounded">public/images/</code> with descriptive names:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm mt-2">
              <li><code className="bg-gray-200 px-1 rounded">fence-project-01.jpg</code></li>
              <li><code className="bg-gray-200 px-1 rounded">workshop-interior.jpg</code></li>
              <li><code className="bg-gray-200 px-1 rounded">welding-process-detail.jpg</code></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExamplesPage;