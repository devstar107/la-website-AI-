<?php
/**
 * GMO aozora Setting & API Credentials
 * Created by Suren Darbinyan <darbinyan.dev@gmail.com>.
 */

return [
    'mode' => env('AOZORA_MODE', 'stg'), // Can only be 'stg' Or 'prod'. If empty or invalid, 'prod' will be used.
    'stg' => [
        'AUTH_BASE_URL' => env('GMO_DEV_AUTH_BASE_URL', 'https://stg-api.gmo-aozora.com/ganb/api/auth/v1'),
        'JWT_ISSUER'    => env('GMO_DEV_JWT_ISSUER', 'https://stg-api.gmo-aozora.com/'),
    ],
    'prod' => [
        'AUTH_BASE_URL' => env('GMO_PROD_AUTH_BASE_URL', 'https://api.gmo-aozora.com/ganb/api/auth/v1'),
        'JWT_ISSUER'    => env('GMO_PROD_JWT_ISSUER', 'https://api.gmo-aozora.com/'),
    ],

    'AUTH_PATH'         => env('GMO_DEV_AUTH_PATH', '/authorization'), 
    'TOKEN_PATH'        => env('GMO_DEV_TOKEN_PATH', '/token'),
    'SALT'              => env('GMO_DEV_SALT', 'ILZ-VtbCGcR?QEOv35/R7xX+?A-!3dUY'), 
];
