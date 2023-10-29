import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface ThumbnailDetail {
  small: string;
  medium?: string; // Optional since not all have this
  large: string;
}

interface Thumbnails {
  trending?: ThumbnailDetail;
  regular: ThumbnailDetail;
}

export interface MediaState {
  id: string;
  title: string;
  thumbnail: Thumbnails;
  year: number;
  category: "Movie" | "TV Series"; // Using union types for predefined values
  rating: "E" | "PG" | "18+"; // Same reasoning as above
  isBookmarked: boolean;
  isTrending: boolean;
}

const initialState: MediaState[] = [
  {
    id: "1",
    title: "Beyond Earth",
    thumbnail: {
      trending: {
        small: "src/assets/thumbnails/beyond-earth/trending/small.jpg",
        large: "src/assets/thumbnails/beyond-earth/trending/large.jpg",
      },
      regular: {
        small: "src/assets/thumbnails/beyond-earth/regular/small.jpg",
        medium: "src/assets/thumbnails/beyond-earth/regular/medium.jpg",
        large: "src/assets/thumbnails/beyond-earth/regular/large.jpg",
      },
    },
    year: 2019,
    category: "Movie",
    rating: "PG",
    isBookmarked: false,
    isTrending: true,
  },
  {
    id: "2",
    title: "Bottom Gear",
    thumbnail: {
      trending: {
        small: "src/assets/thumbnails/bottom-gear/trending/small.jpg",
        large: "src/assets/thumbnails/bottom-gear/trending/large.jpg",
      },
      regular: {
        small: "src/assets/thumbnails/bottom-gear/regular/small.jpg",
        medium: "src/assets/thumbnails/bottom-gear/regular/medium.jpg",
        large: "src/assets/thumbnails/bottom-gear/regular/large.jpg",
      },
    },
    year: 2021,
    category: "Movie",
    rating: "PG",
    isBookmarked: false,
    isTrending: true,
  },
  {
    id: "3",
    title: "Undiscovered Cities",
    thumbnail: {
      trending: {
        small: "src/assets/thumbnails/undiscovered-cities/trending/small.jpg",
        large: "src/assets/thumbnails/undiscovered-cities/trending/large.jpg",
      },
      regular: {
        small: "src/assets/thumbnails/undiscovered-cities/regular/small.jpg",
        medium: "src/assets/thumbnails/undiscovered-cities/regular/medium.jpg",
        large: "src/assets/thumbnails/undiscovered-cities/regular/large.jpg",
      },
    },
    year: 2019,
    category: "TV Series",
    rating: "E",
    isBookmarked: false,
    isTrending: true,
  },
  {
    id: "4",
    title: "1998",
    thumbnail: {
      trending: {
        small: "src/assets/thumbnails/1998/trending/small.jpg",
        large: "src/assets/thumbnails/1998/trending/large.jpg",
      },
      regular: {
        small: "src/assets/thumbnails/1998/regular/small.jpg",
        medium: "src/assets/thumbnails/1998/regular/medium.jpg",
        large: "src/assets/thumbnails/1998/regular/large.jpg",
      },
    },
    year: 2021,
    category: "Movie",
    rating: "18+",
    isBookmarked: false,
    isTrending: true,
  },
  {
    id: "5",
    title: "Dark Side of the Moon",
    thumbnail: {
      trending: {
        small: "src/assets/thumbnails/dark-side-of-the-moon/trending/small.jpg",
        large: "src/assets/thumbnails/dark-side-of-the-moon/trending/large.jpg",
      },
      regular: {
        small: "src/assets/thumbnails/dark-side-of-the-moon/regular/small.jpg",
        medium:
          "src/assets/thumbnails/dark-side-of-the-moon/regular/medium.jpg",
        large: "src/assets/thumbnails/dark-side-of-the-moon/regular/large.jpg",
      },
    },
    year: 2018,
    category: "TV Series",
    rating: "PG",
    isBookmarked: true,
    isTrending: true,
  },
  {
    id: "6",
    title: "The Great Lands",
    thumbnail: {
      regular: {
        small: "src/assets/thumbnails/the-great-lands/regular/small.jpg",
        medium: "src/assets/thumbnails/the-great-lands/regular/medium.jpg",
        large: "src/assets/thumbnails/the-great-lands/regular/large.jpg",
      },
    },
    year: 2019,
    category: "Movie",
    rating: "E",
    isBookmarked: false,
    isTrending: false,
  },
  {
    id: "7",
    title: "The Diary",
    thumbnail: {
      regular: {
        small: "src/assets/thumbnails/the-diary/regular/small.jpg",
        medium: "src/assets/thumbnails/the-diary/regular/medium.jpg",
        large: "src/assets/thumbnails/the-diary/regular/large.jpg",
      },
    },
    year: 2019,
    category: "TV Series",
    rating: "PG",
    isBookmarked: false,
    isTrending: false,
  },
  {
    id: "8",
    title: "Earth’s Untouched",
    thumbnail: {
      regular: {
        small: "src/assets/thumbnails/earths-untouched/regular/small.jpg",
        medium: "src/assets/thumbnails/earths-untouched/regular/medium.jpg",
        large: "src/assets/thumbnails/earths-untouched/regular/large.jpg",
      },
    },
    year: 2017,
    category: "Movie",
    rating: "18+",
    isBookmarked: true,
    isTrending: false,
  },
  {
    id: "9",
    title: "No Land Beyond",
    thumbnail: {
      regular: {
        small: "src/assets/thumbnails/no-land-beyond/regular/small.jpg",
        medium: "src/assets/thumbnails/no-land-beyond/regular/medium.jpg",
        large: "src/assets/thumbnails/no-land-beyond/regular/large.jpg",
      },
    },
    year: 2019,
    category: "Movie",
    rating: "E",
    isBookmarked: false,
    isTrending: false,
  },
  {
    id: "10",
    title: "During the Hunt",
    thumbnail: {
      regular: {
        small: "src/assets/thumbnails/during-the-hunt/regular/small.jpg",
        medium: "src/assets/thumbnails/during-the-hunt/regular/medium.jpg",
        large: "src/assets/thumbnails/during-the-hunt/regular/large.jpg",
      },
    },
    year: 2016,
    category: "TV Series",
    rating: "PG",
    isBookmarked: false,
    isTrending: false,
  },
  {
    id: "11",
    title: "Autosport the Series",
    thumbnail: {
      regular: {
        small: "src/assets/thumbnails/autosport-the-series/regular/small.jpg",
        medium: "src/assets/thumbnails/autosport-the-series/regular/medium.jpg",
        large: "src/assets/thumbnails/autosport-the-series/regular/large.jpg",
      },
    },
    year: 2016,
    category: "TV Series",
    rating: "18+",
    isBookmarked: false,
    isTrending: false,
  },
  {
    id: "12",
    title: "Same Answer II",
    thumbnail: {
      regular: {
        small: "src/assets/thumbnails/same-answer-2/regular/small.jpg",
        medium: "src/assets/thumbnails/same-answer-2/regular/medium.jpg",
        large: "src/assets/thumbnails/same-answer-2/regular/large.jpg",
      },
    },
    year: 2017,
    category: "Movie",
    rating: "E",
    isBookmarked: false,
    isTrending: false,
  },
  {
    id: "13",
    title: "Below Echo",
    thumbnail: {
      regular: {
        small: "src/assets/thumbnails/below-echo/regular/small.jpg",
        medium: "src/assets/thumbnails/below-echo/regular/medium.jpg",
        large: "src/assets/thumbnails/below-echo/regular/large.jpg",
      },
    },
    year: 2016,
    category: "TV Series",
    rating: "PG",
    isBookmarked: false,
    isTrending: false,
  },
  {
    id: "14",
    title: "The Rockies",
    thumbnail: {
      regular: {
        small: "src/assets/thumbnails/the-rockies/regular/small.jpg",
        medium: "src/assets/thumbnails/the-rockies/regular/medium.jpg",
        large: "src/assets/thumbnails/the-rockies/regular/large.jpg",
      },
    },
    year: 2015,
    category: "TV Series",
    rating: "E",
    isBookmarked: true,
    isTrending: false,
  },
  {
    id: "15",
    title: "Relentless",
    thumbnail: {
      regular: {
        small: "src/assets/thumbnails/relentless/regular/small.jpg",
        medium: "src/assets/thumbnails/relentless/regular/medium.jpg",
        large: "src/assets/thumbnails/relentless/regular/large.jpg",
      },
    },
    year: 2017,
    category: "Movie",
    rating: "PG",
    isBookmarked: true,
    isTrending: false,
  },
  {
    id: "16",
    title: "Community of Ours",
    thumbnail: {
      regular: {
        small: "src/assets/thumbnails/community-of-ours/regular/small.jpg",
        medium: "src/assets/thumbnails/community-of-ours/regular/medium.jpg",
        large: "src/assets/thumbnails/community-of-ours/regular/large.jpg",
      },
    },
    year: 2018,
    category: "TV Series",
    rating: "18+",
    isBookmarked: false,
    isTrending: false,
  },
  {
    id: "17",
    title: "Van Life",
    thumbnail: {
      regular: {
        small: "src/assets/thumbnails/van-life/regular/small.jpg",
        medium: "src/assets/thumbnails/van-life/regular/medium.jpg",
        large: "src/assets/thumbnails/van-life/regular/large.jpg",
      },
    },
    year: 2015,
    category: "Movie",
    rating: "PG",
    isBookmarked: false,
    isTrending: false,
  },
  {
    id: "18",
    title: "The Heiress",
    thumbnail: {
      regular: {
        small: "src/assets/thumbnails/the-heiress/regular/small.jpg",
        medium: "src/assets/thumbnails/the-heiress/regular/medium.jpg",
        large: "src/assets/thumbnails/the-heiress/regular/large.jpg",
      },
    },
    year: 2021,
    category: "Movie",
    rating: "PG",
    isBookmarked: true,
    isTrending: false,
  },
  {
    id: "19",
    title: "Off the Track",
    thumbnail: {
      regular: {
        small: "src/assets/thumbnails/off-the-track/regular/small.jpg",
        medium: "src/assets/thumbnails/off-the-track/regular/medium.jpg",
        large: "src/assets/thumbnails/off-the-track/regular/large.jpg",
      },
    },
    year: 2017,
    category: "Movie",
    rating: "18+",
    isBookmarked: true,
    isTrending: false,
  },
  {
    id: "20",
    title: "Whispering Hill",
    thumbnail: {
      regular: {
        small: "src/assets/thumbnails/whispering-hill/regular/small.jpg",
        medium: "src/assets/thumbnails/whispering-hill/regular/medium.jpg",
        large: "src/assets/thumbnails/whispering-hill/regular/large.jpg",
      },
    },
    year: 2017,
    category: "Movie",
    rating: "E",
    isBookmarked: false,
    isTrending: false,
  },
  {
    id: "21",
    title: "112",
    thumbnail: {
      regular: {
        small: "src/assets/thumbnails/112/regular/small.jpg",
        medium: "src/assets/thumbnails/112/regular/medium.jpg",
        large: "src/assets/thumbnails/112/regular/large.jpg",
      },
    },
    year: 2013,
    category: "TV Series",
    rating: "PG",
    isBookmarked: false,
    isTrending: false,
  },
  {
    id: "22",
    title: "Lone Heart",
    thumbnail: {
      regular: {
        small: "src/assets/thumbnails/lone-heart/regular/small.jpg",
        medium: "src/assets/thumbnails/lone-heart/regular/medium.jpg",
        large: "src/assets/thumbnails/lone-heart/regular/large.jpg",
      },
    },
    year: 2017,
    category: "Movie",
    rating: "E",
    isBookmarked: true,
    isTrending: false,
  },
  {
    id: "23",
    title: "Production Line",
    thumbnail: {
      regular: {
        small: "src/assets/thumbnails/production-line/regular/small.jpg",
        medium: "src/assets/thumbnails/production-line/regular/medium.jpg",
        large: "src/assets/thumbnails/production-line/regular/large.jpg",
      },
    },
    year: 2018,
    category: "TV Series",
    rating: "PG",
    isBookmarked: false,
    isTrending: false,
  },
  {
    id: "24",
    title: "Dogs",
    thumbnail: {
      regular: {
        small: "src/assets/thumbnails/dogs/regular/small.jpg",
        medium: "src/assets/thumbnails/dogs/regular/medium.jpg",
        large: "src/assets/thumbnails/dogs/regular/large.jpg",
      },
    },
    year: 2016,
    category: "TV Series",
    rating: "E",
    isBookmarked: true,
    isTrending: false,
  },
  {
    id: "25",
    title: "Asia in 24 Days",
    thumbnail: {
      regular: {
        small: "src/assets/thumbnails/asia-in-24-days/regular/small.jpg",
        medium: "src/assets/thumbnails/asia-in-24-days/regular/medium.jpg",
        large: "src/assets/thumbnails/asia-in-24-days/regular/large.jpg",
      },
    },
    year: 2020,
    category: "TV Series",
    rating: "PG",
    isBookmarked: false,
    isTrending: false,
  },
  {
    id: "26",
    title: "The Tasty Tour",
    thumbnail: {
      regular: {
        small: "src/assets/thumbnails/the-tasty-tour/regular/small.jpg",
        medium: "src/assets/thumbnails/the-tasty-tour/regular/medium.jpg",
        large: "src/assets/thumbnails/the-tasty-tour/regular/large.jpg",
      },
    },
    year: 2016,
    category: "TV Series",
    rating: "PG",
    isBookmarked: false,
    isTrending: false,
  },
  {
    id: "27",
    title: "Darker",
    thumbnail: {
      regular: {
        small: "src/assets/thumbnails/darker/regular/small.jpg",
        medium: "src/assets/thumbnails/darker/regular/medium.jpg",
        large: "src/assets/thumbnails/darker/regular/large.jpg",
      },
    },
    year: 2017,
    category: "Movie",
    rating: "18+",
    isBookmarked: true,
    isTrending: false,
  },
  {
    id: "28",
    title: "Unresolved Cases",
    thumbnail: {
      regular: {
        small: "src/assets/thumbnails/unresolved-cases/regular/small.jpg",
        medium: "src/assets/thumbnails/unresolved-cases/regular/medium.jpg",
        large: "src/assets/thumbnails/unresolved-cases/regular/large.jpg",
      },
    },
    year: 2018,
    category: "TV Series",
    rating: "18+",
    isBookmarked: false,
    isTrending: false,
  },
  {
    id: "29",
    title: "Mission: Saturn",
    thumbnail: {
      regular: {
        small: "src/assets/thumbnails/mission-saturn/regular/small.jpg",
        medium: "src/assets/thumbnails/mission-saturn/regular/medium.jpg",
        large: "src/assets/thumbnails/mission-saturn/regular/large.jpg",
      },
    },
    year: 2017,
    category: "Movie",
    rating: "PG",
    isBookmarked: true,
    isTrending: false,
  },
];

export const mediaSlice = createSlice({
  name: "media",
  initialState,
  reducers: {
    toggleBookmark: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      for (let i = 0; i < state.length; i++) {
        if (state[i].id === id) {
          state[i].isBookmarked = !state[i].isBookmarked;
        }
      }
    },
  },
});

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = mediaSlice.actions
export const { toggleBookmark } = mediaSlice.actions;

export default mediaSlice.reducer;
