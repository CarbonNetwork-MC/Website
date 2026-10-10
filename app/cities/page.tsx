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
              url: "cities",
              label: "Cities gamemode",
            },
          ]}
        />
      }
    >
      <MainContainer>
        <div className="flex flex-col justify-center items-center p-8">
          <h1 className="text-4xl font-bold text-gray-900 text-center">About <span className="text-emerald-500">Carbon Network</span> - Cities gamemode</h1>
          <p className="text-lg text-gray-700 text-center mt-4">
            Cities is a custom gamemode on Carbon Network, where we simulate real life with some slight role-playing elements. Kind of like FiveM for GTA V.
          </p>
          <p className="text-lg text-gray-700 text-center mt-4">
            In Cities, players can get jobs, own properties, and interact with other players in a dynamic and evolving world. 
            The gamemode encourages creativity, collaboration, and strategic thinking as players build their virtual lives within the city environment.
          </p>
        </div>
      </MainContainer>
    </PageLayout>
  );
}
