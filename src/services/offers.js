const OfferService = (offers) => {
	this.offers = offers;
}

OfferService.prototype.getSummary = () => {
	let summary = {
		image: "",
		productName: "",
		averagePrice: null
	}

	if (this.offers.length > 0) {
		const product = this.offers[0].product;
		summary.image = product.details.image || "";
	  summary.productName = product.languages.title || product.languages[0].title || "";
	  summary.averagePrice = averagePrice(this.offers);
	}
	
	return summary;
}


averagePrice = (offers) => {
	const avg = offers.reduce((sum, offer) => sum += offer.price, 0) / this.offers.length; 
	return +avg.toFixed(2); 
}


export default OfferService;