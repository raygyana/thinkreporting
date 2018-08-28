import { UrlBase } from './url.base';

export class CustomerServicesUrls extends UrlBase {
      public static TK_CUSTOMER_BASE_URL =
            // 'http://192.168.113.32:8080/';

            'https://cswebservices.mps-think.com/';

      public static TK_CUSTOMER_LOGIN = CustomerServicesUrls.TK_CUSTOMER_BASE_URL + 'login';
      public static TK_JSON_BASE_URL = 'https://mysocietyconnect.com/mps/cs/';
      public static TK_CUSTOMER_SALES_DATA_URL = CustomerServicesUrls.TK_JSON_BASE_URL + 'sales.json';

      public static TK_CUSTOMER_SPECIAL_TAXID_DATA_URL = CustomerServicesUrls.TK_JSON_BASE_URL + 'sales.json';

      public static TK_CUSTOMER_LIST_RENTAL_DATA_URL = CustomerServicesUrls.TK_JSON_BASE_URL + 'sales.json';


      public static TK_CUSTOMER_CATEGORY_DATA_URL = CustomerServicesUrls.TK_JSON_BASE_URL + 'sales.json';

      public static TK_CUSTOMER_ADDRESS_STATUS_URL = CustomerServicesUrls.TK_JSON_BASE_URL + 'sales.json';


      public static TK_CREDIT_STATUS_DATA_URL = CustomerServicesUrls.TK_JSON_BASE_URL + 'sales.json';

      public static TK_CUSTOMER_COUNTRY_DATA_URL = CustomerServicesUrls.TK_JSON_BASE_URL + 'country.json';


      public static TK_OPERATOR_URL = 'https://mysocietyconnect.com/mps/cs/operator.json';
      public static TK_ASSIGNTO_URL = 'https://mysocietyconnect.com/mps/cs/assignto.json';

      public static TK_BATCH_TEMPLATE_URL = 'https://mysocietyconnect.com/mps/cs/batchtemplate.json';
      public static TK_DOCUMENT_REFERENCE_URL = 'https://mysocietyconnect.com/mps/cs/docrefdetails.json';

      public static TK_CUSTOMER_ORDER = CustomerServicesUrls.TK_CUSTOMER_BASE_URL + 'customerOrder/order';

      public static TK_CUSTOMER_ADD_ORDER_SEARCH =
            CustomerServicesUrls.TK_CUSTOMER_BASE_URL + 'customerOrder/subscriptionDefDetails';
      public static TK_CUSTOMER_REFERENCE_DATA = CustomerServicesUrls.TK_CUSTOMER_BASE_URL + 'dashboardcsr';

      public static TK_CUSTOMER_REFERENCE_SEARCH_DATA = CustomerServicesUrls.TK_CUSTOMER_BASE_URL + 'searchDocumentReferenceList';
      public static TK_CUSTOMER_AXUILIARY_ADD_DATA = CustomerServicesUrls.TK_CUSTOMER_BASE_URL + 'customerAuxiliaryAdd';
      public static TK_CUSTOMER_AXUILIARY_ADD_SUBMIT = CustomerServicesUrls.TK_CUSTOMER_BASE_URL + 'customerAuxiliaryAddSubmit';



      public static TK_CUSTOMER_REFERENCE_ADD_DATA = CustomerServicesUrls.TK_CUSTOMER_BASE_URL + '/addDocumentReference';

      public static TK_CUSTOMER_REFERENCE_DESCRIPTIONS_COUNT = CustomerServicesUrls.TK_CUSTOMER_BASE_URL + 'getDescriptionCount';


      public static TK_CUSTOMER_ADD_CUSTOMER_DATA = CustomerServicesUrls.TK_CUSTOMER_BASE_URL + 'customerAdd';


      public static TK_CUSTOMER_GET_COUNTRY_DATA = CustomerServicesUrls.TK_CUSTOMER_BASE_URL + 'getCountry';
      public static TK_CUSTOMER_ADDRESS_ADD_DATA = CustomerServicesUrls.TK_CUSTOMER_BASE_URL + 'customerAddressAdd';
      public static TK_CUSTOMER_ADDRESS_ADD_SUBMIT_DATA = CustomerServicesUrls.TK_CUSTOMER_BASE_URL + 'customerAddressAddSubmit';

      public static TK_CUSTOMER_ADDRESS_Edit_SUBMIT_DATA = CustomerServicesUrls.TK_CUSTOMER_BASE_URL + 'customerAddressEditSubmit';


      public static TK_CUSTOMER_ADDRESS_Edit_DATA = CustomerServicesUrls.TK_CUSTOMER_BASE_URL + 'customerAddressEdit';

