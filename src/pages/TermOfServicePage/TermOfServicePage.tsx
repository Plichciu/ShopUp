import { useEffect } from 'react'
import './TermOfServicePage.scss'
import { useLocation } from 'react-router-dom'
const TermOfService = () => {
	const { pathname } = useLocation()

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [pathname])

	return (
		<div className="terms container">
			<div className="terms-content">
				<h1 className="terms-title">Terms and Conditions</h1>
				<div className="terms-box">
					<h3 className="terms-bold">Welcome to ShopUp</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, dicta? Lorem
						ipsum dolor sit amet consectetur adipisicing elit.
					</p>
					<p>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, consectetur
						nostrum? Labore nobis, perspiciatis, dicta alias, aliquid numquam cum error ut
						iusto itaque delectus vero quam. Porro dolor ullam, recusandae numquam,
						adipisci dolorum expedita provident sit tempora aliquid sapiente quisquam?
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, earum
						voluptates voluptatum provident beatae sit. Aut harum repellat, a eius nam
						esse consectetur in itaque similique nihil consequuntur dolor dignissimos.
						Expedita perferendis et reprehenderit quasi officiis laboriosam voluptate cum
						qui suscipit hic iure, accusantium nam unde nemo dolor ipsa asperiores
						voluptatibus! Ipsam reiciendis facere et porro consequuntur ut odio quidem
						maxime aspernatur. Reprehenderit enim minima vero commodi eaque dolor harum
						obcaecati sunt amet laudantium nihil impedit nisi, ipsa tenetur veritatis
						illum eos nam assumenda ex. Adipisci aperiam accusamus repudiandae dolorem
						totam distinctio deleniti laudantium vero. Est vel id at pariatur.
					</p>
				</div>
				<div className="terms-box">
					<h3>Cookies</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ipsum, modi
						aliquam, pariatur, quis sunt reprehenderit iure quos molestias dicta sit.
						Magni, sequi nam. Ipsam quisquam sunt excepturi exercitationem alias.
					</p>
					<p>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. In rem qui officiis
						eum molestiae minus consequatur aliquam facere harum enim rerum aperiam dicta,
						nemo commodi illum maiores veritatis pariatur fugiat labore? Quas consectetur
						eveniet earum, minima repellendus quibusdam labore adipisci quos esse qui
						voluptates nam tenetur asperiores aliquid doloremque debitis.
					</p>
				</div>
				<div className="terms-box">
					<h3>License</h3>
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
				<div className="terms-box">
					<h3>Reservation of Rights</h3>
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos quidem
						rerum eos enim eaque totam expedita consequatur, repellat culpa quisquam esse
						pariatur molestiae! Nesciunt id unde consequatur dolor. Unde error consequatur
						dignissimos magnam sed obcaecati eius praesentium impedit at quos officiis
						illum odio voluptatum, iure consectetur quia. Repellendus?
					</p>
				</div>
				<div className="terms-box">
					<h3>Disclaimer</h3>
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

export default TermOfService
