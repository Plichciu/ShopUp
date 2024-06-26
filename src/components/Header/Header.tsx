import './Header.scss'

import Navbar from '../Navbar/Navbar'

const Header = () => {
	return (
		<header className="header text-white">
			<div className="container">
				<div className="header-cnt">
					<div className="header-cnt-top fs-13 py-2 flex align-center justify-between">
						<div className="header-cnt-top-l">
							<ul className="flex top-links align-center">
								<li className="vert-line"></li>
								<li className="flex align-center">
									<span className="fs-13">Follow us on</span>
									<ul className="social-links flex align-center">
										<li className="mx-2">
											<a
												target="_blank"
												href="https://www.facebook.com/"
												className="fs-15">
												<i className="fab fa-facebook"></i>
											</a>
										</li>
										<li className="mx-2">
											<a
												target="_blank"
												href="https://www.instagram.com/"
												className="fs-15">
												<i className="fab fa-instagram"></i>
											</a>
										</li>
										<li></li>
									</ul>
								</li>
							</ul>
						</div>
						<div className="header-cnt-top-r"></div>
					</div>
					<div className="header-cnt-bottom">
						<Navbar />
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header
