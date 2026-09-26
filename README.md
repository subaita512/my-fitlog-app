# FitLog

FitLog is a responsive workout library and workout planning web application. Users can explore workouts, view workout details, add exercises to their daily plan, save workouts for later, and track completed exercises.

## Technologies Used

* Next.js
* React
* TypeScript
* Tailwind CSS
* Next.js App Router
* LocalStorage
* Sonner

## Key Features

1. **Workout Library**

   * Displays 12 different workouts.
   * Responsive grid layout for mobile, tablet, and desktop.
   * Shows workout image, category, equipment, duration, calories, and rating.

2. **Workout Details**

   * Each workout has a separate dynamic details page.
   * Shows description, categories, equipment, difficulty, sets, reps, duration, calories, and rating.
   * Includes workout instructions.

3. **My Plan**

   * Users can add workouts to today's plan.
   * Shows total exercises, minutes, and calories.
   * Users can view workout details.
   * Users can mark workouts as completed.
   * Users can remove workouts from the plan.

4. **Saved Workouts**

   * Users can save workouts for later.
   * Saved workouts are displayed in the Saved tab.
   * Users can remove saved workouts.

5. **Workout Sorting**

   * Workouts can be sorted by duration, calories, or rating.
   * Duration is selected by default.

6. **Toast Notifications**

   * Users receive feedback when adding, saving, completing, or removing workouts.

7. **Responsive Design**

   * The application works across mobile, tablet, and desktop screen sizes.

8. **Local Storage**

   * Workout plan, saved workouts, and completed workouts are stored in the browser's LocalStorage.

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then run the development server:

```bash
npm run dev
```

Open the application in your browser at:

```text
http://localhost:3000
```

## Project Structure

```text
app/
├── my-plan/
│   └── page.tsx
├── workout/
│   └── [id]/
│       └── page.tsx
├── page.tsx
└── layout.tsx

components/
├── Hero.tsx
├── Navbar.tsx
├── WorkoutActions.tsx
├── WorkoutCard.tsx
└── WorkoutLibrary.tsx

data/
└── workouts.ts

public/
└── workout images and FitLog assets
```

## Future Improvements

* Workout search
* More workout categories
* User authentication
* Cloud database storage
* Workout progress tracking
* Personalized workout recommendations
