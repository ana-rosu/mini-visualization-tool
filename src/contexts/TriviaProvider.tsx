import React, { createContext, useState, useEffect } from "react";
import { fetchCategories, fetchCategoryQuestionCount } from "../api/trivia";
import type { Category } from "../api/trivia";

export interface TriviaContextType {
  categories: Category[];
  selectedCategory: number | "all";
  setSelectedCategory: (id: number | "all") => void;
}

// eslint-disable-next-line react-refresh/only-export-components
export const TriviaContext = createContext<TriviaContextType | undefined>(
  undefined
);

export const TriviaProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<number | "all">(
    "all"
  );

  useEffect(() => {
    const fetchCategoriesWithCounts = async () => {
      const fetchedCategories = await fetchCategories();
      setCategories(fetchedCategories);

      const categoriesWithCounts = await Promise.all(
        fetchedCategories.map(async (category) => {
          const questionCount = await fetchCategoryQuestionCount(category.id);
          return { ...category, questionCount };
        })
      );
      setCategories(categoriesWithCounts);
    };
    fetchCategoriesWithCounts();
  }, []);

  const value = {
    categories,
    selectedCategory,
    setSelectedCategory,
  };

  return (
    <TriviaContext.Provider value={value}>{children}</TriviaContext.Provider>
  );
};

export default TriviaContext;
