import { useEffect, useState } from 'react';

function useMediaQuery(query: string) {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia(query);

        const handleMatchesChange = (e: MediaQueryListEvent) => {
            setMatches(e.matches);
        };

        mediaQuery.addListener(handleMatchesChange);
        setMatches(mediaQuery.matches);

        return () => {
            mediaQuery.removeListener(handleMatchesChange);
        };
    }, [query]);

    return matches;
}

export default useMediaQuery;
