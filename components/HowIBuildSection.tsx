// components/HowIBuildSection.tsx
'use client';

import { FiPenTool, FiMonitor, FiDatabase, FiCloud } from 'react-icons/fi';
import { FaRocket, FaLightbulb } from 'react-icons/fa';
import Stepper, { Step } from '@/blocks/Components/Stepper/Stepper';

export default function HowIBuildSection() {
  return (
    <section id="workflow" className="py-16 max-w-3xl mx-auto">
      <h2 className="text-4xl font-semibold mb-8 text-center">How I Build</h2>

      <Stepper
        initialStep={1}
        backButtonText="Previous"
        nextButtonText="Next"
        onStepChange={(step) => console.log('Current step:', step)}
        onFinalStepCompleted={() => console.log('Workflow complete!')}
        className="mx-auto space-y-8"
      >
        <Step>
          <div className="flex items-center space-x-4">
            <FaLightbulb size={28} className="text-primary" />
            <div>
              <h3 className="text-2xl font-medium">Ideation</h3>
              <p>Brainstorm features &amp; define scope</p>
            </div>
          </div>
        </Step>

        <Step>
          <div className="flex items-center space-x-4">
            <FiPenTool size={28} className="text-primary" />
            <div>
              <h3 className="text-2xl font-medium">Design</h3>
              <p>Create wireframes &amp; high‑fidelity mockups (Figma)</p>
            </div>
          </div>
        </Step>

        <Step>
          <div className="flex items-center space-x-4">
            <FiMonitor size={28} className="text-primary" />
            <div>
              <h3 className="text-2xl font-medium">Frontend</h3>
              <p>Build responsive UI with React.js &amp; Next.js</p>
            </div>
          </div>
        </Step>

        <Step>
          <div className="flex items-center space-x-4">
            <FiDatabase size={28} className="text-primary" />
            <div>
              <h3 className="text-2xl font-medium">Backend</h3>
              <p>Develop APIs in Python/Node &amp; integrate MongoDB</p>
            </div>
          </div>
        </Step>

        <Step>
          <div className="flex items-center space-x-4">
            <FiCloud size={28} className="text-primary" />
            <div>
              <h3 className="text-2xl font-medium">DevOps</h3>
              <p>Deploy on AWS/Azure with CI/CD pipelines</p>
            </div>
          </div>
        </Step>

        <Step>
          <div className="flex items-center space-x-4">
            <FaRocket size={28} className="text-primary" />
            <div>
              <h3 className="text-2xl font-medium">Launch</h3>
              <p>Test, monitor &amp; iterate in production</p>
            </div>
          </div>
        </Step>
      </Stepper>
    </section>
  );
}
