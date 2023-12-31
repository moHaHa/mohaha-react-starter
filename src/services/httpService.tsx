import axios, { AxiosError } from 'axios';
import tokenService from './tokenService';

export const baseURL = ((import.meta.env.VITE_API_BASE_URL as string) ?? '').trim()
	? (import.meta.env.VITE_API_BASE_URL as string)
	: 'base-url-not-found';
const http = axios.create({
	baseURL,
});

http.interceptors.request.use(
	(config) => {
		const token = tokenService.getLocalAccessToken();
		if (token) {
			config.headers['Authorization'] = `Bearer ${token}`;
			config.headers['post'] = { 'Content-Type': 'application/json' };
		}
		return config;
	},
	(error) => {
		return Promise.reject(error);
	}
);

http.interceptors.response.use(
	(res) => {
		return res;
	},
	async (err: HttpError) => {
		console.log('err.response', err.response);
		// // (response?.status === 401) means  unauthorized
		// if (err.response?.status === 401) {
		// 	const refreshToken = tokenService.getLocalRefreshToken();
		// 	const rs = await axios
		// 		.post(`${baseURL}/auth/refresh-token`, {
		// 			token: refreshToken,
		// 		})
		// 		.catch((err) => {
		// 			return Promise.reject(err);
		// 		});
		// 	tokenService.setLocalAccessToken(rs?.data?.data?.accessToken);
		// 	return http(err.response.config);
		// }

		return Promise.reject(err);
	}
);

export type HttpError = AxiosError<{
	msg: string;
	args?: string[];
}>;

export default http;
