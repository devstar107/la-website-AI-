  <template>
    <div>
        <div class="header">
            <h1>{{$t('checkout_title')}}</h1>
        </div>
        <div class="container">
            <div class="content">
                <div class="choose_payment_method">
                    <h4>{{$t('your_balance_is')}}</h4> 
                    <h4><span style="color:deepskyblue">{{ balance }}</span> {{ currencyCode }}</h4>
                    <div v-if="locale=='jp'" class="row" style="padding-left: 20px;">
                        <div class="col-md-12">
                            <form id="komoju-form" @submit.prevent="komoju_purchase" method="post">
                                <div class="payment_information_form" style="padding-top: 15px;">
                                    <div style="padding: 0 40px;">
                                    <input id="komojuToken" type="hidden" v-model="komojuToken" name="komojuToken" />
                                        <div class="col-md-12 paypal-button">
                                            <b-button id="komojuButton" variant="primary" :disabled="paymentProcessing">
                                                <b-spinner small :hidden="!paymentProcessing"></b-spinner>
                                                フリコミによるチェックアウト
                                            </b-button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div v-else class="row" style="padding-left: 20px;">
                        <div class="col-md-12">
                            <form @submit.prevent="paypal_payment_post" method="post">
                                <div class="payment_information_form" style="padding-top: 15px;">
                                    <div style="padding: 0 40px;">
                                        <div class="col-md-12 paypal-button">
                                            <b-button id="komojuButton" variant="primary" :disabled="paymentProcessing">
                                                <b-spinner small :hidden="!paymentProcessing"></b-spinner>
                                                Pay
                                            </b-button>
                                            <!-- Submit Button -->
                                            <div ref="paypal"></div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data: () => ({
        balance: '',
        currencyCode: ''
    }),
    methods: {
        async getBalanceData() {
            const {data1} = await axios.get('/web/gmo/account')
            const {data2} = await axios.get('/web/gmo/account/balance')
            this.balance = data2.balance;
            this.currencyCode = data2.currencyCode;

            console.log(this.category)
        }
    },
    created() {
        this.getBalanceData()
    },
}
</script>

<style scoped>
    .header {
        width: 100%;
        background-color: #211F40;
        height: 150px;
    }
    .header h1 {
        padding-top: 3rem;
        text-align: center;
        color: #fff;
        font-weight: 600;
    }
    .content {
        width: 100%;
        padding-top: 50px;
    }
    .content .category_level h4,
    .content .choose_payment_method h4,
    .content .payment_information_form h4 {
        font-weight: 700;
        padding: 15px 0;
    }
    .content .category_level h6 {
        padding: 10px 0;
    }
    .content .category_level .change {
        display: inline;
        font-size: 12px;
        color: #007FED;
    }
    .content .category_level .category {
        display: inline;
        font-size: 15px;
        font-weight: 700;
    }
    .content .division {
        border-bottom: 1px solid #0000006e;
        padding: 5px 0;
    }
    .content .choose_payment_method label {
        display: flex;
    }
    .content .choose_payment_method label img {
        padding-left: 10px;
        display: inline;
        height: 55px;
    }
    .content .payment_information_form .paypal-button {
        display: flex;
        justify-content: space-around;
    }
    .content .payment_information_form .paypal-button div {
        width: 50%;
    }

</style>
