import { Select } from "./CategoryDropdown.styles";

type Props = {
  categories: { id: number; name: string }[];
  selectedCategory: number | "all";
  onCategoryChange: (id: number | "all") => void;
};

const CategoryDropdown = ({
  categories,
  selectedCategory,
  onCategoryChange,
}: Props) => {
  return (
    <Select
      value={selectedCategory}
      onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
        const value =
          e.target.value === "all" ? "all" : parseInt(e.target.value);
        onCategoryChange(value);
      }}
    >
      <option value="all">All Categories</option>
      {categories.map((category) => (
        <option key={category.id} value={category.id}>
          {category.name}
        </option>
      ))}
    </Select>
  );
};

export default CategoryDropdown;
