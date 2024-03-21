import { apiSlice } from "./apiSlice";
const BASEURL = "http://localhost:4000";

export const urlSlice = apiSlice.injectEndpoints({
    endpoints: (builder) =>({
        getCategory : builder.query({
            query : ()=> ({
                url : `${BASEURL}/categories`
            })
        }) ,
        getSubCategory : builder.query({
            query : ()=> ({
                url : `${BASEURL}/subcategories`
            })
        }) ,
        getDuas : builder.query({
            query : ()=> ({
                url : `${BASEURL}/duas`
            })
        }) 
    })
})

export const {useGetCategoryQuery, useGetSubCategoryQuery, useGetDuasQuery} = urlSlice;