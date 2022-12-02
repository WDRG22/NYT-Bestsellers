import { createRouter, createWebHistory } from "vue-router";
import AdviceMiscVue from "@/views/AdviceMisc.vue";
import ChildrensHardcoverVue from "@/views/ChildrensHardcover.vue";
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
      component: HomeView,
    },
    {
      path: "/advice-how-to-and-miscellaneous",
      component: AdviceMiscVue,
    },
    {
      path: "/childrens-middle-grade-hardcover",
      component: ChildrensHardcoverVue,
    },
    {
      path: "/combined-print-and-e-book-fiction",
      component: combinedFictionVue,
    },
    {
      path: "/combined-print-and-e-book-nonfiction",
      component: combinedNonfictionVue,
    },
    {
      path: "/hardcover-fiction",
      component: hardcoverFictionVue,
    },
    {
      path: "/hardcover-nonfiction",
      component: hardcoverNonfictionVue,
    },
    {
      path: "/paperback-nonfiction",
      component: PaperbackNonfictionVue,
    },
    {
      path: "/picture-books",
      component: PictureBooksVue,
    },
    {
      path: "/series-books",
      component: SeriesBooksVue,
    },
    {
      path: "/trade-fiction-paperback",
      component: TradeFictionVue,
    },
    {
      path: "/young-adult-hardcover",
      component: YoungAdultVue,
    },
  ],
});

export default router;
