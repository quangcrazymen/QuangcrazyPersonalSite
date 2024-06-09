"use strict";

console.log("container here");
const container = document.getElementsByClassName("container")[0];

container.addEventListener("mouseover", () => {
	container.animate(
		[
			{
				offset: 0,
				transform: "translateX(0) rotateY(0) scale(1)",
				transformOrigin: "600px 50%",
				opacity: 1,
			},
			{
				offset: 1,
				transform: "translateX(1000px) rotateY(20deg) scale(6)",
				transformOrigin: "-100% 50%",
				opacity: 0,
			},
		],
		{
			duration: 1000,
			easing: "linear",
			delay: 0,
			iterations: 1,
			direction: "normal",
			fill: "none",
		}
	);
	setTimeout(() => {
		container.style.visibility = "hidden";
	}, 1000);
});

function ConstructRecentItems() {
	var doc = document.getElementById("recent");

	var items = GetRecentItems(6);
	for (var i = 0; i < items.length; ++i) {
		var item = items[i];

		// Create the division/section for the item.
		var div = document.createElement("div");
		div.className = "recent-container";
		doc.appendChild(div);

		// Create the thumbnail image hyperref.
		var a_img = document.createElement("a");
		a_img.href = item.url;
		div.appendChild(a_img);

		// Create the thumbnail image.
		var img = document.createElement("img");
		img.className = "recent-thumbnail";
		img.src = item.thumbnail;
		a_img.appendChild(img);
	}
}

ConstructRecentItems();
