(function ($) {
	"use strict";

	function handleQuantityChange(element, step) {
		var qty = element.closest(".tx-input-plus-minus").find(".qty");
		var val = parseFloat(qty.val());
		var max = parseFloat(qty.attr("max"));
		var min = parseFloat(qty.attr("min"));

		// Calculate the new value based on the step and button type
		var newValue = $(element).hasClass("plus") ? val + step : val - step;

		// Ensure the new value is within the valid range
		if ((max && newValue > max) || (min && newValue < min)) {
			return;
		}

		qty.val(newValue).trigger("change");
	}

	$(".tx-input-plus-minus").append(`
		<div class="tx-qty-btn-wrapper d-flex align-items-center justify-content-center">
		<span class="tx-qty-btn plus d-flex">
			<i class="fas fa-caret-up"></i>
		</span>
		<span class="tx-qty-btn minus d-flex">
			<i class="fas fa-caret-down"></i>
		</span>
		</div>
	`);

	$(".tx-input-plus-minus").on(
		"click",
		".tx-qty-btn.plus, .tx-qty-btn.minus",
		function () {
			var step = parseFloat(
				$(this)
					.closest(".tx-input-plus-minus")
					.find(".qty")
					.attr("step")
			);
			handleQuantityChange($(this), step);
		}
	);

	// insert quote icon on blockquote first p tag
	if ($("blockquote p:first-child").length) {
		$("blockquote p:first-child").prepend(
			'<i class="fa fa-quote-left"></i>'
		);
	}

	// add class #respond id
	if ($("#respond").length) {
		$("#respond").addClass("mt-30");
	}
	// wrap #commentform with a div and add class
	if ($("#commentform").length) {
		$("#commentform").wrap('<div class="default-form"></div>');
	}

	// take last 3 list item from the id of menu-quick-links menus and wrap it with a <ul> and append it after the menu
	if ($("#menu-quick-links").length == 0) return;
	var $menuPopularTags = $("#menu-quick-links");
	var $menuPopularTagsItems = $menuPopularTags.find("li");
	var $menuPopularTagsItemsLength = $menuPopularTagsItems.length;
	var $menuPopularTagsItemsLastThree = $menuPopularTagsItems.slice(
		$menuPopularTagsItemsLength - 3,
		$menuPopularTagsItemsLength
	);
	var $menuPopularTagsItemsLastThreeUl = $('<ul class="menu"></ul>');
	$menuPopularTagsItemsLastThreeUl.append($menuPopularTagsItemsLastThree);
	$menuPopularTags.after($menuPopularTagsItemsLastThreeUl);



})(jQuery);
