import React from 'react';

const ImageExamples = () => {
  const imageExamples = [
    {
      title: "Workshop Interior",
      description: "Professional welding workshop with organized tools",
      fileName: "workshop-interior.jpg",
      category: "About Section"
    },
    {
      title: "Fence Installation",
      description: "Completed residential metal fence project",
      fileName: "fence-project.jpg",
      category: "Gallery"
    },
    {
      title: "Custom Metalwork",
      description: "Unique client-requested fabrication project",
      fileName: "custom-project.jpg",
      category: "Gallery"
    },
    {
      title: "Welding Process",
      description: "Professional welder at work with safety gear",
      fileName: "welding-process.jpg",
      category: "About Section"
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Image Examples</h2>
          <p className="text-gray-600 mt-2">
            Visual representation of how your images should look when implemented
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {imageExamples.map((example, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-64 bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
                <div className="text-center p-4">
                  <div className="bg-gray-200 border-2 border-dashed border-gray-400 rounded-xl w-16 h-16 mx-auto mb-4" />
                  <h3 className="font-bold text-white text-xl">{example.title}</h3>
                  <p className="text-gray-300 mt-2">{example.description}</p>
                  <div className="mt-4 inline-block px-3 py-1 bg-gray-600 text-gray-200 text-sm rounded-full">
                    {example.fileName}
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    {example.category}
                  </span>
                </div>
              </div>
              <div className="p-4 bg-gray-50">
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Dimensions: 800x600px</span>
                  <span>Format: JPG</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-900 mb-3">How to Create These Images</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                <span className="text-blue-800 font-bold">1</span>
              </div>
              <h4 className="font-medium text-gray-900 mb-2">Plan Your Shots</h4>
              <p className="text-gray-600 text-sm">
                Decide what aspects of your work to showcase: finished projects, process, workshop
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                <span className="text-blue-800 font-bold">2</span>
              </div>
              <h4 className="font-medium text-gray-900 mb-2">Set Up Properly</h4>
              <p className="text-gray-600 text-sm">
                Ensure good lighting, clean background, and safety equipment when needed
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                <span className="text-blue-800 font-bold">3</span>
              </div>
              <h4 className="font-medium text-gray-900 mb-2">Capture Multiple Angles</h4>
              <p className="text-gray-600 text-sm">
                Take wide shots for context and close-ups for detail and quality
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageExamples;