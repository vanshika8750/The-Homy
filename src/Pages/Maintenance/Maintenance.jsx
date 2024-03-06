import React from "react";
import "./Maintenance.css";
const Maintenance = () => {
	return (
		<div>
			<div className="maintenance__container content-below-navbar">
				<div className="maintenance__image"></div>
				<div className="maintenance__title">
					Temporary Downtime for Scheduled Maintenance
				</div>
				<div className="maintenance__message">
					We are performing scheduled maintenance at the moment. We
					expect to be back online in a couple of hours. Thank you for
					your patience and we apologize for any inconveniences
					caused.
				</div>
			</div>
		</div>
	);
};

export default Maintenance;
