import Image from "next/image";

import PageLayout from "@/app/src/layouts/PageLayout";

import Breadcrumbs from "@/app/src/components/Navigation/Breadcrumbs";
import MainContainer from "@/app/src/components/Containers/Main";

export default function About() {
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
              url: "/about",
              label: "About Us",
            },
          ]}
        />
      }
    >
      <MainContainer>
        <div className="flex flex-col justify-center items-center p-8">
          <h1 className="text-4xl font-bold text-gray-900 text-center">About <span className="text-emerald-500">Carbon Network</span></h1>
          <p className="text-lg text-gray-700 text-center mt-4">
            Carbon Network is a Minecraft Server Network that focuses on providing a fun and engaging experience for players of all ages. 
            Our team is dedicated to creating a welcoming community where players can connect, collaborate, and enjoy the game together.
          </p>
          <p className="text-lg text-gray-700 text-center mt-4">
            We are currently working hard on developing the first version of our server, which will feature a variety of exciting game modes and activities.
            Stay tuned for updates and announcements as we continue to build and improve the Carbon Network experience!
          </p>
          <p className="text-lg text-gray-700 text-center mt-4">
            Thank you for your support, and we look forward to seeing you in-game!
          </p>
        </div>
      </MainContainer>
    </PageLayout>
  );
}
