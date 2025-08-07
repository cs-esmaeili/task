// app/services/examSession.ts
import http from "@/lib/axios/axios";

const prefix = "api";

export const Login = () => http.get(`${prefix}?results=1&nat=us`);
