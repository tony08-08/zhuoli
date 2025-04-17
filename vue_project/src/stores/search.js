import { ref } from "vue";
import { defineStore } from "pinia";
import { search } from "@/services/modules/search";

export const useSearchStore = defineStore("search", {
  state: () => {
    return {
      searchData: [],
      searchParams: {
        keywordType: "category",
        keyword: "",
        isDomestic: null,
        selfCitingRate: "all",
        compatriotRate: "all",
        isDomestic: "",
        totalReviewRatio: "all",
        categoryId: "",
        recommend: "0",
        selfStart: "",
        selfEnd: "",
        numberStart: "",
        numberEnd: "",
        keywordType: "",
        keyword: "",
        ifStart_2019: "",
        ifEnd_2019: "",
        ifStart: "",
        ifEnd: "",
        jcr: "",
        sub: "",
        trrl: "",
        trrr: "",
      },
      sortParams: {
        order: "",
        orderType: "",
      },
      pagination: {
        pageNum: 1,
        pageSize: 10,
        total: 0,
      },
    };
  },
  actions: {
    // 获取搜索数据
    async getSearchData() {
      const params = {
        ...this.searchParams,
        ...this.sortParams,
        ...this.pagination,
      };
      const res = await search(params);
      this.searchData = res.data.data_original;
      console.log("searchData", this.searchData);
    },
    // 更新搜索参数
    updateSearchParams(params) {
      this.searchParams = params;
      this.pagination.pageNum = 1; // 重置到第一页
      this.getSearchData();
    },
    // 更新排序参数
    updateSortParams(sortParams) {
      this.sortParams = sortParams;
      this.pagination.pageNum = 1; // 排序时重置到第一页
      this.getSearchData();
    },
    // 更新分页参数
    updatePagination(pagination) {
      this.pagination = pagination;
      this.getSearchData();
    },
  },
});
