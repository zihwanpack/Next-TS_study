import { DUMMY_MOVIES } from '@/constants/dummy-movie';

export function getAllMovies() {
  return DUMMY_MOVIES;
}

export function getLatestMovies() {
  return DUMMY_MOVIES.slice(0, 3);
}

export function getAvailableMoviesYears() {
  return DUMMY_MOVIES.reduce((years: number[], movies) => {
    const year = new Date(movies.date).getFullYear();
    if (!years.includes(year)) {
      years.push(year);
    }
    return years;
  }, []).sort((a, b) => b - a);
}

export function getAvailableMoviesMonths(year: string) {
  return DUMMY_MOVIES.reduce((months: number[], movies) => {
    const newsYear = new Date(movies.date).getFullYear();
    if (newsYear === +year) {
      const month = new Date(movies.date).getMonth();
      if (!months.includes(month)) {
        months.push(month + 1);
      }
    }
    return months;
  }, []).sort((a, b) => b - a);
}

export function getMoviesForYear(year: string[]) {
  return DUMMY_MOVIES.filter(
    (news) => new Date(news.date).getFullYear() === +year
  );
}

export function getMoviesForYearAndMonth(year: string, month: string) {
  return DUMMY_MOVIES.filter((movies) => {
    const newsYear = new Date(movies.date).getFullYear();
    const newsMonth = new Date(movies.date).getMonth() + 1;
    return newsYear === +year && newsMonth === +month;
  });
}
