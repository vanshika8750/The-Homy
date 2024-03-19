import React,{useEffect} from "react";
import "./Description.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
const Description = () => {

	useEffect(()=>{
		AOS.init({duration:1000});
	  },[])

	return (
		<div 
		 className="Description">
			<p>
				<div
				data-aos="fade-up"
				data-aos-anchor-placement="bottom-bottom"
				>
				The Homy efficiently streamlines your daily tasks, simplifying
				your life and proving valuable in creating a homely atmosphere.
				With Homy, all your daily chores are expertly handled, allowing
				you to navigate through the day effortlessly.{" "}
				</div>
			</p>
		</div>
	);
};

export default Description;
