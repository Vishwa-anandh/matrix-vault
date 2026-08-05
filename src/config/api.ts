/**
 * Base URLs for Matrix Vault API requests:
 * 
 * 1. Contact Us & Newsletter: https://admin.matrixvault.ai/api
 * 2. Login Redirect:          https://app.matrixvault.ai/api
 */

// Production API URLs (Active)
const PROD_ADMIN_API_URL = 'https://admin.matrixvault.ai/api';
const PROD_APP_API_URL = 'https://app.matrixvault.ai/api';

// Local API URLs (Commented out)
// const LOCAL_ADMIN_API_URL = 'http://192.168.1.58:3000';
// const LOCAL_APP_API_URL = 'http://192.168.1.58:3000';

/** Contact Us & Newsletter API Base URL (https://admin.matrixvault.ai/api) */
export const ADMIN_API_BASE_URL = import.meta.env.VITE_ADMIN_API_URL || PROD_ADMIN_API_URL;

/** Login Redirect API Base URL (https://app.matrixvault.ai/api) */
export const API_BASE_URL = import.meta.env.VITE_API_URL || PROD_APP_API_URL;
