export default function Hero() {
  return (
    <header id="top" className="mx-auto max-w-4xl px-6 pb-16 pt-20 scroll-mt-16">
      <p className="text-sm font-medium text-stone-500">Hi, I&apos;m</p>
      <h1 className="mt-2 text-5xl font-semibold tracking-tight">Eleonora Sayson</h1>
      <p className="mt-4 max-w-xl text-lg leading-relaxed text-stone-600">
        A 3rd Year Information Technology student at Cebu Institute of Technology – University. I have a passion for creating web applications that are both functional and visually appealing. I enjoy learning new technologies and applying them to real-world projects.
      </p>
      <div className="mt-8 flex gap-3">
        <a
          href="#projects"
          className="rounded-lg bg-stone-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-stone-700"
        >
          See my projects
        </a>
        <a
          href="#contact"
          className="rounded-lg border border-stone-300 px-5 py-2.5 text-sm font-medium hover:bg-stone-50"
        >
          Contact me
        </a>
      </div>
    </header>
  )
}
