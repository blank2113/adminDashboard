import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "Туры",
  list: [
    { name: "Туры", link: "/main/tour/all", icon: "fa-solid fa-suitcase" },
    // {
    //   name: "Типы туров",
    //   link: "/main/tour_types",
    //   icon: "fa-solid fa-signs-post",
    // },
    // { name: "Города", link: "/main/cities", icon: "fa-solid fa-city" },
    // { name: "Гостиницы", link: "/main/hotels", icon: "fa-solid fa-hotel" },
    // { name: "Статьи", link: "/main/articles", icon: "fa-solid fa-comments" },
    // { name: "Отзывы", link: "/main/comments", icon: "fa-solid fa-file" },
    // { name: "FAQ", link: "/main/faq", icon: "fa-solid fa-circle-question" },
    // { name: "Пользователи", link: "/main/users", icon: "fa-solid fa-user" },
    // { name: "Партнеры", link: "/main/partners", icon: "fa-solid fa-users" },
    // {
    //   name: "Сотрудники",
    //   link: "/main/employees",
    //   icon: "fa-solid fa-user-tie",
    // },
    // { name: "Гиды", link: "/main/guides", icon: "fa-solid fa-person-walking" },
  ],
};

export const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    getNavItem: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { getNavItem } = navSlice.actions;
export default navSlice.reducer;