      public static TK_CUSTOMER_SEND_ADD_CUSTOMER_DATA = CustomerServicesUrls.TK_CUSTOMER_BASE_URL + 'customerAddSubmit';

      public static TK_CUSTOMER_EDIT_EXITING_CUSTOMER = CustomerServicesUrls.TK_CUSTOMER_BASE_URL + 'customerEdit';
      public static TK_CUSTOMER_EDIT_SUBMIT_CUSTOMER = CustomerServicesUrls.TK_CUSTOMER_BASE_URL + 'customerEditSubmit';

      public static TK_CUSTOMER_CHECK_DUPLICTE_CUSTOMER = CustomerServicesUrls.TK_CUSTOMER_BASE_URL + 'checkDuplicateCustomer';

      public static TK_CUSTOMER_SEARCH_DATA = CustomerServicesUrls.TK_CUSTOMER_BASE_URL + 'customerSearch';

      public static TK_CUSTOMER_REFERENCE_EDIT_DATA = CustomerServicesUrls.TK_CUSTOMER_BASE_URL + 'editDocumentReference';

      public static TK_CANCEL_PAYMENT_DATA = CustomerServicesUrls.TK_CUSTOMER_BASE_URL + 'cancelPayment';

      public static TK_ATTACHMENT_LIST_DATA = CustomerServicesUrls.TK_CUSTOMER_BASE_URL + 'customerAttachment';

      // public static TK_ORDER_CODE_LOOKUP_SEARCH = CustomerServicesUrls.TK_CUSTOMER_BASE_URL+'order/orderCode';

      public static TK_ORDER_CODE_LOOKUP_SEARCH = CustomerServicesUrls.TK_CUSTOMER_BASE_URL + 'customerOrder/orderCode';
      public static TK_SOURCE_CODE_LOOKUP_SEARCH = CustomerServicesUrls.TK_CUSTOMER_BASE_URL + 'order/sourceCode';

      public static TK_ORDER_IN_PROGRESS = CustomerServicesUrls.TK_CUSTOMER_BASE_URL + 'customerOrder/orderProgress';
      public static TK_SAVE_ORDER =
            CustomerServicesUrls.TK_CUSTOMER_BASE_URL + 'customerOrder/addOrder';
      public static TK_EDIT_ORDER = CustomerServicesUrls.TK_CUSTOMER_BASE_URL + 'customerOrder/customerOrdersEdit';
      public static TK_CUSTOMER_LIST = CustomerServicesUrls.TK_CUSTOMER_BASE_URL + 'customerOrder/customerDetail';
      public static TK_CUSTOMER_ADDRESS = CustomerServicesUrls.TK_CUSTOMER_BASE_URL + 'customerOrder/customerAddress';

      public static TK_AGENCY_SEARCH = CustomerServicesUrls.TK_CUSTOMER_BASE_URL + 'agenciesSearch';
      public static TK_AGENCY_LIST = CustomerServicesUrls.TK_CUSTOMER_BASE_URL + 'agencies';
      public static TK_AGENCY_EDIT = CustomerServicesUrls.TK_CUSTOMER_BASE_URL + 'editAgency';
      public static TK_ADD_AGENCY_GET = CustomerServicesUrls.TK_CUSTOMER_BASE_URL + 'addAgency';
      public static TK_ADD_AGENCY = CustomerServicesUrls.TK_CUSTOMER_BASE_URL + 'addAgencySubmit';

      public static TK_AGENCY_CHANGE = CustomerServicesUrls.TK_CUSTOMER_BASE_URL + 'customerOrder/onAgencyChange';

      public static TK_RATE_CARD_CHANGE = CustomerServicesUrls.TK_CUSTOMER_BASE_URL + 'customerOrder/onRateCardChange';

      public static TK_ORDER_CODE_LOOKUP_DROPDOWN = CustomerServicesUrls.TK_CUSTOMER_BASE_URL + 'customerOrder/searchByOrderClass';

      public static TK_ORDER_UPDATE = CustomerServicesUrls.TK_CUSTOMER_BASE_URL + 'customerOrder/orderUpdate';

      // payments url
      public static TK_PAYMENTS_URL =
            CustomerServicesUrls.TK_CUSTOMER_BASE_URL + 'Payments';
      public static TK_PAYMENTS_DROPDOWN_URL =
            CustomerServicesUrls.TK_CUSTOMER_BASE_URL + 'paymentFilterDropDown';

      public static TK_EDIT_PAYMENTS_URL =
            CustomerServicesUrls.TK_CUSTOMER_BASE_URL + 'EditPayment';
      public static TK_EDIT_PAYMENTS_SAVE_URL =
            CustomerServicesUrls.TK_CUSTOMER_BASE_URL + 'UpdatePayment';

