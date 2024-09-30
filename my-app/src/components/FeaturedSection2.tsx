import Button from "@/Shared/Button";

export default function FeaturedSection2({
  order,
  img = "/hero/1.jpg",
  title = "Become a student",
  subtitle = "At the beginning at least, but then we realized we could make a lot more money if we kinda stopped.",
}: {
  order?: string;
  img?: string;
  title?: string;
  subtitle?: string;
}) {
  return (
    <div className="mx-auto max-w-7xl pt-20 pb-10 sm:px-2 lg:px-4">
      <div className="mx-auto max-w-2xl px-4 lg:max-w-none">
        <div className="grid grid-cols-1 items-center gap-x-16 gap-y-10 lg:grid-cols-2">
          <div className="lg:max-w-sm">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              {title}
            </h2>
            <p className="mt-4 text-gray-600">{subtitle}</p>
            <p className="mt-4 lg:mt-6">
              <Button
                className=" px-8 border-primary-500 text-primary-500 py-3 text-sm shadow-sm border font-bold rounded"
                text="View More"
              />
            </p>
          </div>
          <div
            className={`aspect-h-2 aspect-w-3 overflow-hidden rounded-md bg-gray-100  ${order}`}
          >
            <img src={img} alt="" className="object-cover object-center" />
          </div>
        </div>
      </div>
    </div>
  );
}
