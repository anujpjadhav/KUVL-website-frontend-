// JavaScript Document
//$( document ).ready(function() {

/*var fullDate = new Date()
var twoDigitMonth = ((fullDate.getMonth().length+1) === 1)? (fullDate.getMonth()+1) : '0' + (fullDate.getMonth()+1);
var currentDate = fullDate.getDate() + "/" + twoDigitMonth + "/" + fullDate.getFullYear();
console.log(currentDate);

var time = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();
console.log(time);*/

// regx for Bookby and Blockby Name - alphanumaric , . 
$.validator.addMethod("bookBlockNameRegEx", function (value, element) {
  return this.optional(element) || /^[a-z\d\.\s]+$/i.test(value);
}, "Must contain only letters, numbers and dot.");

$.validator.addMethod("checkFromDateAndTime", function (value, element) {
  var pad = '00';
  var today = new Date();
  //today.setHours(today.getHours() + 1)
  var date = (pad + (today.getMonth() + 1)).slice(-pad.length) + '/' + today.getDate() + '/' + today.getFullYear();
  var time = today.getHours() + ":" + today.getMinutes();// + ":" + today.getSeconds();
  var dateTime = date + ' ' + time;
  //console.log('Today Datetime - ' + Date.parse(dateTime));

  var Selected = $('.validateFromDate').val().substring(3, 5) + '/' + $('.validateFromDate').val().substring(0, 2) + '/' + $('.validateFromDate').val().substring(6, 10);
  //var date1 = (pad + (today.getMonth() + 1)).slice(-pad.length) + '/' + today.getDate() + '/' + today.getFullYear();
  var selectedDateTime = Selected + ' ' + $('.validateFromTime').val();
  //console.log('Selected Datetime - ' + Selected + ' - ' + Date.parse(selectedDateTime));
  if (Date.parse(dateTime) < Date.parse(selectedDateTime)) {
    //console.log('true');
    return true;
  }
  else {
    //console.log('false');
    return false;
  }

  //if ($('.validateFromDate').val() == '12/07/2017') {
  //  if ($('.validateFromTime').val() > time) {
  //    console.log('current date');
  //    console.log('time' + $('.validateFromTime').val());
  //    return false;
  //  }
  //} else {
  //  console.log('no current date');
  //  console.log($('#ctl00_content_txtFromDate').val());
  //  return true;
  //}
}, "Not less than current time");

$.validator.addMethod("checkToDateAndTime", function (value, element) {
  var pad = '00';
  var today = new Date();
  var date = (pad + (today.getMonth() + 1)).slice(-pad.length) + '/' + today.getDate() + '/' + today.getFullYear();
  var time = today.getHours() + ":" + today.getMinutes();// + ":" + today.getSeconds();
  var dateTime = date + ' ' + time;
  //console.log('Today Datetime - ' + Date.parse(dateTime));

  var fromDate = $('.validateFromDate').val().substring(3, 5) + '/' + $('.validateFromDate').val().substring(0, 2) + '/' + $('.validateFromDate').val().substring(6, 10);
  //var date1 = (pad + (today.getMonth() + 1)).slice(-pad.length) + '/' + today.getDate() + '/' + today.getFullYear();
  var fromDateTime = fromDate + ' ' + $('.validateFromTime').val();
  //console.log('from Datetime - ' + fromDateTime + ' - ' + Date.parse(fromDateTime));


  var Selected = $('.validateToDate').val().substring(3, 5) + '/' + $('.validateToDate').val().substring(0, 2) + '/' + $('.validateToDate').val().substring(6, 10);
  //var date1 = (pad + (today.getMonth() + 1)).slice(-pad.length) + '/' + today.getDate() + '/' + today.getFullYear();
  var selectedDateTime = Selected + ' ' + $('.validateToTime').val();
  //console.log('Selected Datetime - ' + Selected + ' - ' + Date.parse(selectedDateTime));

  if (Date.parse(fromDateTime) < Date.parse(selectedDateTime)) {
    //console.log('true');
    return true;
  }
  else {
    //console.log('false');
    return false;
  }
}, "Not less than From Time");

$.validator.addMethod("panNumber", function (value, element) {
  return this.optional(element) || /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/.test(value);
}, "Invalid Pan Number");

$.validator.addMethod("ifscCode", function (value, element) {
  return this.optional(element) || /^([a-zA-Z]){4}([0-9]){7}?$/.test(value);
}, "Invalid IFSC");

