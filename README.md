# Mini Visualization Tool
This project is a mini visualization tool built using React, designed to interact with the [Open Trivia DB API](https://opentdb.com/api_config.php). 
It allows users to explore trivia questions distributions across categories and difficulty levels using interactive charts.


## Features

- Display a list of available trivia categories using a dropdown.
- Filter to view data for a single category or all categories. 
- Visualize the number of questions in each category using a bar chart.
- Visualize question difficulty (Easy, Medium, Hard) using a pie chart.
- Dynamic Loading State: Shows a loading spinner while fetching categories and question counts.
- Responsive UI

## Technical Details

- Frontend Framework: [React](https://react.dev/) (functional components and hooks)
- Data Visualization: [Recharts](https://recharts.org/en-US) library for BarChart and PieChart components
- API Integration: [Open Trivia DB API](https://opentdb.com/api_config.php). 
- State Management: React Context API (useTrivia context)
- Styling: [Styled Components](https://styled-components.com/) for modular, maintainable CSS

## Installation

1) Clone the repository:
   ```
     git clone https://github.com/ana-rosu/mini-visualization-tool.git
     cd mini-visualization-tool
   ```
3) Install dependencies:
    ```
    npm i
    ```
5) Start the development server:
    ```
   npm run dev
    ```
7) Open http://localhost:5173

---
This project is submitted for the JetBrains Survey Visualizer Integration Project / Internship Task #1.
