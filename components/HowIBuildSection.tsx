// components/HowIBuildSection.tsx
'use client';

import Stepper, { Step } from '@/blocks/Components/Stepper/Stepper';

export default function HowIBuildSection() {
  return (
    <section id="workflow" className="py-16 max-w-4xl mx-auto">
      <h2 className="text-4xl font-semibold mb-8 text-center">How I Build</h2>
      <Stepper
        initialStep={1}
        backButtonText="Previous"
        nextButtonText="Next"
        onStepChange={(step) => console.log('Current step:', step)}
        onFinalStepCompleted={() => console.log('Workflow complete!')}
        className="space-y-8"
      >
        <Step>
          <h3 className="text-2xl font-medium">Ideation</h3>
          <p>Brainstorm features & define scope</p>
        </Step>
        <Step>
          <h3 className="text-2xl font-medium">Design</h3>
          <p>Create wireframes & high‑fidelity mockups (Figma)</p>
        </Step>
        <Step>
          <h3 className="text-2xl font-medium">Frontend</h3>
          <p>Build responsive UI with React.js & Next.js</p>
        </Step>
        <Step>
          <h3 className="text-2xl font-medium">Backend</h3>
          <p>Develop APIs in Python/Node & integrate MongoDB</p>
        </Step>
        <Step>
          <h3 className="text-2xl font-medium">DevOps</h3>
          <p>Deploy on AWS/Azure with CI/CD pipelines</p>
        </Step>
        <Step>
          <h3 className="text-2xl font-medium">Launch</h3>
          <p>Test, monitor & iterate in production</p>
        </Step>
      </Stepper>
    </section>
  );
}
