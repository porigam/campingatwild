import rawArticles from '../../data/saglikRehberi.json';

type ArticleParams = {
	params: {
		makale: string;
	};
};

const articles = rawArticles as {
	[key: string]: {
		title: string;
		sections: Array<{
			header: string;
			content: string;
		}>;
	};
};

const Article = ({ params }: ArticleParams) => {
	const idx = params.makale[0];
	return (
		<div className='p-12 md:px-36 lg:px-60 xl:px-80'>
			<h1 className='text-4xl font-bold'>{articles[idx].title}</h1>
			<div className='bg-orange-100 p-4'>
				<h3 className='text-2xl'>İçindekiler</h3>
				<div className='mb-4'>
					<ul>
						{articles[idx].sections.map((section, idx) => (
							<li className='pb-2 last:pb-0 first:pt-2' key={idx}>
								<a href={`#${section.header}`}>
									{`-> ${section.header}`}
								</a>
							</li>
						))}
					</ul>
				</div>
			</div>
			<div>
				{articles[idx].sections.map((section, idx) => (
					<div key={idx}>
						<a id={`${section.header}`}></a>
						<h3 className='text-2xl font-bold'>{section.header}</h3>
						<div
							dangerouslySetInnerHTML={{
								__html: section.content,
							}}
						/>
					</div>
				))}
			</div>
		</div>
	);
};

export default Article;