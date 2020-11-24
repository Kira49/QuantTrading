var slideCounter = 0;

function carPrev() {
	switch(slideCounter) {
		case 0:
			document.getElementById('carousel_bs').style.display = "none";
			document.getElementById('carousel_px').style.display = "none";
			document.getElementById('carousel_web').style.display = "none";
			document.getElementById('carousel_new').style.display = "block";

			break;
		case 1:
			document.getElementById('carousel_bs').style.display = "block";
			document.getElementById('carousel_px').style.display = "none";
			document.getElementById('carousel_web').style.display = "none";
			document.getElementById('carousel_new').style.display = "none";

			break;
		case 2:
			document.getElementById('carousel_bs').style.display = "none";
			document.getElementById('carousel_px').style.display = "block";
			document.getElementById('carousel_web').style.display = "none";
			document.getElementById('carousel_new').style.display = "none";

			break;
		case 3:
			document.getElementById('carousel_bs').style.display = "none";
			document.getElementById('carousel_px').style.display = "none";
			document.getElementById('carousel_web').style.display = "block";
			document.getElementById('carousel_new').style.display = "none";

			break;
	}
	if(slideCounter == 0)
		slideCounter = 3;
	else
		slideCounter--;
}

function carNext() {
	switch (slideCounter) {
		case 0:
			document.getElementById('carousel_bs').style.display = "none";
			document.getElementById('carousel_px').style.display = "block";
			document.getElementById('carousel_web').style.display = "none";
			document.getElementById('carousel_new').style.display = "none";

			break;
		case 1:
			document.getElementById('carousel_bs').style.display = "none";
			document.getElementById('carousel_px').style.display = "none";
			document.getElementById('carousel_web').style.display = "block";
			document.getElementById('carousel_new').style.display = "none";

			break;
		case 2:
			document.getElementById('carousel_bs').style.display = "none";
			document.getElementById('carousel_px').style.display = "none";
			document.getElementById('carousel_web').style.display = "none";
			document.getElementById('carousel_new').style.display = "block";

			break;
		case 3:
			document.getElementById('carousel_bs').style.display = "block";
			document.getElementById('carousel_px').style.display = "none";
			document.getElementById('carousel_web').style.display = "none";
			document.getElementById('carousel_new').style.display = "none";

			break;
	}
	if(slideCounter == 3)
		slideCounter = 0;
	else
		slideCounter++;
}
