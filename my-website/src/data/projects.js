export const projects = [
    {
        title: "Portfolio Website",
        description: "Min personlige portfolio bygget med React og Tailwind",
        tech: ["React", "Tailwind", "JavaScript", "Vite"],
        github: "#",

    },
]

{projects.map((project) => (
    <ProjectCard key={project.title} {...project} />
))}