jQuery.validator.addMethod("propertyLogoFormat", function (value, element) {
  if (/^(.*\.(?!(png|jpg)$))?[^.]*$/i.test(value)) {
    return false;  // FAIL validation when REGEX matches
  } else {
    return true;   // PASS validation otherwise
  };
}, "Please upload .jpg or .png file format");

jQuery.validator.addMethod("policiesLicensesFileFormat", function (value, element) {
  if (/^(.*\.(?!(pdf)$))?[^.]*$/i.test(value)) {
    return false;  // FAIL validation when REGEX matches
  } else {
    return true;   // PASS validation otherwise
  };
}, "Please upload .pdf file format");


//jQuery.validator.addMethod("floorPlanFormat", function (value, element) {
//  if (/^(.*\.(?!(pdf|jpg|doc)$))$/i.test(value)) {
//    return false;  // FAIL validation when REGEX matches
//  } else {
//    return true;   // PASS validation otherwise
//  };
//}, "Please upload .pdf or .jpg or .doc file format");

jQuery.validator.addMethod("floorPlanFormat", function (value, element) {
    return this.optional(element) || /^([a-zA-Z].*|[1-9].*)\.(((d|D)(o|O)(c|C))|((j|J)(p|P)(g|G))|((j|J)(p|P)(e|E)(g|G))|((g|G)(i|I)(f|F))|((p|P)(n|N)(g|G))|((p|P)(d|D)(f|F)))$/i.test(value);
}, "Please upload .pdf/.jpg/.png/.gif/.doc file format");

//minStrict
$.validator.addMethod('minStrict', function (value, el, param) {
  return value > param;
}, "Enter value greater than zero");

$.validator.addMethod('minStrict1', function (value, el, param) {
  return value > param;
}, "Enter value greater than one");

//Duration validation
$.validator.addMethod('endYearGreaterThanOrEqualTO',
function (value, element, params) {
  if (!/Invalid|NaN/.value) {
    if ($(params[1]).val() != 0) {
      if (value == 9999) {
        return false;
      } else {
        return value >= $(params[0]).val();
      }
    } else {
      if (value == 9999) {
        return true;
      } else {
        return false;
      }
    }
  }
  return isNaN(value) && isNaN($(params[2]).val());
  //|| (Number(value) >= Number($(params[2]).val())); 
}, 'Must be greater than start year.');

$.validator.addMethod('endMonthGreaterThanOrEqualTO',
function (value, element, params) {
  if (!/Invalid|NaN/.value) {
    if ($(params[0]).val() == $(params[1]).val()) {
      return value > $(params[2]).val();
    } else {
      return value;
    }
  }
  return isNaN(value) && isNaN($(params[2]).val());
  //|| (Number(value) >= Number($(params[2]).val())); 
}, 'Must be greater than start Month.');

//file size validation
$.validator.addMethod('filesize', function (value, element, param) {
  return this.optional(element) || (element.files[0].size <= param)
});

//password validation (This will match 1 or more uppercase characters, 1 or more lowercase characters and 1 or more digit/special character) and at least 8 char
$.validator.addMethod("passwordcheck", function (value) {
  return /[A-Z]+/.test(value) && /[a-z]+/.test(value) &&
  /[\d\W]+/.test(value) && /\S{8,}/.test(value);
}, 'Must contain minimum 8 characters including 1 Upper, 1 Lower and 1 or more digit/special char');

// select value not null check
$.validator.addMethod("valueNotEquals", function (value, element, arg) {
  return arg != value;
}, "Value must not equal arg.");

// regx for companyName - alphanumaric , - , _ , space, [], ()
$.validator.addMethod("AddressFieldRegEx", function (value, element) {
  return this.optional(element) || /^[a-z\d\-_.\[\]\(\)\/\,\#\@\s]+$/i.test(value);
}, "Must contain only letters, numbers, dot, comma, [], (), dashes or underscore.");

// regx for cityNameRegex - alphanumaric , - , _ , space
$.validator.addMethod("cityNameRegex", function (value, element) {
  return this.optional(element) || /^[a-z\d\s]+$/i.test(value);
}, "It allows alphanumeric characters only.");

// regx for countryCode - alphanumaric , - , _ , space
$.validator.addMethod("countryCodeRegex", function (value, element) {
  //return this.optional(element) || /^\+?\d+$/i.test(value);
  return this.optional(element) || /^[+]\d+$/i.test(value);

}, "Country code is not valid.");


$.validator.addMethod("laxEmail", function (value, element) {
  // allow any non-whitespace characters as the host part
  return this.optional(element) || /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value);
}, 'Please enter a valid email address.');





