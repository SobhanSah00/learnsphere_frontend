"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { apiGroups } from "@/app/data/apis";

export default function ApiPage({ params }) {
  const { project, api } = params;
  const projectName = project.toLowerCase();
  const apiName = api.replace(/-/g, " ").toLowerCase();
  
  const [darkMode, setDarkMode] = useState(true);
  const [codeTab, setCodeTab] = useState("node");
  
  // Check system preference for dark mode on load
  useEffect(() => {
    const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(isDarkMode);
  }, []);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const group = apiGroups.find(
    (g) => g.title.toLowerCase() === projectName
  );
  const apiData = group?.apis.find(
    (a) => a.name.toLowerCase() === apiName
  );

  // Method badge styling - with both light and dark mode variants
  const methodColors = {
    GET: darkMode ? 'bg-green-900 text-green-300 border border-green-700' : 'bg-green-100 text-green-800 border border-green-300',
    POST: darkMode ? 'bg-blue-900 text-blue-300 border border-blue-700' : 'bg-blue-100 text-blue-800 border border-blue-300',
    PUT: darkMode ? 'bg-yellow-900 text-yellow-300 border border-yellow-700' : 'bg-yellow-100 text-yellow-800 border border-yellow-300',
    DELETE: darkMode ? 'bg-red-900 text-red-300 border border-red-700' : 'bg-red-100 text-red-800 border border-red-300',
  };

  if (!apiData) {
    return (
      <div className={`p-8 ${darkMode ? 'bg-slate-900 text-slate-200' : ''}`}>
        <div className={`${darkMode ? 'bg-red-900 border-l-4 border-red-600' : 'bg-red-50 border-l-4 border-red-500'} p-4 rounded`}>
          <h1 className={`text-xl font-bold ${darkMode ? 'text-red-300' : 'text-red-700'}`}>API not found</h1>
          <p className={`mt-2 ${darkMode ? 'text-red-400' : 'text-red-600'}`}>The requested API documentation could not be found.</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`p-6 ${darkMode ? 'bg-slate-900 text-slate-200' : 'text-gray-800'} space-y-8 max-w-5xl mx-auto`}>
      {/* Header Section with Dark Mode Toggle */}
      <div className="flex items-center justify-between">
        <div>
          <span className={`text-xs px-3 py-1 rounded-full font-medium ${methodColors[apiData.method]}`}>
            {apiData.method}
          </span>
          <h1 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-slate-800'} mt-2`}>{apiData.name}</h1>
        </div>
        <div className="flex items-center gap-4">
          <div className={`${darkMode ? 'bg-slate-800 text-slate-300' : 'bg-slate-100 text-slate-700'} px-4 py-2 rounded-lg text-sm`}>
            <span className={darkMode ? 'text-slate-400' : 'text-slate-500'}>Project: </span>
            <span className="font-medium">{project.charAt(0).toUpperCase() + project.slice(1)}</span>
          </div>
          <button 
            onClick={toggleDarkMode} 
            className={`p-2 rounded-full ${darkMode ? 'bg-slate-800 text-yellow-300 hover:bg-slate-700' : 'bg-slate-200 text-slate-700 hover:bg-slate-300'}`}
          >
            {darkMode ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Description */}
      <div className={`${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-100'} rounded-xl shadow-sm border p-6`}>
        <h2 className={`font-semibold mb-3 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>Description</h2>
        <p className={darkMode ? 'text-slate-400' : 'text-gray-700'}>{apiData.description}</p>
      </div>

      {/* Endpoint */}
      <div className={`${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-100'} rounded-xl shadow-sm border p-6`}>
        <h2 className={`font-semibold mb-3 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>Endpoint</h2>
        <div className={`${darkMode ? 'bg-slate-900' : 'bg-slate-50'} rounded-lg p-3 flex items-center justify-between`}>
          <code className={`${darkMode ? 'text-blue-400' : 'text-blue-700'} font-mono`}>{apiData.endpoint}</code>
          <button className={`${darkMode ? 'text-slate-400 hover:text-slate-200' : 'text-slate-500 hover:text-slate-800'} text-sm`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Image if available */}
      {apiData.image && (
        <div className={`${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-100'} rounded-xl shadow-sm border p-6`}>
          <h2 className={`font-semibold mb-3 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>Example Request</h2>
          <div className={`rounded-lg overflow-hidden ${darkMode ? 'border border-slate-700' : 'border border-gray-200'}`}>
            <Image
              src={apiData.image}
              alt="API Example"
              width={1000}
              height={500}
              className="w-full"
            />
          </div>
        </div>
      )}

      {/* Request & Response */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className={`${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-100'} rounded-xl shadow-sm border p-6`}>
          <h2 className={`font-semibold mb-3 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>Request Body</h2>
          <pre className={`${darkMode ? 'bg-slate-900 text-slate-300 border-slate-700' : 'bg-slate-50 text-slate-800 border-slate-200'} p-4 rounded-lg text-sm overflow-auto font-mono border`}>
            {apiData.input}
          </pre>
        </div>
        <div className={`${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-100'} rounded-xl shadow-sm border p-6`}>
          <h2 className={`font-semibold mb-3 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>Response</h2>
          <pre className={`${darkMode ? 'bg-slate-900 text-slate-300 border-slate-700' : 'bg-slate-50 text-slate-800 border-slate-200'} p-4 rounded-lg text-sm overflow-auto font-mono border`}>
            {apiData.output}
          </pre>
        </div>
      </div>

      {/* Code Samples */}
      <div className={`${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-100'} rounded-xl shadow-sm border p-6`}>
        <h2 className={`font-semibold mb-4 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>Code Examples</h2>
        
        <div className="flex space-x-2 mb-4">
          {Object.keys(apiData.codeSamples).map((lang) => (
            <button
              key={lang}
              onClick={() => setCodeTab(lang)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                codeTab === lang
                  ? darkMode
                    ? "bg-blue-600 text-white"
                    : "bg-slate-800 text-white"
                  : darkMode
                    ? "bg-slate-700 text-slate-300 hover:bg-slate-600"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              {lang === "node" ? "Node.js" : 
               lang === "axios" ? "Axios" : 
               lang === "python" ? "Python" : lang}
            </button>
          ))}
        </div>
        
        <div className="relative">
          <pre className={`${darkMode ? 'bg-slate-900 text-slate-300 border-slate-700' : 'bg-slate-50 text-slate-800 border-slate-200'} p-4 rounded-lg text-sm overflow-auto font-mono border`}>
            {apiData.codeSamples[codeTab]}
          </pre>
          <button className={`absolute right-4 top-4 ${darkMode ? 'text-slate-400 hover:text-slate-200' : 'text-slate-500 hover:text-slate-800'}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
            </svg>
          </button>
        </div>
      </div>
      
      {/* Try It Out Section */}
      <div className={`${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-100'} rounded-xl shadow-sm border p-6`}>
        <h2 className={`font-semibold mb-4 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>Try It Out</h2>
        <div className={`${darkMode ? 'bg-slate-900 border-slate-700' : 'bg-slate-50 border-slate-200'} rounded-lg p-6 border`}>
          <div className="space-y-4">
            <div>
              <label className={`block text-sm font-medium ${darkMode ? 'text-slate-300' : 'text-slate-700'} mb-1`}>Parameters</label>
              <textarea 
                className={`w-full rounded-lg ${darkMode ? 'bg-slate-800 border-slate-600 text-slate-300' : 'border-slate-300 text-slate-800'} p-3 text-sm font-mono`} 
                rows="5"
                defaultValue={apiData.input}
              />
            </div>
            <button className={`${darkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-600 hover:bg-blue-700'} text-white px-4 py-2 rounded-lg text-sm font-medium`}>
              Send Request
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}