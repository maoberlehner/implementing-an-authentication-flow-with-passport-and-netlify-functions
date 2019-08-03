exports.BASE_URL = process.env.NODE_ENV === `development`
  ? `http://localhost:8888/.netlify/functions`
  : process.env.BASE_URL;

exports.COOKIE_SECURE = process.env.NODE_ENV !== `development`;

exports.GITHUB_CLIENT_ID = process.env.GITHUB_CLIENT_ID;
exports.GITHUB_CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET;

exports.SECRET = process.env.SECRET || `SUPERSECRET`;