// regx for alphabet and space
$.validator.addMethod("alpha", function (value, element) {
  return this.optional(element) || /^[a-z\s]+$/i.test(value);
}, "Must contain alphabet characters only.");

// regx for alphanumaric , - , _ , space
$.validator.addMethod("alphanumaricRegex", function (value, element) {
  return this.optional(element) || /^[a-z\d\s]+$/i.test(value);
}, "It allows alphanumeric characters only.");

$.validator.addMethod("designationRegex", function (value, element) {
  return this.optional(element) || /^[a-z\d\-_.\s]+$/i.test(value);
}, "Must contain only letters, numbers, dot, dashes or underscore.");
// regx for MM/DD/YYYY
$.validator.addMethod("dateRegex", function (value, element) {
  //return this.optional(element) || /^((0[1-9]|1[0-2])\/((0|1)[0-9]|2[0-9]|3[0-1])\/((19|20)\d\d))$/i.test(value);
  return this.optional(element) || /^[0-9]{2}[-|\/]{1}[0-9]{2}[-|\/]{1}[0-9]{4}$/i.test(value);
}, "Enter Date in DD/MM/YYYY format.");

$.validator.addMethod("timeRegex", function (value, element) {
  return this.optional(element) || /^(([0-1]?[0-9])|([2][0-3])):([0-5]?[0-9])(:([0-5]?[0-9]))?$/i.test(value);
}, "Please enter a valid time.");

$.validator.addMethod("roles", function (value, elem, param) {
  if ($(".roles:checkbox:checked").length > 0) {
    return true;
  } else {
    return false;
  }
}, "You must select at least one!");



/*$.validator.addMethod("propertyDetailLengthReg", function (value, element) {
  return this.optional(element) || /^[a-z\d\-_.\s]+$/i.test(value);
}, "Maximum 500 characters allowed.");*/




$.validator.addMethod("propertyDetailLength", $.validator.methods.maxlength,
   // leverage parameter replacement for minlength, {0} gets replaced with 2
   $.validator.format("Maximum {0} characters allowed.")
);

$.validator.addMethod("cancelCommentLength", $.validator.methods.maxlength,
   // leverage parameter replacement for minlength, {0} gets replaced with 2
   $.validator.format("Maximum {0} characters allowed.")
);

$('#registration').validate({
  //ignore: [],  
  //onsubmit: false,
  ignore: ':hidden:not(.validateField input)',
  onkeyup: function (element) { $(element).valid() },
  errorClass: 'help-block',
  errorElement: 'span',
  errorPlacement: function (error, e) {
    e.closest('.validateField').append(error);
    return false;
  },
  highlight: function (e) {
    console.log('validation error');
    $(e).closest('.validateField').removeClass('has-success has-error').addClass('has-error');
    $(e).closest('.help-block').remove();
    return false;
  },
  success: function (e) {
    console.log('validation success');
    // You can remove the .addClass('has-success') part if you don't want the inputs to get green after success!
    e.closest('.validateField').removeClass('has-success has-error').addClass('has-success');
    e.closest('.help-block').remove();
    return false;
  },
  rules: {

  },
  messages: {
	Mobile: {
			required : "This field is required",
			minlength: "Please enter 10 digits",
    		maxlength: "Please enter 10 digits",
	},
    DOB: {
			required : "This field is required",
			minlength: "Please enter valid date",
    		maxlength: "Please enter valid date",
	},
	OnlineDate: {
			required : "This field is required",
			minlength: "Please enter valid date",
    		maxlength: "Please enter valid date",
	},
	OfflineDate: {
			required : "This field is required",
			minlength: "Please enter valid date",
    		maxlength: "Please enter valid date",
	},
	DDCheckNumber: {
			required : "This field is required",
			minlength: "Please enter 6 digits",
    		maxlength: "Please enter 6 digits",
	}
  }

});

