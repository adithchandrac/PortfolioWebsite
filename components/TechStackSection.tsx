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
import Container from "./Container";

export default function TechStackSection() {
  const items = [
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
    <section className="w-full py-12 flex justify-center">
      <div className="relative w-full max-w-7xl rounded-3xl shadow-2xl overflow-hidden border border-white/20">
        <Container>
          <section id="stack" className="py-16 w-full">
            <h2 className="text-4xl font-semibold mb-8 text-center">
              Technologies & Stacks
            </h2>
            <div style={{ height: '600px', position: 'relative' }}>
              <GlassIcons 
                items={items} 
                className="mx-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-4" 
              />
            </div>
          </section>
        </Container>
      </div>
    </section>
  )
}