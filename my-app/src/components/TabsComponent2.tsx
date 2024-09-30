const tabs = [
  { name: "courses", href: "#", current: true },
  { name: "Categories", href: "#", current: false },
  { name: "Events", href: "#", current: false },
  { name: "Instructors", href: "#", current: false },
];

interface TabsComponent2Interface {
  className?: string;
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function TabsComponent2({ className }: TabsComponent2Interface) {
  return (
    <div className={className}>
      <div className="sm:hidden">
        <select
          id="tabs"
          name="tabs"
          className="block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
          defaultValue={tabs.find((tab) => tab.current)?.name}
        >
          {tabs.map((tab) => (
            <option key={tab.name}>{tab.name}</option>
          ))}
        </select>
      </div>
      <div className="hidden sm:block">
        <div className="">
          <nav className="-mb-px flex space-x-8" aria-label="Tabs">
            {tabs.map((tab) => (
              <a
                key={tab.name}
                href={tab.href}
                className={classNames(
                  tab.current
                    ? "border-white text-white"
                    : "border-transparent text-gray-100 hover:text-gray-200",
                  "whitespace-nowrap py-1 px-1 text-sm font-medium border-b"
                )}
                aria-current={tab.current ? "page" : undefined}
              >
                {tab.name}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}
