<?php

namespace App\Http\Controllers;

use App\Models\DealerCustomer;
use App\Mail\Dealer_customer_send;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validatior;
use Carbon\Carbon;

use DB;

use Exception;
use Mail;

class DealerCustomerController extends Controller
{
    public function dealerCustomerRegister(Request $request) {
        $result['status'] = false;
        
        $data = $request->post();
        $dealerCustomer = new DealerCustomer;

        $dealerCustomer->order_number = $data['order_number'];
        $dealerCustomer->dealer_name = $data['dealer_name'];
        $dealerCustomer->dealer_surname = $data['dealer_surname'];
        $dealerCustomer->dealer_middlename = $data['dealer_middlename'];
        $dealerCustomer->customer_name = $data['customer_name'];
        $dealerCustomer->customer_surname = $data['customer_surname'];
        $dealerCustomer->customer_middle_name = $data['customer_middle_name'];
        $dealerCustomer->customer_facility = $data['customer_facility'];
        $dealerCustomer->customer_department = $data['customer_department'];
        $dealerCustomer->customer_city = $data['customer_city'];
        $dealerCustomer->customer_prefecture = $data['customer_prefecture'];
        $dealerCustomer->customer_country = $data['customer_country'];
        $dealerCustomer->user_id = $data['user_id'];
        $dealerCustomer->app_id = $data['app_id'];
        $dealerCustomer->cat_id = $data['cat_id'];

        // $saved = $dealerCustomer->save();

        // if ($saved) {
        //     $result['status'] = true;

        // } else {

        // }

        return response()->json($result);
    }

    public function dealer_customer_save(Request $request) {
        $input = $request->all();
        // Validator::make($input, [
        //     'message'=> 'required',
        //     'name'=> 'required|string',
        //     'email'=> 'required|email',
        //     'phone'=> 'required',
        // ])->validate();
        $dealerCustomer = DealerCustomer::create($input);
    }

    public function dealer_application_checkout(Request $request) {
        $data = $request->post();
        $applicant_email = $data['applicant_email'];
        $category_id = $data['category_id'];

        $application = DB::table('applications')->where('cat_id', $category_id)->select('app_name', 'category_tab', 'period_date', 'capacity', 'capacity_unit', 'discount_price', 'price')->first();
        $user_id = DB::table('users')->where('email', $applicant_email)->value('id');


        $email_data['app_name'] = $application->app_name;
        $email_data['category_tab'] = $application->category_tab;
        $email_data['period_date'] = $application->period_date;
        $email_data['capacity'] = $application->capacity;
        $email_data['capacity_unit'] = $application->capacity_unit;
        $email_data['price'] = $application->price;
        $email_data['discount_price'] = $application->discount_price;

        $email_data['order_number'] = $data['order_number'];

        $dealer_customer_data = DB::table('dealer_customers')->where('order_number', $data['order_number'])->first();
        
        $email_data['dealer_name'] = $dealer_customer_data->dealer_name;
        $email_data['customer_name'] = $dealer_customer_data->customer_name;
        $email_data['customer_facility'] = $dealer_customer_data->customer_facility;
        $email_data['customer_department'] = $dealer_customer_data->customer_department;
        $email_data['customer_city'] = $dealer_customer_data->customer_city;
        $email_data['customer_prefecture'] = $dealer_customer_data->customer_prefecture;
        $email_data['customer_country'] = $dealer_customer_data->customer_country;
        $email_data['created_at'] = $dealer_customer_data->created_at;
        // Send mail to admin
        try{
            // $mail_check = \Mail::to('support@lifeanalytics.org', 'Daisukekubota')
            $mail_check = \Mail::to('darbinyan.dev@gmail.com', 'Darbinyan')
                ->send(new Dealer_customer_send($email_data));
            return response()->json([
                'success' => true,
                'mail' => $mail_check,
            ]);
        }
        catch(\Exception $e){
            echo ($e->getMessage());
            return response()->json([
                'success' => false,
                'error' => $e->getMessage(),
            ]);
        }
    }

    public function countAction()
	{
		$params = ['page' => 'page-catalog-count'];

		foreach( app( 'config' )->get( 'shop.page.catalog-count' ) as $name )
		{
			$params['aiheader'][$name] = Shop::get( $name )->header();
			$params['aibody'][$name] = Shop::get( $name )->body();
		}

		return Response::view( Shop::template( 'catalog.count' ), $params )
			->header( 'Content-Type', 'application/javascript' )
			->header( 'Cache-Control', 'public, max-age=300' );
	}
    
    public function detailAction()
	{
		try
		{
			$params = ['page' => 'page-catalog-detail'];

			foreach( app( 'config' )->get( 'shop.page.catalog-detail' ) as $name )
			{
				$params['aiheader'][$name] = Shop::get( $name )->header();
				$params['aibody'][$name] = Shop::get( $name )->body();
			}

			return Response::view( Shop::template( 'catalog.detail' ), $params )
				->header( 'Cache-Control', 'private, max-age=3600' );
		}
		catch( \Exception $e )
		{
			if( $e->getCode() >= 400 && $e->getCode() < 600 ) { abort( $e->getCode() ); }
			throw $e;
		}
	}

