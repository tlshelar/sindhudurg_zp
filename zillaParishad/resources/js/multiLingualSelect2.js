
$(document)
		.ready(
				function($) {
					$.fn.select2.defaults
							.set(
									'language',
									{
										errorLoading : function() {
											return "ERROR_LOADING";
										},
										inputTooLong : function(args) {
											return "INPUT_TOO_LONG";
										},
										inputTooShort : function(args) {
											return "INPUT_TOO_SHORT";
										},
										loadingMore : function() {
											return "LOADING_MORE";
										},
										maximumSelected : function(args) {
											return "MAX_SELECTED";
										},
										noResults : function() {
											return "NO_RESULTS_FOUND";
										},
										searching : function() {
											return "SEARCHING";
										}
									});
					$('select')
							.not('.standalone')
							.select2(
									{
										"placeholder" : "Select",
										"matcher" : function matchCustom(
												params, data) {
											console.log(data.text)
											console.log(params.term)
											if ($.trim(params.term) === '') {
												return data;
											}
											if (data.text
													.toLowerCase()
													.indexOf(
															params.term
																	.toLowerCase()) != -1) {
												return data;
											}
											return null;
										}
									});
				});
