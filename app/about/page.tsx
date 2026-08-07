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
        .
      </MainContainer>
    </PageLayout>
  );
}
