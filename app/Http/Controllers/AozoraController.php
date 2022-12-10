<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Str;
use GuzzleHttp\Client;
use Ganb;
use Ganb\Corporate\Client\Api\AccountApi;
use Psy\Util\Json;

class AozoraController extends Controller
{
    protected $host_personal = 'https://stg-api.gmo-aozora.com/ganb/api/personal/v1';
    protected $host_corporate = 'https://stg-api.gmo-aozora.com/ganb/api/personal/v1';
    protected $host_webhook = 'https://stg-api.gmo-aozora.com/ganb/api/personal/v1';

    public function test(Request $request)
    {
        $response = Http::get('https://api.gmo-aozora.com/ganb/api/simulator/corporation/v1/accounts/balances');
        echo $response->body();
    }

    public function auth()
    {
        $CLIENT_ID = env('GMO_CLIENT_ID');
        $CLIENT_SECRET = env('GMO_CLIENT_SECRET');
        $AUTH_METHOD = env('GMO_AUTH_MODE');
        $REDIRECT_URI = env('AOZORA_MODE') == 'stg' ? env('GMO_DEV_LOGIN') : env('GMO_PROD_LOGIN');
        $SCOPE = "private:account private:virtual-account private:transfer private:bulk-transfer";
        $SESSION_ID = env('GMO_SESSION_ID');
        // Authorization
        $ganb = new Ganb\Auth($CLIENT_ID, $CLIENT_SECRET, $AUTH_METHOD);
        $redirectUri = $ganb->oauthAuthorization($SESSION_ID, $SCOPE, $REDIRECT_URI);
        return redirect($redirectUri);

    }

    public function dev(Request $request){
        $input = $request->all();
        $code = $input['code'];
        $CLIENT_ID = env('GMO_CLIENT_ID');
        $CLIENT_SECRET = env('GMO_CLIENT_SECRET');
        $AUTH_METHOD = env('GMO_AUTH_MODE');
        $REDIRECT_URI = env('AOZORA_MODE') == 'stg' ? env('GMO_DEV_LOGIN') : env('GMO_PROD_LOGIN');
        $ganb = new Ganb\Auth($CLIENT_ID, $CLIENT_SECRET, $AUTH_METHOD);

        try {
            $response = $ganb->getOAuthToken($REDIRECT_URI, $code);
            $_SESSION['GMO']['access_token'] = $response->access_token;
            $_SESSION['GMO']['refresh_token'] = $response->refresh_token;
            return redirect("https://blockstamp.me/checkout_gmo");
        } catch (Exception $e) {
            echo $e->getMessage();
        }
    }

    public function prod(Request $request){
        $input = $request->all();
        $code = $input['code'];
        $CLIENT_ID = env('GMO_CLIENT_ID');
        $CLIENT_SECRET = env('GMO_CLIENT_SECRET');
        $AUTH_METHOD = env('GMO_AUTH_MODE');
        $REDIRECT_URI = env('AOZORA_MODE') == 'stg' ? env('GMO_DEV_LOGIN') : env('GMO_PROD_LOGIN');

        $ganb = new Ganb\Auth($CLIENT_ID, $CLIENT_SECRET, $AUTH_METHOD);

        try {
            $response = $ganb->getOAuthToken($REDIRECT_URI, $code);
            $_SESSION['GMO']['access_token'] = $response->access_token;
            $_SESSION['GMO']['refresh_token'] = $response->refresh_token;
            return redirect("https://blockstamp.me/checkout_gmo");
        } catch (Exception $e) {
            echo $e->getMessage();
        }
    }
    public function getaccount(){
        $apiInstance = new Ganb\Corporate\Client\Api\AccountApi(
            new GuzzleHttp\Client()
        );
        $x_access_token = $_SESSION['GMO']['access_token'];
        try{
            $response_account = $apiInstance->accountsUsingGET($x_access_token);
            $account_data = $response_account->accounts->length > 0 ? $response_account[0] : new Json();
            if ($account_data !== null){
                $_SESSION['GMO']['account_id'] = $account_data->accountId;
                $_SESSION['GMO']['account_number'] = $account_data->accountNumber;
                $_SESSION['GMO']['transfer_limit'] = $account_data->transferLimitAmount;
            }
        } catch (Exception $e) {
            echo 'Exception when calling AccountApi->accountsUsingGET: ', $e->getMessage(), PHP_EOL;
        }
    }

    public function getbalance(){
        $apiInstance = new Ganb\Corporate\Client\Api\AccountApi(
            new GuzzleHttp\Client()
        );
        $x_access_token = $_SESSION['GMO']['access_token'];
        $account_id = $_SESSION['GMO']['account_id'];

        try {
            $result = $apiInstance->balancesUsingGET($x_access_token, $account_id);
            return response()->json($result);
        } catch (Exception $e) {
            echo 'Exception when calling AccountApi->balancesUsingGET: ', $e->getMessage(), PHP_EOL;
        }
    }
    public function refresh(){
        $CLIENT_ID = env('GMO_CLIENT_ID');
        $CLIENT_SECRET = env('GMO_CLIENT_SECRET');
        $AUTH_METHOD = env('GMO_AUTH_MODE');
        $ganb = new Ganb\Auth($CLIENT_ID, $CLIENT_SECRET, $AUTH_METHOD);
        try {
            $newToken = $ganb->refreshTokens($_SESSION['GMO']['refresh_token']);
        } catch (Exception $e) {
            echo $e->getMessage();
        }
    }
}
