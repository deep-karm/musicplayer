import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import env from "./env";
export const shazamCoreApi = createApi({
	reducerPath: "shazamCoreApi",
	baseQuery: fetchBaseQuery({
		baseUrl: "https://shazam.p.rapidapi.com",
		prepareHeaders: (headers) => {
			headers.set("X-RapidAPI-Key", env.RAPID_API_KEY);
			headers.set("X-RapidAPI-Host", "shazam.p.rapidapi.com");
			return headers;
		},
	}),
	endpoints: (builder) => ({
		getSongDetails: builder.query({
			query: ({ songid }) => `/songs/get-details?key=${songid}`,
		}),
		// getSongRelated: builder.query({
		// 	query: ({ songid }) => `/songs/list-recommendations?key=${songid}`,
		// }),
		getTopCharts: builder.query({ query: () => "/charts/track" }),
	}),
});
export const {
	useGetSongDetailsQuery,
	useGetTopChartsQuery,
	// useGetSongRelatedQuery,
} = shazamCoreApi;
