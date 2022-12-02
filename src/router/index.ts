import { createRouter, createWebHistory } from "vue-router";
import AdviceMiscVue from "@/views/AdviceMisc.vue";
import ChildrensVue from "@/views/Childrens.vue";
import combinedFictionVue from "@/views/combinedFiction.vue";
import combinedNonfictionVue from "@/views/combinedNonfiction.vue";
import hardcoverFictionVue from "@/views/hardcoverFiction.vue";
import hardcoverNonfictionVue from "@/views/hardcoverNonfiction.vue";
import HomeView from "../views/HomeView.vue";
import PaperbackNonfictionVue from "@/views/PaperbackNonfiction.vue";
import PictureBooksVue from "@/views/PictureBooks.vue";
import SeriesBooksVue from "@/views/SeriesBooks.vue";
import TradeFictionVue from "@/views/TradeFiction.vue";
import YoungAdultVue from "@/views/YoungAdult.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/advice-how-to-and-miscellaneous",
      name: "adviceMisc",
      component: AdviceMiscVue,
    },
    {
      path: "/childrens-middle-grade-hardcover",
      name: "Childrens",
      component: ChildrensVue,
    },
    {
      path: "/combined-print-and-e-book-fiction",
      name: "combinedFiction",
      component: combinedFictionVue,
    },
    {
      path: "/combined-print-and-e-book-nonfiction",
      name: "combinedNonfiction",
      component: combinedNonfictionVue,
    },
    {
      path: "/hardcover-fiction",
      name: "hardcoverFiction",
      component: hardcoverFictionVue,
    },
    {
      path: "/hardcover-nonfiction",
      name: "hardcoverNoniction",
      component: hardcoverNonfictionVue,
    },
    {
      path: "/paperback-nonfiction",
      name: "PaperBackNonfiction",
      component: PaperbackNonfictionVue,
    },
    {
      path: "/picture-books",
      name: "PictureBooks",
      component: PictureBooksVue,
    },
    {
      path: "/series-books",
      name: "SeriesBooks",
      component: SeriesBooksVue,
    },
    {
      path: "/trade-fiction-paperback",
      name: "TradeFiction",
      component: TradeFictionVue,
    },
    {
      path: "/young-adult-hardcover",
      name: "YoungAdult",
      component: YoungAdultVue,
    },
  ],
});

export default router;
