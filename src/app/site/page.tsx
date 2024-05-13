export default function Home() {
  return (
    <main className="">
      <section className="h-full w-full pt-36 relative flex items-center justify-center flex-col">
        {/* DOT BACKGROUND */}
        <div className="absolute bottom-0 left-[-1px] right-0 top-[-1px] bg-[linear-gradient(to_right,#fafafa_1px,transparent_1px),linear-gradient(to_bottom,#fafafa_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
        <p className="text-center pt-36">Run your agency, in one place</p>
        <div className="bg-gradient-to-r from-primary to-secondary-foreground text-transparent bg-clip-text relative">
          <h1 className="text-8xl font-bold text-center md:text-[300px] tracking-tighter md:leading-snug font-bricolage-title">
            Buildify
          </h1>
        </div>
      </section>
    </main>
  );
}
