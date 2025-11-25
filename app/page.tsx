export default function Home() {
  return (
    <main className="flex justify-center px-4 py-10 md:py-20 bg-neutral-50 text-neutral-900">
      <div className="w-full max-w-2xl space-y-12">
        <section className="space-y-4">
          <img
            src="https://github.com/xocelot.png"
            alt="Juan Villarreal"
            className="w-20 h-20 rounded-full border border-neutral-300"
          />

          <div className="space-y-3">
            <h1 className="text-3xl md:text-4xl font-semibold leading-snug">
              I’m Juan.
              <br />
              Software Engineer · Blockchain & Web3 · Growth & Product
            </h1>

            <p className="text-neutral-600 text-sm md:text-base leading-relaxed">
              I&apos;m a software engineer & product-minded creator, with proven
              success building software tools and Web3 audiences. Passionate
              about crypto.
            </p>
          </div>
        </section>

        <section className="space-y-4" id="projects">
          <h2 className="text-sm font-bold tracking-wider uppercase text-neutral-700">
            Projects
          </h2>

          <div className="space-y-3">
            {/* Progressive dApp */}
            <a
              href="https://simple-dapp-lemon.vercel.app/"
              target="_blank"
              className="block p-4 bg-white border border-neutral-200 rounded-xl hover:bg-neutral-100 hover:shadow-md hover:-translate-y-[2px] transition-all duration-200"
            >
              <div className="flex items-center justify-between text-xs text-neutral-500">
                <span className="font-semibold flex items-center gap-1">
                  Progressive dApp
                </span>
                <span>2025–Now</span>
              </div>
              <p className="text-sm mt-1 text-neutral-800">
                Progressive dApp with multiple smart contract implementations
                built step by step.
              </p>
            </a>

            {/* Tiny Scouts */}
            <a
              href="https://x.com/thescoutsnft"
              target="_blank"
              className="block p-4 bg-white border border-neutral-200 rounded-xl hover:bg-neutral-100 hover:shadow-md hover:-translate-y-[2px] transition-all duration-200"
            >
              <div className="flex items-center justify-between text-xs text-neutral-500">
                <span className="font-semibold flex items-center gap-1">
                  Tiny Scouts{" "}
                </span>
                <span>2021–2023</span>
              </div>
              <p className="text-sm mt-1 text-neutral-800">
                NFT collection that sold out in 7 minutes and later migrated to
                Polygon.
              </p>
            </a>

            {/* Kujira Network */}
            <a
              href="https://x.com/RujiraAcademy/status/1750519159455424916"
              target="_blank"
              className="block p-4 bg-white border border-neutral-200 rounded-xl hover:bg-neutral-100 hover:shadow-md hover:-translate-y-[2px] transition-all duration-200"
            >
              <div className="flex items-center justify-between text-xs text-neutral-500">
                <span className="font-semibold flex items-center gap-1">
                  Kujira Network (Ambassador){" "}
                </span>
                <span>2024</span>
              </div>
              <p className="text-sm mt-1 text-neutral-800">
                Ecosystem growth, tutorials and communications for the Kujira
                DeFi stack.
              </p>
            </a>

            {/* Bircle AI */}
            <a
              href="https://bircle.ai/"
              target="_blank"
              className="block p-4 bg-white border border-neutral-200 rounded-xl hover:bg-neutral-100 hover:shadow-md hover:-translate-y-[2px] transition-all duration-200"
            >
              <div className="flex items-center justify-between text-xs text-neutral-500">
                <span className="font-semibold flex items-center gap-1">
                  Bircle AI — LLM Dashboard{" "}
                </span>
                <span>2022–2023</span>
              </div>
              <p className="text-sm mt-1 text-neutral-800">
                Dashboard for monitoring LLM chatbots using Next.js & Firebase.
              </p>
            </a>
          </div>
        </section>

        {/* <div className="p-4 bg-white border border-neutral-200 rounded-xl">
                <div className="flex items-center justify-between text-xs text-neutral-500">
                  <span className="font-semibold">León de Cripto</span>
                  <span>2023–Now</span>
                </div>
                <p className="text-sm mt-1 text-neutral-800">
                  Crypto education brand with 20M+ views and 100K+ followers.
                </p>
              </div> */}

        {/* SKILLS */}
        <section className="space-y-4" id="skills">
          <h2 className="text-sm font-bold tracking-wider uppercase text-neutral-700">
            Skills
          </h2>

          <div className="p-4 bg-white border border-neutral-200 rounded-xl space-y-6">
            {/* LANGUAGES */}
            <div>
              <p className="text-xs font-bold text-neutral-700 mb-1">
                Languages
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                {[
                  "TypeScript",
                  "JavaScript",
                  "Python",
                  "Dart",
                  "Rust",
                  "Solidity",
                  "Low-level (C/C++/C#)",
                ].map((item) => (
                  <span
                    key={item}
                    className="px-2 py-1 rounded-full bg-neutral-100"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* FRAMEWORKS & TOOLS */}
            <div>
              <p className="text-xs font-bold text-neutral-700 mb-1">
                Frameworks & Tools
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                {[
                  "React",
                  "Next.js",
                  "Node.js",
                  "Flutter",
                  "Firebase",
                  "PostgreSQL",
                  "Docker",
                  "Git",
                  "UI Frameworks",
                  "GitHub Actions",
                  "Ethers.js",
                ].map((item) => (
                  <span
                    key={item}
                    className="px-2 py-1 rounded-full bg-neutral-100"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* WEB3 */}
            <div>
              <p className="text-xs font-bold text-neutral-700 mb-1">Web3</p>
              <div className="flex flex-wrap gap-2 text-xs">
                {[
                  "Smart contracts & DeFi protocols",
                  "On-chain analytics",
                  "Cross-chain bridges",
                  "Wallet UX & security",
                  "EVM fundamentals",
                  "dApp architectures",
                  "RPCs & node providers",
                ].map((item) => (
                  <span
                    key={item}
                    className="px-2 py-1 rounded-full bg-neutral-100"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* PRODUCT */}
            <div>
              <p className="text-xs font-bold text-neutral-700 mb-1">Product</p>
              <div className="flex flex-wrap gap-2 text-xs">
                {[
                  "Product discovery",
                  "MVP scoping",
                  "User research",
                  "A/B testing",
                  "Metrics & analytics",
                  "Feedback loops",
                  "Feature prioritization",
                ].map((item) => (
                  <span
                    key={item}
                    className="px-2 py-1 rounded-full bg-neutral-100"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* GROWTH */}
            <div>
              <p className="text-xs font-bold text-neutral-700 mb-1">Growth</p>
              <div className="flex flex-wrap gap-2 text-xs">
                {[
                  "Social growth",
                  "GTM strategy",
                  "SEO",
                  "Community engagement",
                  "Contributor management",
                  "Ecosystem partnerships",
                ].map((item) => (
                  <span
                    key={item}
                    className="px-2 py-1 rounded-full bg-neutral-100"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-4" id="contact">
          <h2 className="text-sm font-bold tracking-wider uppercase text-neutral-700">
            Contact
          </h2>

          <div className="p-4 bg-white border border-neutral-200 rounded-xl space-y-2 text-sm">
            <p>
              Email:{" "}
              <a
                href="mailto:villarrealjm2@gmail.com"
                className="underline underline-offset-4 hover:text-neutral-900"
              >
                villarrealjm2@gmail.com
              </a>
            </p>
            <p>
              GitHub:{" "}
              <a
                href="https://github.com/xocelot"
                target="_blank"
                className="underline underline-offset-4 hover:text-neutral-900"
              >
                @xocelot
              </a>
            </p>
            <p>
              LinkedIn:{" "}
              <a
                href="https://www.linkedin.com/in/villarreal-juan"
                target="_blank"
                className="underline underline-offset-4 hover:text-neutral-900"
              >
                Juan Villarreal
              </a>
            </p>
          </div>
        </section>

        <div className="p-4 bg-white border border-neutral-200 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-sm text-neutral-700">
            Want to talk about product, Web3 growth or connect?
          </p>
          <a
            href="https://cal.com/juanvillarreal/15min"
            target="_blank"
            className="px-4 py-2 text-sm font-medium bg-neutral-900 text-white rounded-md hover:bg-neutral-800"
          >
            Book call
          </a>
        </div>

        <footer className="py-6 border-t border-neutral-200 text-xs text-neutral-500">
          2026 — Juan Villarreal <p></p>
          <a>
            Open to remote/hybrid roles in blockchain, product, development,
            community growth, content creation.
          </a>
        </footer>
      </div>
    </main>
  );
}
