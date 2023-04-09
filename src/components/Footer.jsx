function Footer() {
  return (
    <footer className="max-w-1440 mx-auto mt-20 pb-8">
      <div className="flex justify-between">
        <p className="text-5xl font-clash-semibold w-1/2">
          We Are Transforming Brands, Websites & Apps.
        </p>

        <div className="flex gap-20">
          <div className="flex flex-col gap-3">
            <a href="#" className="text-lg font-clash-medium">
              Home
            </a>
            <a href="#projects" className="text-lg font-clash-medium">
              Projects
            </a>
            <a href="#awards" className="text-lg font-clash-medium">
              Awards
            </a>
            <a href="#talk" className="text-lg font-clash-medium">
              Let's Talk
            </a>
          </div>

          <div className="flex flex-col gap-3">
            <a href="#" className="text-lg font-clash-medium">
              Brand Identity
            </a>
            <a href="#" className="text-lg font-clash-medium">
              UI & UX Design
            </a>
            <a href="#" className="text-lg font-clash-medium">
              Web Design
            </a>
            <a href="#" className="text-lg font-clash-medium">
              Front-End Development
            </a>
          </div>
        </div>
      </div>

      <div className="flex justify-between mt-[120px]">
        <h3 className="uppercase text-2xl font-clash-semibold self-end">
          Hivemind Studio
        </h3>

        <button
          onClick={() => window.scrollTo(0, 0)}
          className="aspect-square w-20 bg-dark-green grid place-items-center rounded-[35px]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-1/2 h-1/2 text-dark"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 6.75L12 3m0 0l3.75 3.75M12 3v18"
            />
          </svg>
        </button>
      </div>
    </footer>
  );
}

export default Footer;
