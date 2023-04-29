import { createContext, useReducer, useContext, Dispatch, useMemo } from 'react';

// Define the ExperienceTheme type
export interface ExperienceTheme {
  experience?: Experience;
}

// Define the ThemeAction type
type ThemeAction = { type: 'SET_EXPERIENCE'; payload: Experience } | { type: 'CLOSE_EXPERIENCE' };

// Initial state
const initialState: ExperienceTheme = { experience: undefined };

// Reducer function
const themeReducer = (state: ExperienceTheme, action: ThemeAction): ExperienceTheme => {
  switch (action.type) {
    case 'SET_EXPERIENCE': {
      return { ...state, experience: action.payload };
    }
    case 'CLOSE_EXPERIENCE': {
      return { ...state, experience: undefined };
    }
    default:
      return state;
  }
};

// Context
const ExperienceContext = createContext<{ state: ExperienceTheme; dispatch: Dispatch<ThemeAction> }>({
  state: { experience: undefined },
  dispatch: () => null,
});

// Custom ExperienceProvider
const ExperienceProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(themeReducer, initialState);

  // useEffect(() => {
  //   if (typeof window !== 'undefined') {
  //     const wantsDark =
  //       (localStorage.getItem('dark') && localStorage.getItem('dark') === 'true') ||
  //       window.matchMedia('(prefers-color-scheme: dark)').matches;
  //     if (wantsDark !== state.dark) {
  //       dispatch({ type: 'TOGGLE_THEME' });
  //     }
  //   }
  // }, [state.dark]);

  const context = useMemo(
    () => ({
      state,
      dispatch,
    }),
    [state, dispatch],
  );

  return <ExperienceContext.Provider value={context}>{children}</ExperienceContext.Provider>;
};

// Custom hook to use the theme
const useExperience = () => useContext(ExperienceContext);

export { ExperienceProvider, useExperience };