    public function dealer_application_reminder() {
        echo ("A");
        try{
            $dealers = DB::table('dealer_customers')->select('user_id', 'order_number', 'dealer_name', 'dealer_surname', 'dealer_middlename', 'customer_email', 'customer_name', 'customer_surname', 'customer_middle_name', 'customer_facility', 'customer_department', 'customer_city', 'customer_prefecture', 'customer_country', 'cat_id', 'app_id', 'created_at', 'updated_at')->get();
            $dealer_count = DB::table('dealer_customers')->select('user_id', 'order_number', 'dealer_name', 'dealer_surname', 'dealer_middlename', 'customer_email', 'customer_name', 'customer_surname', 'customer_middle_name', 'customer_facility', 'customer_department', 'customer_city', 'customer_prefecture', 'customer_country', 'cat_id', 'app_id', 'created_at', 'updated_at')->count();
            echo ("B");
            echo ($dealer_count);
            $index = 0;
            foreach ($dealers as $dealer) {
                echo($index);
                $index++;
                $updated_date = Carbon::parse($dealer->updated_at);
                $cat_id = $dealer->cat_id;
    
                $application = DB::table('applications')->where('cat_id', $cat_id)->select('app_name', 'category_tab', 'period_date', 'capacity', 'capacity_unit', 'discount_price', 'price')->first();
                $expired_date = $updated_date->addDays($application->period_date);
                echo ("C");
    
                $expired_result = $expired_date->gt(Carbon::now()); //true - valid, false - expired
                echo($expired_result);
                if($expired_result) {
                    $user_id = $dealer->user_id;
                    $user_email = DB::table('users')->where('id', $user_id)->value('email');
                    
                    $email_data['app_name'] = $application->app_name;
                    $email_data['category_tab'] = $application->category_tab;
                    $email_data['period_date'] = $application->period_date;
                    $email_data['capacity'] = $application->capacity;
                    $email_data['capacity_unit'] = $application->capacity_unit;
                    $email_data['price'] = $application->price;
                    $email_data['discount_price'] = $application->discount_price;
            
                    $email_data['order_number'] = $dealer->order_number;
                    $email_data['dealer_name'] = $dealer->dealer_name;
                    $email_data['customer_name'] = $dealer->customer_name;
                    $email_data['customer_facility'] = $dealer->customer_facility;
                    $email_data['customer_department'] = $dealer->customer_department;
                    $email_data['customer_city'] = $dealer->customer_city;
                    $email_data['customer_prefecture'] = $dealer->customer_prefecture;
                    $email_data['customer_country'] = $dealer->customer_country;
                    $email_data['created_at'] = $dealer->created_at;
                    // Send mail to admin
                    try{
                        // $mail_check = \Mail::to('support@lifeanalytics.org', 'Daisukekubota')
                        $mail_check = \Mail::to($user_email, 'Darbinyan')
                        // $mail_check = \Mail::to('darbinyan.dev@gmail.com', 'Darbinyan')
                            ->send(new Dealer_customer_send($email_data));
                        // return response()->json([
                        //     'success' => true,
                        //     'mail' => $mail_check,
                        // ]);
                    }
                    catch(\Exception $e){
                        echo ($e->getMessage());
                        // return response()->json([
                        //     'success' => false,
                        //     'error' => $e->getMessage(),
                        // ]);
                    }
                } else {
                    $user_id = $dealer->user_id;
                    $user_email = DB::table('users')->where('id', $user_id)->value('email');
                    
                    $email_data['app_name'] = $application->app_name;
                    $email_data['category_tab'] = $application->category_tab;
                    $email_data['period_date'] = $application->period_date;
                    $email_data['capacity'] = $application->capacity;
                    $email_data['capacity_unit'] = $application->capacity_unit;
                    $email_data['price'] = $application->price;
                    $email_data['discount_price'] = $application->discount_price;
            
                    $email_data['order_number'] = $dealer->order_number;
                    $email_data['dealer_name'] = $dealer->dealer_name;
                    $email_data['customer_name'] = $dealer->customer_name;
                    $email_data['customer_facility'] = $dealer->customer_facility;
                    $email_data['customer_department'] = $dealer->customer_department;
                    $email_data['customer_city'] = $dealer->customer_city;
                    $email_data['customer_prefecture'] = $dealer->customer_prefecture;
                    $email_data['customer_country'] = $dealer->customer_country;
                    $email_data['created_at'] = $dealer->created_at;
    
                    // Send mail to admin
                    try{
                        // $mail_check = \Mail::to('support@lifeanalytics.org', 'Daisukekubota')
                        // $mail_check = \Mail::to('darbinyan.dev@gmail.com', 'Darbinyan')
                        $mail_check = \Mail::to($user_email, 'Darbinyan')
                            ->send(new Dealer_customer_send($email_data));
                        // return response()->json([
                        //     'success' => true,
                        //     'mail' => $mail_check,
                        // ]);
                    }
                    catch(\Exception $e){
                        echo ($e->getMessage());
                        // return response()->json([
                        //     'success' => false,
                        //     'error' => $e->getMessage(),
                        // ]);
                    }
                }
            }
    
        } catch(Exception $e){
            echo ($e);
        }        
    }
}
