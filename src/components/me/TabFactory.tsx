import { FC } from "react";
import Experience from "./Experience";
import Certificate from "./Certificate";

const TabFactory: FC<{ tab: string }> = ({ tab }) => {
  switch (tab) {
    case "Experience":
      return <Experience />;
    case "Certificate":
      return <Certificate />;
  }
};

export default TabFactory;