      public static TK_MAKE_PAYMENTS_URL =
            CustomerServicesUrls.TK_CUSTOMER_BASE_URL + 'MakePayment';
      public static TK_MAKE_PAYMENTS_TABLE_FILTER_URL =
            CustomerServicesUrls.TK_CUSTOMER_BASE_URL + 'orderFIlterDropDownResult';
      public static TK_MAKE_PAYMENTS_SAVE_URL =
            CustomerServicesUrls.TK_CUSTOMER_BASE_URL + 'MakePaymentSave';
      public static TK_DEPOSIT_PAYMENTS_URL =
            CustomerServicesUrls.TK_CUSTOMER_BASE_URL + 'DepositPaymenetSave';
      public static TK_PAYMENT_BREAKDOWN_URL =
            CustomerServicesUrls.TK_CUSTOMER_BASE_URL + 'paymentBreakdown';
      public static TK_PAYMENTS_TRANSFER_URL = CustomerServicesUrls.TK_CUSTOMER_BASE_URL + 'paymentTransfer';
      public static TK_PAYMENTS_DEPOSIT_SUMMARY_URL = CustomerServicesUrls.TK_CUSTOMER_BASE_URL + 'depositeSummary';
      public static TK_PAYMENT_REFUND_URL =
            CustomerServicesUrls.TK_CUSTOMER_BASE_URL + 'depositRefundPayment';
      // customer History
      public static TK_CUSTOMER_HISTORY_URL =
            CustomerServicesUrls.TK_CUSTOMER_BASE_URL + 'customerHistory';
      public static TK_CUSTOMER_ADDRESS_HISTORY_URL =
            CustomerServicesUrls.TK_CUSTOMER_BASE_URL + 'addressHistory';
      // NOTES API

      public static TK_CUSTOMER_NOTE_URL = CustomerServicesUrls.TK_CUSTOMER_BASE_URL + 'customerNoteFilter';
      public static TK_CUSTOMER_NOTE_DROPDOWN_URL =
            CustomerServicesUrls.TK_CUSTOMER_BASE_URL + 'customerNote';

      public static TK_NOTES_EDIT_SAVE_URL = CustomerServicesUrls.TK_CUSTOMER_BASE_URL + 'editNote';
      public static TK_NOTES_ADD_GET_DATA_URL = CustomerServicesUrls.TK_CUSTOMER_BASE_URL + 'addNote';
      public static TK_NOTES_ADD_SAVE_URL = CustomerServicesUrls.TK_CUSTOMER_BASE_URL + 'addNoteSubmit';
      public static TK_NOTES_DELETE_NOTE_URL = CustomerServicesUrls.TK_CUSTOMER_BASE_URL + 'deleteNote';

      public static TK_ORDER_DROPDOWN = CustomerServicesUrls.TK_CUSTOMER_BASE_URL + 'customerOrder/viewOrderType';


      public static TK_SUBS_DEF_CHANGE = CustomerServicesUrls.TK_CUSTOMER_BASE_URL + 'customerOrder/onSubscriptionChange';
      public static TK_PARTIAL_PAYMENT = CustomerServicesUrls.TK_CUSTOMER_BASE_URL + 'partialPaymentDetails';

      public static TK_CHECK_DUPLICATE_ORDER = CustomerServicesUrls.TK_CUSTOMER_BASE_URL + 'customerOrder/checkDuplicateOrder';
      public static TK_CHECK_RENEW_ORDER =
            CustomerServicesUrls.TK_CUSTOMER_BASE_URL + 'customerOrder/getRenewalOrder';
      public static TK_DEL_CUSTOMER_TEMP_ADD =
            CustomerServicesUrls.TK_CUSTOMER_BASE_URL + 'customerDeleteAddress';

      public static TK_GET_COUNTRY_LIST = CustomerServicesUrls.TK_CUSTOMER_BASE_URL + 'getStateList';
      public static TK_SHOW_ALL_DOC_REF = CustomerServicesUrls.TK_CUSTOMER_BASE_URL + 'showAllDocumentReferenceList';




      public static TK_CUSTOMER_ERROR_LOG = CustomerServicesUrls.TK_CUSTOMER_BASE_URL + 'sendMail';

      public static TK_CUSTOMER_CANCEL_ORDER_DATA = CustomerServicesUrls.TK_CUSTOMER_BASE_URL + '/cancelOrderDetail';
      public static TK_CUSTOMER_CANCEL_ORDER = CustomerServicesUrls.TK_CUSTOMER_BASE_URL + '/cancelOrder';
}
