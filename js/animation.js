// class Animation{

// }
// LIST OF ANIMATION
function slideOutEllipticRightFwd(container) {
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
}

function slideOutEllipticRightBck(container) {
	container.animate(
		[
			{
				offset: 0,
				transform: "translateX(0) rotateY(0) scale(1)",
				transformOrigin: "-1800px 50%",
				opacity: 1,
			},
			{
				offset: 1,
				transform: "translateX(1000px) rotateY(-30deg) scale(0)",
				transformOrigin: "-100% 50%",
				opacity: 1,
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
}

// Global method to
function spawnAnimation(thingToAnimate, mouseEvent, animation) {
	thingToAnimate.addEventListener(mouseEvent, () => {
		animation(thingToAnimate);
	});
}
