import ProjectCard from './ProjectCard'
import SectionHeading from './SectionHeading'

export default function ProjectsSection() {
  return (
    <section id="projects" className="mx-auto max-w-4xl scroll-mt-16 border-t border-stone-200 px-6 py-16">
      <SectionHeading title="Projects" subtitle="Things I have built." />
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <ProjectCard
          year="2025"
          title="LibReservation"
          description="A full-stack library management and reservation system built using PHP and SQL for backend logic with a responsive interface. It features dedicated administrative controls, asset management, and streamlined resource tracking."
          tech="PHP · SQL"
          link="https://github.com/Elessy1dfs/LibReservation"
        />
        <ProjectCard
          year="2025"
          title="VocabQuest"
          description="An interactive, gamified vocabulary-building application featuring a high-fidelity UI/UX prototype designed in Figma and powered by a dynamic frontend-backend integration to make language learning engaging."
          tech="Figma · Frontend · Backend"
          link="https://github.com/Elessy1dfs/vocabQuest"
        />
        <ProjectCard
          year="2026"
          title="Portfolio"
          description="A personal portfolio website built with React and Tailwind CSS to showcase my projects and work."
          tech="React · Tailwind CSS"
          link="https://github.com/Elessy1dfs/portfolio"
        />
        <ProjectCard
          year="2024"
          title="Campus Event Page"
          description="A simple event microsite for a campus activity, designed to share schedules, organizers, and venue details in a user-friendly layout."
          tech="HTML · Bootstrap"
          link="https://github.com/Elessy1dfs"
        />
      </div>
    </section>
  )
}
