import React, { useEffect } from "react";
import "./Pricing.css";

const Pricing = () => {
	useEffect(() => {
		const pcardsContainer = document.querySelector(".pcards");
		const pcardsContainerInner = document.querySelector(".pcards__inner");
		const pcards = Array.from(document.querySelectorAll(".pcard"));
		const poverlay = document.querySelector(".poverlay");

		const applypoverlayMask = (e) => {
			const poverlayEl = e.currentTarget;
			const x = e.pageX - pcardsContainer.offsetLeft;
			const y = e.pageY - pcardsContainer.offsetTop;

			poverlayEl.style = `--opacity: 1; --x: ${x}px; --y:${y}px;`;
		};

		const createpoverlayCta = (poverlaypcard, ctaEl) => {
			const poverlayCta = document.createElement("div");
			poverlayCta.classList.add("cta");
			poverlayCta.textContent = ctaEl.textContent;
			poverlayCta.setAttribute("aria-hidden", true);
			poverlaypcard.append(poverlayCta);
		};

		const observer = new ResizeObserver((entries) => {
			entries.forEach((entry) => {
				const pcardIndex = pcards.indexOf(entry.target);
				let width = entry.borderBoxSize[0].inlineSize;
				let height = entry.borderBoxSize[0].blockSize;

				if (pcardIndex >= 0) {
					poverlay.children[pcardIndex].style.width = `${width}px`;
					poverlay.children[pcardIndex].style.height = `${height}px`;
				}
			});
		});

		const initpoverlaypcard = (pcardEl) => {
			const poverlaypcard = document.createElement("div");
			poverlaypcard.classList.add("pcard");
			createpoverlayCta(poverlaypcard, pcardEl.lastElementChild);
			poverlay.append(poverlaypcard);
			observer.observe(pcardEl);
		};

		pcards.forEach(initpoverlaypcard);
		document.body.addEventListener("pointermove", applypoverlayMask);

		// Clean up function
		return () => {
			document.body.removeEventListener("pointermove", applypoverlayMask);
			observer.disconnect();
		};
	}, []);

	return (
		<div className="pricepage"   >
			<div className="pmain flow">
				<h1 className="pmain__heading">Pricing</h1>
				<div className="pmain__pcards pcards">
					<div className="pcards__inner">
						<div className="pcards__pcard pcard">
							<h2 className="pcard__heading">HOMY</h2>
							<p className="pcard__price">₹499 onwards</p>
							<ul role="list" className="pcard__bullets flow">
								<li>Everyday meals with expertise.</li>
								<li>
									Checked for hygiene, vaccinated, trained.
								</li>
								<li>Comes prepared with a kitchen kit.</li>
							</ul>
							<a href="./contact" className="pcard__cta cta">
								Get Started
							</a>
						</div>

						<div className="pcards__pcard pcard">
							<h2 className="pcard__heading">HOMY PRO</h2>
							<p className="pcard__price">₹1,999 onwards</p>
							<ul role="list" className="pcard__bullets flow">
								<li>Culinary pro for diverse dishes.</li>
								<li>Hotel Management diploma.</li>
								<li>
									Vaccinated, hygiene checked, kitchen kit
									included.
								</li>
							</ul>
							<a href="./contact" className="pcard__cta cta">
								Get Started
							</a>
						</div>

						<div className="pcards__pcard pcard">
							<h2 className="pcard__heading">HOMY PRO MAX</h2>
							<p className="pcard__price">₹4,999 onwards</p>
							<ul role="list" className="pcard__bullets flow">
								<li>
									Access to all premium workouts and nutrition
									plans
								</li>
								<li>5-star chef experience at home.
</li>
								<li>
									Customizable gourmet meals.

								</li>
								<li>
                Professional, vaccinated, well-equipped kitchen kit.

								</li>
							</ul>
							<a href="./contact" className="pcard__cta cta">
								Get Started
							</a>
						</div>
					</div>

					<div className="poverlay pcards__inner"></div>
				</div>
			</div>
		</div>
	);
};

export default Pricing;
