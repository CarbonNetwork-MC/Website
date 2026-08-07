import Link from "next/link";

type BreadcrumbItem = {
  icon?: string;
  url?: string;
  label: string;
};

type BreadcrumbsProps = {
  items?: BreadcrumbItem[];
  margin?: string;
};

export default function Breadcrumbs({
  items = [],
  margin = "mb-4",
}: BreadcrumbsProps) {
  return (
    <nav
      className={`flex justify-between items-center bg-white rounded-md shadow-md ${margin} px-4 py-2`}
      aria-label="Breadcrumb"
    >
      <ol className="inline-flex items-center">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={index} className="inline-flex items-center">
              {item.url ? (
                <Link
                  href={item.url}
                  className={`inline-flex items-center text-sm font-medium ${
                    isLast
                      ? "text-emerald-500"
                      : "text-gray-700 hover:text-emerald-600"
                  }`}
                >
                  {item.icon && (
                    <i
                      className={`${item.icon} ${
                        item.label ? "me-2.5" : ""
                      }`}
                    />
                  )}

                  {item.label}
                </Link>
              ) : (
                <span className="text-sm font-medium text-gray-500">
                  {item.label}
                </span>
              )}

              {!isLast && (
                <span className="mx-1 text-gray-400">
                  <i className="fi fi-rr-angle-small-right" />
                </span>
              )}
            </li>
          );
        })}
      </ol>

      {/* IP */}
      <div className="bg-emerald-400 text-black text-sm font-medium px-4 py-2 rounded-2xl">
        <span>play.carbonnetwork.net</span>
      </div>
    </nav>
  );
}