import { Component, createBrowserRouter } from "react";
import IndexPage from "./pages/IndexPage";
import AdminPage from "./pages/AdminPage";
import MainLayout from "./pages/MainLayout";
import QuizesPage from "./pages/QuizesPage";
import CreateQuizPage from "./pages/CreateQuizPage";
import PlayQuizPage from "./pages/PlayQuizPage";
import BooksPage from "./pages/BooksPage";
import UsersPage from "./pages/UsersPage";
import LeetsPage from "./pages/LeetsPage";
import ProductCard from "./pages/ProductCard";
import ProductPage from "./pages/ProductPage";
import ProductDetail from "./pages/ProductDetail";

export const router = createBrowserRouter([
  {
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: IndexPage,
      },
      {
        path: "admin",
        Component: AdminPage,
      },{

             path: "/",
        Component: ProductPage,
      },
      {
        path: "products",
        Component: ProductPage,
      },
      {
        path: "products/:productId",
        Component: ProductDetail,
      },
      {
        path: "quizes",
        Component: QuizesPage,
      },
      {
        path: "quizes/create",
        Component: CreateQuizPage,
      },
      {
        path: "quizes/:id",
        Component: PlayQuizPage,
      },
      {
        path: "books",
        Component: BooksPage,
      },
      {
        path: "users",
        Component: UsersPage,
      },
       {    path: "cards",
        Component:ProductCard,
      },
      
      {    path: "leets",
        Component: LeetsPage,
      },
    ],
  },
]);