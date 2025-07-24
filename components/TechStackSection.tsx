// components/TechStackSection.tsx
import GlassIcons from '@/blocks/Components/GlassIcons/GlassIcons'
import { 
  FaReact, 
  FaNodeJs,
  FaAws,
  FaJava
} from 'react-icons/fa'
import {
  SiNextdotjs,
  SiTypescript,
  SiPython,
  SiMongodb,
  SiDocker,
  SiGit,
  SiJira,
} from 'react-icons/si'
import { TbBrandAzure } from "react-icons/tb";

export default function TechStackSection() {
  const items = [
    // Mixed order for a more varied layout
    { icon: <FaReact />,      color: 'blue',   label: 'React'      },
    { icon: <SiTypescript />, color: 'purple', label: 'TypeScript' },
    { icon: <FaAws />,        color: 'indigo', label: 'AWS'        },
    { icon: <SiPython />,     color: 'purple', label: 'Python'     },
    { icon: <TbBrandAzure />, color: 'indigo', label: 'Azure'      },
    { icon: <FaNodeJs />,     color: 'green',  label: 'Node.js'    },
    { icon: <SiNextdotjs />,  color: 'blue',   label: 'Next.js'    },
    { icon: <FaJava />,       color: 'purple', label: 'Java'       },
    { icon: <SiMongodb />,    color: 'green',  label: 'MongoDB'    },
    { icon: <SiDocker />,     color: 'indigo', label: 'Docker'     },
    { icon: <SiGit />,        color: 'orange', label: 'Git'        },
    { icon: <SiJira />,       color: 'orange', label: 'Jira'       },
  ]

  return (
    <section id="stack" className="py-16 max-w-5xl mx-auto">
      <h2 className="text-4xl font-semibold mb-8 text-center">
        Technologies & Stacks
      </h2>
      <div style={{ height: '600px', position: 'relative' }}>
        {/* 
          Override default columns: 
          1 col on xs, 2 on sm, 4 on md+
          → 3 rows of 4 columns on medium+ screens
        */}
        <GlassIcons 
          items={items} 
          className="mx-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-4" 
        />
      </div>
    </section>
  )
}
