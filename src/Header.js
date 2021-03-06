import { getUserInfo } from "./localStorage.js";

const Header = {
        render: () => {
                const { name, isAdmin } = getUserInfo();
                return `
        	<div>
                <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">
                &times;
                </a>
                ${name ? `<a href="/#/profile"> <i class="fa fa-user-circle" aria-hidden="true" style="font-size:23px;color:rgb(22 22 23 / 93%)"></i> ${name}</a>`
                : `<a href="/#/signin"> <i class="fa fa-sign-in" style="font-size:23px;color:rgb(22 22 23 / 93%)"></i> Signin</a>`}

                <a href="#"><i class="fa fa-home" aria-hidden="true"></i> <span></span> Home</a>
                <a href="/#/contact"><i class="fa fa-envelope" aria-hidden="true"></i> <span></span> Contact Us</a>

                ${isAdmin ? `<a href="/#/dashboard"> <i class='fas fa-tv' style='font-size:20px;color:rgb(22 22 23 / 93%)'></i> Dashboard</a>`:'<a></a>'} 

			</div>
        	`
        }
}
export default Header;