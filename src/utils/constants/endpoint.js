const BASE_URL = "https://remedial.id.suika.pw/api";

const ENDPOINTS = {
  // Auth,
  USERS: `${BASE_URL}/users`,
  REGISTER: `${BASE_URL}/register`,
  LOGIN: `${BASE_URL}/login`,
  LOGOUT: `${BASE_URL}/logout`,
  // Path
  KARYA: `${BASE_URL}/karya`,
  KELAS: `${BASE_URL}/kelas`,
  ARTIKEL: `${BASE_URL}/artikel`,
  MATERI: `${BASE_URL}/materi`,
  PROGRAM: `${BASE_URL}/program`,
  CHALLENGE: `${BASE_URL}/challenge`,
  KOMENTAR: `${BASE_URL}/komentar`,
};

export default ENDPOINTS;
