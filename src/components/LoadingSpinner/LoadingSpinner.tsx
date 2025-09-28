import { SpinnerContainer, SpinnerImage } from "./LoadingSpinner.styles";
import Spinner from "../../assets/Spinner.svg?react";

const LoadingSpinner = () => {
  return (
    <SpinnerContainer>
      <SpinnerImage src={Spinner} alt="Loading..." />
    </SpinnerContainer>
  );
};

export default LoadingSpinner;
