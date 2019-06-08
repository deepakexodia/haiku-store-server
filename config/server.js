// config used by server side only
// const dbHost = process.env.DB_HOST || '127.0.0.1';
// const dbPort = process.env.DB_PORT || 27017;
// const dbName = process.env.DB_NAME || 'shop';
// const dbUser = process.env.DB_USER || '';
// const dbPass = process.env.DB_PASS || '';
// const dbCred =
// 	dbUser.length > 0 || dbPass.length > 0 ? `${dbUser}:${dbPass}@` : '';

// const dbUrl =
// 	process.env.DB_URL || `mongodb://${dbCred}${dbHost}:${dbPort}/${dbName}`;
const dbUrl =
  process.env.DB_URL ||
  // 'mongodb://shashank:g9971441252@ds139341.mlab.com:39341/cart';
  // 'mongodb://shashank:g9971441252@ds155396.mlab.com:55396/tobaniware';
  "mongodb://shashank:g9971441252@ds139341.mlab.com:39341/cart";

const serverUrl = process.env.SERVERURL || "localhost:3001";
const clientUrl = process.env.CLIENTURL || "localhost:3000";

module.exports = {
  apiListenPort: process.env.PORT || 3001,
  storeListenPort: process.env.PORT || 3000,
  // used by Store (server side)
  apiBaseUrl: `https://${serverUrl}/api/v1`,

  // used by Store (server and client side)
  ajaxBaseUrl: `https://${serverUrl}/ajax`,

  // Access-Control-Allow-Origin
  storeBaseUrl: `https://${clientUrl}`,

  // used by API
  adminLoginUrl: "/admin/login",
  // used by API
  mongodbServerUrl: dbUrl,

  smtpServer: {
    host: "",
    port: 0,
    secure: true,
    user: "",
    pass: "",
    fromName: "",
    fromAddress: ""
  },

  // key to sign tokens
  jwtSecretKey: "SP69kXFR3znRi7kL8Max2GTB24wOtEQj",

  // key to sign store cookies
  cookieSecretKey: "8669X9P5yI1DAEthy1chc3M9EncyS7SM",

  // path to uploads
  categoriesUploadPath: "public/content/images/categories",
  productsUploadPath: "public/content/images/products",
  filesUploadPath: "public/content",
  themeAssetsUploadPath: "theme/assets/images",

  // url to uploads
  categoriesUploadUrl: "/images/categories",
  productsUploadUrl: "/images/products",
  filesUploadUrl: "",
  themeAssetsUploadUrl: "/assets/images",

  // store UI language
  language: "en",

  // used by API
  orderStartNumber: 1000,

  developerMode: true
};
