// app/page.tsx
'use client';

import React, { useState } from 'react';
import { 
  personalData, 
  technicalSkills, 
  experiences, 
  projects, 
  education, 
  achievements, 
  hobbies 
} from '../config/portfolioData';

export default function Home() {
  // Tabs state for Projects section
  // Update the allowed types and set the default to 'softwareEngineering'
const [activeTab, setActiveTab] = useState<'softwareEngineering' | 'deepLearning' | 'machineLearning'>('softwareEngineering');
  
  // RAG Chatbot placeholder state
  const [chatInput, setChatInput] = useState('');
  const [chatLog, setChatLog] = useState<{sender: 'user' | 'bot', text: string}[]>([
    { sender: 'bot', text: "Hi! Ask me anything about Vaibhav's experience, thesis, or technical background." }
  ]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    setChatLog(prev => [...prev, { sender: 'user', text: chatInput }]);
    const currentQuery = chatInput;
    setChatInput('');

    // Mocking the RAG Response until our backend is up
    setTimeout(() => {
      setChatLog(prev => [...prev, { 
        sender: 'bot', 
        text: `This is a mock response to "${currentQuery}". Once our RAG pipeline backend server is deployed, this container will fetch real semantic embeddings of Vaibhav's resume configuration.` 
      }]);
    }, 800);
  };

  return (
    <main className="min-h-screen bg-[#FAFAFA] text-[#1A1A1A] antialiased selection:bg-neutral-200">
      <div className="max-w-3xl mx-auto px-6 py-20 space-y-24">
        
        {/* SECTION 1 & 2: Bio & Personal Details */}
        <header className="space-y-6 border-b border-neutral-200 pb-10">
          <div className="flex justify-between items-baseline">
            <h1 className="text-4xl font-semibold tracking-tight text-neutral-900">{personalData.name}</h1>
            <p className="text-sm text-neutral-500 font-mono">{personalData.location}</p>
          </div>
          <h2 className="text-lg text-neutral-600 font-medium">{personalData.title}</h2>
          <p className="text-neutral-600 leading-relaxed max-w-2xl">{personalData.bio}</p>
          
          <div className="flex space-x-4 pt-2 text-sm font-mono text-neutral-500">
            <a href={personalData.github} target="_blank" rel="noreferrer" className="hover:text-black transition-colors">GitHub</a>
            <span>•</span>
            <a href={personalData.linkedin} target="_blank" rel="noreferrer" className="hover:text-black transition-colors">LinkedIn</a>
          </div>
        </header>

        {/* SECTION 3: Ask anything about me (RAG Chat Container) */}
        <section className="bg-white border border-neutral-200 rounded-xl p-6 shadow-sm space-y-4">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-500 font-mono">Ask my AI Assistant</h3>
          </div>
          
          <div className="h-48 overflow-y-auto border border-neutral-100 rounded-lg p-4 bg-neutral-50 space-y-3 text-sm">
            {chatLog.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] rounded-lg px-3 py-2 ${msg.sender === 'user' ? 'bg-neutral-900 text-white' : 'bg-neutral-200 text-neutral-800'}`}>
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          <form onSubmit={handleSendMessage} className="flex gap-2">
            <input 
              type="text" 
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
              placeholder="e.g., What is his current master's thesis about?" 
              className="flex-1 px-3 py-2 border border-neutral-200 rounded-lg text-sm bg-neutral-50 focus:outline-none focus:ring-1 focus:ring-neutral-400 focus:bg-white transition-all"
            />
            <button type="submit" className="px-4 py-2 bg-neutral-950 text-white text-sm rounded-lg hover:bg-neutral-800 transition-colors">
              Ask
            </button>
          </form>
        </section>

        {/* SECTION 4: Experience */}
        <section className="space-y-6">
          <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-400 font-mono">Experience</h3>
          <div className="space-y-8">
            {experiences.map((exp, idx) => (
              <div key={idx} className="group relative border-l border-neutral-200 pl-4 space-y-2">
                <div className="absolute w-2 h-2 bg-neutral-300 rounded-full -left-[5px] top-2 group-hover:bg-neutral-900 transition-colors"></div>
                <div className="flex justify-between items-baseline">
                  <h4 className="font-semibold text-neutral-900">{exp.role}</h4>
                  <span className="text-xs text-neutral-400 font-mono">{exp.period}</span>
                </div>
                <p className="text-sm text-neutral-500">{exp.company} — <span className="italic">{exp.location}</span></p>
                <ul className="list-disc list-inside text-sm text-neutral-600 space-y-1 pl-1">
                  {exp.bullets.map((bullet, bIdx) => <li key={bIdx}>{bullet}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 5: Latest Projects (Tabbed Layout) */}
        <section className="space-y-6">
          <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-400 font-mono">Latest Projects</h3>
          
          {/* Tabs control row */}
          <div className="flex space-x-2 border-b border-neutral-200 pb-2">
            <button 
              onClick={() => setActiveTab('robotics')}
              className={`px-3 py-1 text-xs font-mono rounded-md transition-all ${activeTab === 'robotics' ? 'bg-neutral-900 text-white' : 'text-neutral-500 hover:text-black'}`}
            >
              Robotics & Sim
            </button>
            <button 
              onClick={() => setActiveTab('infrastructure')}
              className={`px-3 py-1 text-xs font-mono rounded-md transition-all ${activeTab === 'infrastructure' ? 'bg-neutral-900 text-white' : 'text-neutral-500 hover:text-black'}`}
            >
              Infrastructure & Ops
            </button>
          </div>

          {/* Tab Panes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {projects[activeTab].map((proj, idx) => (
              <div key={idx} className="border border-neutral-200 rounded-xl p-5 bg-white hover:shadow-md transition-all flex flex-col justify-between">
                <div className="space-y-2">
                  <h4 className="font-semibold text-neutral-900">{proj.title}</h4>
                  <p className="text-xs text-neutral-600 leading-relaxed">{proj.description}</p>
                </div>
                <div className="flex flex-wrap gap-1 pt-4">
                  {proj.tech.map((t, tIdx) => (
                    <span key={tIdx} className="bg-neutral-100 text-neutral-600 font-mono text-[10px] px-2 py-0.5 rounded">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 6: Education */}
        <section className="space-y-4">
          <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-400 font-mono">Education</h3>
          {education.map((edu, idx) => (
            <div key={idx} className="flex justify-between items-start">
              <div>
                <h4 className="font-semibold text-neutral-900">{edu.institution}</h4>
                <p className="text-sm text-neutral-600">{edu.degree}</p>
                <p className="text-xs text-neutral-400 mt-1">{edu.details}</p>
              </div>
              <span className="text-xs text-neutral-400 font-mono">{edu.period}</span>
            </div>
          ))}
        </section>

        {/* SECTION 7: Technical Skills */}
        <section className="space-y-4">
          <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-400 font-mono">Technical Stack</h3>
          <div className="space-y-3 text-sm">
            <p><span className="font-medium inline-block w-28 text-neutral-500">Languages:</span> {technicalSkills.languages.join(', ')}</p>
            <p><span className="font-medium inline-block w-28 text-neutral-500">Frameworks:</span> {technicalSkills.frameworks.join(', ')}</p>
            <p><span className="font-medium inline-block w-28 text-neutral-500">Cloud & Infra:</span> {technicalSkills.infrastructure.join(', ')}</p>
          </div>
        </section>

        {/* SECTION 8: Achievements */}
        <section className="space-y-4">
          <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-400 font-mono">Achievements</h3>
          <ul className="list-inside list-disc text-sm text-neutral-600 space-y-2">
            {achievements.map((ach, idx) => <li key={idx}>{ach}</li>)}
          </ul>
        </section>

        {/* SECTION 9: Hobbies */}
        <section className="space-y-4">
          <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-400 font-mono">Interests & Hobbies</h3>
          <div className="flex flex-wrap gap-2">
            {hobbies.map((hobby, idx) => (
              <span key={idx} className="border border-neutral-200 px-3 py-1 rounded-full text-xs text-neutral-600 bg-white shadow-sm">
                {hobby}
              </span>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}