import Breadcrumbs from "@/app/src/components/Navigation/Breadcrumbs";
import MainContainer from "@/app/src/components/Containers/Main";

export default function NotFound() {
  return (
    <>
    <Breadcrumbs
        items={[
        {
            icon: "fi fi-rs-house-chimney",
            url: "/",
            label: "",
        },
        {
            icon: "",
            url: "/",
            label: "Page not found",
        }
        ]}
    />
    {/* Main content */}
    <MainContainer>
      <div className="text-center mx-2 lg:mx-0 px-8 py-16">
        <h1 className="text-6xl font-bold text-red-500">Page not found.</h1>
        <p className="mt-4 text-xl text-gray-600">
          The page you are looking for does not exist or has been removed. Please check the URL or
        </p>
        <a className="text-xl text-green-500" href="/">return to the homepage.</a>
      </div>
    </MainContainer>
    {/* End of main content */}
    {/* End of page */}
    </>
  );
}
