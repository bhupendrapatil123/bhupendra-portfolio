import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaServer,
  FaDatabase,
  FaCloud,
  FaTools,
} from "react-icons/fa";

const skills = [
  {
    icon: FaReact,
    title: "Frontend Development",
    description:
      "Building responsive and interactive user interfaces with modern frameworks.",
    tags: ["React", "JavaScript", "HTML", "CSS"],
  },
  {
    icon: FaServer,
    title: "Backend Development",
    description:
      "Developing scalable backend systems and RESTful APIs for web applications.",
    tags: ["Node.js", "Express", "REST API"],
  },
  {
    icon: FaDatabase,
    title: "Database Management",
    description:
      "Designing and optimizing databases for performance and scalability.",
    tags: ["MongoDB", "PostgreSQL", "MySQL"],
  },
  {
    icon: FaCloud,
    title: "Cloud & DevOps",
    description:
      "Deploying and managing cloud applications and infrastructure.",
    tags: ["AWS", "Docker", "CI/CD"],
  },
  {
    icon: FaTools,
    title: "Tools & Technologies",
    description:
      "Using essential tools to improve development efficiency and workflow.",
    tags: ["Git", "GitHub", "Figma", "Webpack"],
  },
];

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
      id="skills"
      className="py-20 bg-dark-100"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4">
          My <span className="text-purple">Skills</span>
        </h2>

        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          Technologies I work with to bring ideas to life
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="
                backdrop-blur-lg bg-dark-300/40
                border border-white/10 shadow-md
                rounded-2xl p-6 hover:shadow-purple/20 hover:shadow-xl
                transition-all duration-300 cursor-pointer
              "
            >
              <div className="flex items-center mb-5">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-dark-400/60 border border-white/10 mr-4">
                  <skill.icon className="w-7 h-7 text-purple" />
                </div>
                <h3 className="text-xl font-semibold">{skill.title}</h3>
              </div>

              <p className="text-gray-400 mb-5 leading-relaxed">
                {skill.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {skill.tags.map((tech) => (
                  <span
                    key={tech}
                    className="
                      px-3 py-1 text-sm text-gray-300
                      bg-dark-400/40 border border-white/10
                      rounded-md backdrop-blur-md
                      hover:bg-dark-300 hover:text-white
                      transition-all duration-200
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
