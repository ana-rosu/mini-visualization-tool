import CategoryDropdown from "../CategoryDropdown/CategoryDropdown";
import { DashboardContainer } from "../../styles/Layout";
import { useTrivia } from "../../contexts/useTrivia";

const Dashboard = () => {
  const { categories, selectedCategory, setSelectedCategory } = useTrivia();

  const handleCategoryChange = (id: number | "all") => {
    setSelectedCategory(id);
  };

  return (
    <DashboardContainer>
      <CategoryDropdown
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />
    </DashboardContainer>
  );
};

export default Dashboard;
