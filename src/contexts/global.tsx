import { createContext, useReducer, useContext, Dispatch, useMemo } from 'react';

// Define the GlobalState type
export interface GlobalState {
  experience?: Experience;
  additionalResourcesPopinState?: {
    additionalResources: AdditionalResources[];
    title: string;
    description: string;
    regionKey: RegionKey;
  };
  errorMessage?: string;
}

// Define the ThemeAction type
type Action =
  | { type: 'SET_EXPERIENCE'; payload: Experience }
  | { type: 'CLOSE_EXPERIENCE' }
  | {
      type: 'SET_ADDITIONAL_RESOURCES_POPIN';
      payload: { additionalResources: AdditionalResources[]; title: string; description: string; regionKey: RegionKey };
    }
  | { type: 'CLOSE_ADDITONAL_RESOURCES_POPIN' }
  | { type: 'SET_ERROR'; payload: string }
  | { type: 'CLEAR_ERROR' };

// Initial state
const initialState: GlobalState = { experience: undefined, errorMessage: undefined };

// Reducer function
const themeReducer = (state: GlobalState, action: Action): GlobalState => {
  switch (action.type) {
    case 'SET_EXPERIENCE': {
      return { ...state, experience: action.payload };
    }
    case 'CLOSE_EXPERIENCE': {
      return { ...state, experience: undefined };
    }
    case 'SET_ADDITIONAL_RESOURCES_POPIN': {
      return { ...state, additionalResourcesPopinState: action.payload };
    }
    case 'CLOSE_ADDITONAL_RESOURCES_POPIN': {
      return { ...state, additionalResourcesPopinState: undefined };
    }
    case 'SET_ERROR': {
      return { ...state, errorMessage: action.payload };
    }
    case 'CLEAR_ERROR': {
      return { ...state, errorMessage: undefined };
    }
    default:
      return state;
  }
};

// Context
const ExperienceContext = createContext<{ state: GlobalState; dispatch: Dispatch<Action> }>({
  state: { experience: undefined },
  dispatch: () => null,
});

// Custom GlobalProvider
const GlobalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
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
const useGlobalState = () => useContext(ExperienceContext);

export { GlobalProvider, useGlobalState };