$.validator.addClassRules({

  /*about Company*/
  validateRequired: {
    required: true
  },
  validateAlphaonly: {
    alpha: true
  },
  validateAlphanumaric: {
    alphanumaricRegex: true
  },
  validateNumber: {
    digits: true
  },
  validateDecimalNumber: {
    number: true
  },
  validateEmail: {
    laxEmail: true
  },
  validateURL: {
    url: true
  },
  validatePassword: {
    passwordcheck: true
  },
  validateConfirmPassword: {
    equalTo: '.validatePassword'
  },

  validateMobileNoLimit: {
    minlength: 10,
    maxlength: 10,
    digits: true
  },
  validatePincodeLimit: {
    minlength: 6,
    maxlength: 6,
    digits: true
  },
  validateTelephoneNoLimit: {
    minlength: 8,
    maxlength: 12,
	digits: true
  },
  validatetxtDesignation: {
    designationRegex: true
  },
  validateDate: {
    dateRegex: true
  },

  validateTime: {
    timeRegex: true
  },

  validateMinStrict: {
    minStrict: 0
  },

  validateSubvenueCount: {
    minStrict1: 1
  },
  validateAddressField: {
    AddressFieldRegEx: true
  },
  validatePropertyLogo: {
    required: false,
    propertyLogoFormat: true
  },
  validatePoliciesLicensesFileFormat: {
    policiesLicensesFileFormat: true
  },
  validateFloorPlanFormat: {    
    floorPlanFormat: true
  },
  validatePanNumber: {
    panNumber: true
  },
  validateIFSC: {
    ifscCode: true
  },
  validateFromTime: {
    checkFromDateAndTime: true
  },
  validateToTime: {
    checkToDateAndTime: true
  },
  validateBookBlockName: {
	bookBlockNameRegEx: true  
  },
  validateCountryCode: {
	countryCodeRegex: true 
  },
  validateBookingAmtPercentage: {
    min:0,
    max:100
  },
  validatePropertyDetailLength: {
    propertyDetailLength: 500
  },
  validateCancelCommentLength: {
    cancelCommentLength: 500
  }
  /*validatePropertyDetailLength: {
    propertyDetailLengthReg: true
  }*/
});

jQuery.extend(jQuery.validator.messages, {
  /*required: "This field is required.",
  remote: "Please fix this field.",
  email: "Please enter a valid email address.",
  url: "Please enter a valid URL.",
  date: "Please enter a valid date.",
  dateISO: "Please enter a valid date (ISO).",
  number: "Please enter a valid number.",
  digits: "Please enter only digits.",
  creditcard: "Please enter a valid credit card number.",
  equalTo: "Please enter the same value again.",
  accept: "Please enter a value with a valid extension.",*/
  maxlength: jQuery.validator.format("Maximum {0} digits allowed."),
  minlength: jQuery.validator.format("Please enter at least {0} digits.")
  /*maxlength: jQuery.validator.validatePropertyDetailLength.format("Maximum {0} characters allowed.")*/
  /*validatePropertyDetailLength: {
            maxlength: jQuery.validator.format("Maximum {0} characters allowed."),
        }*/
  /*    rangelength: jQuery.validator.format("Please enter a value between {0} and {1} characters long."),
      range: jQuery.validator.format("Please enter a value between {0} and {1}."),
      max: jQuery.validator.format("Please enter a value less than or equal to {0}."),
      min: jQuery.validator.format("Please enter a value greater than or equal to {0}.")*/
});

$('.validateContainer .checkValidationBtn').click(ValidateAndSubmit);

function ValidateAndSubmit(evt) {
  //console.log('validate');	
  var $group = $(evt.currentTarget).parents('.validateContainer');
  var isValid = true;
  //$group.find(':input').each(function (i, item) {
  $group.find('.validateField .form-control').each(function (i, item) {
    if (!$(item).valid())
      isValid = false;
  });
  if (!isValid)
    evt.preventDefault();


  // var errorDiv = $('.has-error').first();
  // var scrollPos = errorDiv.offset().top - 150;
  // $(window).scrollTop(scrollPos);
}

function jqValidationClickEvent() {
  $('.validateContainer .checkValidationBtn').click(ValidateAndSubmit);
}

function pageLoad() {
  $('.validateContainer .checkValidationBtn').click(ValidateAndSubmit);
}

//});

/*function pageLoad() {
	$('.validateContainer .checkValidationBtn').click(ValidateAndSubmit);
}*/

/*$("#ctl00_ContentPlaceHolder1_FULogo").change(function() {

    var val = $(this).val();

    switch(val.substring(val.lastIndexOf('.') + 1).toLowerCase()){
        case 'jpg': case 'png':
            alert("an image");
            break;
        default:
            $(this).val('');
            // error message here
            alert("not an image");
            break;
    }
});*/