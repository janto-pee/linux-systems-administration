interface CtaComponentInterface {
  background?: string;
  containerClass?: string;
  title?: string;
  subtitle?: string;
}
export default function CtaComponent({
  background = "bg-indigo-100",
  containerClass = "py-20",
  title = "Ready to dive in?",
  subtitle = "Start your free trial today.",
}: CtaComponentInterface) {
  return (
    <div className={` ${background}`}>
      <div
        className={`mx-auto max-w-7xl px-6 lg:px-8 lg:flex lg:items-center lg:justify-between  ${containerClass}`}
      >
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          {title}
          <br />
          {subtitle}
        </h2>
        <div className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:flex-shrink-0">
          <a
            href="#"
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Get started
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Learn more <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </div>
  );
}
