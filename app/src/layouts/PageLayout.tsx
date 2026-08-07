import Maintenance from "@/app/src/components/Messages/Maintenance";

type PageLayoutProps = {
  children: React.ReactNode;
  breadcrumbs?: React.ReactNode;
};

export default function PageLayout({
  children,
  breadcrumbs,
}: PageLayoutProps) {
  return (
    <>
      {breadcrumbs}
      <Maintenance />

      <div>
        {children}
      </div>
    </>
  );
}