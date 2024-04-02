import { useEffect } from 'react'
import './PrivacyPolicyPage.scss'
import { useLocation } from 'react-router-dom'

const PrivacyPolicy = () => {
	const { pathname } = useLocation()

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [pathname])

	return (
		<div className="privacy container">
			<div className="privacy-content">
				<h1 className="privacy-title">Privacy Policy</h1>
				<div className="privacy-box">
					<h3 className="privacy-bold">Welcome to ShopUp</h3>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi placeat
						suscipit tempore doloribus? Incidunt ex sequi magnam mollitia.
					</p>
					<p>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero debitis tempore
						odio laborum quasi accusantium et labore magnam consequuntur deserunt error,
						porro adipisci qui nisi, blanditiis soluta incidunt voluptates aut. Corrupti
						sequi maiores quaerat quo alias sed voluptate repudiandae labore modi, rerum
						soluta.
					</p>
				</div>
				<div className="privacy-box">
					<h3>Lorem ipsum dolor sit amet, consectetur adipisicing.</h3>
					<p>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim temporibus
						minus praesentium animi consectetur perferendis reprehenderit accusamus
						consequatur, aperiam amet debitis nobis. Ipsa reiciendis inventore fugiat?
						Fuga laborum illum, unde saepe odit veniam?
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, asperiores
						magnam. Perspiciatis iure harum minima dicta doloremque iste totam dolorum
						expedita placeat. Quibusdam dolorem ipsam unde nobis ipsa non laboriosam
						architecto explicabo eligendi cum?
					</p>
				</div>
				<div className="privacy-box">
					<h3>Lorem ipsum dolor sit.</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem illo nobis
						neque, corporis, error quo autem obcaecati ipsam dicta vel odio libero natus,
						earum facilis.
					</p>
					<p>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos perspiciatis
						maxime quaerat blanditiis amet molestiae ut id in excepturi ratione debitis,
						molestias iusto ab dolorem repellendus cumque laborum natus mollitia sequi
						tenetur!
					</p>
				</div>
				<div className="privacy-box">
					<h3>Lorem ipsum dolor sit amet.</h3>
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos quidem
						rerum eos enim eaque totam expedita consequatur, repellat culpa quisquam esse
						pariatur molestiae! Nesciunt id unde consequatur dolor. Unde error consequatur
						dignissimos magnam sed obcaecati eius praesentium impedit at quos officiis
						illum odio voluptatum, iure consectetur quia. Repellendus?
					</p>
				</div>
				<div className="privacy-box">
					<h3>Lorem, ipsum dolor.</h3>
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates quis
						labore dolor consequuntur fuga ducimus cumque deleniti, dolorem, deserunt
						optio adipisci accusantium delectus repellendus!
					</p>
					<p>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum neque quia iste
						esse tempora in sed totam exercitationem, aspernatur ipsum accusamus tempore
						provident fugiat nemo nobis ut distinctio illo quasi eveniet quibusdam!
					</p>
				</div>
			</div>
		</div>
	)
}

export default PrivacyPolicy
