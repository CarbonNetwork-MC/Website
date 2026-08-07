import Image from "next/image";

import Breadcrumbs from "@/app/src/components/Navigation/Breadcrumbs";
import MainContainer from "@/app/src/components/Containers/Main";

export default function Librarian() {
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
          url: "/boeken",
          label: "Librarian (hidden)",
        },
      ]}
    />

    {/* Main content */}
    <MainContainer>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-4 text-center boeken-gallery">
            <Image
              src="/boek_2.png"
              alt="First Floor Layout"
              width={800}
              height={800}
              className=""
            />
            <Image
              src="/boek_1.png"
              alt="Second Floor Layout"
              width={800}
              height={800}
              className=""
            />
        </div>
    </MainContainer>
    {/* End of main content */}
    {/* End of page */}
    </>
  );
}
