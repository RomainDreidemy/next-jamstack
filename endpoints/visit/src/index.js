export default (router, { services, exceptions }) => {
	const { ItemsService } = services;
	const { ServiceUnavailableException } = exceptions;

	router.get('/:id', async (req, res, next) => {
		const recipeService = new ItemsService('trailers', { schema: req.schema, accountability: req.accountability });

		const trailerId = req.params.id

		console.log(`Try to update trailer ${trailerId}`)

		const trailer = await recipeService.readOne(trailerId)

		console.log(`trailer: ${trailer}`)


		recipeService.updateOne(trailerId, { jean: trailer.jean + 1})

		console.log(`trailer ${trailerId} updated`)

		return res.send({visit: trailer.jean + 1})
	});
};
