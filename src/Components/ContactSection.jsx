import ContactLink from './ContactLink'
import SectionHeading from './SectionHeading'

export default function ContactSection() {
  return (
    <section id="contact" className="mx-auto max-w-4xl scroll-mt-16 border-t border-stone-200 px-6 py-16">
      <SectionHeading title="Contact" subtitle="Say hi." />
      <ul className="mt-8 space-y-3">
        <ContactLink
          label="Email"
          href="mailto:eleonora.sayson@cit.edu"
          text="eleonora.sayson@cit.edu"
        />
        <ContactLink
          label="GitHub"
          href="https://github.com/Elessy1dfs"
          text="github.com/Elessy1dfs"
        />
        <ContactLink
          label="LinkedIn"
          href="https://www.linkedin.com/in/eleonora-sayson"
          text="linkedin.com/in/eleonora-sayson"
        />
      </ul>
    </section>
  )
}
