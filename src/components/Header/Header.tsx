import { HeaderTitle, DateContainer } from "./Header.styles.js";
import { HeaderContainer } from "../../styles/Layout";

const Header = () => {
  const dateOptions: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  const today = new Date().toLocaleString("en-US", dateOptions);
  return (
    <HeaderContainer>
      <HeaderTitle>Open Trivia Dashboard</HeaderTitle>
      <DateContainer>{today}</DateContainer>
    </HeaderContainer>
  );
};

export default Header;
