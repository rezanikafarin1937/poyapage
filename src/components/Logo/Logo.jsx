import DeveloperIcon from "@/icons/DeveloperIcon";
import ServiceCard from "../ServiceCard/ServiceCard "

const Logo = () => {
  return (
    <div>
      <ServiceCard logo={true} title="Reza Nikafarin" description="Frontend Developer">
        <DeveloperIcon />
      </ServiceCard>
    </div>
  );
};

export default Logo;
