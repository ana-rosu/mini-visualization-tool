import CategoryDropdown from "../CategoryDropdown/CategoryDropdown";
import { DashboardContainer } from "../../styles/Layout";
import { useTrivia } from "../../contexts/useTrivia";
import BarChartPanel from "../Charts/BarChartPanel";
import PieChartPanel from "../Charts/PieChartPanel";
import { ChartsContainer } from "./Dashboard.styles";

const Dashboard = () => {
  const { categories, selectedCategory, setSelectedCategory } = useTrivia();

  const handleCategoryChange = (id: number | "all") => {
    setSelectedCategory(id);
  };

  const filteredCategories = categories.filter((cat) =>
    selectedCategory === "all" ? true : cat.id === selectedCategory
  );

  const getDifficultyDistribution = () => {
    const distribution: { [key: string]: number } = {
      Easy: 0,
      Medium: 0,
      Hard: 0,
    };
    filteredCategories.forEach((cat) => {
      distribution.Easy += cat.questionCount?.total_easy_question_count || 0;
      distribution.Medium +=
        cat.questionCount?.total_medium_question_count || 0;
      distribution.Hard += cat.questionCount?.total_hard_question_count || 0;
    });
    return distribution;
  };
  return (
    <DashboardContainer>
      <CategoryDropdown
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />
      <ChartsContainer>
        <BarChartPanel
          data={filteredCategories.map((cat) => ({
            name: cat.name,
            questionCount: cat.questionCount?.total_question_count,
          }))}
        />
        <PieChartPanel
          data={
            Object.entries(getDifficultyDistribution()).map(
              ([name, value]) => ({ name, value })
            ) || []
          }
        />
      </ChartsContainer>
    </DashboardContainer>
  );
};

export default Dashboard;
