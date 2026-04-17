"use client";
import React, { useState } from 'react';
import Link from 'next/link';

const projects = [
  {
    id: 1,
    title: "01. Modern Complex",
    img: "img/project-1.jpg",
  },
  {
    id: 2,
    title: "02. Royal Hotel",
    img: "img/project-2.jpg",
  },
  {
    id: 3,
    title: "03. Mexwel Building",
    img: "img/project-3.jpg",
  },
  {
    id: 4,
    title: "04. Shopping Complex",
    img: "img/project-4.jpg",
  },
];

export default function ProjectTabs() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="project">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Tab buttons */}
        <div className="lg:w-1/3">
          <div className="nav flex flex-col justify-between w-full h-full">
            {projects.map((project, index) => (
              <button
                key={project.id}
                className={`nav-link w-full flex items-center text-left p-4 mb-4 ${activeTab === index ? 'active' : ''}`}
                onClick={() => setActiveTab(index)}
                type="button"
              >
                <h3 className="m-0">{project.title}</h3>
              </button>
            ))}
          </div>
        </div>

        {/* Tab content */}
        <div className="lg:w-2/3">
          <div className="tab-content w-full">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`tab-pane ${activeTab === index ? 'active' : ''}`}
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/2" style={{ minHeight: '350px', position: 'relative' }}>
                    <img
                      className="w-full h-full object-cover"
                      src={project.img}
                      style={{ position: 'absolute', inset: 0 }}
                      alt={project.title}
                    />
                  </div>
                  <div className="md:w-1/2 flex flex-col justify-center">
                    <h1 className="mb-3">25 Years Of Experience In Architecture Industry</h1>
                    <p className="mb-4">
                      Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet
                      diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo
                      justo magna dolore erat amet
                    </p>
                    <p><i className="fa fa-check text-primary me-3"></i>Design Approach</p>
                    <p><i className="fa fa-check text-primary me-3"></i>Innovative Solutions</p>
                    <p><i className="fa fa-check text-primary me-3"></i>Project Management</p>
                    <Link href="/project" className="btn btn-primary py-3 px-5 mt-3">
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
