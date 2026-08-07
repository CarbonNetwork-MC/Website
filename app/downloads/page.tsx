import PageLayout from "@/app/src/layouts/PageLayout";

import Breadcrumbs from "@/app/src/components/Navigation/Breadcrumbs";
import MainContainer from "@/app/src/components/Containers/Main";

export default function Downloads() {
  return (
    <PageLayout
      breadcrumbs={
        <Breadcrumbs
          items={[
            {
              icon: "fi fi-rs-house-chimney",
              url: "/",
              label: "",
            },
            {
              url: "/downloads",
              label: "Downloads",
            },
          ]}
        />
      }
    >
      <MainContainer>
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-bold">Downloads</h1>
          <p className="text-md text-gray-700">
            Welcome to the Downloads page! Here you can find all the necessary files and resources to enhance your experience with our Minecraft Server Network. Whether you're looking for mods, resource packs, or other tools, we've got you covered. Browse through our collection and download what you need to get started!
          </p>

          <p className="text-md text-gray-600">
            There are no downloads yet.
          </p>
        </div>
      </MainContainer>
    </PageLayout>
  );
}