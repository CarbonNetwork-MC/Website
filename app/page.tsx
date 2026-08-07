import PageLayout from "@/app/src/layouts/PageLayout";

import Breadcrumbs from "@/app/src/components/Navigation/Breadcrumbs";
import MainContainer from "@/app/src/components/Containers/Main";

export default function Home() {
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
              url: "/",
              label: "Home",
            },
          ]}
        />
      }
    >
      <MainContainer>
        <div className="flex flex-col justify-center items-center p-8">
          <h1 className="text-4xl font-bold text-gray-900 text-center">Welcome to <span className="text-emerald-500">Carbon Network</span></h1>
          <p className="text-lg text-gray-700 text-center mt-4">
            Carbon Network is a Minecraft Server Network that focuses on providing a fun and engaging experience for players of all ages. 
            Join us today and become part of our growing community!
          </p>
        </div>
      </MainContainer>
    </PageLayout>
  );
}
