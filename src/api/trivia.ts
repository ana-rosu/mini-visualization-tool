const BASE_URL = "https://opentdb.com";

export interface CategoryQuestionCount {
  total_question_count: number;
  total_easy_question_count: number;
  total_medium_question_count: number;
  total_hard_question_count: number;
}

export interface Category {
  id: number;
  name: string;
  questionCount: CategoryQuestionCount;
}

export const getSessionToken = async (): Promise<string | null> => {
  try {
    const res = await fetch(`${BASE_URL}/api_token.php?command=request`);
    const data = await res.json();
    return data.token as string;
  } catch (err) {
    console.error("Failed to get session token:", err);
    return null;
  }
};

export const fetchCategories = async (): Promise<Category[]> => {
  try {
    const res = await fetch(`${BASE_URL}/api_category.php`);
    const data = await res.json();
    return (data.trivia_categories as Category[]) || [];
  } catch (err) {
    console.error("Failed to fetch categories:", err);
    return [];
  }
};

export const fetchCategoryQuestionCount = async (
  categoryId: number
): Promise<CategoryQuestionCount> => {
  try {
    const res = await fetch(`${BASE_URL}/api_count.php?category=${categoryId}`);
    const data = await res.json();
    return (
      (data.category_question_count as CategoryQuestionCount) || {
        total_question_count: 0,
        total_easy_question_count: 0,
        total_medium_question_count: 0,
        total_hard_question_count: 0,
      }
    );
  } catch (err) {
    console.error("Failed to fetch category question count:", err);
    return {
      total_question_count: 0,
      total_easy_question_count: 0,
      total_medium_question_count: 0,
      total_hard_question_count: 0,
    };
  }
};
